class WorkoutSessionsController < ApplicationController
  def index
    sessions = WorkoutSession.all.incomplete
    render json: sessions
  end
end