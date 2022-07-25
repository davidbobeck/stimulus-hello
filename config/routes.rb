Rails.application.routes.draw do
  get '/home', to: "pages#home"
  get '/about', to: "pages#about"
  get '/settings', to: "pages#settings"

  root "pages#about"

  get '/birds', to: 'about#birds'
  get '/bird', to: 'about#bird'
  get '/bird_placeholder', to: 'about#bird_placeholder'
end