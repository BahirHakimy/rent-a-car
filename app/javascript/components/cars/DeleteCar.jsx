import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCar, fetchCars } from '../../context/features/carSlice';
import { FaTrash } from 'react-icons/fa';
import { addToast } from '../../context/features/toastSlice';
import { TbFidgetSpinner } from 'react-icons/tb';

function DeleteCar() {
  const { cars, loading } = useSelector((state) => state.car);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCars());
  }, []);

  const handleDelete = (id) => {
    if (loading) return;
    dispatch(
      deleteCar({
        id,
        callback: () => dispatch(addToast('Car deleted successfully')),
      })
    );
  };

  return (
    <div className="relative box-border w-full h-screen px-2 overflow-x-hidden flex flex-col justify-start items-center overflow-y-auto max-w-full">
      <h2 className="text-2xl box-border text-center bg-lime-500 rounded-md text-white w-full mx-2 py-2 my-4">
        Delete Car
      </h2>
      <div className="p-2 md:p-8 w-full">
        {loading ? (
          <div className="px-4 py-2 w-full ">
            <TbFidgetSpinner
              size={25}
              className="animate-spin text-sky-500 mx-auto"
            />
          </div>
        ) : (
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="bg-lime-500 text-left text-white px-4 py-2 rounded-tl">
                  ID
                </th>
                <th className="bg-lime-500 text-left text-white px-4 py-2">
                  Model
                </th>
                <th className="bg-lime-500 text-left text-white px-4 py-2 hidden md:table-cell ">
                  Color
                </th>
                <th className="bg-lime-500 text-left text-white px-4 py-2 hidden md:table-cell ">
                  Price
                </th>
                <th className="bg-lime-500 text-left text-white px-4 py-2 rounded-tr">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr key={car.id}>
                  <td className="bg-white px-4 py-2">{car.id}</td>
                  <td className="bg-white px-4 py-2">
                    <Link
                      title="Show this car"
                      className="text-sky-500 hover:underline"
                      to={`/cars/${car.id}`}
                    >
                      {car.model}
                    </Link>
                  </td>
                  <td className="bg-white px-4 py-2 hidden md:table-cell ">
                    {car.color}
                  </td>
                  <td className="bg-white px-4 py-2 hidden md:table-cell ">
                    {car.price}
                  </td>
                  <td
                    className="bg-white px-4 py-2 flex items-center select-none text-red-500 active:text-rose-600 cursor-pointer"
                    onClick={() => handleDelete(car.id)}
                  >
                    {loading ? (
                      <TbFidgetSpinner
                        size={25}
                        className="animate-spin text-sky-500 mx-auto"
                      />
                    ) : (
                      <>
                        <FaTrash className="mr-2" /> Delete
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default DeleteCar;
