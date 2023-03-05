import axios from "axios";

const API_COMMENTS_URL = 'http://localhost:3000/api/character';

async function handleSubmit(character_id, data) {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
    
    const response = await axios.post(
      `${API_COMMENTS_URL}/${character_id}/comments`, 
      JSON.stringify(data),
      config
    );
    
    return response
  } catch (error) {
    throw new Error(error);
  }
};

async function getAllCommentsByCharacter(character_id){
  try {
    const response = await axios.get(
      `${API_COMMENTS_URL}/${character_id}/comments/` )
    return response.data.data
  } catch (error) {
    throw new Error(error)
  }
}

export { handleSubmit, getAllCommentsByCharacter }