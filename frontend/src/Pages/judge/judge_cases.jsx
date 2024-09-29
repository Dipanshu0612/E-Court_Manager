import React from 'react'
import Card from 'react-bootstrap/Card';
import Footer from '../../Components/footer';
import Button from 'react-bootstrap/Button';
import JudgeHeader from '../../Components/judge_header';

export default function JudgeCases() {
    return (
        <>
            <JudgeHeader />
            <div className='bg-slate-200'>
                <div className='p-4'>
                    <h1 className='p-2'>Your Cases</h1>
                    <div>
                        {Array.from({ length: 35 }).map((_, idx) => (
                            <Card id={idx} className='p-2 m-3 shadow-lg'>
                                <Card.Header className='font-bold text-2xl'>Case No: {idx + 1}</Card.Header>
                                <Card.Body>
                                    <Card.Title>Case Title</Card.Title>
                                    <Card.Text>
                                        Case Description
                                    </Card.Text>
                                    <Button variant="primary" className='mr-2'>Manage Case</Button>
                                    <Button variant="primary" className='mr-2'>Schedule a Hearing</Button>
                                    <Button variant="danger">Dismiss Case</Button>
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
