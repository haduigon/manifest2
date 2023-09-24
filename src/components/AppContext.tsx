import { 
  Dispatch, 
  useReducer,  
} from "react";
import { ACTIONS } from "./utils";
import React from "react";

type Action = { type: ACTIONS.SET_HORO_SIGN, payload: string }

interface Data {
  horoSign: string,
}

function reducer(state: Data, action: Action): Data {
  switch (action.type) {
    case ACTIONS.SET_HORO_SIGN: 
      return {
        horoSign: action.payload,
      }
    default:
      return state;
  }
}

type State = {
  state: Data,
  dispatch: Dispatch<Action>,
}

const initialState: State = {
  state: {
    horoSign: '',
  },
  dispatch: () => { },
};

export const StateContext = React.createContext(initialState);

type Props = {
  children: React.ReactNode;
}

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState.state);

  return (
    <StateContext.Provider value={{
      state: {
        ...state,
      },
      dispatch,
    }}>
      {children}
    </StateContext.Provider>
  )
}
