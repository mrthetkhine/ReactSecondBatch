import {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {addMovie, apiSaveMovie, Movie} from './movieSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
const MovieSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    director: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    year: Yup.number().required('Required'),
});
function MovieForm(props:any)
{
    const dispatch = useAppDispatch();
    let handleClose = props.handleClose;
    return <div>
        <Formik
            initialValues={{
                title: '',
                director: '',
                year: '',
            }}
            validationSchema={MovieSchema}
            onSubmit={values => {
                // same shape as initial values
                console.log("Handle Close ",handleClose);
                console.log(values);
                let movie:Movie = {
                 /*   _id: '3',*/
                    title: values.title,
                    director:{
                        name : values.director,
                        phoneNo:'',
                    },
                    year: Number(values.year)
                }
                dispatch(apiSaveMovie(movie));
                handleClose();
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
                    <label>Title</label>
                    <input type="text"
                           className="form-control"
                           id="title"
                           name="title"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.title}
                    />
                    {errors.title && touched.title ? (
                        <div className="alert alert-danger">{errors.title}</div>
                    ) : null}
                    <label>Director</label>
                    <input type="text"
                           className="form-control"
                           id="director"
                           name="director"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.director}
                    />
                    {errors.director && touched.director ? (
                        <div className="alert alert-danger">{errors.director}</div>
                    ) : null}
                    <label>Year</label>
                    <input type="text"
                           className="form-control"
                           id="year"
                           name="year"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.year}
                    />
                    {errors.year && touched.year ? <div className="alert alert-danger">{errors.year}</div> : null}
                    <button type="submit"
                        className="btn btn-primary">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
}
export default function NewMovieDialog() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                New Movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <MovieForm handleClose={handleClose}/>

                </Modal.Body>
                {/*<Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>*/}
            </Modal>
        </>
    );
}
