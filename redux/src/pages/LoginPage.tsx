import {useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {apiSaveMovie, apiUpdateMovie, Movie} from "../features/movie/movieSlice";
import {useAppDispatch} from "../app/hooks";
import {apiLogin} from "../features/auth/authSlice";
import {useAuthentication} from "../services/authService";
import {useNavigate,useParams,useLocation} from "react-router-dom";
const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .required('Required'),
    password: Yup.string()
        .required('Required'),

});
export default function LoginPage() {
    let auth = useAuthentication();
    const dispatch = useAppDispatch();
    let navigate = useNavigate();

    let {search} = useLocation();
    let redirectTo = "/";
    if(search && search.indexOf("=")!=-1)
    {
        redirectTo = search.substring(search.indexOf("=")+1);
    }

    console.log("Login page redirectTo ",redirectTo);
    //console.log("Login Auth ",auth);

    useEffect(()=>{
        console.log("Run effect");
        if(auth)
        {
            console.log("Check");
            navigate(redirectTo);
            console.log("After navigate");
        }
    })


    let initValues ={
        username:'',
        password:''
    }
    return(<div>
        <Formik
            initialValues={initValues}
            validationSchema={LoginSchema}
            onSubmit={values => {
                // same shape as initial values

                console.log(values);
                dispatch(apiLogin(values));

            }}
        >
            {({  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting }) => (
                <Form>
                    <label>Username</label>
                    <input type="text"
                           className="form-control"
                           id="username"
                           name="username"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.username}
                    />
                    {errors.username && touched.username ? (
                        <div className="alert alert-danger">{errors.username}</div>
                    ) : null}
                    <label>Password</label>
                    <input type="password"
                           className="form-control"
                           id="password"
                           name="password"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.password}
                    />
                    {errors.password && touched.password ? (
                        <div className="alert alert-danger">{errors.password}</div>
                    ) : null}

                    <button type="submit"
                            className="btn btn-primary">Login</button>
                </Form>
            )}
        </Formik>
    </div>)
}