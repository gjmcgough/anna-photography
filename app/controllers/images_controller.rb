class ImagesController < ApplicationController

  def index
    respond_with Image.all
  end

  def show
    respond_with Image.find(params[:id])
  end

  def create
    image = Image.new
    image.save
    if image.save?
      respond_with image
    else
      status 404
    end
  end

  def update
   image = Image.find(params[:id])
   image.update(image_params)
   if image.save?
     respond_with image
   else
     status 404
   end
 end

 private
 def image_params
   params.require(:image).permit(:image)
 end

end
