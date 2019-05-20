import React, { Component } from 'react'
import axios from 'axios'

class postform extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
            userName: '',
            userEmail: '',
            messageTitle: '',
            messageBody: ''

        }
        

    }
    changeHandler = (e) => {
        this.setState(
            { [e.target.name]: [e.target.value] }
        )
    }
    submitHandler = (e) => {
        e.preventDefault();
       
        const jsonData = JSON.stringify(this.state)
        axios.post('http://localhost:5000/contacts',jsonData)
        .then(response => {
            console.log("data sended")
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log(error.config)

        })
        

    }
    

    render() {
        const {  userName, userEmail, messageTitle, messageBody } = this.state
        return (
            <div className='container mt-4 pb-4 ' >
                <form onSubmit={this.submitHandler}>
                   {/*  <div className="form-group ">
                       
                        <input type='number' className="form-control" name='userId' value={userId} onChange={this.changeHandler} placeholder='userId' />
                    </div > */}
                    <div className="form-group ">
                        
                        <input type='text' className="form-control" name='userName' value={userName} onChange={this.changeHandler} placeholder='Name' />
                    </div >
                    <div className="form-group ">
                        
                        <input type='email' className="form-control" name='userEmail' value={userEmail} onChange={this.changeHandler} placeholder='Email' />
                    </div >
                    <div className="form-group ">
                        
                        <input type='text' className="form-control" name='messageTitle' value={messageTitle} onChange={this.changeHandler} placeholder='Subject' />
                    </div >
                    <div className="form-group"> 
                        <textarea className="form-control"  rows="3" name='messageBody' value={messageBody} onChange={this.changeHandler} placeholder='Message' ></textarea>
                    </div>
                    <button type='submit' className="btn btn-primary" > Send</button>

                </form>

            </div>
        )
    }
}

export default postform;

