class GalleriesController < ApplicationController
  def index
    @galleries = Gallery.all
    respond_with @galleries
  end

  def show
    respond_with Gallery.find(params[:id])
  end
end
