const useFetch = () => {
    const get = async (endpoint: string, options?: RequestInit) => {
        const response = await fetch(endpoint, { method: 'GET', ...options })

        if (!response.ok) throw new Error('Error al obtener data desde ' + endpoint)

        const data = await response.json()

        return data
    }

    return { get }
}

export default useFetch