import { Card, Col, Row } from 'react-bootstrap'
import fantasy from '../data/fantasy.json'

const AllTheBooks = () => {
  return (
    <Row className="g-2">
      {fantasy.map((book, index) => {
        return index < 20 && (
          <Col xs={12} md={4} xl={3} key={book.asin}>
            <Card className="d-flex flex-column Book-Card">
              <Card.Img className="Card-Img" variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Prezzo: {book.price}€</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}

export default AllTheBooks