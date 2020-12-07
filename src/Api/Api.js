const API_KEY = "08DWVaQPuiXgEwVYJNEPkvzpGCJ3";

export const getMatches = () => {
  const URL = `https://cricapi.com/api/matches/?apikey=${API_KEY}`;

  return fetch(URL)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const getMatchDetails = (id) => {
  const URL = `https://cricapi.com/api/cricketScore/?apikey=${API_KEY}&unique_id=${id}`;

  return fetch(URL)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};
