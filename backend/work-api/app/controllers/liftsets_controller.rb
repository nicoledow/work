class LiftsetsController < ApplicationController

  def show
    set = LiftSet.find_by_id(params[:id])
    render json: set, :include => {:exercise => {:only => [:name]}}
  end

  def update
    set = LiftSet.find_by_id(params[:id])
    set.update(liftset_params)
    set.save
    render json: set
  end

private
  def liftset_params
    params.permit(:exercise_id, :workout_id, :reps, :weight, :goal)
  end

end