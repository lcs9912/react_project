"use client"

import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { FaRunning } from 'react-icons/fa';

const HomeStyleContainer= styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  //background-color: yellow;
  margin: 10px auto;
  min-height: 80vb;
  align-items: center;
  // border: 1px solid black;
  // border-radius: 30px;
  .siteSelf{
    float: left;
    margin-right : 100px;
    
  }

  
  #loginLeft{
    padding-right: 100px;
    border-right: 3px solid black;
    height : 400px;
  }
  
  #loginbox{
    border: 1px solid black;  
    padding: 50px 30px;
    border-radius: 30px;
  }

  .inputText{
    border: 1px solid black;
    border-radius: 30px;
    width : 264px;
    padding : 10px;
    margin-bottom : 10px;
  }
  h3{
    text-align: center;
  }
  #inputId{
    margin: 37px 0px;
    
    
  }

`;



export default function Home() {
  return (
    <>
    <HomeStyleContainer>
      
        <div className='siteSelf'> {/* 사이트 소개 */}
          <div id='loginLeft'>
            <h1>선택장애 sns</h1>
            <h2>선택에 어려움이 있다면 </h2>
            <h2>사람들에게 도움을 요청해보세요</h2>
          </div>
        </div>

        <div id="loginbox"> {/* 로그인 박스 */}
          <h3>로그인</h3>
          <div>
                    <form onSubmit={(e)=>{
                      
                      e.preventDefault();

                      var userId = e.target.userId.value;
                      var userPwd = e. target.userPwd.value;
                      
                      var userInfo = JSON.stringify({userId : userId, userPwd : userPwd});

                      var option = {
                        method : 'Login',
                        headers : {'Content-type' : 'application/json'},
                        body : userInfo,
                      }
                      
                        fetch(`../api/user/`, option) // API 라우트를 호출  ? 뒤에는 조건
                          .then((response) => {
                            if (!response.ok) {
                              throw new Error('서버 응답이 실패했습니다.');
                            }
                            return response.json();
                          })    
                          .then((data) => {
                            console.log(data);
                            setPosts(data);
                          })
                          .catch((error) => {
                            console.error('데이터를 가져오는 중 오류 발생:', error);
                          });
                      }
                      
                    }>
                        <div id="inputId">
                          <div><input name="userId" placeholder='아이디' className='inputText'></input></div>
                          <div><input name="userPwd" placeholder='비밀번호' className='inputText'></input></div>
                        </div>
                        <div><input type="submit" value="로그인"></input></div>
                    </form>
          </div>
          <div>아이디가 없으신가요?<a href='/join'>회원가입</a></div>
        </div>
      
    </HomeStyleContainer>
    </>
  )
}
