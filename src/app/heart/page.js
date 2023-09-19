"use client"
import React, { useState } from 'react';
import styled from '@emotion/styled';
import MenuBar from '../MenuBar';

const Container = styled.div`
  padding: 20px;
  width : 1200px;
  margin : 10px auto;
`;

const ActivityTabs = styled.div`
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

const ActivityList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ActivityItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const ActivityContent = styled.div``;

export default function Heart(){
  const [activeTab, setActiveTab] = useState('you');
  const [activities] = useState([
    { type: 'like', user: 'Chan_i', content: '_hzggx_ 님이 회원님의 게시물을 좋아합니다.', img : "/bigHuman.jpg" },
    { type: 'comment', user: 'Chan_i', content: '_hzggx_ 님이 회원님을 팔로우 합니다.', img : "/bigHuman.jpg"  },
    { type: 'follow', user: '_hzggx_', content: 'Chan_i 님이 회원님을 팔로우 합니다.', img : "/good.jpg"  },
    { type: 'mention', user: '_hzggx_', content: 'Chan_i 님이 회원님의 게시물을 좋아합니다.', img : "/good.jpg"  },
  ]);

  const filteredActivities = activities.filter((activity) => {
    if (activeTab === 'you') {
      return true;
    }
    return activity.type !== 'mention';
  });

  return (
    <div>
      <Container>
        <ActivityTabs>
          <Tab
            active={activeTab === 'you'}
            onClick={() => setActiveTab('you')}
          >
            You
          </Tab>
          <Tab
            active={activeTab === 'following'}
            onClick={() => setActiveTab('following')}
          >
            Following
          </Tab>
        </ActivityTabs>
        <ActivityList>
          {filteredActivities.map((activity, index) => (
            <ActivityItem key={index}>
              <Avatar src={activity.img} />
              <ActivityContent>
                <strong>{activity.user}</strong> {activity.content}
              </ActivityContent>
            </ActivityItem>
          ))}
        </ActivityList>
      </Container>
      <MenuBar />
    </div>
  )
}