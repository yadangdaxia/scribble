Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # resources :users do
  resources :entries do
    collection do
      get :data
    end
  end

  # end

  root to: 'entries#index'

  # # verb      to: 'controller#action'
  # # Show all entries
  # get '/entries', to: 'entries#index'
  # # Show one entry
  # get '/entries/:id', to: 'entries#show'
  # # Create new entry
  # get '/entries/new', to: 'entries#new' # display the form
  # post '/entries', to: 'entries#create'
  # # Edit an entry
  # get '/entries/:id/edit', to: 'entries#edit'
  # patch '/entries/:id', to: 'entries#update'
  # # Delete an entry
  # delete '/entries/:id/destroy', to: 'entries#destroy'

end
