export const initialState = {
  posts: [],
  comments: [],
  albums: [],
  photos: [],
  todos: [],
  users: []
}

export const action_types = {
  FETCH_POST: 'FETCH_POST',
  FETCH_COMMENT: 'FETCH_COMMENT',
  FETCH_ALBUM: 'FETCH_ALBUM',
  FETCH_PHOTO: 'FETCH_PHOTO',
  FETCH_TODOS: 'FETCH_TODOS',
  FETCH_USERS: 'FETCH_USERS'
}

export const reducer = (state, action) => {
  switch (action.type) {
    case action_types.FETCH_POST:
      return { ...state, posts: action.payload }
    case action_types.FETCH_COMMENT:
      return { ...state, comments: action.payload }
    case action_types.FETCH_ALBUM:
      return { ...state, albums: action.payload }
    case action_types.FETCH_PHOTO:
      return { ...state, photos: action.payload }
    case action_types.FETCH_TODOS:
      return { ...state, todos: action.payload }
    case action_types.FETCH_USERS:
      return { ...state, users: action.payload }
    default:
      return state
  }
}
