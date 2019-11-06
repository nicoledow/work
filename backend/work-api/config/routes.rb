Rails.application.routes.draw do
 get '/workouts', to: 'workouts#index'
 get '/workouts/:id', to: 'workouts#show'
 post '/workouts/new', to: 'workouts#create'

 get '/liftsets/:id', to: 'liftsets#show'
 patch '/liftsets/:id', to: 'liftsets#update'
end
