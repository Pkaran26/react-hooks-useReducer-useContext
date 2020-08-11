import React, { useState, useContext } from 'react'
import { action_types } from './Reducers'
import axios from 'axios'
import { DataContext } from './Context'

function Fetch() {
  const [loading, setLoading] = useState('')

  const { state, dispatch } = useContext(DataContext)
  const { FETCH_POST, FETCH_COMMENT, FETCH_ALBUM, FETCH_PHOTO, FETCH_TODOS, FETCH_USERS } = action_types
  const SERVER_URL = 'https://jsonplaceholder.typicode.com'

  const fetchData = (type, subUrl)=>{
    dispatch({ type: type, payload: [] })
    setLoading(`${ subUrl } is fetching...`)
    axios.get(`${ SERVER_URL }/${ subUrl }`)
    .then(res=>{
      dispatch({ type: type, payload: res.data })
      setLoading('')
    })
    .catch(err=>{
      dispatch({ type: type, payload: [] })
      setLoading('')
    })
  }

  return (
    <div className="container">
      { loading?
        <Loading loading={ loading } />
      :null }
      <div className="table">
        <table className="table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Total Counts</th>
              <th>Action</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>posts</td>
              <td>{ state.posts.length }</td>
              <td><Button loading={ loading } fetchData={() => fetchData(FETCH_POST, 'posts')} name="Fetch Posts" /></td>
              <td>{ state.posts.length>0? <Image alt="posts" /> : <WrongImage alt="posts2" /> }</td>
            </tr>
            <tr>
              <td>comments</td>
              <td>{ state.comments.length }</td>
              <td><Button loading={ loading } fetchData={() => fetchData(FETCH_COMMENT, 'comments')} name="Fetch Comments" /></td>
              <td>{ state.comments.length>0? <Image alt="comments" /> : <WrongImage alt="comments2" /> }</td>
            </tr>
            <tr>
              <td>albums</td>
              <td>{ state.albums.length }</td>
              <td><Button loading={ loading } fetchData={() => fetchData(FETCH_ALBUM, 'albums')} name="Fetch Albums" /></td>
              <td>{ state.albums.length >0? <Image alt="albums" /> : <WrongImage alt="albums2" />}</td>
            </tr>
            <tr>
              <td>photos</td>
              <td>{ state.photos.length }</td>
              <td><Button loading={ loading } fetchData={() => fetchData(FETCH_PHOTO, 'photos')} name="Fetch Photos" /></td>
              <td>{ state.photos.length>0? <Image alt="photos" /> : <WrongImage alt="photos2" /> }</td>
            </tr>
            <tr>
              <td>todos</td>
              <td>{ state.todos.length }</td>
              <td><Button loading={ loading } fetchData={() => fetchData(FETCH_TODOS, 'todos')} name="Fetch Todos" /></td>
              <td>{ state.todos.length>0? <Image alt="todos" /> : <WrongImage alt="todos2" /> }</td>
            </tr>
            <tr>
              <td>users</td>
              <td>{ state.users.length }</td>
              <td><Button loading={ loading } fetchData={() => fetchData(FETCH_USERS, 'users')} name="Fetch Users" /></td>
              <td>{ state.users.length>0? <Image alt="users" /> : <WrongImage alt="users2" /> }</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const Loading = ({ loading })=>(
  <div className="loading">
    <div className="spinner-border text-danger" role="status">
      <span className="sr-only">{ loading }...</span>
    </div>
  </div>
)

const Button = ({ loading, fetchData, name })=>(
  <button
    className="btn btn-info"
    style={{ width: '150px' }}
    disabled={ loading? true : false }
    onClick={ () => fetchData() }
  >{ name }</button>
)

const Image = ({ alt })=>(
  <img
    src="https://images.vexels.com/media/users/3/157931/isolated/preview/604a0cadf94914c7ee6c6e552e9b4487-curved-check-mark-circle-icon-by-vexels.png"
    style={{ width: '40px' }}
    alt={ alt }
  />
)

const WrongImage = ({ alt })=>(
  <img
    src="https://simpleicon.com/wp-content/uploads/refresh.png"
    style={{ width: '40px' }}
    alt={ alt }
  />
)

export default Fetch
