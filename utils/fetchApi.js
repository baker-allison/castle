import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '00ee4901damshdf8b20c714a00a5p1b5081jsn037ddb1d07db', 
    },
  });
    
  return data;
}
