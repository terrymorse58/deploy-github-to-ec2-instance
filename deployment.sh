# create AWS deployment for SampleExpressApp
# ref: https://docs.aws.amazon.com/cli/latest/reference/deploy/create-deployment.html
aws deploy create-deployment \
  --application-name SampleExpressApp \
  --deployment-group-name SampleDeployGroup \
  --revision '{"revisionType":"GitHub","gitHubLocation":{"repository":"terrymorse58/sampleexpressapp","commitId":"75f08115735811bbb67f95a345327f726b5c76ee"}}'
