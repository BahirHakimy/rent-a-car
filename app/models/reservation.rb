class Reservation < ApplicationRecord
    # Attributes
  attr_accessor :date

  # Associations
  belongs_to :user
  belongs_to :car
end
