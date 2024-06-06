import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HeroStats } from "../models/models";

export const dotaApi = createApi({
  reducerPath: "dotaApi",
  tagTypes: ["HeroStats"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.opendota.com/api/" }),

  endpoints: (builder) => ({
    getHeroesStats: builder.query<HeroStats[], void>({
      query: () => "heroStats",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "HeroStats" as const, id })),
              { type: "HeroStats", id: "LIST" },
            ]
          : [{ type: "HeroStats", id: "LIST" }],
    }),
  }),
});

export const { useGetHeroesStatsQuery } = dotaApi;
