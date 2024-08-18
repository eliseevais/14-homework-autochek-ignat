type initStateType = {
  themeId: number
}

const initState = {
  themeId: 1,
}

export const themeReducer = (state: initStateType = initState,
                             action: ActionsType): initStateType => { // fix any
  switch (action.type) {
    case "SET_THEME_ID":
      console.log(action)
      return {
        ...state,
        themeId: action.id
      }
    default:
      return state
  }
}

export const changeThemeId = (id: number): ChangeThemeIdReturnType => (
  {type: 'SET_THEME_ID', id}) // fix any


type ChangeThemeIdActionType = ReturnType<typeof changeThemeId>;
type ChangeThemeIdReturnType = {
  type: 'SET_THEME_ID',
  id: number
};
type ActionsType = ChangeThemeIdActionType;