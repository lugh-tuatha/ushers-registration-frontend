import { create } from 'zustand'

type RegularDiscipleCount = {
    regulars: number
    updateRegularsCount: (count: number) => void
}

export const useRegularDiscipleCount = create<RegularDiscipleCount>((set) => ({
    regulars: 0,
    updateRegularsCount: (count: number) => {
        set({ regulars: count })
    }
}))