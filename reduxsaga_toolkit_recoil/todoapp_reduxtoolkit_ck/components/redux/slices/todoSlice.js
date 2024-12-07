import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getJobs, createJob, updateJob, deleteJob} from '../../api';


export const fetchJobs = createAsyncThunk ('todos/fetchJobs', async () => {
  const jobs = await getJobs();
  return jobs;
});

export const addJob = createAsyncThunk('todos/addJob', async (title) => {
  const newJob = await createJob(title);
  return newJob;
});

export const editJob = createAsyncThunk('todos/editJob', async ({ id, title }) => {
  const updatedJob = await updateJob(id, title);
  return updatedJob;
});

export const removeJob = createAsyncThunk('todos/removeJob', async (id) => {
  await deleteJob(id);
  return id;
});



const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    jobs: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addJob.fulfilled, (state, action) => {
        state.jobs.push(action.payload);
      })
      .addCase(editJob.fulfilled, (state, action) => {
        const index = state.jobs.findIndex((job) => job.id === action.payload.id);
        if (index !== -1) {
          state.jobs[index] = action.payload;
        }
      })
      .addCase(removeJob.fulfilled, (state, action) => {
        state.jobs = state.jobs.filter((job) => job.id !== action.payload);
      });
  },
});
export default todoSlice.reducer;