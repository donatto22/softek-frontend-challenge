/* eslint-disable react-hooks/rules-of-hooks */
import type { Plans } from '@declarations/Plans'
import { ApiEndpoints } from 'src/api/endpoints'
import useFetch from 'src/shared/hooks/useFetch'

export const getPlans = async (): Promise<Plans> => {
    const { get } = useFetch()

    const data = await get(ApiEndpoints.Plans)

    return data
}