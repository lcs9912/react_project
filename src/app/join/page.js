"use client"

import React, { useState, useEffect } from 'react';

export default function Join(){
    return (
        <>
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    
                    var userId = e.target.userId.value;
                    var userPwd = e.target.userPwd.value;
                    var userEmail = e.target.userEmail.value;
                    var userPhone = e.target.userPhone.value;
                    var userNickname = e.target.userNickname.value;
                    var userName = e.target.userName.value;
                    
                    var jsonMap = JSON.stringify({ userId : {userId}, userPwd : {userPwd}, userEmail : {userEmail}, userPhone : {userPhone}, userNickname : {userNickname}, userName : {userName}});
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
                    <div>
                        <input name="userId" placeholder="아이디"></input>
                        
                    </div>
                    <div><input name="userPwd" placeholder="비밀번호"></input></div>
                    <div><input name="userPwd2" placeholder="비밀번호 확인"></input></div>
                    <div><input name="userEmail" placeholder="이메일"></input></div>
                    <div><input name="userPhone" placeholder="연락처"></input></div>
                    <div><input name="userNickname" placeholder="닉네임"></input></div>
                    <div><input name="userName" placeholder="이름"></input></div>
                    <div><input type="submit" value="회원가입"></input></div>
                </form>
            </div>
        </>
    )
}