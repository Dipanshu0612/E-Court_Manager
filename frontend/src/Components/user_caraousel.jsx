import Carousel from 'react-bootstrap/Carousel';

function UserCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src="https://i0.wp.com/velivada.com/wp-content/uploads/2017/04/justice-in-india-e1491021729769.jpg?fit=1000%2C500&ssl=1" alt="" className='w-full h-[25rem]'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://www.vidhikarya.com/images/blog_images/inadequacy-infrastructure-in-indian-courts.jpg" alt="" className='w-full h-[25rem]'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://blog.ipleaders.in/wp-content/uploads/2019/01/Fraud.jpg" alt="" className='w-full h-[25rem]'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UserCarousel;