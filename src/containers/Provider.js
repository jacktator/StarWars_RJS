import { useReducer } from 'react';
import { StarwarContext } from './Context';
import { reducer } from './reducer';
import { initialState } from './state';

export const StarwarProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const store = {
        state,
        dispatch
    }

    return (
        <StarwarContext.StarwarProvider value={store}>
            {children}
        </StarwarContext.StarwarProvider>
    )
}