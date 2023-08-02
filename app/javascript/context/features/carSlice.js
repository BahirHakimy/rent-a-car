import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axios } from '../../utils/api';
import { getUser } from '../../utils/auth';

const initialState = {
  cars: [],
  loading: false,
  errors: [],
};

const fetchCars = createAsyncThunk(
  'cars/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios(getUser(false)).get('/api/cars');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

const createCar = createAsyncThunk(
  'cars/create',
  async (
    { model, description, color, image_url, price, callback },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios(getUser(false)).post('/api/cars', {
        model,
        description,
        color,
        image_url,
        price,
      });
      callback?.();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors);
    }
  }
);

const deleteCar = createAsyncThunk(
  'cars/delete',
  async ({ id, callback }, { rejectWithValue }) => {
    try {
      await axios(getUser(false)).delete(`/api/cars/${id}`);
      callback?.();
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data.errors);
    }
  }
);

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCars.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCars.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.cars = action.payload;
      state.loading = false;
      state.errors = null;
    });
    builder.addCase(createCar.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createCar.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
    builder.addCase(createCar.fulfilled, (state, action) => {
      state.cars.push(action.payload?.car);
      state.loading = false;
      state.errors = null;
    });
    builder.addCase(deleteCar.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteCar.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
    builder.addCase(deleteCar.fulfilled, (state, action) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
      state.loading = false;
      state.errors = null;
    });
  },
});

export default carSlice.reducer;
export { fetchCars, createCar, deleteCar };
