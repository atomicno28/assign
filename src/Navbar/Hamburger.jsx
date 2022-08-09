import React from 'react'

const Hamburger = () => {
  return (
    <>
    <div className='HAMBURGER'>
     
    </div>

    <style jsx>
        {
         `
         width: 2rem;
         height: 2 rem;
         display: none;
         justify-content: space-around;
         flex-flow: column nowrap;
         z-index: 10;

         .burger{
            width: 2rem:
            height: 0.25rem;
            border-radius: 10px;
            transform-origin: 1px;
            transition: all 0.3s linear;
         }

         @media (max-width: 767px)
         {
            .hamburger 
            {
                display: fixed;
                padding-top: 10px;
                margin-left: 10px;
                z-index: 10;
            }
         }

         `
        }
    </style>
    </>
  )
}

export default Hamburger