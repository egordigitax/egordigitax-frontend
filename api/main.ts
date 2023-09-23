import {fetchData} from "~/api/index";

const runtimeConfig = useRuntimeConfig();

export type MainItemType ='banner' | 'story-gallery' | 'gallery'

export interface MainItem {
  type: MainItemType;
  title: string;
  description: string;
  images: string[];
  datetime: string;
  url: string;
}

export interface MainItems {
  description: string;
  items: MainItem[],
};

export const getMainItems = async (): Promise<MainItems> => {
  return await fetchData<MainItems>(`${runtimeConfig.public.apiBaseUrl}/v1/posts/all`);
}
