import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Todo from './Todo';
import 'jest-enzyme';

it('1. render TodoList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoList todos={[]} toggleTodo={() => {}} />, div);
});

it('2. render empty TodoList', () => {
  const tree = renderer.create(<TodoList todos={[]} toggleTodo={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('3. render homework TodoList', () => {
  
  const tree = renderer
    .create(
      <TodoList
        todos={[
          {
            id: 6,
            completed: false,
            text: 'homework2'
          },{
            id: 7,
            completed: false,
            text: 'homework3'
          }
        ]}
        toggleTodo={() => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('4. shallow render TodoList should contains homework with id 7', ()=>{
  const wrapper = shallow(<TodoList todos={[
    {
      id: 7,
      completed: false,
      text: 'homework'
    }
  ]} toggleTodo={() => {}} />);
  const homework = <Todo id={7} completed={false} onClick={() => {}} text="homework"/>
  expect(wrapper.find(Todo)).toHaveLength(1);
  expect(wrapper.find(Todo)).toHaveProp('text', 'homework')
  expect(wrapper.find(Todo)).toHaveProp('id', 7)
  
})