class ImagesController < ApplicationController

  def index
    gallery = Gallery.find(params[:gallery_id])
    respond_with gallery
  end

  def show
    respond_with Image.find(params[:id])
  end

  def create
    # gallery = Gallery.find(params[:gallery_id])
    # puts "{{{{{{}}}}}}{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{#{gallery.title}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}"
    image = Image.new(image_params)
    # images = gallery.images
    if image.save
      images = Image.where(gallery_id: :gallery_id)
      puts "{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{#{images}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}"
      render images.as_json
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
