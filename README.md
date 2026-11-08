import Carousel from 'react-bootstrap/Carousel'

function Home() {
  return (
    <Carousel>
      
      <Carousel.Item>
        <div className="carousel-image">
          <h1>First Slide</h1>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-image">
          <h1>Second Slide</h1>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-image">
          <h1>Third Slide</h1>
        </div>
      </Carousel.Item>

    </Carousel>
  )
}

export default Home