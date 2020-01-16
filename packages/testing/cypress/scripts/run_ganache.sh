#!/usr/bin/env bash
test_private_key=d631de5b7e9cf451135896c833187c8b4dc230bf47756a9a2ca4ffccc161175e
ganache_port=8545
ganache_directory="ganache_db"

# Exit script as soon as a command fails.
set -o errexit

# Executes cleanup function at script exit.
trap cleanup EXIT

cleanup() {
  # Kill the ganache instance that we started (if we started one and if it's still running).
  if [ -n "$ganache_pid" ] && ps -p $ganache_pid > /dev/null; then
    kill -9 $ganache_pid
  fi
}

ganache_running() {
  nc -z localhost "$ganache_port"
}

generate_cache() {
  rm -rf ./contracts
  rm -rf .db
  rm -rf ganache_db
  echo "- Run fresh ganache"
  start_ganache
  echo "- Clone Raise contracts solidity"
  git clone https://gitlab.com/raisehq/contracts-solidity --branch integration ./contracts > "/dev/null" 2>&1
  cp cypress/fixtures/users.json contracts/int.accounts.json
  cd contracts
  echo "- Install dependencies"
  npm i
  echo "- Migrate contracts inside ganache"
  PRIVATE_KEY=$test_private_key npm run migration:cypress
  cd ..
  echo "- Retrieve generated contract addresses and abi"
  cp contracts/contracts.json cypress/fixtures/contracts.json
  cp -r .db ganache_db
  echo "- Save current commit checksum of integration branch into ganache_db dir"
  git --git-dir=contracts/.git rev-parse origin/integration > ganache_db/git_commit_hash
  # stop ganache
  echo "- Stop ganache and clean repo artifacts"
  cleanup 
  rm -rf contracts/
}

check_cache() {
  if [ -d "$ganache_directory" ] && [ -s "$ganache_directory/git_commit_hash" ]; then
    # If ganache_db exists, check the current commit hash versus origin integration
    current_commit_hash=`cat ganache_db/git_commit_hash`
    remote_commit_hash=$(git ls-remote https://gitlab.com/raisehq/contracts-solidity.git/ integration | cut -f1)
    echo "current : $current_commit_hash"
    echo "remote  : $remote_commit_hash" 
    if [ "$current_commit_hash" != "$remote_commit_hash" ]; then
      echo "Generating DB cache due checksum failed"
      generate_cache
    else
      echo "Checksum success"
    fi
  else
    echo "Generating DB cache due ganache_db dir does not exists"
    generate_cache
  fi
}

start_ganache() {
  rm -rf .db
  if [ -d "$ganache_directory" ]; then
    echo "Using cache"
    cp -r ganache_db .db
  else
    echo "Fresh run"
    echo `pwd`
    mkdir .db
  fi
  npx ganache-cli --db .db  --allowUnlimitedContractSize --gasLimit 0xfffffffffff --gasPrice 0x01 -i 6969 -m "stamp polar cup smart ill agree human episode reform trigger text forget" --secure -u 0 -u 1 -u 2 -u 3 -u 4 -u 5 -u 6 -u 7 -u 8 -u 9 --port "$ganache_port" > /dev/null &
  ganache_pid=$!

  echo "Waiting for ganache to launch on port "$ganache_port"... and pid "$ganache_pid""

  while ! ganache_running; do
    sleep 0.1 # wait for 1/10 of the second before check again
  done

  echo "Ganache launched!"
}

echo "- Check ganache DB cache"
check_cache
if ganache_running; then
    echo "ABORT: Please kill current ganache and start again"
    exit 1
else
    echo "- Starting our own ganache instance"
    start_ganache
    $@
fi

