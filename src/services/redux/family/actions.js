export const SET_MATERNAL = 'SET_MATERNAL';
export const SET_PATERNAL = 'SET_PATERNAL'

export const setMaternal = data => {
    return {
        type: SET_MATERNAL,
        payload: data
    }
}

export const setPaternal = data => {
    return {
        type: SET_PATERNAL,
        payload: data
    }
}