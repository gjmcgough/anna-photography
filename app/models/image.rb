class Image < ActiveRecord::Base
  belongs_to :galleries

  has_attached_file :image, styles: {
		small: "64x64",
		med: "200x200",
		large: "400x400"
	}

	# Validate the attached image is image/jpg, image/png, etc
	validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  # def img_url
  #   image.url(:med)
  # end
end
