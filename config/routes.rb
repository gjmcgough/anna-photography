Rails.application.routes.draw do
  devise_for :users
  root to: 'application#angular'
  get 'cover_images', to: 'images#cover_images'
  resources :galleries, only: [:index, :show, :create, :update,:destroy] do
    resources :images, only: [:index, :show, :update, :create, :destroy] do
    end
  end
end
