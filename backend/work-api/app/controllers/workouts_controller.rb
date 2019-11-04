class WorkoutsController < ApplicationController

    def index
      workouts = Workout.incomplete
      render json: workouts
    end

    def show
      workout = Workout.find_by_id(params[:id])
      render json: workout, :include => {:lift_sets => {:only => [:exercise_id, :reps, :weight, :goal]}}
    end
end