import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import '../style.css'
    const Navbar = () => {
        const Nav = styled.nav`
          .navv {
            display: flex;
            gap: 3.5rem;
            li {
              list-style: none;
              .z 
              {
                position: relative;
                top: 10px;
                left: 56px;
              }
              .q 
              {
                display: flex;
                text-decoration: none;
                font-size: 1.6rem;
                font-family: Lato;
                color: ${({ theme }) => theme.colors.white};
                position: relative;
                top: 4.2px;
                left: 25px;

                .pqq 
                {
                  font-size: 4.5rem;
                  color:#EE4B2B;
                  position: relative;
                  bottom: 43px;
                }

              }
              .t {
                &:link,
                &:visited {
                  display: flex;
                  text-decoration: none;
                  font-size: 1.08rem;
                  font-family: 'Prata', sans-serif;
                  align-items: center;
                  color: ${({ theme }) => theme.colors.white};
                  transition: color 0.3s linear;
                }
                &:hover,
                &:active {
                  color: ${({ theme }) => theme.colors.helper};
                }
              }
            }
          }
        `;

  return (
    <Nav>
    <div>
        <ul class="navv">
            <li> 
            <NavLink to="/" className=" q"> BOOKING <span className="pqq">.</span> IN </NavLink>
            </li>
            <li>
              <NavLink  className="z t" to='/'> Home </NavLink>
            </li>
            <li>
             <NavLink className="z t" to='/Travel'> Travel List</NavLink>
            </li>
            <li>
            <NavLink className="z t" to='/Page'> Page</NavLink>
            </li>
            <li>
            <NavLink className="z t" to='/Blog'> Blog </NavLink>
            </li>
            <li>
            <NavLink className="z t" to='/Contact'> Contact </NavLink>
            </li>
        </ul>
    </div>
    </Nav>
  )
}

export default Navbar