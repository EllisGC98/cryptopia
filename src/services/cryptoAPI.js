import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const APIKey = process.env.RAPID_API_CRYPTO_KEY;
const APIHost = process.env.RAPID_API_CRYPTO_HOST;

const cryptoApiHeaders = {
    'X-RapidAPI-Key': APIKey,
    'X-RapidAPI-Host': APIHost,
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCrypto: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        })
    })
});

export const { useGetCryptoQuery, useGetCryptoDetailsQuery } = cryptoApi;