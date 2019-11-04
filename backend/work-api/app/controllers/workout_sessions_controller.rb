class WorkoutSessionsController < ApplicationController
  def index
    sessions = WorkoutSession.all
    render json: sessions
  end
end