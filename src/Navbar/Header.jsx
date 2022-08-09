import React from 'react';
import Navbar from './Navbar'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components';
import dollar from './dollar-symbol.png'
import ser from './search.png'
import ftn from './number-14.png'
import admin from './admin2.png'

const TEN = styled.header`
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
  .dav {
            display: flex;
            gap: 1.5rem;
            li {
              list-style: none;
              margin-bottom:0px;
              position: relative;
              top: 38px;
              right: 85px;
              .p {
                gap: 1rem;
                margin-bottom: 0px;
                position: relative;
                left: 11.8rem;
                top: 5px;
                &:link,
                &:visited {
                  display: flex;
                  text-decoration: none;
                  font-size: 1rem;
                  font-family: Lato;
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
          .dat {
            display: flex;
            gap: 1.5rem;
            li {
              list-style: none;
              margin-bottom:0px;
              position: relative;
              bottom: 84px;
              left: 700px;
              .p {
                gap: 1rem;
                margin-bottom: 0px;
                position: relative;
                left: 11.8rem;
                top: 5px;
                &:link,
                &:visited {
                  display: flex;
                  text-decoration: none;
                  font-size: 1rem;
                  font-family: Lato;
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

const Ted2 = () =>
{

  return ( <TEN>
     <ul className="dat">
      <li>
        <NavLink className="p" to="/"> +91 7717725909  <img src={ftn} alt="." width="36px" height="36px" /> </NavLink>
      </li>
      <li>
       <NavLink className="p" to="/"> Favourites <img src={admin} alt="." width="36px" height="36px" /></NavLink>
      </li>
     </ul>
  </TEN>
  )
}

const Ted = () =>
{
  return (
    <TEN>
        <ul className="dav">
      <li>
        <NavLink to="/" > <img src={dollar} alt="d" width="36px" height="36px" /> </NavLink>
      </li>
      <li>
      <NavLink to="/"> <img src={ser} alt="d" width="36px" height="36px" /> </NavLink>
      </li>
    </ul>
    </TEN>
  )
  }

const Header = () => {

  return (
    <MainHeader>
    <ul>
      <li>
      <Ted / >          
      </li>
      <li>
      <Navbar />
      </li>
      <li>
        <Ted2 />
      </li>
    </ul>
    
    </MainHeader>
    )
}

const MainHeader = styled.header`
  padding: 0  1.5rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  marginBottom: 0px;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: auto;
    max-width: 30%;
  }
    .dot {
      font-size: 5rem;
      color: #EE4B2B;
      position: relative;
      bottom: 17px;
    background: none;
    }
    .t {
                &:link,
                &:visited {
                  display: flex;
                  text-decoration: none;
                  font-size: 1.9rem;
                  font-family: Lato;
                  align-items: center;
                  color: ${({ theme }) => theme.colors.white};
                  transition: color 0.3s linear;
                }
                &:hover,
                &:active {
                  color: ${({ theme }) => theme.colors.helper};
                }
              }
`;


export default Header