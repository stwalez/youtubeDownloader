import React from 'react';
import { Container, Row, Button, Form, Nav, Navbar } from 'react-bootstrap';

const Ytest = ({onChange, onLinkSubmit, loading, errors}) => {
    
    return ( 
        <Container fluid ={ true} className='text-center'>
            <Navbar bg="light" expand="lg">
                  <Navbar.Brand href="#home">Youtube downloader</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#link">Pluralsight</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
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
     </Container>
    )
}


export default Ytest;