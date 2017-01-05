class GalleriesController < ApplicationController
  before_filter :authenticate_user!, only: [:create]

  def index
    galleries = Gallery.all
    respond_with galleries
  end

  def show
    respond_with Gallery.find(params[:id])
  end

  def create
    respond_with Gallery.create(gallery_params)
  end

  def destroy
    gallery = Gallery.find(params[:id])
    gallery.destroy
    galleries = Gallery.all
    respond_with galleries
  end

  private
  def gallery_params
    params.require(:gallery).permit(:title)
  end
end
