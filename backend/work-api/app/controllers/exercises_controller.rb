class ExercisesController < ApplicationController

    def index
      exercises = Exercise.all
      render json: exercises, :only => [:name, :id]
    end

    def show
      exercise = Exercise.find_by_id(params[:id])
      sets = exercise.lift_sets
      render json: sets, :include => {:exercise => 
        {:only => [:name, :id]}}
    end
end