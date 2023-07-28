import React from 'react';
import { BiLeftArrow } from 'react-icons/bi';
import { FaCheck, FaCheckCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function AddCar(props) {
  const { car_id } = useParams();
  const { cars } = useSelector((state) => state.car);
  const car = cars.filter((car) => car.id === parseInt(car_id))[0];
  const error = false;
  const loading = false;

  return (
    <div className="relative box-border w-full h-screen px-2 overflow-x-hidden flex flex-col justify-start items-center overflow-y-auto max-w-full">
      <h2 className="text-2xl box-border text-center bg-lime-500 rounded-md text-white w-full mx-2 py-2 my-4">
        Add New Car
      </h2>
      <div className="bg-white w-auto p-2 md:p-8">
        <form method="post" className="flex flex-wrap">
          <div className="mb-4 w-full md:px-4 md:w-1/2">
            <label htmlFor="model" className="text-lime-600">
              Model
            </label>
            <input
              type="text"
              id="model"
              name="model"
              required
              className={`w-full px-4 py-2 border ${
                error ? 'border-red-400' : 'border-lime-400'
              } rounded-md focus:outline-none focus:border-lime-600`}
            />
          </div>
          <div className="mb-4 w-full md:px-4 md:w-1/2">
            <label htmlFor="color" className="text-lime-600">
              Color
            </label>
            <input
              type="text"
              id="color"
              name="color"
              required
              className={`w-full px-4 py-2 border ${
                error ? 'border-red-400' : 'border-lime-400'
              } rounded-md focus:outline-none focus:border-lime-600`}
            />
          </div>
          <div className="mb-4 w-full md:px-4 md:w-1/2">
            <label htmlFor="color" className="text-lime-600">
              Image Url
            </label>
            <input
              type="url"
              id="color"
              name="color"
              required
              className={`w-full px-4 py-2 border ${
                error ? 'border-red-400' : 'border-lime-400'
              } rounded-md focus:outline-none focus:border-lime-600`}
            />
          </div>
          <div className="mb-4 w-full md:px-4 md:w-1/2">
            <label htmlFor="price" className="text-lime-600">
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              min={0}
              required
              className={`w-full px-4 py-2 border ${
                error ? 'border-red-400' : 'border-lime-400'
              } rounded-md focus:outline-none focus:border-lime-600`}
            />
          </div>
          <div className="mb-4 md:px-4 w-full">
            <label htmlFor="description" className="text-lime-600">
              Description
            </label>
            <textarea
              type="description"
              id="description"
              name="description"
              required
              className={`w-full px-4 py-2 border ${
                error ? 'border-red-400' : 'border-lime-400'
              } rounded-md focus:outline-none focus:border-lime-600`}
            />
          </div>
          <p className="text-sm text-red-600 font-semibold pb-4" role="alert">
            {error}
          </p>
          {loading ? (
            <div className="px-4 py-2 w-full">
              <TbFidgetSpinner
                size={25}
                className="animate-spin text-sky-500 mx-auto"
              />
            </div>
          ) : (
            <button
              type="submit"
              className="bg-lime-600 text-white px-4 py-2 rounded-md w-full hover:bg-lime-700 transition-colors"
            >
              Add
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default AddCar;
