'use client'

import { useEffect, useState } from 'react'
import { getUsers, createUser } from '@/infrastructure/repositories/user-repository'
import { User, CreateUserDto } from '@/domain/user/types'

export default function UserPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [newUser, setNewUser] = useState<CreateUserDto>({ 
    firstName: ``,
    lastName: ``,
    password: ``,
    phone: ``,
    email: '' 
  })

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    try {
      setLoading(true)
      const data = await getUsers()
      setUsers(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await createUser(newUser)
      await loadUsers() // Recargar la lista
      // setNewUser({ name: '', email: '' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create user')
    }
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            value={newUser.firstName || ''}
            onChange={(e) => setNewUser({...newUser, firstName: e.target.value})}
            className="p-2 border rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Email*</label>
          <input
            type="email"
            value={newUser.email}
            onChange={(e) => setNewUser({...newUser, email: e.target.value})}
            className="p-2 border rounded w-full"
            required
          />
        </div>
        <button 
          type="submit" 
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add User
        </button>
      </form>

      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="p-3 border rounded">
            <h3 className="font-semibold">{user.firstName || 'No name'}</h3>
            <p className="text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
