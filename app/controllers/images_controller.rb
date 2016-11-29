class ImagesController < ApplicationController

  def index
    respond_with Images.all
  end

  def show
    respond_with Images.find(params[:id])
  end
  
end
