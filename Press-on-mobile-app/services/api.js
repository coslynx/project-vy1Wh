import axios from 'axios';

const API_BASE_URL = 'https://your-api-base-url.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const api = {
  getUserProjects: async () => {
    try {
      const response = await api.get('/projects');
      return response.data;
    } catch (error) {
      console.error('Error fetching user projects: ', error);
      throw error;
    }
  },

  updateProjectDetails: async (projectId, updatedDetails) => {
    try {
      const response = await api.put(`/projects/${projectId}`, updatedDetails);
      return response.data;
    } catch (error) {
      console.error('Error updating project details: ', error);
      throw error;
    }
  },

  saveProjectChanges: async (projectId, changes) => {
    try {
      const response = await api.post(`/projects/${projectId}/save`, changes);
      return response.data;
    } catch (error) {
      console.error('Error saving project changes: ', error);
      throw error;
    }
  },

  trackRevisionHistory: async (projectId) => {
    try {
      const response = await api.get(`/projects/${projectId}/history`);
      return response.data;
    } catch (error) {
      console.error('Error tracking revision history: ', error);
      throw error;
    }
  },

  searchProjects: async (searchQuery) => {
    try {
      const response = await api.get(`/projects/search?query=${searchQuery}`);
      return response.data;
    } catch (error) {
      console.error('Error searching projects: ', error);
      throw error;
    }
  },

  uploadProjectImage: async (projectId, imageFile) => {
    try {
      const formData = new FormData();
      formData.append('image', imageFile);

      const response = await api.post(`/projects/${projectId}/image`, formData);
      return response.data;
    } catch (error) {
      console.error('Error uploading project image: ', error);
      throw error;
    }
  },

  submitFeedback: async (feedbackData) => {
    try {
      const response = await api.post('/feedback', feedbackData);
      return response.data;
    } catch (error) {
      console.error('Error submitting feedback: ', error);
      throw error;
    }
  },

  getCustomThemes: async () => {
    try {
      const response = await api.get('/themes');
      return response.data;
    } catch (error) {
      console.error('Error fetching custom themes: ', error);
      throw error;
    }
  },

  onboardUser: async (userId) => {
    try {
      const response = await api.post(`/users/${userId}/onboard`);
      return response.data;
    } catch (error) {
      console.error('Error onboarding user: ', error);
      throw error;
    }
  },
};

export default api;