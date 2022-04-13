import React from 'react'
import useUserList from '../hooks/useUserList'
import UserList from '../components/UserList'

export default function UserListPage() {
  const userList = useUserList()
  console.log(userList)
  return (
    <div>
      <h2>UserListPage</h2>
      <UserList />
    </div>
  )
}
