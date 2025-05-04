import fetchAPI from '../lib/api-client'
import { User, CreateUserDto } from '../../domain/user/types'

export const getUsers = async (): Promise<User[]> => {
  return fetchAPI<User[]>('/user')
}

export const createUser = async (userData: CreateUserDto): Promise<User> => {
  return fetchAPI<User>('/user', {
    method: 'POST',
    body: JSON.stringify(userData),
  })
}

export const getUserById = async (id: number): Promise<User> => {
  return fetchAPI<User>(`/user/${id}`)
}