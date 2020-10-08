import React from 'react';
import { Admin,Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import usersList from './components/usersList'
import usersCreate from './components/usersCreate'
import usersEdit from './components/usersEdit'

function App() {

return(
  <Admin dataProvider={restProvider('http://localhost:3000')}> 
      <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit}/>
      <Resource name='users' list={usersList} create={usersCreate} edit={usersEdit}/>

  </Admin>
  )   
}

export default App;
