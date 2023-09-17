import {fetchData} from "~/api/index";

const runtimeConfig = useRuntimeConfig();
export interface Recommendations {
  image: string;
  title: string;
  description: string;
  rating: number;
}

export interface Work {
  title: string;
  description: string;
  image: string;
  items: Recommendations[];
}

export const getWork = async (): Promise<Work> => {
  return await fetchData<Work>(`${runtimeConfig.public.apiBaseUrl}/api/v1/works/all`, {
    mode: 'cors'
  });
}
