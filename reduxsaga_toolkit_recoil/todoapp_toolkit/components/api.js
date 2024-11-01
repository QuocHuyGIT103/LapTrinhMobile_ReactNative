import axios from 'axios';

const BASE_URL = 'https://66fc90c6c3a184a84d1754f7.mockapi.io/todoapp';

export const getJobs = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi lấy danh sách công việc:', error);
    throw error;
  }
};

export const createJob = async (title) => {
  try {
    const response = await axios.post(BASE_URL, { title });
    return response.data;
  } catch (error) {
    console.error('Lỗi khi tạo công việc mới:', error);
    throw error;
  }
};

export const updateJob = async (id, newTitle) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, { title: newTitle });
    return response.data;
  } catch (error) {
    console.error('Lỗi khi cập nhật công việc:', error);
    throw error;
  }
};

export const deleteJob = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error('Lỗi khi xóa công việc:', error);
    throw error;
  }
};
