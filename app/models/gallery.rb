class Gallery < ActiveRecord::Base
  has_attached_file :image, styles: {
		small: "64x64",
		med: "200x200",
		large: "400x400"
	}

  def all_galleries
    return get_galleries
  end

end
