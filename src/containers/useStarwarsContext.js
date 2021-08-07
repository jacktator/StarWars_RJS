import { useContext } from "react";
import { StarwarContext } from './Context';

export const useStarwarsContext = () => useContext(StarwarContext);