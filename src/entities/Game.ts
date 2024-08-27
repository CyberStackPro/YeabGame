import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";


export interface Game {
    id: number;
    name: string;
    genres: Genre[];
    background_image: string;
    parent_platforms: { platform: Platform; }[];
    metacritic: number;
    rating_top: number;
    publishers: Publisher[];
    slug: string;
    description_raw: string;
}
