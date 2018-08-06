import {toggleTodo, addTodoAndUpdateFilter, VisibilityFilters, addTodoAsyncAndUpdateFilter} from 'actions';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

describe('test actions', () => {
  it('should create action message', () => {
    expect(toggleTodo('5')).toEqual({
      id: '5',
      type: 'TOGGLE_TODO'
    });
  });
  
  it('test redux-thunk dispatch action should have two actions', () => {
    const mockStore = configureMockStore([thunk])
    const store = mockStore({
    })
    const expectedActions = [
      { type: 'ADD_TODO', id: 0, text: 'homework'},
      { type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ACTIVE'}
    ]
    store.dispatch(addTodoAndUpdateFilter('homework', VisibilityFilters.SHOW_ACTIVE))
    expect(store.getActions()).toEqual(expectedActions)
  })

//   it('test redux-thunk aync dispatch action should have two actions', () => {
//     nock('http://localhost')
//       .post('/api/update')
//       .matchHeader('accept', 'application/json')
//       .delay(500)
//       .reply(200, {text: 'homework2'})
//     const mockStore = configureMockStore([thunk])
//     const store = mockStore({
//     })
//     const expectedActions = [
//       { type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ACTIVE'},
//       { type: 'ADD_TODO', id: 0, text: 'homework2'}
//     ]
//     store.dispatch(addTodoAsyncAndUpdateFilter(VisibilityFilters.SHOW_ACTIVE))
//     expect(store.getActions()).toEqual(expectedActions)
//   })
})

