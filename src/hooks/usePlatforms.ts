import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import { Platform } from "../entities/Platform";


const apiClient = new APIClient<Platform>('/platforms/lists/parents')
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

const usePlatforms = () => useQuery<FetchResponse<Platform>, Error>({
  queryKey: ['platforms'],
  queryFn: apiClient.getAll,
  staleTime: ms('24h'), //24h
  initialData: { count: platforms.length, results: platforms }
})
export default usePlatforms;
