import { useStore } from "@/stores";
import axios, { type Axios } from "axios";

const store = useStore();

const instance: Axios = axios.create({
  baseURL: import.meta.env.VITE_APP_URL + "/api"
});

async function get<T>(url: string) {
  try {
    store.startRequest();
    const result = await instance.get<T>(url);
    if (result.status === 200) {
      return result.data;
    } else {
      store.error = `Failed to execute GET: ${url}`;
      return null;
    }
  } catch (e) {
    store.error = `Error during GET: ${url}`;
  }finally {
    store.endRequest();
  }
} 

export function useHttp() {
  return {
    get
  }
}