import axios from 'axios';

axios.defaults.baseURL =
  'https://superheroes-backend-server.herokuapp.com/api/superheroes';
axios.defaults.headers = { 'Access-Control-Allow-Origin': '*' };

export const UserAPI = {
  fetchHeroes: async () => {
    const response = await axios.get(`/`);

    return response.data;
  },

  fetchHeroById: async id => {
    const response = await axios.get(`/${id}`);

    return response.data;
  },

  addNewHero: async heroToAdd => {
    const response = await axios.post(`/`, heroToAdd, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  deleteHero: async id => {
    await axios.delete(`/${id}`);
  },

  updateHero: async (id, heroToUpdate) => {
    const response = await axios.put(`/${id}`, heroToUpdate, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return response.data;
  },
};
