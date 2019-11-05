class WorkoutsController < ApplicationController

    def index
      workouts = Workout.incomplete
      render json: workouts
    end

    def show
      workout = Workout.find_by_id(params[:id])
      #render json: workout, :include => {:lift_sets => {:only => [:exercise_id, :reps, :weight, :goal, :id, :exercise]}}
      render json: workout, :include => {:exercises => 
          {:only => [:name]},
        :lift_sets => {
          :except => [:created_at, :updated_at]
        }
        }

    end
end