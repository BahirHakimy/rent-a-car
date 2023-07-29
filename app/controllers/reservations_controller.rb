class ReservationsController < ApplicationController
  # List all reservations
  def index
    @reservations = Reservation.all
  end

  # Show a specific reservation
  def show
    @reservation = Reservation.find(params[:id])
  end

  # Create a new reservation (form)
  def new
    @reservation = Reservation.new
  end

  # Save the new reservation to the database
  def create
    @reservation = Reservation.new(reservation_params)
    if @reservation.save
      redirect_to @reservation, notice: 'Reservation was successfully created.'
    else
      render :new
    end
  end

  # Edit a reservation (form)
  def edit
    @reservation = Reservation.find(params[:id])
  end

  # Update the reservation in the database
  def update
    @reservation = Reservation.find(params[:id])
    if @reservation.update(reservation_params)
      redirect_to @reservation, notice: 'Reservation was successfully updated.'
    else
      render :edit
    end
  end

  # Delete a reservation
  def destroy
    @reservation = Reservation.find(params[:id])
    @reservation.destroy
    redirect_to reservations_url, notice: 'Reservation was successfully destroyed.'
  end

  private

  def reservation_params
    params.require(:reservation).permit(:user_id, :car_id, :date)
  end
end
