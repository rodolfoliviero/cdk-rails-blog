import { Stack, StackProps } from 'aws-cdk-lib';
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as ecr from "aws-cdk-lib/aws-ecr";
import * as ecs from "aws-cdk-lib/aws-ecs";
import * as ecs_patterns from "aws-cdk-lib/aws-ecs-patterns";
import { Construct } from 'constructs';

export class DeployStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const repository = new ecr.Repository(this, 'blog-app', {
      repositoryName: 'myrepo',
    })

    const vpc = new ec2.Vpc(this, "MyVpsdfasdfc", {

      maxAzs: 3 // Default is all AZs in region
    });

    const cluster = new ecs.Cluster(this, "MyCluster", {
      vpc: vpc
    });

    const service = new ecs_patterns.ApplicationLoadBalancedFargateService(this, "MyFargateService", {
      cluster: cluster, // Required
      cpu: 256, // Default is 256
      desiredCount: 1, // Default is 1
      listenerPort: 80,
      serviceName: 'blog-app',
      taskImageOptions: {
        // image: ecs.ContainerImage.fromRegistry("amazon/amazon-ecs-sample")
        image: ecs.ContainerImage.fromEcrRepository(repository, 'blog-app'),
        containerPort: 3000,
      },
      memoryLimitMiB: 512, // Default is 512
      publicLoadBalancer: true // Default is false
    });
  }
}

