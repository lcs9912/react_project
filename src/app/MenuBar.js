"use client"
import React from 'react';
import styled from '@emotion/styled';
import { FiHome, FiSearch, FiPlusSquare, FiHeart, FiUser, FiMenu } from 'react-icons/fi';
import { Header }  from './Header';
  
const MenuBarContainer= styled.div`
  display: flex;
  flex-direction: column;
  
  gap: 29px;
  position: fixed;
  top : 0;
  left: 0;
  width: 200px;
  flex-direction: column;

  
  
  background-color: white;
  height: 100%;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);

  #iconTop{
    margin-top: 100px;
  }

  #lastIcon{
    margin-top : auto;
    margin-bottom : 30px;
  }

  a{
    text-decoration: none;
  }
`;

const MenuIcon = styled.div`

  font-size: 24px;
  margin-left : 20px;
  color: #555;

  span{
    font-size : 20px;
  }

`;

const MenuBar = () => {
  return (
    <>
    
    <MenuBarContainer>
    <Header />
    
      <a href="/home">
        
      <MenuIcon>
        <FiHome id='iconTop' /> <span>홈</span>
      </MenuIcon>
      </a>

      <a href="/search">
      <MenuIcon>
        <FiSearch /> <span>검색</span>
      </MenuIcon>
      </a>
    
      <a href='square'>  
      <MenuIcon>
        <FiPlusSquare /> <span>만들기</span>
      </MenuIcon>
      </a>

      <a href='/heart'>  
      <MenuIcon>
        <FiHeart /> <span>좋아요</span>
      </MenuIcon>
      </a>

      <a href='/user'>
      <MenuIcon>
        <FiUser /> <span>내 프로필</span>
      </MenuIcon>
      </a>

      <a href='#' id='lastIcon'>
      <MenuIcon>
        <FiMenu /> <span>더 보기</span>
      </MenuIcon>
      </a>
    </MenuBarContainer>
    </>
  );
};

export default MenuBar;