"use client";
import React from 'react'
import useCookie from '../hooks/useCookie'
import useCookieWithListener from '../hooks/useCookieWithListener'
import useCookieWithListenerPolyFilled from '../hooks/useCookieWithListenerPolyfilled'

import {hri} from "human-readable-ids"


interface User {
  name: string
  age: number
}


const defaultUser: User = { name: 'John Doe', age: 30 }


function UserProfile() {


  const [user, setUser, deleteUser] = useCookieWithListener<User>('user', defaultUser)
  const [serverCookie] = useCookieWithListener<string>('server-cookie', "default-value-for-server-cookie")

  // const [user, setUser, deleteUser] = useCookieWithListenerPolyFilled<User>('user', defaultUser)
  // const [serverCookie] = useCookieWithListenerPolyFilled<string>('server-cookie', "default-value-for-server-cookie")


  console.log(user, serverCookie)

  // const [user, setUser, deleteUser] = useCookie<User>('user', defaultUser)
  // const [serverCookie] = useCookie<string>('server-cookie', "default-value-for-server-cookie")

  const handleUpdateUser = () => {
    setUser({ name:hri.random() , age: 25 }, { expires: 7 })
  }

  const handleDeleteUser = () => {
    deleteUser()
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user?.name}</p>
      <p>Age: {user?.age}</p>
      <p>Server cookie: {serverCookie}</p>
      <button onClick={handleUpdateUser}>Update User</button>
      <button onClick={handleDeleteUser}>Delete User</button>

      <button onClick={() => {
        fetch('/req1').then(v => v.json()).then(v => console.log(v))
      }}>Server Fetch</button>
    </div>
  )
}


export default UserProfile