#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import 'source-map-support/register';
import { CodeBuildStack } from '../lib/codebuid-stack';
import { DeployStack } from '../lib/deploy-stack';

const app = new cdk.App();
new DeployStack(app, 'DeployStack', {
  env: { account: '384393252157', region: 'us-east-1' },
});

new CodeBuildStack(app, 'CodeBuildStack',{
})
