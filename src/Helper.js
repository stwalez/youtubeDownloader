const helpers = {
    httpRequest : (url,y_address) => {
      return fetch(url, {
                method: 'post',
    			headers: {'Content-Type': 'application/json'},
    			body: JSON.stringify({
    				y_address
    			})
    	})
    	.then(response => {
    		    if (response.ok) {
                    let data = response;
                // if the type is json return, interpret it as json
                    if (response.headers.get('Content-Type').indexOf('application/json') > -1) {
                        data = response.json();
                    }
                    return data;
                }
                // if an error, anything but 200 then reject with the actuall response
                return Promise.reject(response);
            })
            .then(response =>{
                const filename =  response.headers.get('Content-Disposition').split('filename=')[1].replace(/^"|"$/g,'');
                response.blob().then(blob => {
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                //console.log("url is ",url)
                link.setAttribute('download',filename);
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
                });
            })
    		.catch(error => {
    		   return Promise.reject(error)
    		})
    }
  
    
}

export default helpers;