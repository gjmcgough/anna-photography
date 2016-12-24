class ImagesController < ApplicationController

  def index
    @images = Image.where(gallery_id: params[:gallery_id])
    respond_to do |format|
      format.json { render :json => @images.to_a }
    end
  end

  def cover_images
    @images = Image.where(cover_image: true)
    puts "{{{{{{{{{{{{{{{{{#{@images.to_a}}}}}}}}}}}}}}}}}}"
    respond_to do |format|
      format.json { render :json => @images.to_a }
    end
  end

  def show
    respond_with Image.find(params[:id])
  end

  def create
    # gallery = Gallery.find(params[:gallery_id])
    # puts "{{{{{{}}}}}}{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{#{gallery.title}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}"
    image = Image.new(image_params)
    gallery = Gallery.find(params[:gallery_id])
    # images = gallery.images

    if image.save
      image.update(src: 'https:' + image.image.url, gallery_title: gallery.title)
      @images = Image.where(gallery_id: params[:gallery_id])

      puts "{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{#{s3_bucket.object(image.image_file_name).presigned_url(:get)}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}"
      # signer = Aws::S3::Presigner.new
      # url = signer.presigned_url(:get_object, bucket: 'anna-lizano-photo', key: image.image_file_name)
      puts "{{{{{{{{{{{{{{{{{{{{{#{image.src}}}}}}}}}}}}}}}}}}}}}}"
      respond_to do |format|
         format.json { render :json => @images.to_a }
      end
    else
      status 404
    end
  end

  def update
   image = Image.find(params[:id])
   if image.update(image_params)
     respond_with image
   else
     status 404
   end
 end

 private
 def image_params
   params.require(:image).permit(:image, :cover_image, :gallery_id)
 end

end
