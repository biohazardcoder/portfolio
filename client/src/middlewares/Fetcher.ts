import { Fetch } from "./Fetch";

export const fetcher = (url: string) => Fetch.get(url).then(res => res.data)
