import React from 'react'

function Dashboard({ user }) {
  return <section className='section'>Hello , {user?.name}</section>
}

export default Dashboard
