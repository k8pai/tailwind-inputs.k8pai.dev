import { createContext } from 'react';

export const TiPathContext = new createContext({
	path: '',
	setPath: () => {},
});
