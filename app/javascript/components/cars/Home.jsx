import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { select } from '../../context/features/carSlice';
import { Link } from 'react-router-dom';

function Home(props) {
  const { cars } = useSelector((state) => state.car);
  const dispatch = useDispatch();

  return (
    <div className="relative w-full h-screen flex flex-col justify-start items-center overflow-auto max-h-screen max-w-full">
      <button className="absolute left-0 top-1/2 bg-slate-300 text-white pl-8 py-4 pr-4 rounded-r-full">
        <BiLeftArrow />
      </button>
      <button className="absolute right-0 top-1/2 bg-lime-500 text-white pr-8 py-4 pl-4 rounded-l-full">
        <BiRightArrow />
      </button>
      <div className="flex flex-col justify-center items-center mt-12">
        <h1 className="text-3xl font-bold text-slate-800">Availble Cars</h1>
        <p className="text-slate-400 text-sm font-bold">
          Please select your desired model
        </p>
        <p className="text-slate-400 my-4">••••••••••••••••</p>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-x-4">
        {cars.map((car) => (
          <Link
            key={car.id}
            className="flex flex-col justify-center items-center cursor-pointer hover:bg-slate-50"
            // onClick={() => handleCarSelect(car)}
            to={`/cars/${car.id}`}
          >
            <div
              className={`flex justify-center items-center overflow-visible rounded-full max-w-fit`}
            >
              <img
                src={car.image_url}
                width={500}
                height={500}
                alt={`${car.model}-image`}
              />
            </div>
            <h2 className="text-xl font-bold">{car.model}</h2>
            <p className="text-slate-400 my-2">••••••••••••••••</p>
            <p className="text-slate-400 max-w-[400px] text-center break-words">
              {car.description}
            </p>
            <ul className="flex justify-center items-center w-full mt-auto mb-4 pr-4">
              <a
                href="https://www.facebook.com"
                className="m-2 text-slate-400 hover:scale-125 hover:border-blue-500 hover:text-blue-500 transition-transform rounded-full border-2 p-2"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.twitter.com"
                className="m-2 text-slate-400 hover:scale-125 hover:border-sky-400 hover:text-sky-400 transition-transform rounded-full border-2 p-2"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.google.com"
                className="m-2 text-slate-400 hover:scale-125 hover:border-red-400 hover:text-red-400 transition-transform rounded-full border-2 p-2"
              >
                <FaInstagram />
              </a>
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
