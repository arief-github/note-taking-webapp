import useNote from '../hooks/useNote';
import NoteItem from './NoteItem';

function NoteLists({ title }) {
	const { notes } = useNote();

	const filteredByStatus = () => {
		const isArchived = title === 'Arsip';
		const filtered = notes.filter((note) => note.archived === isArchived);
		return filtered;
	}

	return (
		<section>
			<h2>Title</h2>
			<div className="notes-list">
				{
					filteredByStatus().length ? (
						filteredByStatus().map((note) => (
								<NoteItem key={note.id} data={note} />
							))
					) : (
						<p className = "notes-list__empty-message">Tidak ada catatan</p>
					)
				}
			</div>
		</section>
	)
}

export default NoteLists;