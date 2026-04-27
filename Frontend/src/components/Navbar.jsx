import React from 'react'


const Navbar = () => {
  return (
    <nav className='px-8 py-4 border-2 border black flex justify-between '>

        <img className='w-20 rounded-full' src="https://imgs.search.brave.com/kzKxu6BbpoxjQ_TJDizqgvPHrL1UNcRSbVcuEEpSJsw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hdmF0/YXJzLnBmcHRvd24u/Y29tLzY4OS9zcGlk/ZXJtYW4tcGZwLTIz/MjUucG5n" alt="" />

        <div className='flex items-center gap-5 text-2xl '>

        <a href="#">Home</a>
        <a href="#">matches</a>
        <a href="#">friends</a>
        <a href="#">guys</a>
        <a href="#">bitches</a>

        </div>
      
    </nav>
  )
}

export default Navbar
