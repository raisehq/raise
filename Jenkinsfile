#!/usr/bin/env groovy
@Library('utils') _

pipeline {

  agent {
    docker {
      image "node:11"
    }
  }

  stages {

  
    stage('LAUNCH TEST'){
      steps {
        withCredentials([string(credentialsId: 'trigger_test', variable: 'TOKEN')]) {
          sh 'curl -X POST -F token=$TOKEN -F ref=master https://gitlab.com/api/v4/projects/14143074/trigger/pipeline'
        }
      }
    }
  }

  environment {
    AWSUSER = 'aws_cred_id'
    BUILD_PATH = './packages/client/build'
    BUCKETNAME = utils.getS3Bucket()
    BUILD_SH   = utils.buildByEnv()
  }

  options {
    disableConcurrentBuilds()
  }

  post {
    failure { script{ utils.nFailure() } }
    fixed { script { utils.nFixed() } }
    unstable { script { utils.nUnstable() } }
    success { script { utils.nSuccess() } }
    cleanup { script{ cleanWs() } }
  }
}
