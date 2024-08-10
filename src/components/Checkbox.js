import React from 'react'
import { Form } from 'react-bootstrap'

export default function Checkbox({ data }) {
    return (
        <Form>
            {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                    <Form.Check // prettier-ignore
                        type={type}
                        id={`default-${type}`}
                        label={data}
                    />
                </div>
            ))}
        </Form>
    )
}
