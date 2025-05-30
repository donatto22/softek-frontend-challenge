import { create } from 'zustand'

type PlanDataMin = {
    title: string
    price: number
}

type PlanData = {
    planSeleccionado: PlanDataMin | null,
    setPlanSeleccionado: (title: string, price: number) => void
}

const usePlanStore = create<PlanData>((set) => ({
    planSeleccionado: null,

    setPlanSeleccionado: async (title, price) => {
        set({ planSeleccionado: { title, price } })
    }
}))

export default usePlanStore