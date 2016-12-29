class AddJumboColumnToImages < ActiveRecord::Migration
  def change
    add_column :images, :jumbo, :string
  end
end
