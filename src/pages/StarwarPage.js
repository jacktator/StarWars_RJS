import { StarwarProvider } from '../containers/Provider';
import { StarwarComponent } from '../components/StarwarComponent';
import { useStarwarsContext } from '../containers/useStarwarsContext';

const StarConsumer = () => {
    const {state, dispatch} = useStarwarsContext();

    return (
        <StarwarComponent name={state.name} />
    )
}

export const StarwarPage = () => {
    return (
        <StarwarProvider>
            <StarConsumer />
        </StarwarProvider>
    )
}