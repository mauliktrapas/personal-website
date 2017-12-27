import React from 'react';
import { SocialIcon } from 'react-social-icons';

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            message:'',
            sentMessage:false
        };
       this.handleEmail= this.handleEmail.bind(this);
       this.handleMessage = this.handleMessage.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleEmail(e){
        this.setState({email:e.target.value})
    }
    handleMessage(e){
        this.setState({message:e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        let reqBody = {
            email: this.state.email,
            message:this.state.message
        };
        console.log(reqBody);
        fetch('/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqBody)
        })
            .then((res) => {
                if (res.ok){
                    this.setState({sentMessage:true});
                } else {
                    throw new Error ('Something went wrong with your fetch');
                }
            })
            .catch((error)=>{
                console.error(error);
            });
    }
    render(){
        return (
            <div className="bg-light" id="contactme">
                <h3 className="text-center p-3">Keep In Touch</h3>
                <form action="/contact" className="pl-4" onSubmit={this.handleSubmit}>
                    <div className="form-group col-auto col-md-4">
                        <label htmlFor="input-email">Email-id</label>
                        <input value={this.state.email} onChange={this.handleEmail} type="email" className="form-control" id="input-email" name="email" placeholder="Enter email"/>
                    </div>
                    <div className="form-group col-auto col-md-6">
                        <label htmlFor="input-text" >Send Me Message</label>
                        <textarea value={this.state.message} onChange={this.handleMessage} className="form-control" id="input-text" name="message" placeholder="message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary ml-3 mb-4">Submit</button>
                    {this.state.sentMessage ? <p className="text-success">message sent</p> : ""}
                </form>
                <div className="text-center mb-4 bg-white pt-3">
                    <SocialIcon className="mr-4" url="https://www.linkedin.com/in/maulik-trapasiya-a6babb9a/" />
                    <SocialIcon className="mr-4" url="https://github.com/mauliktrapas" />
                    <SocialIcon url="https://www.facebook.com/maulik.trapasiya.3" />
                </div>
            </div>
        )
    }
}

export default Contact;