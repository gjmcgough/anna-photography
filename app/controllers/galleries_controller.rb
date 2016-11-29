class GalleriesController < ApplicationController
  def index
    respond_with Gallery.all
  end

  def show
    respond_with Gallery.find(params[:id])
  end
end
