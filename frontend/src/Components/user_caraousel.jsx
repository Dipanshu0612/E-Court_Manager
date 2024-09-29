import Carousel from 'react-bootstrap/Carousel';

function UserCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src="https://i0.wp.com/velivada.com/wp-content/uploads/2017/04/justice-in-india-e1491021729769.jpg?fit=1000%2C500&ssl=1" alt="" className='w-full h-[25rem] opacity-95'/>
        <Carousel.Caption>
          <h3>Justice for All, Fear for None!</h3>
          <p>Empowering Communities, One Case at a Time.</p>        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://www.vidhikarya.com/images/blog_images/inadequacy-infrastructure-in-indian-courts.jpg" alt="" className='w-full h-[25rem] blur-sm'/>
        <Carousel.Caption>
          <h3>Stand Up for Justice: Speak Out Against Crime!</h3>
          <p>Your Voice Matters—Make It Heard!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://blog.ipleaders.in/wp-content/uploads/2019/01/Fraud.jpg" alt="" className='w-full h-[25rem] blur-sm'/>
        <Carousel.Caption>
          <h3>In Justice We Trust, In Unity We Stand!</h3>
          <p>
          Crime Doesn’t Pay—But Justice Always Will!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UserCarousel;