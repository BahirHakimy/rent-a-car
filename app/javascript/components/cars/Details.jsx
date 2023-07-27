import React from 'react';
import { BiLeftArrow } from 'react-icons/bi';
import { FaCheck, FaCheckCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function Details(props) {
  const { car_id } = useParams();
  const { cars } = useSelector((state) => state.car);
  const car = cars.filter((car) => car.id === parseInt(car_id))[0];

  return (
    <div className="relative w-full h-screen flex flex-col justify-start items-center overflow-auto max-h-screen max-w-full">
      <Link
        to="/cars"
        className="absolute left-0 bottom-8 bg-lime-500 text-white pl-8 py-4 pr-4 rounded-r-full"
      >
        <BiLeftArrow />
      </Link>

      <div className="flex justify-center items-center gap-x-4">
        <div
          className={`flex md:w-3/4 w-1/2 justify-center items-center h-screen overflow-visible rounded-full max-w-fit`}
        >
          <img
            src={car.image_url}
            className="max-w-full"
            alt={`${car.model}-image`}
          />
        </div>
        <div className="md:w-1/4 w-1/2 px-4">
          <h1 className="text-3xl font-bold text-right my-3 whitespace-nowrap">
            {car.model}
          </h1>
          <p className="text-gray-600 max-w-[400px] text-right break-words">
            {car.description}
          </p>
          <ul className="flex flex-col my-2">
            <li className="flex justify-between min-w-[8rem] text-sm font-semibold px-2 py-1 even:bg-gray-300 odd:bg-gray-50 ">
              <span>Color:</span>
              <span>{car.color}</span>
            </li>
            <li className="flex justify-between min-w-[8rem] text-sm font-semibold px-2 py-1 even:bg-gray-300 odd:bg-gray-50 ">
              <span>Tax:</span>
              <span>${(car.price * 0.1).toFixed(2)}</span>
            </li>
            <li className="flex justify-between min-w-[8rem] text-sm font-semibold px-2 py-1 even:bg-gray-300 odd:bg-gray-50 ">
              <span>Car Rent: </span>
              <span>${car.price}</span>
            </li>
            <li className="flex justify-between min-w-[8rem] text-sm font-semibold px-2 py-1 even:bg-gray-300 odd:bg-gray-50 ">
              <span>You Will Pay:</span>
              <span>${(car.price + car.price * 0.1).toFixed(2)}</span>
            </li>
          </ul>
          <Link
            to="/reserve"
            className="bg-lime-500 ml-auto max-w-fit mt-20 px-4 py-2 text-white flex items-center rounded-full hover:bg-lime-400 active:bg-lime-600"
          >
            Reserve <FaCheckCircle className="ml-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Details;
