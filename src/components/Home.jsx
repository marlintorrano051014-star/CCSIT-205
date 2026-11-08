import Carousel from 'react-bootstrap/Carousel'
import img1 from '/images/img1.jpg'
import img2 from '/images/img2.jpg'
import img3 from '/images/img3.jpg'
import './Home.css'

export default function Home() {
  return (
    <Carousel>

      <Carousel.Item>
        <img
          src={img1}
          style={{ height: "90vh" }}
          className="d-block w-100"
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={img2}
          style={{ height: "90vh" }}
          className="d-block w-100"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={img3}
          style={{ height: "90vh" }}
          className="d-block w-100"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}