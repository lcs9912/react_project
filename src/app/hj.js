"use client"
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import MenuBar from '../MenuBar';
import { FaRegHeart, FaHeart, FaComment, FaLink } from 'react-icons/fa';

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
  height: auto;
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

const CommentList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CommentItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const CommentAvatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 5px;
`;

const CommentText = styled.p`
  margin: 0;
`;

const CommentInput = styled.input`
  width: 98%;
  padding: 5px;
  border: none;
  border-top: 1px solid #efefef;
`;

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});
  const [likes, setLikes] = useState({});
  const [showCommentInput, setShowCommentInput] = useState({});
  const [newComment, setNewComment] = useState('');

  const openCommentInput = (postId) => {
    setShowCommentInput((prevShowCommentInput) => ({
      ...prevShowCommentInput,
      [postId]: true,
    }));
  };

  const closeCommentInput = (postId) => {
    setShowCommentInput((prevShowCommentInput) => ({
      ...prevShowCommentInput,
      [postId]: false,
    }));
  };

  const addComment = (postId, comment) => {
    const updatedComments = { ...comments };
    updatedComments[postId] = [...(updatedComments[postId] || []), comment];
    setComments(updatedComments);
    setNewComment('');
  };

  const toggleLike = (postId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: !prevLikes[postId],
    }));
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const dummyPosts = [
        {
          id: 1,
          user: {
            username: 'user1',
            avatar: 'https://via.placeholder.com/32',
          },
          imageUrl:
            'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjAy/MDAxNjQzMTAyOTk2NjE0.gw_H_jjBM64svaftcnheR6-mHHlmGOyrr6htAuxPETsg.8JJSQNEA5HX2WmrshjZ-VjmJWqhmgE40Qm5csIud9VUg.JPEG.minziminzi128/IMG_7374.JPG?type=w800',
        },
        {
          id: 2,
          user: {
            username: 'user2',
            avatar: 'https://via.placeholder.com/32',
          },
          imageUrl: 'https://via.placeholder.com/400',
        },
        {
          id: 3,
          user: {
            username: 'user3',
            avatar: 'https://via.placeholder.com/32',
          },
          imageUrl: 'https://via.placeholder.com/400',
        },
      ];

      setPosts(dummyPosts);

      // 초기에 모든 게시물의 댓글 입력창을 닫아둡니다.
      const initialShowCommentInput = {};
      dummyPosts.forEach((post) => {
        initialShowCommentInput[post.id] = false;
      });
      setShowCommentInput(initialShowCommentInput);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Feed>
        {posts.map((post) => (
          <Post key={post.id}>
            <PostHeader>
              <User>
                <Avatar src={post.user.avatar} alt={post.user.username} />
                <Username>{post.user.username}</Username>
              </User>
            </PostHeader>
            <PostImage src={post.imageUrl} alt="Post" />
            <PostActions>
              <ActionButton onClick={() => toggleLike(post.id)}>
                {likes[post.id] ? <FaHeart color="red" /> : <FaRegHeart />}
              </ActionButton>
              <ActionButton onClick={() => openCommentInput(post.id)}>
                <FaComment />
              </ActionButton>
              <ActionButton>
                <FaLink />
              </ActionButton>
            </PostActions>
            <div style={{ margin: '10px', fontWeight: 'bold' }}>
              {likes[post.id] ? '좋아요 ' + (likes[post.id] ? 1 : 0) + '개' : ''}
            </div>
            <CommentList>
              {comments[post.id] &&
                comments[post.id].map((comment, index) => (
                  <CommentItem key={index}>
                    <CommentAvatar src={comment.user.avatar} alt={comment.user.username} />
                    <CommentText>{comment.text}</CommentText>
                  </CommentItem>
                ))}
            </CommentList>
            {showCommentInput[post.id] && (
              <div>
                <CommentInput
                  type="text"
                  placeholder="댓글을 입력하세요"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && newComment.trim() !== '') {
                      const comment = {
                        user: {
                          username: 'user2',
                          avatar: '',
                        },
                        text: newComment,
                      };
                      addComment(post.id, comment);
                    }
                  }}
                />
                <button
                  onClick={() => {
                    if (newComment.trim() !== '') {
                      const comment = {
                        user: {
                          username: 'user2',
                          avatar: '',
                        },
                        text: newComment,
                      };
                      addComment(post.id, comment);
                    }
                  }}
                >
                  댓글 등록
                </button>
                <button onClick={() => closeCommentInput(post.id)}>취소</button>
              </div>
            )}
          </Post>
        ))}
      </Feed>
    </div>
  );
}