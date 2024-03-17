import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

export const updateUserProfile = createAsyncThunk(
  'user/updateUserProfile',
  async (userData, thunkAPI) => {
    try {
      const response = await fetch('/server/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // Include authorization header if needed
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error('Failed to update profile');
      }
      const updatedUser = await response.json();
      return updatedUser;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // updateUserStart: (state) => {
    //   state.loading = true;
    // },
    // updateUserSuccess: (state, action) => {
    //   state.currentUser = action.payload;
    //   state.loading = false;
    //   state.error = false;
    // },
    // updateUserFailure: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
    // deleteUserStart: (state) => {
    //   state.loading = true;
    // },
    // deleteUserSuccess: (state) => {
    //   state.currentUser = null;
    //   state.loading = false;
    //   state.error = false;
    // },
    // deleteUserFailure: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
    signOut: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
        state.error = null;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  // updateUserFailure,
  // updateUserStart,
  // updateUserSuccess,
  // deleteUserFailure,
  // deleteUserStart,
  // deleteUserSuccess,
  signOut,
} = userSlice.actions;

export default userSlice.reducer;
