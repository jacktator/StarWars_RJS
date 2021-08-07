import { StarwarContext } from './Context';

export const StarwarProvider = ({children}) => {

    const dummyValue = "Yoda"

    return (
        <StarwarContext.StarwarProvider value={dummyValue}>
            {children}
        </StarwarContext.StarwarProvider>
    )
}