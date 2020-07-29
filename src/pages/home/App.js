import React from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import mainData from '../../data/main_data.json';
import Layout from '../../components/Layout';

/**
 * Main App component, home page
 * @returns {Element} JSX
 */
function Home() {
  return (
    <Layout>
        <BannerMain
            videoTitle={mainData.categories[2].videos[0].title}
            url={mainData.categories[2].videos[0].url}
        />

        <Carousel
            category={mainData.categories[0]}
        />

        <Carousel
            category={mainData.categories[1]}
        />

        <Carousel
            ignoreFirstVideo
            category={mainData.categories[2]}
        />

        <Carousel
            category={mainData.categories[3]}
        />

        <Carousel
            category={mainData.categories[4]}
        />

        <Carousel
            category={mainData.categories[5]}
        />
    </Layout>
  );
}

export default Home;
