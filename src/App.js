import React, { Component } from 'react';
import Ytest from './Ytest'
import Contents from './Contents'
import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import helpers from './Helper'
import './App.css';
class App extends Component {
        constructor() {
		super()
		this.state = {
			linkfield : '',
			loading: false, // to keep track of when form submitted
            errors: null, // for displaying errors
            sitelink: 'ylink'
		}
	}

serverAddress = 'https://damp-depths-14337.herokuapp.com/';
//serverAddress = 'http://node23.codenvy.io:43264/';
callHelperPluralSight = () => {(
        this.setState({
          errors: null,
          loading: true,
        }, () => {
       // enter http request here
            helpers.httpRequest(this.serverAddress+'pdl',this.state.linkfield)
            .then((response) => {
                this.setState({
                  loading: false
                });
            })
            .catch((error) => {
              
                error.json().then((json) => {
                    this.setState({
                    errors: json,
                    loading: false
                    });
                })
             });
        })
    )}
    
    callHelperYoutube = () => {(
        this.setState({
          errors: null,
          loading: true,
        }, () => {
       // enter http request here
            helpers.httpRequest(this.serverAddress+'ydl',this.state.linkfield)
            .then((response) => {
                this.setState({
                  loading: false
                });
            })
            //.map(response => response.json())
            //.catch(error => Observable.throw("Error in x service"));
           .catch((error) => {
               if(typeof error.json === 'function'){
                    //console.log("The error is a function",error);
                    error.json().then((json) => {
                    //console.log("Caught error here",json)
                      this.setState({
                        errors: json,
                        loading: false
                        });
                    }) 
               }
               else if(typeof error.json !== 'function'){
                   const network_err = new Error("Network error, Please try in few minutes...");
                     this.setState({
                        errors: network_err,
                        loading: false
                        });
               }
             });
        })
    )}
  
      
   sanityCheck = () => {
        const yaddress = this.state.linkfield
        const pattern = "www.youtube.com/watch?v="
        return yaddress.includes(pattern);
    }
  
    
    siteHandler = (selectedlinkname) => {
        let errorlink = new Error("Wrong Link Provided");
        console.log("sitehandler is",selectedlinkname)
        switch(selectedlinkname) {
            case 'ylink':
            const pattern = "www.youtube.com/watch?v=";
           (this.sanityCheck(pattern))
            ?
                this.callHelperYoutube()
            :
                (this.setState({
                    errors: errorlink,
                    loading: false
                })); 
            break;
          case 'plink':
            console.log("You got here")
            break;
          default:
            // code block
        }

   }
   
    
    onSearchChange = (event) => {
		this.setState({linkfield : event.target.value })
		console.log(event.target.value);	
		//console.log("name is",event.target.name)
	} 
	
	
    onSiteSelect = (selectedlinkname) => {
       this.setState({sitelink: selectedlinkname, errors:null},
        () => console.log(this.state),
                this.siteHandler(selectedlinkname)
        );
       console.log("name is",selectedlinkname)
      
    } 
      
      
    onLinkSubmit = (event,selectedlinkname) => {
        event.preventDefault();
        this.onSiteSelect(selectedlinkname);
        //this.siteHandler();
       // console.log("name is",event);
    }
  
	
  render() {
    const { loading,errors } = this.state;
    /*const { onChange, onLinkSubmit, loading, errors} = this.props;*/
    const siteProps = {
            loading,
            errors,
            onChange: this.onSearchChange,
            onLinkSubmit:this.onLinkSubmit,
            onSiteSelect: this.onSiteSelect
    }
    return (
        <BrowserRouter>
         <Container fluid ={ true} className='text-center'>
            <Ytest />
            <Contents {...siteProps} />
           {}
         </Container>
        </BrowserRouter>
    );
  }
}

export default App;