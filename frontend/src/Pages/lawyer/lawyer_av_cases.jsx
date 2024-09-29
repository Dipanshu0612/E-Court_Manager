import React from 'react'
import Card from 'react-bootstrap/Card';
import LawyerHeader from '../../Components/lawyer_header';
import Footer from '../../Components/footer';
import Button from 'react-bootstrap/Button';

export default function AvailableCases() {
    return (
        <>
            <LawyerHeader />
            <div className='bg-slate-200'>
                <div className='p-4'>
                    <h1 className='p-2 text-2xl font-semibold text-gray-800'>Available Cases</h1>
                    <div>
                        {Array.from({ length: 70 }).map((_, idx) => (
                            <Card id={idx} className='p-2 m-3 shadow-lg cursor-pointer'>
                                <Card.Header className='font-bold text-2xl bg-white'>Case ID: {idx + 1} - Case Name</Card.Header>
                                <Card.Body>
                                    <Card.Title>Case Type</Card.Title>
                                    <Card.Title>User Name</Card.Title>
                                    <Card.Text>
                                        Description
                                    </Card.Text>
                                    <Button variant="primary" className='mr-2'>More Info</Button>
                                    <Button variant="success">Accept Case</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
