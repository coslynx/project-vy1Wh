import axios from 'axios';

const ProjectService = {
  getAllProjects: async () => {
    try {
      const response = await axios.get('https://your-api-url/projects');
      return response.data;
    } catch (error) {
      console.error('Error while fetching all projects: ', error);
      throw error;
    }
  },

  editProjectDetails: async (projectId, updatedDetails) => {
    try {
      const response = await axios.put(`https://your-api-url/projects/${projectId}`, updatedDetails);
      return response.data;
    } catch (error) {
      console.error('Error while editing project details: ', error);
      throw error;
    }
  },

  saveProjectChanges: async (projectId, updatedDetails) => {
    try {
      const response = await axios.post(`https://your-api-url/projects/${projectId}/save`, updatedDetails);
      return response.data;
    } catch (error) {
      console.error('Error while saving project changes: ', error);
      throw error;
    }
  },

  trackRevisionHistory: async (projectId) => {
    try {
      const response = await axios.get(`https://your-api-url/projects/${projectId}/history`);
      return response.data;
    } catch (error) {
      console.error('Error while tracking revision history: ', error);
      throw error;
    }
  },

  searchProjects: async (searchQuery) => {
    try {
      const response = await axios.get(`https://your-api-url/projects/search?query=${searchQuery}`);
      return response.data;
    } catch (error) {
      console.error('Error while searching projects: ', error);
      throw error;
    }
  },

  uploadProjectFile: async (projectId, file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post(`https://your-api-url/projects/${projectId}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error while uploading project file: ', error);
      throw error;
    }
  },

  submitFeedback: async (feedback) => {
    try {
      const response = await axios.post('https://your-api-url/feedback', feedback);
      return response.data;
    } catch (error) {
      console.error('Error while submitting feedback: ', error);
      throw error;
    }
  },

  fetchCustomThemes: async () => {
    try {
      const response = await axios.get('https://your-api-url/themes');
      return response.data;
    } catch (error) {
      console.error('Error while fetching custom themes: ', error);
      throw error;
    }
  },

  onboardNewUser: async (userId) => {
    try {
      const response = await axios.post(`https://your-api-url/users/${userId}/onboard`);
      return response.data;
    } catch (error) {
      console.error('Error while onboarding new user: ', error);
      throw error;
    }
  },
};

export default ProjectService;