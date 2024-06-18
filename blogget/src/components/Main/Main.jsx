import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import Homepage from './Homepage';
import NonExistent from './NonExistent';
import {Route, Routes} from 'react-router-dom';
import Modal from '../Modal';

export const Main = props => (
  <main className={style.container}>
    <Layout>
      <Tabs />
      <Routes>
        <Route path='*' element={<NonExistent />}/>
        <Route path='/' element={<Homepage />}/>
        <Route path='/category/:page' element={<List />}>
          <Route path='post/:id' element={<Modal/>}/>
        </Route>
      </Routes>
    </Layout>
  </main>
);
