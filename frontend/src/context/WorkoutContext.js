import { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return { workouts: action.payload }
    case 'CREATE_WORKOUT':
      return { workouts: [action.payload, ...(state.workouts || [])] } // रिकामा असेल तर रिकामी लिस्ट वापरा
    case 'DELETE_WORKOUT':
      // इकडे बदल करा: जर workouts null असेल तर रिकामी लिस्ट वापरा
      return { 
        workouts: (state.workouts || []).filter((w) => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}
export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, { 
    workouts: null
  })

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </WorkoutsContext.Provider>
  )
}