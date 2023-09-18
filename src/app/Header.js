"use client"

import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

const HeaderLinkStyle= styled.span`
  position: fixed;
  left : 0px;
  top : 19px;
  
  
  
  h1{
    margin: 30px;
    margin-left : 0px;
    
  
  }  

  a{
    color : black;
    text-decoration: none;
  }
`;

const Avatar = styled.img`
  width: 100px;
`;
export function Header() {
  return (
    <>
      <HeaderLinkStyle>
      <a href="/home">
        <Image

          src='/mylogo.png'
          width={200}
          height= {50}
          alt='logo'>
       </Image>
      </a>
       
      
      </HeaderLinkStyle>
    
    </>
  );
}
