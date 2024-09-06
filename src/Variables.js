import {useContext,createContext, useReducer} from 'react'
export const kayasDomainUrl='https://kayas-fe53159a9e3e.herokuapp.com'
export const cheapItemsGroupLink='https://chat.whatsapp.com/BU6aMsNR6jL5x11rcWc9HZ'

export const setCookieOptionsObj={
    path:'/',sameSite:'strict',secure:true
   }
export const user={name:'Not logged in',contact:null,role:'user'}
export const AppContext=createContext()