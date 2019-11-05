class LiftsetsController < ApplicationController

  def show
    set = LiftSet.find_by_id(params[:id])
    render json: set
  end

end