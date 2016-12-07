class ImagesController < ApplicationController

  def index
    respond_with Image.all
  end

  def show
    respond_with Image.find(params[:id])
  end

  def create
    image = Image.new
    if image.save
      render json: {success: true}
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
   params.require(:image).permit(:image, :cover_bool, :gallery_id)
 end

end
