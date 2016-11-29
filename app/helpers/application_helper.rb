require 'aws-sdk'

module ApplicationHelper

  def get_galleries
    bucket = s3.bucket[anna-lizano-photo]
    data = bucket.objects
    return data
    # snd request for galleries to aws
    # save and return array containing all galleries
  end

end
