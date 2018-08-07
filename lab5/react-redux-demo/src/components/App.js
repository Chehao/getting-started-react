import Footer from 'components/Footer';
import AddTodo from 'containers/AddTodo';
import VisibleTodoList from 'containers/VisibleTodoList';
import React from 'react';
// import {DevTools} from 'DevTools';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    {
      // process.env.NODE_ENV === 'development' ? <DevTools /> : null
    }
  </div>
)

export default App;
