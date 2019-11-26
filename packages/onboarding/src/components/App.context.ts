import { createContext } from 'react';
import { IContext } from './types';
import defaultContext from './defaults';

export default createContext<IContext>(defaultContext);
