import Header from './components/Header';
import Main from './components/Main';
import {Provider} from 'react-redux';
import {AuthContextProvider} from './context/authContext';
import {NewsBestContextProvider} from './context/postsContext';
import {CommentsContextProvider} from './context/commentsContext';
import {store} from './store';

function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <NewsBestContextProvider>
          <CommentsContextProvider>
            <Header/>
            <Main/>
          </CommentsContextProvider>
        </NewsBestContextProvider>
      </AuthContextProvider>
    </Provider>
  );
}

export default App;
