const BASE_URL = "https://rickandmortyapi.com/api/";

export const fetchCharacters = async (limit = 12) => {
  try {
    const response = await fetch(`${BASE_URL}character/?page=1`);
    const data = await response.json();
    return data.results.slice(0, limit);
  } catch (error) {
    console.error("Failed to fetch characters:", error);
  }
};
