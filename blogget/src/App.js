import Header from './components/Header';
import Main from './components/Main';
import {AuthContextProvider} from './context/authContext';
import {TokenContextProvider} from './context/tokenContext';
import {NewsBestContextProvider} from './context/postsContext';

function App() {
  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <NewsBestContextProvider>
          <Header/>
          <Main/>
        </NewsBestContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default App;
