class LiftsetsController < ApplicationController

  def show
    set = LiftSet.find_by_id(params[:id])
    render json: set, :include => {:exercise => {:only => [:name]}}
  end

  def create
    lift_sets = LiftSet.narrow_by_workout(params[:workout_id])

    if params[:exercise_id]
      LiftSet.create(liftset_params)
    else
      new_set = LiftSet.new
      new_set.exercise_id = Exercise.find_or_create_by(name: liftset_params[:exercise])
      new_set.workout_id = liftset_params[:workout_id]
      new_set.reps = liftset_params[:reps]
      new_set.weight = liftset_params[:weight]
      new_set.save
    end
    render json: lift_sets
  end

  def update
    set = LiftSet.find_by_id(params[:id])
    set.update(liftset_params)
    set.save
    render json: set
  end


private
  def liftset_params
    params.permit(:exercise_id, :workout_id, :reps, :weight, :goal, :exercise)
  end

end