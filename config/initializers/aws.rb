require 'aws-sdk'

Aws.config.update({
  region: 'us-west-1',
  credentials: Aws::Credentials.new('AWS_ACCESS_KEY_ID', 'AWS_SECRET_ACCESS_KEY')
})
