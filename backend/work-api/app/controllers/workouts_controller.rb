class WorkoutsController < ApplicationController

    def index
      workouts = Workout.incomplete
      render json: workouts
    end

    def show
      workout = Workout.find_by_id(params[:id])
      render json: workout, :include => {:exercises => 
          {:only => [:name, :id]},
        :lift_sets => {
          :include => [:exercise],
          :except => [:created_at, :updated_at]
        }
      }
    end

    def create
      new_workout = Workout.create(workout_params)
      render json: new_workout
    end

  private
  def workout_params
    params.permit(:title, :date, :focus)
  end
end