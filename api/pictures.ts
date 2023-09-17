import {fetchData} from "~/api/index";

const runtimeConfig = useRuntimeConfig();

export interface Picture {
  id: string;
  title: string;
  description: string;
  images: string[];
  datetime: string;
}

export interface Pictures {
  description: string;
  items: Picture[];
}

export const getPictures = async (): Promise<Pictures> => {
  return await fetchData<Pictures>(`${runtimeConfig.public.apiBaseUrl}/api/v1/pictures/all`, {
    mode: 'cors'
  });
};

export const getPictureById = async (id: string): Promise<Picture> => {
  const response = await fetch(`${runtimeConfig.public.apiBaseUrl}/api/v1/pictures/${id}`, {
    mode: 'cors'
  });
  return await response.json();
}
