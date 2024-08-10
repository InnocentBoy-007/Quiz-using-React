//The quiz will be consists of 10 questions
//If the total score is below 5, the contestant will be declared 'failed!'

import { React, useState, useEffect } from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import Checkbox from './Checkbox';
import { GetAPI } from '../serviceapi/GetAPI';
import { Progress } from './Progress';

export default function Mainpage() {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const fetchingAPI = async () => {
            const data = await GetAPI();
            setDatas(data);
            console.log("datas--->" + JSON.stringify(data));
        };
        fetchingAPI();
    }, [])

    //handles the modal
    const [modalDisplay, setModalDisplay] = useState(false);

    return (
        <Container>
            <Modal show={modalDisplay} onHide={() => setModalDisplay(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Result</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Your Result:
                    <Progress />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setModalDisplay(false)}>Okay</Button>
                </Modal.Footer>
            </Modal>
            <Row className="justify-content-md-center my-2">
                <Col md="auto">
                    {datas.map((data, index) => {
                        return <div key={data.id}>
                            <h2>{index + 1}. {data.question}</h2>
                            <Checkbox data={data.answer[0].key1} />
                            <Checkbox data={data.answer[0].key2} />
                            <Checkbox data={data.answer[0].key3} />
                        </div>
                    })}
                    <Button variant="primary" onClick={() => setModalDisplay(true)} className='my-4'>Submit</Button>
                </Col>
            </Row>

        </Container>
    )
}
