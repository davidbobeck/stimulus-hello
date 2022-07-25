class AboutController < ApplicationController

  def birds
    # sleep(3)
    @color = params[:color]
    sleep(@color.length-2)
  end

  def bird
    render partial: "about/bird", locals: {time: Time.zone.now.to_s}
  end

  def bird_placeholder
    render partial: "about/bird_placeholder"
  end

end
