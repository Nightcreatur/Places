import React from 'react'
import './UserList.css'
import UserItem from './UserItem'


const UserList = (props) => {
  if (props.items.length === 0) {
    return (<div className="center">
      <h2>No users found!</h2>
    </div>
    )
  }
  return (
    <ul className='users-list'>
      {props.items.map(users => {
        return <UserItem key={users.id}
          id={users.id}
          image={users.image}
          name={users.name}
          placeCount={users.placeCount} />
      })}
    </ul>
  )
}

export default UserList