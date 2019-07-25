import * as React from 'react';
import { IContext } from './types';
export declare const AppContext: React.Context<IContext>;
interface IProps {
    history: any;
    open: boolean;
}
declare const App: ({ history, open }: IProps) => JSX.Element;
export default App;
