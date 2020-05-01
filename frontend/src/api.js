import axios from 'axios';

const url = 'http://localhost:8080';

export const createPlayer = (data) => {
  return axios.post(`${url}/players/create`, data);
};

export const getPlayers = () => {
  return axios.get(`${url}/players/list`).then((res) => res.data);
};

export const getPlayerById = (id) => {
  return axios.get(`${url}/players/player/${id}`);
};

export const updatePlayer = (id, data) => {
  return axios.put(`${url}/players/update/${id}`, data);
};

export const deletePlayer = (id) => {
  return axios.delete(`${url}/players/delete/${id}`);
};
