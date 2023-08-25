/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useState } from 'react';
import { axiosInstance } from '../utils';
import { useAppDispatch } from './useStore';

const useFetch = (
  url: string,
  setAction: ActionCreatorWithPayload<any, string>
) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(url);
      setData(response.data.data);
      dispatch(setAction(response.data));
      setLoading(false);
      setError(null);
    } catch (error: any) {
      setError(
        'Something went wrong. Please refresh the page or try again later.'
      );
      setLoading(false);
      setData(null);
    }
  };

  const resetState = () => {
    setData(null);
    setLoading(false);
    setError(null);
  };

  return {
    data,
    loading,
    error,
    fetchData,
    resetState,
  };
};

export default useFetch;
