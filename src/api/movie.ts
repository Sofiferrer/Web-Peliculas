import { api } from "./api"
import { MovieType } from "../types/MovieType"
import { VideoType } from "../types/VideoType"


type GetMoviesResponse = {
    results: MovieType[],
    page: number,
    total_pages: number,
    total_results: number
}

type GetVideoResponse = {
    id: string,
    results: VideoType[],
}

const getLatest = async (): Promise<MovieType[]> => {
    const { data } = await api.get<GetMoviesResponse>('movie/upcoming')
    return data.results;
};

const getPopular = async (): Promise<MovieType[]> => {
    const { data } = await api.get<GetMoviesResponse>('movie/popular')
    return data.results;
};

const getMovieById = async (id: string) => {
    const data = await api.get<MovieType>('movie/' + id)
    return data.data;
}

const getVideo = async (id: string) => {
    const data = await api.get<VideoType>('movie/' + id + '/videos')
    return data.data;
}

export const movie = { getLatest, getPopular, getMovieById, getVideo };
