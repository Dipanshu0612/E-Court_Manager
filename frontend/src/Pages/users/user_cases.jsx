import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import UserHeader from '../../Components/user_header';
import Footer from '../../Components/footer';
import { Link } from 'react-router-dom';


export default function UserCases() {
    const [length, setLength] = useState(5);
    return (
        <>
            <UserHeader />
            <div className='p-3 flex flex-col bg-slate-200'>
                <h1>Your Cases</h1>
                <div>
                    <Row xs={1} md={2} className="g-4">
                        {Array.from({ length: length }).map((_, idx) => (
                            <Col key={idx}>
                                <Card>
                                    <Card.Img variant="top" src="https://judiciarynotes.in/wp-content/uploads/2024/06/d03209a1thumbnail-1024x768.jpeg" className='h-[10rem] object-cover' />
                                    <Card.Body>
                                        <Card.Title>Case No - {idx + 1}</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </Card.Text>
                                        <button className='p-2 mr-2 bg-green-400 w-max rounded-lg' disabled>View Case</button>
                                        <button className='p-2 bg-red-500 w-max rounded-lg' onClick={() => {
                                            setLength(length - 1);
                                        }}>Delete Case</button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
                <button className='p-2 bg-blue-500 w-max rounded-lg my-3'><Link to="/user-file-case" className='decoration-none text-black'>File A Case</Link></button>
            </div>
            <Footer />
        </>
    )
}
