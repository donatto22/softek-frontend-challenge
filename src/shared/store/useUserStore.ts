import { create } from 'zustand'
import { getUser } from 'src/services/userService'
import type { User } from '@declarations/User'

type Profile = {
    data: User
    dni: string
    phone: string
}

type UserData = {
    profile: Profile | null
    getUserData: (dni: string, phone: string) => Promise<void>
}

const useUserStore = create<UserData>((set) => ({
    profile: null,

    getUserData: async (dni: string, phone: string) => {
        const data = await getUser()
        set({ profile: { data, dni, phone } })
    }
}))

export default useUserStore