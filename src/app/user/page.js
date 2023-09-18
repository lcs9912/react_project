"use client"
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import MenuBar from '../MenuBar';
const Container = styled.div`
  padding: 20px;
  width : 1200px;
  margin : 10px auto;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const UserInfo = styled.div``;

const Username = styled.h2`
  margin: 0;
`;

const Bio = styled.p`
  margin: 0;
`;

const Stats = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StatItem = styled.li`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const StatValue = styled.strong`
  display: block;
`;

const StatLabel = styled.span``;

const EditProfileButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 4px;
`;

const PostTabs = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
`;

const Tab = styled.button`
  padding: 10px;
  font-size: 18px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${(props) => (props.active ? '#000' : '#ccc')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};

  &:hover {
    color: #000;
  }
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const Post = styled.img`
  width : 100%;
  height : 400px;
  object-fit: cover;
`;

// 여기부터 home 에서 퍼온거 집가서 여기 페이지에 맞게 수정하자 이거ㅑㅇ~~!!

export default function User(){
  const [activeTab, setActiveTab] = useState('posts');
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
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

  const handleEditProfile = () => {
    // Implement edit profile logic here
  };
  return (
    <div>
      <Container>
        <ProfileHeader>
          <Avatar src="/bigHuman.jpg" />
          <UserInfo>
            <Username>cansin_i</Username>
            <Bio>Photographer and traveler</Bio>
            <Stats>
              <StatItem>
                <StatValue>150</StatValue>
                <StatLabel>Posts</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>300</StatValue>
                <StatLabel>Followers</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>200</StatValue>
                <StatLabel>Following</StatLabel>
              </StatItem>
            </Stats>
            <EditProfileButton onClick={handleEditProfile}>
              Edit Profile
            </EditProfileButton>
          </UserInfo>
        </ProfileHeader>
        <PostTabs>
      <Tab
        active={activeTab === 'posts'}
        onClick={() => setActiveTab('posts')}
      >
        Posts
      </Tab>
      <Tab
        active={activeTab === 'saved'}
        onClick={() => setActiveTab('saved')}
      >
        Saved
      </Tab>
    </PostTabs>

    {activeTab === 'posts' && (
      <Posts>
        {/* Replace the src attribute with the user's actual post image URLs */}
        <Post src="https://post-phinf.pstatic.net/MjAyMDEyMzBfNjAg/MDAxNjA5Mjg4NzIzNDAx.qfbbjr3P-JiB1ioPif26h28fPwc05mpIRQZTyKM_6Wkg.5lI5_OJSuVMQDLoXoB1bDPNuO6hSZd9TNLlbrBME0CIg.JPEG/Iag0t8S0m8BJ7zwrx0ve16nHA9TI.jpg?type=w400" />
        <Post src="/dozzi.jpg" />
        <Post src="/dozzi2.jpg" />
        <Post src="/bori.jpg" />
        {/* Add more posts as needed */}
      </Posts>
    )}
    {activeTab === 'saved' && (
      <Posts>
        {/* Replace the src attribute with the user's actual saved post image URLs */}
        <Post src="https://via.placeholder.com/300" />
        <Post src="https://via.placeholder.com/300" />
        <Post src="https://via.placeholder.com/300" />
        {/* Add more saved posts as needed */}
      </Posts>
    )}
  </Container>
  <MenuBar />
  
  <div>  {/* 여기부터 는 home 에서 퍼온거임 여기 페이지에 맞게 수정해야돼 집가서 화이팅해라 이거야~~ */}
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
    </div>{/*  여기까지 */}
    
</div>

  )
}