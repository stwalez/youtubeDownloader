import React from 'react';
import { Button, Form, } from 'react-bootstrap';

const YoutubeSite = ({onChange, onLinkSubmit, loading, errors}) => {
    
    return ( 
        <Form className="col-sm-6 offset-sm-3 text-center" onSubmit= {onLinkSubmit} >
                {(errors)
                  ? (<div className="form-group">
                      <div className="alert alert-danger"><strong>Error!</strong> {errors.message || 'Something went wrong.'}</div>
                    </div>
                  )
                  : null
                }
            <Form.Group controlId="formYoutubeLink" className=" justify-content-center">
                <Form.Label>Download Youtube files on the go!!</Form.Label>
                <Form.Control type="text" placeholder="Enter youtube address"  name='ylink' onChange={ onChange } disabled={loading}/>
                <Form.Text className="text-muted"> 
                        powered by youtube-dl
                </Form.Text>
            </Form.Group>
                <Button as="input" type='submit' variant='primary' size='sm' value= { (loading) ? 'Downloading...' : 'Download'}   ></Button>
        </Form>
    )
}


export default YoutubeSite;