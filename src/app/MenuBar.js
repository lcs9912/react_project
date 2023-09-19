"use client"
import React from 'react';
import styled from '@emotion/styled';
import { FiHome, FiSearch, FiPlusSquare, FiHeart, FiUser, FiMenu, FiLogOut, FiBookmark, FiSettings, FiSun, FiClock, FiAlertTriangle } from 'react-icons/fi';
import { Header }  from './Header';
import { useState, useEffect } from 'react';
  
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
    margin-top: 156px;
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

const MenuBox = styled.div`
  margin-top : 54px;
  display : flex;
  flex-direction: column;
  
  
  border : 1px solid black;
  border-radius: 20px;
  weight : 100px;
  height : 325px;
  

  a{
    border-radius : 15px;
    margin-left : 10px;
    padding : 10px;
    margin-top : 10px;
    cursor : pointer;
    
  }

  a:hover{
    background-color : #bfaeae38;
  }
`;

const MenuBar = () => {
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);

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
        <FiHeart /> <span>알람</span>
      </MenuIcon>
      </a>

      <a href='/user'>
      <MenuIcon>
        <FiUser /> <span>내 프로필</span>
      </MenuIcon>
      </a>

      {isLogoutVisible && (
        <MenuBox>
          
            <a><FiSettings /> 설정</a>
            <a><FiClock /> 내 활동</a>
            <a><FiBookmark /> 저장됨</a>
            <a><FiSun /> 모드 전환</a>
            <a><FiAlertTriangle /> 문제 신고</a>
           
            
            <a onClick={() => location.href="../"}><FiLogOut /> 로그아웃</a>
          
          </MenuBox>
        )}

      <a href='#' id='lastIcon' onClick={(e) => {
        e.preventDefault();
        
        setIsLogoutVisible(!isLogoutVisible)}}>
          <MenuIcon>
            <FiMenu /> <span>더 보기</span>
          </MenuIcon>
        </a>

        
    </MenuBarContainer>
    
    
      
    
    </>
  );
};

export default MenuBar;