"use client"

import React from 'react';
import styled from '@emotion/styled';

const HeaderLinkStyle= styled.div`
  h1{
    background-color: yellow;
    text-align: center;
  }  

  a{
    color : black;
    text-decoration: none;
  }
`;
export function Header() {
  return (
    <>
      <HeaderLinkStyle>
      <h1>
        <a href="../" >헤더</a>
      </h1>
      </HeaderLinkStyle>
    
    </>
  );
}
