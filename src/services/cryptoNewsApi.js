import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-key': "b5de1165a9msh7387635bccd2bd7p1404fejsn06a0ff4cd59a",
  'x-rapidapi-host': "bing-news-search1.p.rapidapi.com",
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });
const baseUrl = "https://bing-news-search1.p.rapidapi.com";

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
