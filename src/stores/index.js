import { createContext, useContext } from 'react';

export class RootStore {
    constructor() {
    }
}

export const StoresContext = createContext(new RootStore());
export const useStoreContext = () => useContext(StoresContext);