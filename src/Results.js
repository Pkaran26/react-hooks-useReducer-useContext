import React from 'react'
import { DataContext } from './Context'

function Fetch() {
  const { state } = useContext(DataContext)

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Total Counts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>posts</td>
            <td>{ state.posts.length }</td>
          </tr>
          <tr>
            <td>comments</td>
            <td>{ state.comments.length }</td>
          </tr>
          <tr>
            <td>albums</td>
            <td>{ state.albums.length }</td>
          </tr>
          <tr>
            <td>photos</td>
            <td>{ state.photos.length }</td>
          </tr>
          <tr>
            <td>todos</td>
            <td>{ state.todos.length }</td>
          </tr>
          <tr>
            <td>users</td>
            <td>{ state.users.length }</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Fetch
