"use client"
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import MenuBar from '../MenuBar';
import InfiniteScroll from 'react-infinite-scroll-component';
const Container = styled.div`
  padding: 20px;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 4px;
`;

const GridItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export default function Search(){
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  // Replace this function with a real API call
  const fetchImages = async () => {
    const newImages = [
      'https://post-phinf.pstatic.net/MjAyMDEyMzBfNjAg/MDAxNjA5Mjg4NzIzNDAx.qfbbjr3P-JiB1ioPif26h28fPwc05mpIRQZTyKM_6Wkg.5lI5_OJSuVMQDLoXoB1bDPNuO6hSZd9TNLlbrBME0CIg.JPEG/Iag0t8S0m8BJ7zwrx0ve16nHA9TI.jpg?type=w400',
      'https://storage.enuri.info/pic_upload/knowbox/mobile_img/202201/2022011922203313347.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvhyld3BbLIgzsg7-deCReL0jR_3IIzKtnew&usqp=CAU',
      'https://i.namu.wiki/i/g9VtEy1YTV96fZXEnUXKCyVEa7JM3x6pgTAV0AZKmgvOXDn-BWfDzvSSR2GwYLyd9DskFmZ6GwJUh7K_sktyYg.webp',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ];

    setImages((prevImages) => [...prevImages, ...newImages]);

    // Set 'hasMore' to false when there are no more images to load
    // setHasMore(false);
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
          <Grid>
            {images.map((image, index) => (
              <GridItem key={index} src={image} alt="Thumbnail" />
            ))}
          </Grid>
        </InfiniteScroll>
      </Container>
      <MenuBar />
    </div>
  )
}