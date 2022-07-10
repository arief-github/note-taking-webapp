import { useState } from 'react';
import useNote from './useNote';

function useNoteInput() {
	const { addNote } = useNote();
	const [input, setInput] = useState({
		title: "",
		body: "",
	});

	const changeInput = (event) => setInput(
		{...input, [event.target.name]: event.target.value}
	);

	const submit = (event) => {
		event.preventDefault();

		const { title, body } = input;

		if(!title || !body) return;

		addNote(input.title, input.body);
		setInput({
			title: "",
			body: "",
		})
	};

	return { input, changeInput, submit };
}