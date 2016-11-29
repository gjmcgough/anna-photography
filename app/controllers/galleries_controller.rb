class GalleriesController < ApplicationController
  def index
    @galleries = Gallery.includes(:images)
    respond_with do |format|
      format.html @galleries
      format.json @galleries
    end
  end

  def show
    respond_with Gallery.find(params[:id])
  end
end
