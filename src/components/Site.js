import React from 'react';
import { Button, Form } from 'react-bootstrap';

class Site extends React.Component{
  
    componentDidMount(){
     //console.log(this.props);
    }

    checkState(){
        if(this.props){
            if(typeof this.props.location !== "undefined"){
                return this.props.location.state;
            }
            return this.props; 
        }
    }
    
   
    render(){
        console.log(this.props);
        const { sitename,formControlId, sitelinkname } = this.checkState();
        const { onChange, onLinkSubmit, loading, errors} = this.props;
        return (   
            <Form className="col-sm-6 offset-sm-3 text-center" onSubmit = {(e)=> {onLinkSubmit(e, sitelinkname);}} >   
                   {(errors)
                      ? (<div className="form-group">
                          <div className="alert alert-danger"><strong>Error!</strong> {errors.message || 'Something went wrong.'}</div>
                        </div>
                      )
                      : null
                    }
                <Form.Group controlId={formControlId} className=" justify-content-center" >
                    <Form.Label>Download {sitename} files on the go!!</Form.Label>
                    <Form.Control type="text" placeholder={`Enter ${sitename} address`} getsitelink={sitelinkname} name={ sitelinkname } onChange={ onChange } disabled={loading}/>
                    <Form.Text className="text-muted"> 
                            powered by youtube-dl
                    </Form.Text>
                </Form.Group>
                    <Button as="input" type='submit' variant='primary' size='sm' value= { (loading) ? 'Downloading...' : 'Download'} ></Button>
            
            </Form>   
        )
        }
}

export default Site;