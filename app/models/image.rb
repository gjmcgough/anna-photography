class Image < ActiveRecord::Base
  belongs_to :galleries

  has_attached_file :image, styles: {
		thumb: "300x300>",
		cover: "400x400>",
    jumbo: "1000x1000<"
	}

	# Validate the attached image is image/jpg, image/png, etc
	validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  # def img_url
  #   image.url(:med)
  # end
end
