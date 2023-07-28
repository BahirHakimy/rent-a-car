Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # config/routes.rb
  # Defines the root path route ("/")
  scope '/api' do
    resources :users, param: :_username
    post '/login', to: 'authentication#login'
    resources :cars, only: %i[create index]
    # resources :reservations
  end

  root 'root#index'

  get '*path', to: 'root#index'
end
