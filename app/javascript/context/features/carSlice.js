import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axios } from '../../utils/api';

const initialState = {
  cars: [],
  selected: null,
  loading: false,
  errors: [],
};

const fetchCars = createAsyncThunk(
  'cars/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/cars');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

const createCar = createAsyncThunk(
  'cars/create',
  async (
    { model, description, color, image_url, price },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post('/api/cars', {
        model,
        description,
        color,
        image_url,
        price,
      });
      return response.data;
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
  },
});

export default carSlice.reducer;
export { fetchCars, createCar };
