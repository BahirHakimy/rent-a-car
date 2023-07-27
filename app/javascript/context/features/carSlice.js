import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axios } from '../../utils/api';

const initialState = {
  cars: [
    {
      id: 1,
      model: 'Nissan ARIYA',
      description:
        'Nissan ARIYA is a daring glimpse of an automotive future others can only dream about.',
      color: '#cdccdd',
      image_url:
        'https://www.nissanusa.com/content/dam/Nissan/us/vehicles/ariya/2023/overview/mini-exterior-360/XGJ/08-two-tone-sunrise-copper-pearl-black-diamond-metallic-nissan-ariya-front-left-view.png.ximg.c1h.360.png',
      price: 449.99,
    },
    {
      id: 2,
      model: 'Nissan Rogue Sport',
      description: 'Street-savvy, road-trip ready, always fun to drive',
      color: '#be5e26',
      image_url:
        'https://www.nissanusa.com/content/dam/Nissan/us/vehicles/rogue_sport/2022/overview/mini-exterior-360/nbl/08.png.ximg.c1h.360.png',
      price: 449.99,
    },
    {
      id: 3,
      model: 'Nissan ARIYA',
      description:
        'Nissan ARIYA is a daring glimpse of an automotive future others can only dream about.',
      color: '#cdccdd',
      image_url:
        'https://www.nissanusa.com/content/dam/Nissan/us/vehicles/ariya/2023/overview/mini-exterior-360/XGJ/08-two-tone-sunrise-copper-pearl-black-diamond-metallic-nissan-ariya-front-left-view.png.ximg.c1h.360.png',
      price: 449.99,
    },
    {
      id: 4,
      model: 'Nissan Rogue Sport',
      description: 'Street-savvy, road-trip ready, always fun to drive',
      color: '#be5e26',
      image_url:
        'https://www.nissanusa.com/content/dam/Nissan/us/vehicles/rogue_sport/2022/overview/mini-exterior-360/nbl/08.png.ximg.c1h.360.png',
      price: 449.99,
    },
    {
      id: 5,
      model: 'Nissan ARIYA',
      description:
        'Nissan ARIYA is a daring glimpse of an automotive future others can only dream about.',
      color: '#cdccdd',
      image_url:
        'https://www.nissanusa.com/content/dam/Nissan/us/vehicles/ariya/2023/overview/mini-exterior-360/XGJ/08-two-tone-sunrise-copper-pearl-black-diamond-metallic-nissan-ariya-front-left-view.png.ximg.c1h.360.png',
      price: 449.99,
    },
    {
      id: 6,
      model: 'Nissan Rogue Sport',
      description: 'Street-savvy, road-trip ready, always fun to drive',
      color: '#be5e26',
      image_url:
        'https://www.nissanusa.com/content/dam/Nissan/us/vehicles/rogue_sport/2022/overview/mini-exterior-360/nbl/08.png.ximg.c1h.360.png',
      price: 449.99,
    },
  ],
  selected: null,
  loading: false,
  error: null,
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

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    select: (state, action) => {
      state.selected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCars.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.cars = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchCars.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default carSlice.reducer;
export const { select } = carSlice.actions;
export { fetchCars };
