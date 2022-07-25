class PagesController < ApplicationController
  def home
  end

  def about
  end

  def settings
    @dogs = ['Golden', 'Black Lab', 'Poodle']
  end

  def download_pdf
    pdf = build_pdf
    send_data(pdf.render, filename: 'prawn-hello.pdf', type: 'application/pdf')
  end

  def preview_pdf
    pdf = build_pdf
    send_data(pdf.render, filename: 'prawn-hello.pdf', type: 'application/pdf', disposition: 'inline')
  end

  private

  def build_pdf
    pdf = Prawn::Document.new
    pdf.text 'Welcome to the Prawn gem', size: 36, style: :bold
    pdf.text 'This is some body text.'
    100.times do |n|
      pdf.text "This is line #{n}"
    end
    pdf.start_new_page

    # if using ActiveStorage to hold images in the database
    # pdf_image = StringIO.open(@post.thumbnail.download)
    # pdf.image pdf_image, fit: [500, 500]

    pdf.image Rails.public_path.join('hw_collection.jpg'), fit: [500, 500]

    pdf.text 'This should appear at the end.'
    pdf
  end
end
