class Image < ActiveRecord::Base
  belongs_to :galleries

  has_attached_file :image, styles: {
		thumb: "W=300>",
		cover: "W=400>",
    jumbo: "W=1024<"
	}

	# Validate the attached image is image/jpg, image/png, etc
	validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

end
