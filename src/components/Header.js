import useNote from '../hooks/useNote';

function Header() {
	const { search, setSearch } = useNote();

	return (
		<header className="note-app__header">
			<h1>Notes</h1>
			<div className="note-search">
				<input type="search" placeholder="cari catatan..." value={search} onChange={(event) => setSearch(event.target.value)}/>
			</div>
		</header>
	)
}

export default Header;