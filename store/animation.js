export const state = () => {
    return {
        hasAnimated: false,
    }
}

export const mutations = {
    setHasAnimated(state, data) {
        state.hasAnimated = data
    }
}