import 'cross-fetch/polyfill'

let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const addTodoAndUpdateFilter = (text, filter) => (dispatch, getState) => {
  dispatch(addTodo(text))
  dispatch(setVisibilityFilter(filter))
}

export const addTodoAsyncAndUpdateFilter = (filter) => (dispatch, getState) => {
  dispatch(setVisibilityFilter(filter))
  return fetch('http://localhost/api/update',{
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    dispatch(addTodo(data.text))
  })
  .catch(error => console.error('Error:', error))
}