Rails.application.routes.draw do
  get '/home', to: "pages#home"
  get '/about', to: "pages#about"
  get '/settings', to: "pages#settings"

  root "pages#about"

  get '/birds', to: 'about#birds'
  get '/bird', to: 'about#bird'
  get '/bird_placeholder', to: 'about#bird_placeholder'

  # Sandboxing the PRAWN gem for PDF support
  get '/download_pdf', to: 'pages#download_pdf'
  get '/preview_pdf', to: 'pages#preview_pdf'
end
