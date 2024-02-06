import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWJmMmRlOTI1OGUyNGI5OThlOGIzOGY5MGQ5MDQxNSIsInN1YiI6IjY1YzFkYTYxZjQ0ZjI3MDE2M2MwOWU4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ckKRNWFD0EuyBtitt3FRl8ye0aG8T3crgxR154FBzUE";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params });
    return data;
  } catch (error) {
    console.log("error while fetching the data");
    return error;
  }
};
