import React from 'react'
import useEggheadUserAuthentication from '../hooks/useEggheadUserAuthentication'
import {UserContext} from './userContext'

export function EggheadUserProvider({children, loadFullUser}) {
  console.log('user provider')
  const userAuth = useEggheadUserAuthentication({loadFullUser})

  return (
    <UserContext.Provider value={{...userAuth}}>
      {children}
    </UserContext.Provider>
  )
}
