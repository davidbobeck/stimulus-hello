class PagesController < ApplicationController
  def home
  end

  def about
  end

  def settings
    @dogs = ['Golden', 'Black Lab', 'Poodle']
  end
end
