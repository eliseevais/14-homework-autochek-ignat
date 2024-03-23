import {UserType} from '../HW8'

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to
                                                                                                  // fix any
  switch (action.type) {
    case 'sort': { // by name

      return [...state].sort((a: UserType, b: UserType) => {
        if (a.name > b.name) {
          return action.payload === 'up' ? 1 : - 1
        }
        if (a.name < b.name) {
          return action.payload === 'up' ? -1 : 1
        }
        return 0
      })
    }
    case 'check': {

      return state.filter((user: UserType) => user.age > 17)
    }
    default:
      return state
  }
}
