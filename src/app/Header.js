"use client"

import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

const HeaderLinkStyle= styled.div`
  position: fixed;
  left : 0px;
  top : 0px;
  width : 100%;
  
  
  h1{
    margin: 30px;
  
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
      {/* <Image
                  src='/mylogo.png'
                  width={100}
                  height={0}
                  alt='logo'
              /> */}
        <a href="../" >LOGO</a>
      </h1>
      </HeaderLinkStyle>
    
    </>
  );
}
