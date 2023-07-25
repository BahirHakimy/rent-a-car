Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
# config/routes.rb
  # Defines the root path route ("/")
  resources :users, param: :_username
  post '/auth/login', to: 'authentication#login'
  
  root 'root#index'
  
  get '*path', to: 'root#index'
end
