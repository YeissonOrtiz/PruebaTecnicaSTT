import axios from "axios";

const URL = 'https://rickandmortyapi.com/api/character';

const getAllCharacters = async (params) => {
  try {
    const response = await axios.get(URL, { params });
    return response.data;
  } catch (error) {
    throw Error(error);
  }
};

const getOneCharacter = async (id) => {
  try {
    const response = await axios.get(`${URL}/${id}`);
    return response.data;
  } catch (error) {
    throw Error(error)
  }
}

export { getAllCharacters, getOneCharacter }