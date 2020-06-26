import React from 'react'
import {
    Button,
    Form,
    Container,
    Row,
    Col
} from 'react-bootstrap';
import {useFormik} from 'formik'

function YoutubeForm() {
    const formik = useFormik({
        initialValues: {
            name: "chontc",
            email: "chontc@fpt.com.vn",
            channel: "codeplus"
        },
        onSubmit: values => {
            console.log("submit value = ", values)
        }
    })

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={formik.handleSubmit}>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" value={formik.values.name} onChange={formik.handleChange} />
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="email" placeholder="Enter E-mail" value={formik.values.email} onChange={formik.handleChange} />
                            </Form.Group>
                            
                            <Form.Group controlId="channel">
                                <Form.Label>Channel</Form.Label>
                                <Form.Control type="text" placeholder="Channel" value={formik.values.channel} onChange={formik.handleChange}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default YoutubeForm
