import { Stack, StackProps } from 'aws-cdk-lib';
import * as pipelines from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';

export class CodeBuildStack extends Stack {

  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const synth = new pipelines.CodeBuildStep('Synth', {
        input: pipelines.CodePipelineSource.gitHub("rodolfoliviero/cdk-rails-blog", "master"),
        commands: ['docker build']
      })

    new pipelines.CodePipeline(this, "Blog App Pipeline", {
        synth: synth
    });
  }
}