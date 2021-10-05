import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key': 'fe70e22911msheb440bb9192d921p1c7178jsn8e42e1310868'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoNewsHeaders});

export const CryptoNewsApi = createApi({
  reducerPath: 'CryptoNewsApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
    })
  })
});


export const {
  useGetCryptoNewsQuery,
} = CryptoNewsApi;
