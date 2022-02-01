Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: redirect('/tasks')

  get 'tasks', to: "home#index"

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      get :tasks, to: "tasks#index"
    end
  end
end
