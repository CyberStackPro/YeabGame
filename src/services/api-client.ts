import axios, { AxiosRequestConfig } from "axios";


export interface FetchResponse<T> {
    count: number;
    next?: string | null;
    results: T[];
}
const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b0e033fe262848cbb1359c7d9e571b22'
    }
})

class APIClient<T>{
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = (config?: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data)
    }

    // getAll = async (config?: AxiosRequestConfig): Promise<FetchResponse<T>> => {
    //     const response = await axiosInstance.get<FetchResponse<T>>(this.endpoint, config);
    //     return response.data;
    // }

    get = (id: number | string) => {
        return axiosInstance.get<T>(this.endpoint + '/' + id).then(res => res.data)
    }

}
export default APIClient