import defaultWallpaper from '../images/wallpaper/wallpaper-default.jpg'

export const initialState = {
  desktopWallpaper: defaultWallpaper,
  darkMode: false,
  themeClass: 'lightmode'
}

export const desktopReducer = (state = initialState, action) => {
  const themeClass = state.darkMode ? 'darkmode' : 'lightmode';
  switch (action.type) {
    case 'SET_WALLPAPER':
      return {...state, desktopWallpaper: action.wallpaper}
    case 'TOGGLE_DARKMODE':
      return {...state, darkMode: !state.darkMode, themeClass}
    default:
      return state
  }
}