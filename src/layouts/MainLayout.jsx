import React from 'react'
import Header from '../componenets/Header'

function MainLayout({children}) {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  )
}

export default MainLayout
