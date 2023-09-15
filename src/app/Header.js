"use client"

import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

const HeaderLinkStyle= styled.div`
  position: fixed;
  left : 0px;
  top : 19px;
  width : 100%;
  
  
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
      <h1>
      <a href="../">
        <Image

          src='/mylogo.png'
          width={200}
          height= {50}
          alt='logo'>
       </Image>
      </a>
       
      </h1>
      </HeaderLinkStyle>
    
    </>
  );
}
