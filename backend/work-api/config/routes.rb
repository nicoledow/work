Rails.application.routes.draw do
 get '/workouts', to: 'workouts#index'
 get '/workouts/:id', to: 'workouts#show'
end
