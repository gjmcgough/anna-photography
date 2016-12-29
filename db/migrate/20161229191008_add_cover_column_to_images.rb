class AddCoverColumnToImages < ActiveRecord::Migration
  def change
    add_column :images, :cover, :string
  end
end
