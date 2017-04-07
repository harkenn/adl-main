const DEFAULT_STATE = {
    minLevel: null,
    maxLevel: null,
    search: null,
    digitalCopy: false,
    activeEditions: [],
    activeSetting: null,
    activeAdventureLengths: [],
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case 'SET_FILTER_EDITIONS':
            return Object.assign({}, state, {
                activeEditions: action.payload
            });
        case 'SET_FILTER_SETTING':
            return Object.assign({}, state, {
                activeSetting: action.payload
            });
        case 'SET_FILTER_LENGTHS':

            return Object.assign({}, state, {
                activeAdventureLengths: action.payload
            });
        default:
            return state;
    }
}