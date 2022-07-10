import Header from './components/Header';
import NoteLists from './components/NoteLists';
import { Provider } from './hooks/useGlobalState';
import './App.css';

function App() {
  return (
    <Provider>
      <Header/>>
        <main className="note-app__body">
          <NoteLists title="Catatan Aktif"></NoteLists>
          <NoteLists title="Arsip"></NoteLists>
        </main>
    </Provider>
  );
}

export default App;
