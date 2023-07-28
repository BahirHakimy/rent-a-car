# app/models/car.rb
class Car < ApplicationRecord
  # Attributes
  validates :model, presence: true
  validates :description, presence: true
  validates :color, presence: true
  validates :image_url, presence: true, format: URI::DEFAULT_PARSER.make_regexp(%w[http https])
  validates :price, presence: true, numericality: { greater_than_or_equal_to: 0 }
end
