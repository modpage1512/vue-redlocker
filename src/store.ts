// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

// define your typings for the store state
export interface State {
    count: number,
    data: any
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        count: 0,
        data: 2
    }
})

export function useStore() {
    return baseUseStore(key)
}