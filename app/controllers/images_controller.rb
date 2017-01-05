class ImagesController < ApplicationController
  before_filter :authenticate_user!, only: [:create, :update]

  def index
    @images = Image.where(gallery_id: params[:gallery_id])
    respond_to do |format|
      format.json { render :json => @images.to_a }
    end
  end

  def cover_images
    @images = Image.where(cover_image: true)
    respond_to do |format|
      format.json { render :json => @images.to_a }
    end
  end

  def show
    respond_with Image.find(params[:id])
  end

  def create
    image = Image.new(image_params)
    gallery = Gallery.find(params[:gallery_id])
    if image.save
      image.update(
      url: 'https:' + image.image.url,
      thumb: 'https:' + image.image.url(:thumb),
      cover: 'https:' + image.image.url(:cover),
      jumbo: 'https:' + image.image.url(:jumbo),
      gallery_title: gallery.title
      )
      @images = Image.where(gallery_id: params[:gallery_id])
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

 def destroy
   image = Image.find(params[:id])
   puts "{{{{{{{{{{{{{{{{{{{{{{{{#{image}}}}}}}}}}}}}}}}}}}}}}}}}"
   image.destroy
   @images = Image.where(gallery_id: params[:gallery_id])
   respond_to do |format|
      format.json { render :json => @images.to_a }
   end
 end

 private
 def image_params
   params.require(:image).permit(:image, :cover_image, :gallery_id)
 end

end
