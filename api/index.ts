import {FetchOptions} from "unenv/runtime/fetch";

export const fetchData = async <T>(url: string, params: FetchOptions = {}): Promise<T> => {
  const options = {
    ...params,
    headers: {
      'Content-Locale': localStorage.getItem('locale') || 'en'
    },
  };


  const response = await fetch(url, options)

  return await response.json();
};
