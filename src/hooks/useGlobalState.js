import { createContext, useContext, useState } from 'react';
import { getInitialData } from '../data/index';

const Context = createContext();

export const Provider = ({ children }) => {
    const init = getInitialData();

    // state initial data for notes and empty string for search feature
    const [notes, setNotes] = useState(init);
    const [search, setSearch] = useState("");

    const initialState = { notes, search };
    const dispatchEvent = { setNotes, setSearch };

    return (
        <Context.Provider value={{ initialState, dispatchEvent }}> { children } </Context.Provider>
    );
};

// default export
export default function useGlobalState() {
	return useContext(Context);
}