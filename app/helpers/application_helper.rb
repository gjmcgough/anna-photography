require 'aws-sdk'

module ApplicationHelper

  def get_galleries
    bucket = s3.bucket[anna-lizano-photo]
    data = bucket.objects
    image_ary = []
    data.each { |o| image_ary << o }
    return image_ary
    # snd request for galleries to aws
    # save and return array containing all galleries
  end

end
