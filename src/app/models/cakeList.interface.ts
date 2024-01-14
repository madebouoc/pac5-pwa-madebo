import {Cake} from "./cake.interface";

export interface CakeList {
  total_results ?: number;
  page ?: number;
  per_page ?: number;
  photos ?: Cake[];
  next_page ?: number;
}

