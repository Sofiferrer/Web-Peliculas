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

const getId = async (id: string) => {
    const data = await api.get<GetMoviesResponse>('movie/' + id)
    console.log(data.data)
    return data.data;
}

export const movie = { getLatest, getPopular, getId };
