class AddGalleryTitleToImages < ActiveRecord::Migration
  def change
    add_column :images, :gallery_title, :string
  end
end
