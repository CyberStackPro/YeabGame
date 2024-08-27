
import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from 'ms'
import { Genre } from "../entities/Genre";


const apiClient = new APIClient<Genre>('/genres')
// const useGenres = () => ({ data: genres, isLoading: false, error: null });

const useGenres = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), // 24 * 60 * 60 * 1000 24h
    initialData: { count: genres.length, results: genres }

  });

  return { data, error, isLoading }

}
export default useGenres;

