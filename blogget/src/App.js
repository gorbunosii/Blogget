import Header from './components/Header';
import Main from './components/Main';
import {AuthContextProvider} from './context/authContext';
import {TokenContextProvider} from './context/tokenContext';
import {NewsBestContextProvider} from './context/postsContext';
import {CommentsContextProvider} from './context/commentsContext';

function App() {
  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <NewsBestContextProvider>
          <CommentsContextProvider>
            <Header/>
            <Main/>
          </CommentsContextProvider>
        </NewsBestContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default App;
