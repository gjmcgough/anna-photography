class ImagesController < ApplicationController

  def index
    @images = Image.where(gallery_id: params[:gallery_id])
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
    # images = gallery.images
    image.src = s3_bucket.object(image.image_file_name).public_url
    if image.save
      @images = Image.where(gallery_id: params[:gallery_id])
      puts "{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{#{s3_bucket.object(image.image_file_name).public_url}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}"
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
