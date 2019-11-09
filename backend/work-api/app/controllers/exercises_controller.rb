class ExercisesController < ApplicationController

    def index
      exercises = Exercise.all
      render json: exercises, :only => [:name, :id]
    end
end