Rails.application.routes.draw do
  get '/workoutsessions', to: 'workout_sessions#index'
end
