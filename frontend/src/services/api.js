const API_BASE_URL = 'https://api.edulearn.com/v1'; // Replace with your actual API URL

export const api = {
  // Courses
  async getCourses() {
    try {
      const response = await fetch(`${API_BASE_URL}/courses`);
      if (!response.ok) throw new Error('Failed to fetch courses');
      return await response.json();
    } catch (error) {
      console.error('Error fetching courses:', error);
      return [];
    }
  },

  async getCourseById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/courses/${id}`);
      if (!response.ok) throw new Error('Failed to fetch course');
      return await response.json();
    } catch (error) {
      console.error('Error fetching course:', error);
      return null;
    }
  },

  // Contact Form
  async submitContactForm(formData) {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to submit form');
      return await response.json();
    } catch (error) {
      console.error('Error submitting form:', error);
      throw error;
    }
  },

  // Categories
  async getCategories() {
    try {
      const response = await fetch(`${API_BASE_URL}/categories`);
      if (!response.ok) throw new Error('Failed to fetch categories');
      return await response.json();
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  },
};