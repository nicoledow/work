class WorkoutsController < ApplicationController

    def index
      workouts = Workout.incomplete
      render json: workouts, :include => {:exercises => 
      {:only => [:name, :id]},
    :lift_sets => {
      :include => [:exercise],
      :except => [:created_at, :updated_at]
    }
  }
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

    def update
      workout = Workout.find_by_id(params[:id])
      workout.title = workout_params[:title] unless workout_params[:title] == "Workout Title"
      workout.date = workout_params[:date] unless workout_params[:date] == "Workout Date"
      workout.focus = workout_params[:focus] unless workout_params[:focus] == "Workout Focus"
      workout.save
      render json: workout, :include => {:exercises => 
        {:only => [:name, :id]},
      :lift_sets => {
        :include => [:exercise],
        :except => [:created_at, :updated_at]
      }
    }
    end

  private
  def workout_params
    params.permit(:title, :date, :focus, :id)
  end
end