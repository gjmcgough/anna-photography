class Image < ActiveRecord::Base
  belongs_to :galleries

  has_attached_file :image,
    styles: {
  		thumb: "300x300^",
  		cover: "400x400^",
      jumbo: "1440x900^"
	   },
     convert_options: {
       thumb: '-gravity center -extent 300x300',
       cover: '-gravity center -extent 400x400',
       jumbo: '-gravity center -extent 1440x900'
     }

	# Validate the attached image is image/jpg, image/png, etc
	validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

end
