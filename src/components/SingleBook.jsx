import { Card } from 'react-bootstrap'
import { useState } from 'react'

const SingleBook = ({ book }) => {
    const [selected, setSelected] = useState(false)

  return (
            <Card
                className="d-flex flex-column Book-Card"
                onClick={() => setSelected(!selected)}
                style={{ border: selected ? '2px solid red' : 'none'}}>
              <Card.Img className="Card-Img" variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Prezzo: {book.price}€</Card.Text>
              </Card.Body>
            </Card>
  )
}

export default SingleBook;