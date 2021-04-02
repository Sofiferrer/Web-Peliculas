import { MovieType } from "../types/MovieType"
import { api } from "./api"

type GetMoviesResponse = {
    results: MovieType[],
    page: number,
    total_pages: number,
    total_results: number
}

const getLatest = async (): Promise<MovieType[]> => {
    const { data } = await api.get<GetMoviesResponse>('movie/upcoming')
    return data.results;
};

const getPopular = async (): Promise<MovieType[]> => {
    const { data } = await api.get<GetMoviesResponse>('movie/popular')
    return data.results;
};

export const movie = { getLatest, getPopular };
