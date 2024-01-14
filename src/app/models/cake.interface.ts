import {Cake_src} from "./cake_src.interface";

export interface Cake {
  id ?: number;
  height ?: number;
  width ?: number;
  url ?: string;
  photographer ?: string;
  photographer_url ?: string;
  photographer_id ?: number
  avg_color ?: string;
  src ?: Cake_src;
  liked ?: boolean;
  alt ?: string;
}


