class AddCoverImageToGalleries < ActiveRecord::Migration
  def change
    add_column :galleries, :image, :attachment
  end
end
