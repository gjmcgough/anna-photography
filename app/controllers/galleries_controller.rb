class GalleriesController < ApplicationController
  def index
    bucket = s3.buckets['anna-lizano-photo']
    puts bucket
    @doggie = bucket[0]
    
  end
end
