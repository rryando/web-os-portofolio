import defaultWallpaper from '../images/wallpaper/wallpaper-default.jpg'
import chromeIcon from '../images/wallpaper/chrome-icon.png'

export const initialState = {
  desktopWallpaper: defaultWallpaper,
  darkMode: false,
  themeClass: 'lightmode',
  appList: [{
    id: 0,
    title: 'some app',
    icon: chromeIcon,
    action: '',
    content: 'dialog content',
    isOpen: false,
    isMinimize: false,
    isMaximize: false,
    isActive: false,
  },
  {
    id: 1,
    title: 'some app',
    icon: chromeIcon,
    action: '',
    content: 'dialog content',
    isOpen: false,
    isMinimize: false,
    isMaximize: false,
    isActive: false,
  },
  {
    id: 2,
    title: 'some app',
    icon: chromeIcon,
    action: '',
    content: 'dialog content',
    isOpen: false,
    isMinimize: false,
    isMaximize: false,
    isActive: false,
  }],
}

export const desktopReducer = (state = initialState, action) => {
  const themeClass = state.darkMode ? 'darkmode' : 'lightmode';
  const {appList} = state;

  switch (action.type) {
    case 'SET_WALLPAPER':
      return {...state, desktopWallpaper: action.wallpaper}
    case 'TOGGLE_DARKMODE':
      return {...state, darkMode: !state.darkMode, themeClass}
    case 'TOGGLE_MENU_OPEN':
      state.appList = appList.map((menu) => {
        if (menu.id === action.id) {
          menu.isOpen = !menu.isOpen
        }
        return menu
      })

      return {...state}
    case 'SET_MENU_OPEN':
      state.appList = appList.map((menu) => {
        if (menu.id === action.id) {
          menu.isOpen = action.isOpen
        }
        return menu
      })

      return {...state}
    case 'SET_MENU_ACTIVE':
      state.appList = appList.map((menu) => {
        menu.isActive = false
        if (menu.id === action.id) {
          menu.isActive = action.isActive
        }
        return menu
      })

      return {...state}
    case 'SET_MENU_MINIMIZE':
        state.appList = appList.map((menu) => {
          if (menu.id === action.id) {
            menu.isMinimize = action.isMinimize
          }
          return menu
        })
  
        return {...state}
    case 'SET_MENU_MAXIMIZE':
      state.appList = appList.map((menu) => {
        if (menu.id === action.id) {
          menu.isMaximize = !menu.isMaximize
        }
        return menu
      })

      return {...state}
    default:
      return state
  }
}