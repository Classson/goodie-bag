import React from 'react'
import Candies from './candies'

const Root = () => {
  return (
    <div>
      <nav>
        Goodie Bag
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
      {<Candies />}
      </main>
    </div>
  )
}

export default Root
