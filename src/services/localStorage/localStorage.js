
export const loadState = () => {
    const serialState = localStorage.getItem('appState');
    return serialState === null? undefined:JSON.parse(serialState);
};

export const saveState = (state) => localStorage.setItem('appState', JSON.stringify(state));