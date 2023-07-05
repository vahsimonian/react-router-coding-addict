import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ setUser }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (!name || !email) return
    setUser({ name, email })
    navigate('/dashboard')
  }

  return (
    <section>
      <form className='form' onSubmit={handleSubmit}>
        <h5>login</h5>
        <div className='form-row'>
          Name
          <input
            name='name'
            type='text'
            className='form-label'
            value={name}
            id='name'
            onChange={(e) => setName(e.target.value)}
          />
          Email
          <input
            name='email'
            type='email'
            className='form-label'
            value={email}
            id='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type='submit' className='btn btn-block'>
            Login
          </button>
        </div>
      </form>
    </section>
  )
}

export default Login
