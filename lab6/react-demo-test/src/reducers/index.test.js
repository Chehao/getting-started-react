import reducer from 'reducers';

describe('All Reducer', () => {
  it('test todo reducer initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      todos: [],
      visibilityFilter: 'SHOW_ALL'
    });
  });

  const initialState = {
    todos: [],
    visibilityFilter: 'SHOW_ALL'
  };

  it('test todo reducder add todo', () => {
    expect(
      reducer(initialState, {
        type: 'ADD_TODO',
        id: 1,
        text: 'hollo',
        completed: false
      })
    ).toEqual({
      todos: [
        {
          id: 1,
          text: 'hollo',
          completed: false
        }
      ],
      visibilityFilter: 'SHOW_ALL'
    });
  });
});
