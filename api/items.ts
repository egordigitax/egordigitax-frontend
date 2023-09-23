import {fetchData} from "~/api/index";

const runtimeConfig = useRuntimeConfig();

export interface Item {
  id: string;
  title: string;
  description: string;
  images: string[];
  datetime: string;
}

export interface Items {
  description: string;
  items: Item[];
}

export const getItems = async (): Promise<Items> => {
  return await fetchData<Items>(`${runtimeConfig.public.apiBaseUrl}/v1/items/all`, {
    mode: 'cors'
  });
};

export const getItemById = async (id: string): Promise<Item> => {
  const response = await fetch(`${runtimeConfig.public.apiBaseUrl}/v1/items/${id}`, {
    mode: 'cors'
  });
  return await response.json();
}
