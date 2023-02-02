import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import axios from 'axios';

function SlideShow({apiCode}) {
  const [screenshots, setScreenshots] = useState([])

    useEffect(()=>{
      const apiKey = "fd47c8a2e41b4535bf0d0c383ec9b944"
      const url = `https://api.rawg.io/api/games/${apiCode}/screenshots?key=${apiKey}`

      axios
        .get(url)
        .then(res=>{
          console.log("screenshots:", res.data)
          setScreenshots(res.data)
        })
        .catch(err=>{
          console.log("ERROR:", err)
        })
    }, [])

  return (
    <Carousel>
      {Array.isArray(screenshots.results)
                    ? screenshots.results.map((screenshot,key) => (
                        <Carousel.Item key={key}>
                        <img
                          className="d-inline-block w-50"
                          src={screenshot.image}
                          alt="First slide"
                        />
                      </Carousel.Item>
                      ))
                    : null}
    </Carousel>
  );
}

export default SlideShow;