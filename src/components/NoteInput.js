import React from 'react';
import useNoteInput from '../hooks/useNoteInput';

function NoteInput() {
	const { submit, changeInput, input } = useNoteInput();

	return (
		<div className="note-input">
			<h2>Buat Catatan</h2>
			<form onSubmit={(event) => submit(event)}>
				<p className="note-input__title__char-limit">
					Sisa karakter: { 50 - input.title.length }
				</p>
				<input type="text" name="title" maxlength={50} value={input.title} onChange={(event) => changeInput(event)} className="note-input__title" placeholder="Ini adalah judul..." required/>
				<textarea type="text" name="body" value={input.body} onChange={(event) => changeInput(event)} className="note-input__body" placeholder="Tulis catatanmu disini!" required></textarea>
				<button type="submit" > Buat </button>
			</form>
		</div>
	)
}

export default NoteInput;
