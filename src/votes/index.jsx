import { createContext, useReducer, useContext } from "react";

//Importar el reducer que usara el useReducer
import { reducer } from "./reducer";

//crear contexto
const AppContext = createContext();

//Crear provider
export function ContextProvider({ children }) {
  //Se crea lo que el useReducer utilizara

  //Estado inicial digamos
  const initialArg = {
    totalVotes: 0,
    candidates: [
      {
        id: 1,
        name: "John",
        votes: 0,
        percentage: 0,
      },
      {
        id: 2,
        name: "Carlos",
        votes: 0,
        percentage: 0,
      },
      {
        id: 3,
        name: "David",
        votes: 0,
        percentage: 0,
      },
      {
        id: 4,
        name: "Andres",
        votes: 0,
        percentage: 0,
      },
    ],
    showResultType: "numeric",
  };

  //se usa el useReducer
  const [state, dispatch] = useReducer(reducer, initialArg);
  const data = { state, dispatch };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

//Vamos a crear el hook que tiene el state, llamado selector por Redux
export const useSelector = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(`Cannot use outside contextProvider`);
  }
  return context.state;
};

//Creamos el hook que maneja el state, el dispatch
export const useDispatch = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(`Cannot use outside contextProvider`);
  }
  return context.dispatch;
};
