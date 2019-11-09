Rails.application.routes.draw do
 get '/', to: 'workouts#index'
 
 get '/workouts', to: 'workouts#index'
 get '/workouts/:id', to: 'workouts#show'
 post '/workouts/new', to: 'workouts#create'
 patch '/workouts/:id', to: 'workouts#update'
 delete '/workouts/:id', to: 'workouts#destroy'

 post '/liftsets', to: 'liftsets#create'
 get '/liftsets/:id', to: 'liftsets#show'
 patch '/liftsets/:id', to: 'liftsets#update'

 get '/exercises', to: 'exercises#index'
 get '/exercises/:id', to: 'exercises#show'
end
