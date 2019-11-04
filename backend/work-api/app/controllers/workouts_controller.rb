class WorkoutsController < ApplicationController

    def index
      workouts = Workout.incomplete
      render json: workouts
    end

    def show
      workout = Workout.find_by_id(params[:id])
      exercise_sets = ExerciseSet.find_by_workout_id(params[:id])
      render json: exercise_sets
    end
end