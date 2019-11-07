Rails.application.routes.draw do
 get '/', to: 'workouts#index'
 
 get '/workouts', to: 'workouts#index'
 get '/workouts/:id', to: 'workouts#show'
 post '/workouts/new', to: 'workouts#create'

 post '/liftsets', to: 'liftsets#create'
 get '/liftsets/:id', to: 'liftsets#show'
 patch '/liftsets/:id', to: 'liftsets#update'
end
