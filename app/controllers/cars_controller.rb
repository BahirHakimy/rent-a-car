class CarsController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :authorize_request
  # List all cars
  def index
    @cars = Car.all
    render json: @cars
  end

  # Show a specific car
  def show
    @car = Car.find(params[:id])
    render json: @car
  end

  # Save the new car to the database
  def create
    @car = Car.new(car_params)
    if @car.save
      render json: { message: 'Car was successfully created.', car: @car }, status: :created
    else
      render json: { errors: @car.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # Delete a car
  def destroy
    @car = Car.find(params[:id])
    @car.destroy
    render json: { message: 'Car was successfully destroyed.' }
  end

  private

  def car_params
    params.permit(:model, :color, :image_url, :description, :price)
  end
end
