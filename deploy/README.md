# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

 ## Running

 * aws configure --profile guru
 * cdk bootstrap
 * cdk deploy
 * aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 384393252157.dkr.ecr.us-east-1.amazonaws.com
 * docker build . -t blog-app:latest
 * docker tag blog-app:latest 384393252157.dkr.ecr.us-east-1.amazonaws.com/myrepo:blog-app
 * docker push 384393252157.dkr.ecr.us-east-1.amazonaws.com/myrepo:blog-app

