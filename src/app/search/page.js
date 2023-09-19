"use client"
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import MenuBar from '../MenuBar';
import InfiniteScroll from 'react-infinite-scroll-component';
const Container = styled.div`
  padding: 20px;
  width : 1200px;
  margin : 10px auto;
  
`;

const SearchBar = styled.input`
  display: block;
  width: 100%;
  padding: 12px 20px;
  margin: 0 0 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap; /* Wrap the items into the next row when needed */
  gap: 26px; /* Gap between items */
  
`;

const FlexItem = styled.img`
  width: calc(25% - 20px); /* 25% width for each item (4 items per row) considering the gap */
  height: 300px;
  object-fit: cover;
  margin-bottom: 10px; /* Space below each item */
`;
export default function Search(){
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  // Replace this function with a real API call
  const fetchImages = async () => {
    const newImages = [
      'bori8.jpg',
      'bori7.jpg',
      '/cat.jpg',
      '/dozzi3.jpg',
      '/dozzi.jpg',
      '/dozzi2.jpg',
      '/bori.jpg',
      '/bori2.jpg',
      '/bori6.jpg',
      '/bori3.jpg',
      '/bori4.jpg',
      '/bori5.png',
    
    ];

    setImages((prevImages) => [...prevImages, ...newImages]);

    // Set 'hasMore' to false when there are no more images to load
    setHasMore(false);
  };

  const handleSearch = (event) => {
    console.log('Search:', event.target.value);
    // Implement search functionality here
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <Container>
        <SearchBar
          type="text"
          placeholder="Search for users or hashtags..."
          onChange={handleSearch}
        />
        <InfiniteScroll
          dataLength={images.length}
          next={fetchImages}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <Flex>
            {images.map((image, index) => (
              <FlexItem key={index} src={image} alt="Thumbnail" />
            ))}
          </Flex>
        </InfiniteScroll>
      </Container>
      <MenuBar />
    </div>
  )
}