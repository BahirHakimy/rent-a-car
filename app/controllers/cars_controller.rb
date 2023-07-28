class CarsController < ApplicationController
     # List all cars
  def index
    @cars = Car.all
  end

  # Show a specific car
  def show
    @car = Car.find(params[:id])
  end

  # Create a new car (form)
  def new
    @car = Car.new
  end

  # Save the new car to the database
  def create
    @car = Car.new(car_params)
    if @car.save
      redirect_to @car, notice: 'Car was successfully created.'
    else
      render :new
    end
  end

  # Edit a car (form)
  def edit
    @car = Car.find(params[:id])
  end

  # Update the car in the database
  def update
    @car = Car.find(params[:id])
    if @car.update(car_params)
      redirect_to @car, notice: 'Car was successfully updated.'
    else
      render :edit
    end
  end

  # Delete a car
  def destroy
    @car = Car.find(params[:id])
    @car.destroy
    redirect_to cars_url, notice: 'Car was successfully destroyed.'
  end

  private

  def car_params
    params.require(:car).permit(:model, :color, :image_url, :price)
  end
end
