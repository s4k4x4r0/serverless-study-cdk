#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ServerlessStudyCdkStack } from '../lib/serverless-study-cdk-stack';

const app = new cdk.App();
new ServerlessStudyCdkStack(app, 'ServerlessStudyCdkStack', {
});
