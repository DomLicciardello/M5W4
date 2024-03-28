import { Col, Row, Form } from 'react-bootstrap'
import { useState } from 'react'
import fantasy from '../data/fantasy.json'
import SingleBook from './SingleBook'

const AllTheBooks = () => {
  const [search, setSearch] = useState('')

  return (
    <>
    <Row className='m-5 justify-content-center'>
      <Col xs={12} style={{maxWidth:"400px"}}>
        <Form.Group>
          <Form.Control
          type="search"
          placeholder="Cerca un libro..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          />
        </Form.Group>
      </Col>
    </Row>
    <Row className="g-2">
      {fantasy
      .filter((b) => b.title.toLowerCase().includes(search))
      .map((book, index) => {
        return index < 20 && (
          <Col xs={12} md={4} xl={3} key={book.asin}>
            <SingleBook book={book} />
          </Col>
        )
      })}
    </Row>
    </>
  )
}

export default AllTheBooks