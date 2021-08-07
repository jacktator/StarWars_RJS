import { StarwarProvider } from '../containers/Provider';

export const StarwarPage = () => {
    return (
        <StarwarProvider>
            <p>This is Starwar Page</p>
        </StarwarProvider>
    )
}