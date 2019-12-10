#!/usr/bin/env bash

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

ganache_port=8545

ganache_running() {
  nc -z localhost "$ganache_port"
}

start_ganache() {
  npx ganache-cli --allowUnlimitedContractSize --gasLimit 0xfffffffffff ---gasPrice 0x01 -i 6969 -m "stamp polar cup smart ill agree human episode reform trigger text forget" --secure -u 0 -u 1 -u 2 -u 3 -u 4 -u 5 -u 6 -u 7 -u 8 -u 9 --port "$ganache_port" > /dev/null &

  ganache_pid=$!

  echo "Waiting for ganache to launch on port "$ganache_port"... and pid "$ganache_pid""

  while ! ganache_running; do
    sleep 0.1 # wait for 1/10 of the second before check again
  done

  echo "Ganache launched!"
}

rm -rf .gcache
mkdir .gcache

echo "- Check exist ganache"
if ganache_running; then
    echo "Using existing ganache instance"
else
    echo "Starting our own ganache instance"
    start_ganache
fi

DIRECTORY="contracts"

if [ ! -d "$DIRECTORY" ]; then
  # Control will enter here if $DIRECTORY doesn't exist.
  git clone https://gitlab.com/raisehq/contracts-solidity --branch integration ./contracts > "/dev/null" 2>&1
  cd contracts
  echo "- Install dependencies"
  npm i 
  cd ..
fi
 
echo "- Adding json accounts to contract migration"
cp cypress/fixtures/users.json contracts/int.accounts.json
cp cypress/fixtures/contracts.json contracts/contracts.json

cd contracts
  
rm  -rf ./build 
rm  -rf ./contracts.json 


echo "- Migration contracts"
test_private_key=d631de5b7e9cf451135896c833187c8b4dc230bf47756a9a2ca4ffccc161175e
PRIVATE_KEY=$test_private_key npm run migration:cypress
 
cd ..

npm run cypress:run:chrome

echo "- Clean build"
rm  -rf ./contracts/build 