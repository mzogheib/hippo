import type { Dispatch, ReactNode } from "react";
import { createContext, useContext, useReducer } from "react";

interface Session {
  isAuthenticated: boolean;
}

interface AppState {
  session: Session;
}

const initialAppState: AppState = {
  session: { isAuthenticated: false },
};

interface SetAuthenticatedAction {
  type: "SET_AUTHENTICATED";
}

interface SetUnauthenticatedAction {
  type: "SET_UNAUTHENTICATED";
}

type Action = SetAuthenticatedAction | SetUnauthenticatedAction;

const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "SET_AUTHENTICATED":
      return {
        ...state,
        session: { ...state.session, isAuthenticated: true },
      };
    case "SET_UNAUTHENTICATED":
      return {
        ...state,
        session: { ...state.session, isAuthenticated: false },
      };
    default:
      return state;
  }
};

interface AppStateContextProperties {
  state: AppState;
  dispatch: Dispatch<Action>;
}

const AppStateContext = createContext<AppStateContextProperties | undefined>(
  undefined,
);

export function AppStateProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
}

export const useAppState = (): AppStateContextProperties => {
  const context = useContext(AppStateContext);

  if (!context) {
    throw new Error("No context found");
  }

  return context;
};
