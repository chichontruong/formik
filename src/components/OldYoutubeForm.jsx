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

// const validate = values => {
//     let errors = {}
//     if (!values.name) {
//         errors.name = "Required"
//     }

//     if (!values.email) {
//         errors.email = "Required"
//     } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i.test(values.email)) {
//         errors.email = "invalid Email Format"
//     }

//     if (!values.channel) {
//         errors.channel = "Required"
//     }

//     return errors;
// }

const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string()
        .email("invalid Email Format")
        .required("Required"),
    channel: Yup.string().required("Required")
})

function OldYoutubeForm() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
        // validate
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
                                <Form.Control type="text" placeholder="Enter Name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                {formik.touched.name && formik.errors.name && <Form.Text className="text-danger">{formik.errors.name}</Form.Text>}
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="email" placeholder="Enter E-mail" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                {formik.touched.email && formik.errors.email && <Form.Text className="text-danger">{formik.errors.email}</Form.Text>}
                            </Form.Group>

                            <Form.Group controlId="channel">
                                <Form.Label>Channel</Form.Label>
                                <Form.Control type="text" placeholder="Channel" value={formik.values.channel} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
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

export default OldYoutubeForm
