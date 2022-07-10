import { useEffect, useState } from 'react';
import useGlobalState from './useGlobalState';

function useNote() {
	const { initialState, dispatchEvent } = useGlobalState();
	const { notes, search } = initialState;
	const { setNotes, setSearch } = dispatchEvent;

	// state
	const [noteData, setData] = useState([]);

	function addNote(title, body) {
		const noteData = {
			id: Date.now(),
			title,
			body,
			createdAt: new Date().toISOString(),
			archived: false,
		};
		setNotes([...notes, noteData]);
	}

	function deleteNote(id) {
		const filteredNotes = notes.filter((note) => note.id !== id);
		setNotes(filteredNotes);
	}

	function archivedNote(id) {
		const archivedNotes = notes.findIndex((note) => note.id === id);
		notes[archivedNotes].archived = !notes[archivedNotes].archived;
		setNotes([...notes]);
	}

	// component did mount. set data notes when notes has in array
	useEffect(() => {
		setData(notes);
	},[notes])

	useEffect(() => {
		if(!search) return setData(notes);
		setData(
			notes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()))
		)
	},[notes, search])

	return {
		notes: noteData,
		setNotes,
		deleteNote,
		archivedNote,
		addNote,
		search,
		setSearch,
	};
}

export default useNote;