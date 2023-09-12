// db테스트 파일(호출, src/app/dbtest/page.js)
"use client"
import React, { useState, useEffect } from 'react';

export default function Search(){
  const [posts, setPosts] = useState([]);
  var user = "user_tbl";
  useEffect(() => {
    fetch(`/api/user?userTbl=${user}`) // API 라우트를 호출  ? 뒤에는 조건
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
  }, [user]);

  return (
    <div>
     <div>리스트 출력</div>
     <table>
        <thead>
            <tr>
                <th>아이디</th>
                <th>이메일</th>
                <th>연락처</th>
                <th>닉네임</th>
                <th>이름</th>
            </tr>
        </thead>
        
        <tbody>
            {posts.map((post) => (
                <tr key={post.USER_ID}>
                    <td>{post.USER_ID}</td>
                    <td>{post.USER_EMAIL}</td>
                    <td>{post.USER_PHONE}</td>
                    <td>{post.USER_NICKNAME}</td>
                    <td>{post.USER_NAME}</td>
                </tr>
            ))}
        </tbody>

       
     </table>
      <button onClick={() => {
        fetch('/api/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ value1: '박철수'}), // JSON 데이터를 전송합니다.
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
      }}>테스트 버튼(Insert)</button>

      <button onClick={()=>{
        const updatedData = {
          value1: 2,
          value2: '박철수',
        };
        
        fetch(`/api/user`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json', // JSON 데이터를 전송하기 위한 헤더
          },
          body: JSON.stringify(updatedData), // JSON 형식의 업데이트 데이터
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
            console.error('PUT 요청 중 오류 발생:', error);
          });
      }}>테스트 버튼(Update)</button>
      <button onClick={()=>{
        const deleteData = {
          value1: 6,
        };
        fetch(`/api/user`, {
          method: 'DELETE',
          body: JSON.stringify(deleteData), // JSON 형식의 업데이트 데이터
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
            console.error('DELETE 요청 중 오류 발생:', error);
          });
      }}>테스트버튼(Delete)</button>
    </div>
  )
}
