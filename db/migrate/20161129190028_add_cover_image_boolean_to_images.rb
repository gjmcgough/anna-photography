class AddCoverImageBooleanToImages < ActiveRecord::Migration
  def change
    add_column :images, :cover_image, :boolean, default: false
  end
end
