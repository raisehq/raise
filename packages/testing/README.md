# Cypress

This docker image is used as a base image for cypress e2e tests.

## Usage

This repo only contains a master branch.
If you want to build a new version of this image just push changes into master.
Gitlab pipeline builds and push the image to AWS ECR.

* Name: **cypress**.
* Tag: **latest**.
* URL: **<AWS_ACCOUNT_ID>.dkr.ecr.<AWS_DEFAULT_REGION>.amazonaws.com/cypress:latest**.

## Built With

* cypress/browsers:node10.16.0-chrome77

## Versioning

Always overwritte the latest version with tag latest.

## Authors

* **Francesc Armengol** - *Initial work* - [francesc@raise.it](https://gitlab.com/francesc-raise.it)
