import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import mainData from '../../data/main_data.json';

function Home() {
  return (
    <div style={{ background: "#131313" }}>
        <Menu />
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

        <Footer />
    </div>
  );
}

export default Home;