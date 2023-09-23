import {fetchData} from "~/api/index";

const runtimeConfig = useRuntimeConfig();

export interface GenerativeItem {
  title: string;
  description: string;
  image: string;
  api_url: string;
  api_inputs?: GenerativeApiInputs[];
  hint: string;
}

export interface GenerativeApiInputs {
  title: string;
  description: string;
}

export interface Generative {
  "description": string;
  "items": GenerativeItem[];
}

export const getGenerative = async (): Promise<Generative> => {
  return await fetchData<Generative>(`${runtimeConfig.public.apiBaseUrl}/v1/generatives/all`, {
    mode: 'cors'
  });
}

export const processGenerative = async (form: Record<string, string>, apiUrl: string) => {
  const response = await fetch(`${runtimeConfig.public.apiBaseUrl}/api/v1${apiUrl}`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })

  return await response.json();
}
