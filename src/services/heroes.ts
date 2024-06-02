import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HeroStats } from "../models/models";

export const dotaApi = createApi({
  reducerPath: "dotaApi",

  baseQuery: fetchBaseQuery({ baseUrl: "https://api.opendota.com/api/" }),

  endpoints: (builder) => ({
    getHeroesStats: builder.query<HeroStats[], void>({
      query: () => "heroStats",
    }),
  }),
});

export const { useGetHeroesStatsQuery } = dotaApi;
