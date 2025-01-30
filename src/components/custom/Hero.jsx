
import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-bold text-[50px] text-center mt-16">
        <span className="text-purple-800">Discover Your Next Adventure with AI:</span> Personalize Itineraries at Your Fingertips</h1>
        <p className="text-xl text-gray-500 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A exercitationem nisi nesciunt beatae dolorem in.</p>

        <Link to={'/create-trip'}>
          <Button>Get Started, it's Free</Button>
        </Link>
    </div>
  )
}

export default Hero