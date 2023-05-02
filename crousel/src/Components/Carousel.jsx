import React, { useState } from 'react';
import './carousel.css'; // assuming the styling is in a separate CSS file
import { Box } from '@chakra-ui/react';

function Carousel() {
  const [slideIndex, setSlideIndex] = useState(0);

  function handleSlideChange(event) {
    setSlideIndex(parseInt(event.target.value, 10));
  }

  const slides = [
    { id: 1, src: 'https://picsum.photos/id/1041/800/450', alt: 'Slide 1' },
    { id: 2, src: 'https://picsum.photos/id/1043/800/450', alt: 'Slide 2' },
    { id: 3, src: 'https://picsum.photos/id/1044/800/450', alt: 'Slide 3' },
    { id: 4, src: 'https://picsum.photos/id/1045/800/450', alt: 'Slide 4' },
    { id: 5, src: 'https://picsum.photos/id/1049/800/450', alt: 'Slide 5' },
    { id: 6, src: 'https://picsum.photos/id/1052/800/450', alt: 'Slide 6' },
  ];

  return (
    <Box >
      <Box className="container" w={"100vw"} border={"2px solid teal"} >
        <Box className="carousel" >
          {slides.map(slide => (
            <input
              type="radio"
              key={slide.id}
              name="slides"
              id={`slide-${slide.id}`}
              value={slide.id}
              checked={slideIndex === slide.id}
              onChange={handleSlideChange}
            />
          ))}
          <ul className="carousel__slides">
            {slides.map(slide => (
              <li
                className={`carousel__slide ${
                  slideIndex === slide.id ? 'active' : ''
                }`}
                key={slide.id}
              >
                <Box border={"2px solid red"}  display={"flex"} >
                  <div >
                    <img src={slide.src} alt={slide.alt}  />
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.lorem1800
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam doloremque corrupti iure voluptate, magni ratione possimus reprehenderit quae officiis quam? Saepe commodi eos magnam adipisci modi ipsa optio dicta corrupti dolorum sunt. Consectetur nemo illo quaerat odio vel voluptatum impedit totam tempora exercitationem ratione quae distinctio quis, libero at, voluptas unde nisi! Animi, voluptatem minima provident unde soluta quibusdam ad cupiditate similique enim. Deleniti, repudiandae nesciunt suscipit, voluptatum excepturi assumenda dolorem at esse dolores sunt eligendi dolor quia quos reiciendis modi architecto veritatis? Adipisci expedita, culpa ex odio ipsum delectus debitis reprehenderit corrupti, nemo dignissimos perferendis praesentium cupiditate nam enim? Praesentium iusto recusandae officiis aperiam, distinctio quos laborum necessitatibus quo deserunt itaque magnam? Voluptates perspiciatis eveniet adipisci sit aliquam, voluptate quae nam sequi natus culpa assumenda laborum, et sunt. Dolorum distinctio repellendus ab esse. Modi fuga, veritatis impedit laborum eligendi non dolores quam reprehenderit eius totam. Eius sequi est odit nemo aspernatur tempore, itaque ratione quisquam voluptas laborum unde eaque consequatur eos dolorem fugiat dolor ipsa, accusamus cum nam maiores. Libero.
                    <span className="credit">Photo: John Doe</span>
                  </div>
                </Box>
              </li>
            ))}
          </ul>
          <ul className="carousel__thumbnails">
            {slides.map(slide => (
              <li key={slide.id}>
                <label htmlFor={`slide-${slide.id}`}>
                  <img src={slide.src} alt={slide.alt} width={"90vw"}  />
                </label>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </Box>
  );
}

export default Carousel;