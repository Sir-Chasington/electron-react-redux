const initialState = {
    isDarkSet: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
    case 'DARK_THEME':
        return {
            ...state,
            isDarkSet: action.payload,
        };
    default:
    }
    return state;
}
