class LiftsetsController < ApplicationController

  def show
    set = LiftSet.find_by_id(params[:id])
    render json: set, :include => {:exercise => {:only => [:name]}}
  end

end