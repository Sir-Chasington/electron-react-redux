export const darkTheme = function darkTheme(isDark) {
    return (dispatch) => {
        dispatch({ type: 'DARK_THEME', payload: isDark });
    };
};
