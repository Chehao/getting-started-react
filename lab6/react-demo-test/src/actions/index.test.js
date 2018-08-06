import {toggleTodo, addTodoAndUpdateFilter, VisibilityFilters} from 'actions';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

describe('test toggleTodo action', () => {
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
})

