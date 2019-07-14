import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import sites from './data/sites.json';
import { Link } from 'react-router-dom';
 

const Ytest = () => {
    return ( 
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Youtube downloader</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href='/'>Home</Nav.Link>
                        {sites.map(site => {
                           return (
                            <div key={site.id}>
                                <Nav.Link as={Link} to = {{
                                        pathname:'/Site',
                                        state : {
                                            key : site.id,
                                            sitename : site.sitename,
                                            formControlId : site.formControlId,
                                            sitelinkname : site.sitelinkname
                                        }
                                    }}>
                                    {site.sitename}
                                </Nav.Link> 
                             </div>
                            )}
                            
                            )
                        }
                     
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
   
    )
}


export default Ytest;