import React from 'react'
import Sidebar from './layouts/sidebar'
import Outletpart from './component/outletpart'

export default function Main() {
  return (
    <div>
        <>
         <div className='Main-Layout-section'>
           <Sidebar/>
           <Outletpart/>
         </div>
        </>
    </div>
  )
}
