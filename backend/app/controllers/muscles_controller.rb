class MusclesController < ApplicationController
  before_action :set_muscle, only: [:show, :update, :destroy]

  # GET /muscles
  def index
    @muscles = Muscle.all

    render json: @muscles, include: :stretches
  end

  # GET /muscles/1
  def show
    render json: @muscle
  end

  # POST /muscles
  def create
    @muscle = Muscle.new(muscle_params)

    if @muscle.save
      render json: @muscle, status: :created, location: @muscle
    else
      render json: @muscle.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /muscles/1
  def update
    if @muscle.update(muscle_params)
      render json: @muscle
    else
      render json: @muscle.errors, status: :unprocessable_entity
    end
  end

  # DELETE /muscles/1
  def destroy
    @muscle.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_muscle
      @muscle = Muscle.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def muscle_params
      params.fetch(:muscle, {})
    end
end
