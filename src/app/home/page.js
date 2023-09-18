"use client"


import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import MenuBar from '../MenuBar';


const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  display: flex;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width : 1177px;
  height : 872px;

  img {
    width: 70%; /* 이미지의 최대 너비를 100%로 설정하여 부모 컨테이너에 맞춥니다. */
    height: 100%; /* 이미지의 최대 높이를 100%로 설정하여 부모 컨테이너에 맞춥니다. */
    display: block; /* 이미지 요소 사이에 추가 공간을 제거합니다. */
    margin: 0 auto; /* 이미지를 가운데 정렬합니다. */
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const CommentSection = styled.div`
  display : flex;
  flex-direction: column; // 댓글 목록을 세로로 배치
  flex-grow: 1; /* CommentSection이 ModalContent의 나머지 공간을 채우도록 설정합니다. */
  padding : 10px;
  padding-left : 20px;
  border : 1px solid gray;

  height : 850px;
  width : 30%;
  
  #CommentHeader{
    border-bottom : 1px solid gray;
    padding : 10px 0px;
    margin-bottom : 10px;
    height: 10%;
  }

  #CommentMain{
    border-bottom : 1px solid gray;
    padding : 10px 0px;
    margin-bottom : 10px;
    height: 80%;

    .zzz{
      font-size : 12px;
      cursor: pointer;
      margin-left : 10px;
    }
  }

  #CommentInp{
    border-bottom : 1px solid gray;
    height: 10%;
    
  }

  a{
    position: relative;
    top : -31px;
    left : 273px;
    cursor: pointer;
  }

  
`;

const CommentInput = styled.input`
  // 댓글 입력 필드 스타일링
  width: 90%;
  padding: 10px;
  margin-top: 10px;
  border : none;
  

`;

const CommentList = styled.span`
  // 댓글 목록 스타일링
  overflow-y: auto; // 댓글 목록이 넘칠 경우 스크롤 표시
  div{
    margin : 10px 0px;
  }
  
`;


const Feed = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 20px 0;
`;

const Post = styled.div`
  background-color: white;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  border-bottom: 1px solid #efefef;
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Username = styled.span`
  font-weight: 600;
`;

const PostImage = styled.img`
  width: 100%;
  height: 526px;
`;

const PostActions = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #efefef;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  margin-right: 15px;
  cursor: pointer;
`;

const PostContent = styled.div`
  border-bottom: 1px solid black;

  a{
    cursor: pointer;
  }

  span{
    font-weight: bold;
  }

  div{
    margin: 5px 0px;
  }
`;



export function PostModal({ post, onClose }) {
  const [comments, setComments] = useState([]); // 댓글 리스트 상태
  const [newComment, setNewComment] = useState(''); // 입력 값을 저장할 상태
  const uId = 'cansin_i : ';

  const handleCommentChange = (e) => {
    setNewComment(e.target.value); // 입력 값 업데이트
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      // 댓글이 비어 있지 않은 경우에만 추가
      setComments([...comments, uId + newComment]); // 댓글 리스트에 새로운 댓글 추가
      setNewComment(''); // 입력 필드 비우기
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Enter 키를 눌렀을 때
      handleAddComment();
    }
  };
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>✖</CloseButton>
        <img src={post.imageUrl} alt="Post" />
        <CommentSection>
          
          <div id='CommentHeader'> {/* 댓글 창 게시물 내용 */}
            <span>{post.user.username}</span> {post.postContent}
          </div>

          <div id='CommentMain'> {/* 댓글 창 */}
            
            <CommentList>
            <div>hardId12 : 아이유가 어디있음?</div>
            <div className='zzz'>답글 달기</div>
            <div>sklgd12 : 고양이 귀여우니까 개추</div>
            <div className='zzz'>답글 달기</div>
              {comments.map((comment, index) => (
                <div key={index}>
                  {comment}
                  <div className='zzz'>답글 달기</div>    
                </div>
                
              
              ))}
              
            </CommentList>
          </div>
          <div id='CommentInp'> {/* 댓글 입력창 */}
            <CommentInput
              type="text"
              placeholder="댓글을 입력하세요"
              value={newComment}
              onChange={handleCommentChange}
              onKeyDown={handleKeyDown} // Enter 키 이벤트 핸들링
              
            />
            <a onClick={handleAddComment}>게시</a>
          </div>
       
          
          
        </CommentSection>
      </ModalContent>
    </ModalOverlay>
  );
}


export default function Home(){

  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [likedPosts, setLikedPosts] = useState([]); // 게시물 좋아요 상태를 관리하는 배열

  

  // Replace this function with a real API call
  useEffect(() => {
    // Fetch posts from API here
    const fetchPosts = async () => {
      const dummyPosts = [
        {
          id: 1,
          user: {
            username: 'cansin_i',
            avatar: '/bigHuman.jpg',
          },
          imageUrl: 'https://post-phinf.pstatic.net/MjAyMDEyMzBfNjAg/MDAxNjA5Mjg4NzIzNDAx.qfbbjr3P-JiB1ioPif26h28fPwc05mpIRQZTyKM_6Wkg.5lI5_OJSuVMQDLoXoB1bDPNuO6hSZd9TNLlbrBME0CIg.JPEG/Iag0t8S0m8BJ7zwrx0ve16nHA9TI.jpg?type=w400',
          postContent : '아이유 이쁘면 개추', 
          
        },
        {
          id: 2,
          user: {
            username: '_hedgx_',
            avatar: '/good.jpg',
          },
          imageUrl: 'https://storage.enuri.info/pic_upload/knowbox/mobile_img/202201/2022011922203313347.jpg',
          postContent : '아이유 였던것', 
        },
        {
          id: 3,
          user: {
            username: 'hagisilta_18',
            avatar: '/powerzero.jpg',
          },
          imageUrl: 'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/32E9/image/BA2Qyx3O2oTyEOsXe2ZtE8cRqGk.JPG',
          postContent : '이히힣ㅎ', 
        },
        {
          id: 4,
          user: {
            username: 'cansin_i',
            avatar: '/bigHuman.jpg',
          },
          imageUrl: '/dozzi.jpg',
          postContent : '아 ㅈㄴ 귀엽다', 
        },
        {
          id: 5,
          user: {
            username: 'cansin_i',
            avatar: '/bigHuman.jpg',
          },
          imageUrl: '/dozzi2.jpg',
          postContent : '코박죽', 
        },
        {
          id: 6,
          user: {
            username: 'cansin_i',
            avatar: '/bigHuman.jpg',
          },
          imageUrl: '/bori.jpg',
          postContent : '뭘봐', 
        },

        
      ];

      setPosts(dummyPosts);
    };

    fetchPosts();
  }, []);

  const openPostModal = (post) => {
    setSelectedPost(post);
  };

  const closePostModal = () => {
    setSelectedPost(null);
  };
  
  const handleLikeClick = (postId) => {
    // postId를 기준으로 해당 게시물의 좋아요 상태를 토글
    setLikedPosts((prevLikedPosts) => {
      if (prevLikedPosts.includes(postId)) {
        return prevLikedPosts.filter((id) => id !== postId);
      } else {
        return [...prevLikedPosts, postId];
      }
    });
  };

  return (
    <div>
      <h1>--------------------------------------------------------------스토리 넣고싶당---------------------------------------- </h1>
      <Feed>
        {posts.map((post) => (
          
          <Post key={post.id}>  
            <PostHeader>
              <User>
                <Avatar src={post.user.avatar} alt={post.user.username}/>
                <Username>{post.user.username}</Username>
              </User>
            </PostHeader>
            <PostImage src={post.imageUrl} alt="Post" onClick={() => openPostModal(post)}  />
             
            <PostActions>
              <ActionButton onClick={() => handleLikeClick(post.id)}>
                {likedPosts.includes(post.id) ? '❤️' : '🤍'}
              </ActionButton>
              <ActionButton onClick={() => openPostModal(post)}>💬</ActionButton>
              <ActionButton>🔗</ActionButton>
            </PostActions>
            <PostContent>
              <div><span>hagisilta_18</span>님 여러 명이 좋아합니다.</div>
              <span>{post.user.username}</span> {post.postContent}
              <div><a onClick={() => openPostModal(post)}>댓글 보기</a></div>
              
            </PostContent>
            
          </Post>
          
        ))}
       
      </Feed>
      
      <MenuBar />
      {selectedPost && (
        <PostModal post={selectedPost} onClose={closePostModal} />
      )}
    </div>
  )
}