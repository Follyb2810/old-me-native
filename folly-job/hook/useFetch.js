import { useState, useEffect } from "react";
import axios from "axios";
import React from 'react';
import { RAPID_API_KEY } from '@env';

const rapidApi = RAPID_API_KEY;

const useFetch = ({ endpoint, query }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: 'https://jobsearch4.p.rapidapi.com/api/v2/Jobs/' + endpoint,
    params: {
      ...query
    },
    headers: {
      'X-RapidAPI-Key': '0da537d340mshc80cdfd3774d48ep1fb564jsnbf1c0de925d6',
      // 'X-RapidAPI-Key': rapidApi,
      'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert('There is an error();');
    } finally {
      setIsLoading(false); // Corrected typo
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
