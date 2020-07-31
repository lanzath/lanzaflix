import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Layout from '../../components/Layout';
import categoriesRepository from '../../repositories/categories';

/**
 * Main App component, home page
 * @returns {Element} JSX
 */
function Home() {
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then(categoriesWithVideos => setMainData(categoriesWithVideos));
  }, []);

  //http://localhost:8080/categories?_embed=videos

  return (
    <Layout>
      {mainData.length === 0 && (<div>Loading...</div>)}

      {mainData.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={mainData[0].videos[0].title}
                url={mainData[0].videos[0].url}
              />
              <Carousel
                category={mainData[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}
    </Layout>
  );
}

export default Home;
