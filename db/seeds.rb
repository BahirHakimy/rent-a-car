# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Car.create!([{
              model: 'Nissan ARIYA',
              description:
    'Nissan ARIYA is a daring glimpse of an automotive future others can only dream about.',
              color: 'Sunrise Copper Pearl',
              image_url:
    'https://www.nissanusa.com/content/dam/Nissan/us/vehicles/ariya/2023/overview/mini-exterior-360/XGJ/08-two-tone-sunrise-copper-pearl-black-diamond-metallic-nissan-ariya-front-left-view.png.ximg.c1h.360.png',
              price: 449.99
            },
             {
               model: 'Nissan Rogue Sport',
               description: 'Street-savvy, road-trip ready, always fun to drive',
               color: 'Scarlet Ember Tintcoat',
               image_url:
                 'https://www.nissanusa.com/content/dam/Nissan/us/vehicles/rogue_sport/2022/overview/mini-exterior-360/nbl/08.png.ximg.c1h.360.png',
               price: 449.99
             }])
