/* eslint-disable react-hooks/rules-of-hooks */
import type { User } from '@declarations/User'
import { ApiEndpoints } from 'src/api/endpoints'
import useFetch from 'src/shared/hooks/useFetch'

export const getUser = async (): Promise<User> => {
    const { get } = useFetch()

    const data = await get(ApiEndpoints.User)

    return data
}