require 'aws-sdk'

AWS.config.update({
  region: 'us-west-1',
  credentials: AWS::Credentials.new('AWS_ACCESS_KEY_ID', 'AWS_SECRET_ACCESS_KEY')
})
