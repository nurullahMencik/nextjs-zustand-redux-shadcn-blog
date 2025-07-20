"use client"
import store from '@/redux/store'
import { Provider } from 'react-redux'
import React from 'react'

interface reduxProviderProps{
    children:React.ReactNode
}

const ReduxProviderr = ({children}:reduxProviderProps) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default ReduxProviderr
