import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/heroes';

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
    const response = await axios.post(`/`, heroToAdd);
    console.log(response);
    return response.data;
  },

  deleteHero: async id => {
    await axios.delete(`/${id}`);
  },

  updateHero: async (id, heroToUpdate) => {
    await axios.put(`/${id}`, heroToUpdate);
  },
};
