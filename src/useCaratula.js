import { useCallback, useEffect, useState } from "react";

import axios from "axios";

export default function UseCaratula({ title }) {
  const titleImage = title;
  const [urlImage, setUrlImage] = useState();
  const [loading, setLoading] = useState(true);
  const fetchData = useCallback(async () => {
    setLoading(true);
    const { data } = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=acd23471&s=${titleImage}`);
    const { Poster } = data && data.Search[0];
    if (Poster) {
      setUrlImage(Poster);
    }
    setLoading(false);
  }, [titleImage]);
  return { fetchData, urlImage, loading };
}
