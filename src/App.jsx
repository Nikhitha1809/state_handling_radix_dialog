import React from 'react'
import { gql, useQuery } from '@apollo/client'

import './App.css'
import DialogDemo from './Radix';
const FetchingData=gql`
  query{
    messages{
      items{
        id
        subject
        view_href
        body
        device_id
      }
    }
  }
`
function Loader(){
  return(
    <div className='spinner-container'>
      <div className='loading-spinner'></div>
    </div>
  )
}
function App() {
  const {loading, error ,data} =useQuery(FetchingData);
  return (
    <>
    <h1 className='heading'>State Handling</h1>
      <div>
        {loading?<Loader/>:
        data && data.messages.items.map(msg=>
          (
          <DialogDemo msg={msg} key={msg.id} />
          ))
        }
      </div>
    </>
  )
}

export default App
