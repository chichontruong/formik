import React from 'react'
import {
    Button,
    Form,
    Container,
    Row,
    Col
} from 'react-bootstrap';
import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
    name: "",
    email: "",
    channel: ""
}
const onSubmit = values => {
    console.log("submit value = ", values)
}

const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string()
        .email("invalid Email Format")
        .required("Required"),
    channel: Yup.string().required("Required")
})

function YoutubeForm() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    console.log("visited fields", formik.touched)
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={formik.handleSubmit}>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter Name" 
                                    name="name"
                                    // value={formik.values.name} 
                                    // onChange={formik.handleChange} 
                                    // onBlur={formik.handleBlur}
                                    {...formik.getFieldProps("name")}
                                />
                                {formik.touched.name && formik.errors.name && <Form.Text className="text-danger">{formik.errors.name}</Form.Text>}
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="Enter E-mail" 
                                    name="email"
                                    // value={formik.values.email} 
                                    // onChange={formik.handleChange} 
                                    // onBlur={formik.handleBlur}
                                    {...formik.getFieldProps("email")}
                                />
                                {formik.touched.email && formik.errors.email && <Form.Text className="text-danger">{formik.errors.email}</Form.Text>}
                            </Form.Group>

                            <Form.Group controlId="channel">
                                <Form.Label>Channel</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Channel" 
                                    name="channel"
                                    // value={formik.values.channel} 
                                    // onChange={formik.handleChange} 
                                    // onBlur={formik.handleBlur}
                                    {...formik.getFieldProps("channel")}
                                />
                                {formik.touched.channel && formik.errors.channel && <Form.Text className="text-danger">{formik.errors.channel}</Form.Text>}
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
