import { useQuery } from '@tanstack/react-query'
import {
  ParamsClientType,
  axiosClient,
} from 'app/shared/clients/axios/axios-client'

type UseFetcherProps = {
  url: string
  params?: ParamsClientType
}

export function useFetcher<R>({ url, params }: UseFetcherProps) {
  return useQuery<R, Error>({
    queryKey: [url],
    queryFn: () => axiosClient({ method: 'get', url, params }),
  })
}

export default useFetcher
