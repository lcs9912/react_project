"use client"

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image'

const HomeStyleContainer= styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  //background-color: yellow;
  margin: 10px auto;
  min-height: 80vb;
  align-items: center;
  margin-top : 100px;
  

  .siteSelf{
    float: left;
    margin-right : 100px;
    
  }

  #loginLeft{
    padding-right: 100px;
    border-right: 3px solid black;
    height : 556px;
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

export default function Join(){
    return (
        <>
        <HomeStyleContainer>
        <div className='siteSelf'> {/* 사이트 소개 */}
          <div id='loginLeft'>
          <a href="../">
            <Image
              className='logoImg'
              src='/mylogo.png'
              width={300}
              height= {70}
              alt='logo'>
            </Image>
          </a>
            <h1>선택장애 sns</h1>
            <h2>선택에 어려움이 있다면 </h2>
            <h2>사람들에게 도움을 요청해보세요</h2>
          </div>
        </div>

            <div id="loginbox">
            <h3>회원가입</h3>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    
                    
                    var userId = e.target.userId.value;
                    var userPwd = e.target.userPwd.value;
                    var userEmail = e.target.userEmail.value;
                    var userPhone = e.target.userPhone.value;
                    var userNickname = e.target.userNickname.value;
                    var userName = e.target.userName.value;
                    
                    var jsonMap = JSON.stringify({ userId : userId, userPwd : userPwd, userEmail : userEmail, userPhone : userPhone, userNickname : userNickname, userName : userName});
                    //var jsonMap = JSON.stringify( {userId}, {userPwd}, {userEmail}, {userPhone}, {userNickname}, {userName});
                    console.log("jsonMap",jsonMap);
                    fetch('../api/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: jsonMap, // JSON 데이터를 전송합니다.
                    })
                    .then((response) => {
                        if (!response.ok) {
                        throw new Error('서버 응답이 실패했습니다.');
                        }
                        return response.json();
                    })
                    .then((data) => {
                        console.log('서버 응답:', data);
                    })
                    .catch((error) => {
                        console.error('POST 요청 중 오류 발생:', error);
                    });
                }}>
                    <div id="inputId">
                        <input name="userId" placeholder="아이디"className='inputText'></input>
                        
                    
                    <div><input name="userPwd" placeholder="비밀번호"className='inputText'></input></div>
                    <div><input name="userPwd2" placeholder="비밀번호 확인"className='inputText'></input></div>
                    <div><input name="userEmail" placeholder="이메일"className='inputText'></input></div>
                    <div><input name="userPhone" placeholder="연락처"className='inputText'></input></div>
                    <div><input name="userNickname" placeholder="닉네임"className='inputText'></input></div>
                    <div><input name="userName" placeholder="이름"className='inputText'></input></div>
                    </div>
                    <div><input type="submit" value="회원가입"></input></div>
                   
                </form>
                <div>로그인 하러가기<a href='../'>로그인</a></div>
            </div>
            </HomeStyleContainer>
        </>
    )
}