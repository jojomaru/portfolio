import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade} from 'swiper';
import './App.css';
import img1 from './img/gps1.png';
import img2 from './img/gps2.png';
import img3 from './img/fyp.png';
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/package.json';
import 'swiper/components/pagination/package.json';
import 'swiper/components/scrollbar/package.json';

SwiperCore.use([EffectFade]);

const data = [
  {
    id: 1,
    username: 'The Quest for The Holy Book of Jokes!',
    userpic: img1,
    testimonial: 'GPS 1 Project (UOWMKDU)',
    link: 'https://uowmgames.itch.io/the-quest-for-the-holy-book-of-jokes'
  },
  {
    id: 2,
    username: 'After School Secret',
    userpic: img2,
    testimonial: 'GPS 2 Project (UOWMKDU)',
    link: 'https://mooltee.itch.io/afterschool-secret'
  },
  {
    id: 3,
    username: "Don't Stop The Party",
    userpic: img3,
    testimonial: 'Final Year Project (UOWMKDU)',
    link: 'https://uowmgames.itch.io/dont-stop-the-party'
  },
]

function App() {
  return (
    <div className="App">
    <h1>Welcome to Thomas's Portfolios (still building)</h1>
    <Swiper modules={[EffectFade]}
    effect="fade"
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{clickable:true}}
      scrollbar={{draggable:true}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      { data.map( user => (
        <SwiperSlide key={user.id} className="slide">
          <div className="slide-content">
            <div className="user-userpic">
              <a href={user.link} target="_blank">
                <img src={user.userpic}/>
              </a>
            </div>
            <h5>{user.username}</h5>
            <p className="user-testimonial">
              "<i>{user.testimonial}</i>"
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}

export default App;
