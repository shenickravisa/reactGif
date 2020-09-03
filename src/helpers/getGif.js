import apiGiphyKey from "../config.js";
  //peticion HTTP
  export const getGif = async (categories) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categories)}&limit=10&api_key=${apiGiphyKey}`;
    const res = await fetch(url);
    const { data } = await res.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium?.url,
      };
    });
    return gifs
  };