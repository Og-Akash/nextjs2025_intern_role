import React from 'react'
import Card from './ui/Card'

const Content = () => {
  return (
    <section className='my-4 mx-8 h-full shadow-sm bg-background rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-scroll border'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  )
}

export default Content
