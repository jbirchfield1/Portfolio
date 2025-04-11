import { useState } from 'react'
import Header from './partials/Header'
import Footer from './partials/Footer'


export default function Landing(){
    return(
<>
    <div className='bg-blue-300 text-blue-950 rounded-xl font-mono  max-w-screen-md mx-auto'>
      <Header />
      <main className='mt-4'>
        <div className='p-2'>
        <h3 className='text-lg font-bold'>Bio:</h3>
        <p className='text-justify'>My name is Joshua Birchfield, and I come from Huntsville, Arkansas. I grew an interest in Computer Science through a class in High School and a love for videogames. I love things that cause me to learn and challenge myself regardless of subject. One of the ways I am challenging myself is by learning Japanese. Overall, I thoroughly enjoy programming, and I hope to make intuitive programs that make life a little more convenient.</p>
        </div>

        <div className='p-2 mt-4'>
          <h2 className='text-xl font-bold'>Education:</h2>
          <ul className='ml-3'>
            <li>High School Diploma</li>
            <li>Certificate in Programming</li>
            <li>Associate of Applied Science in Information Technology</li>
            <li>Bachelor of Science in Computer Science (In Progress)</li>
          </ul>
        </div>
      </main>
      
      <Footer />
    </div>
    
    </>
    )
}