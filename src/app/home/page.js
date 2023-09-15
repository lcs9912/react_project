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
  margin-left: 20px; /* 이미지와 CommentSection 간격을 조절합니다. */
  height : 100%;
  width : 30%;
  background-color : yellow;

  a{
    position: relative;
    top:-31px;
    left:291px;
    cursor: pointer;
  }
`;

const CommentInput = styled.input`
  // 댓글 입력 필드 스타일링
  width: 90%;
  padding: 10px;
  margin-top: 10px;

`;

const CommentList = styled.span`
  // 댓글 목록 스타일링
  overflow-y: auto; // 댓글 목록이 넘칠 경우 스크롤 표시
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

export function PostModal({ post, onClose }) {
  const [comments, setComments] = useState([]); // 댓글 리스트 상태
  const [newComment, setNewComment] = useState(''); // 입력 값을 저장할 상태
  const uId = 'lcs99 : ';

  const handleCommentChange = (e) => {
    setNewComment(e.target.value); // 입력 값 업데이트
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      // 댓글이 비어 있지 않은 경우에만 추가
      setComments([...comments, uId, newComment]); // 댓글 리스트에 새로운 댓글 추가
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
          <CommentList>
            {comments.map((comment, index) => (
              <div key={index}>{comment}</div>
            ))}
          </CommentList>
          <CommentInput
            type="text"
            placeholder="댓글을 입력하세요"
            value={newComment}
            onChange={handleCommentChange}
            onKeyDown={handleKeyDown} // Enter 키 이벤트 핸들링
            
          />
          <a onClick={handleAddComment}>게시</a>
          
        </CommentSection>
      </ModalContent>
    </ModalOverlay>
  );
}


export default function Home(){

  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  

  // Replace this function with a real API call
  useEffect(() => {
    // Fetch posts from API here
    const fetchPosts = async () => {
      const dummyPosts = [
        {
          id: 1,
          user: {
            username: 'user1',
            avatar: 'https://via.placeholder.com/32',
          },
          imageUrl: 'https://i.namu.wiki/i/R0AhIJhNi8fkU2Al72pglkrT8QenAaCJd1as-d_iY6MC8nub1iI5VzIqzJlLa-1uzZm--TkB-KHFiT-P-t7bEg.webp',
        },
        {
          id: 2,
          user: {
            username: 'user2',
            avatar: 'https://via.placeholder.com/32',
          },
          imageUrl: 'https://health.chosun.com/site/data/img_dir/2023/04/04/2023040401590_0.jpg',
        },
        {
          id: 3,
          user: {
            username: 'user3',
            avatar: 'https://via.placeholder.com/32',
          },
          imageUrl: 'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/32E9/image/BA2Qyx3O2oTyEOsXe2ZtE8cRqGk.JPG',
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
  
  return (
    <div>
      <h1>ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ뭐가 있으면 좋을거 같은데ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</h1>
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
              <ActionButton>❤️</ActionButton>
              <ActionButton onClick={() => openPostModal(post)}>💬</ActionButton>
              <ActionButton>🔗</ActionButton>
            </PostActions>
           
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