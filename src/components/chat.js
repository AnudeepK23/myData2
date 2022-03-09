import React, { useEffect } from 'react';

import { Widget, addResponseMessage } from 'react-chat-widget';
import './chat.css'
import 'react-chat-widget/lib/styles.css';

 
function Chat() {

    useEffect(() => {

        addResponseMessage(`How Can i help you `);

    }, []);



    const handleNewUserMessage = (newMessage) => {

        console.log(`New message incoming! ${newMessage}`);

        // Now send the message throught the backend API

    };

   
  

    return (
       
 <div> 
     <meta charSet="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<title>Bootstrap Simple Contact Form</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round|Open+Sans" />
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
<style dangerouslySetInnerHTML={{__html: "\nbody {\n color: #566787;\n background: #f5f5f5;\n font-family: \"Open Sans\", sans-serif;\n}\n.contact-form {\n padding: 50px;\n margin: 30px 0;\n}\n.contact-form h1 {\n text-transform: uppercase;\n margin: 0 0 15px;\n}\n.contact-form .form-control, .contact-form .btn {\n min-height: 38px;\n border-radius: 2px;\n}\n.contact-form .btn-primary {\n min-width: 150px;\n background: #299be4;\n border: none;\n}\n.contact-form .btn-primary:hover {\n background: #1c8cd7; \n}\n.contact-form label {\n opacity: 0.9;\n}\n.contact-form textarea {\n resize: vertical;\n}\n.hint-text {\n font-size: 15px;\n padding-bottom: 15px;\n opacity: 0.8;\n}\n.bs-example {\n margin: 20px;\n}\n" }} />
<div className="container-xl">
<div className="row">
<div className="col-md-8 mx-auto">
<div className="contact-form">
<h1>Contact Us</h1>
<p className="hint-text">We'd love to hear from you, please drop us a line if you've any query.</p>
<form action="/examples/actions/confirmation.php" method="post">
<div className="row">
<div className="col-sm-6">
<div className="form-group">
<label htmlFor="inputFirstName">First Name</label>
<input type="text" className="form-control" id="inputFirstName" required />
</div>
</div>
<div className="col-sm-6">
<div className="form-group">
<label htmlFor="inputLastName">Last Name</label>
<input type="text" className="form-control" id="inputLastName" required />
</div>
</div>
</div>
<div className="form-group">
<label htmlFor="inputEmail">Email Address</label>
<input type="email" className="form-control" id="inputEmail" required />
</div>
<div className="form-group">
<label htmlFor="inputMessage">Message</label>
<textarea className="form-control" id="inputMessage" rows={5} required defaultValue={""} />
</div>
<input type="submit" className="btn btn-primary" defaultValue="Submit" />
</form>
</div>
</div>
</div>



        <div className="App1">

            <Widget

                handleNewUserMessage={handleNewUserMessage}

                //   profileAvatar={logo}

                title="Support "

                subtitle="Wait for Reply"

            />

        </div>
        
        </div>
        </div>
        
    );

}

export default Chat;