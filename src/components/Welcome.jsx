import Carousel from 'react-bootstrap/Carousel';

const Welcome = () => (
<Carousel className='mb-4' data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 Welcome-Style"
          src="https://i.ytimg.com/vi/4bwxStsx3lE/maxresdefault.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='Welcome-TextStyle'>
          <h5>The Witcher</h5>
          <p>Disponibili i nuovi libri con illustrazioni.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 Welcome-Style"
          src="https://assets-prd.ignimgs.com/2022/05/03/tolkien-4-book-box-set-1651599246113.png"
          alt="Second slide"
        />
        <Carousel.Caption className='Welcome-TextStyle'>
          <h5>Il Signore degli Anelli</h5>
          <p>Disponibile la nuova collezione speciale.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 Welcome-Style"
          src="https://imageio.forbes.com/specials-images/imageserve/64ec0383ff2aa3c54dd8ae25/0x0.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className='Welcome-TextStyle'>
          <h5>Game of Thrones</h5>
          <p>La nuove edizione ora disponibile.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
)

export default Welcome