// Import React

import {TextField, Button} from '@material-ui/core';
import * as React from 'react';
import {Formik, Form} from 'formik'

// Interface Props
interface Props {
    onSubmit: (values: Values) => void;
}

// Interface Values
interface Values {
    fullName: string;
    email: string;
}

export const TsForm: React.FC<Props> = ({onSubmit}) => {
    return (
    <Formik initialValues={{fullName: '', email: ''}}
    onSubmit={(values) => {
        onSubmit(values)
    }}>
        {({values, handleChange, handleBlur}) => ( 
    <Form>  
        <div> 
        <TextField
        placeholder="Enter your Full Name"
        name="fullName"
        value={values.fullName}
        onChange={handleChange}
        onBlur={handleBlur}
        />
        </div> 
        <div>
           <TextField
        placeholder="Enter your Email Address"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        />
        </div>
        <Button style={{color: 'green'}} type="submit">Post</Button>
    </Form>
    )}
    </Formik>
    );
}