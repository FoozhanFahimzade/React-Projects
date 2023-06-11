import BookList from './components/BookList';
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/BookContext';
import FormDialog from './components/RegisterForm';
function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList/>
        <FormDialog/>
      </BookContextProvider>
    </div>
  );
}

export default App;
