import React, { Component } from 'react';
import './feedback.css';

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: '',
            first: '',
            last: '',
            email: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleFirstChange = this.handleFirstChange.bind(this);
        this.handleLastChange = this.handleLastChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    render() {
        return (
            <div id="Feedback">
                <div className="Feedback__form">                
                    <form>
                        <textarea className="first" placeholder="first name" onChange={this.handleFirstChange} required value={this.state.first}/>
                        <textarea className="last" placeholder="last name" onChange={this.handleLastChange} required value={this.state.last}/>
                        <textarea className="email" placeholder="email" onChange={this.handleEmailChange} required value={this.state.email}/>
                        <textarea className="message" placeholder="message" onChange={this.handleChange} required value={this.state.feedback}/>
                        <input type="button" value="send" className="button" onClick={this.handleSubmit}/>
                    </form>
                </div>
                <div className="Feedback__intro">
                    <h1>Feedback</h1>
                    <p>We really apprecite your feedback so dont be afraid to tell us what you think so that we can improve our services.</p>
                </div>

            </div>
        )
    }

    handleChange(event) {
        this.setState({feedback: event.target.value})
    }

    handleFirstChange(event) {
        this.setState({first: event.target.value})
    }

    handleLastChange(event) {
        this.setState({last: event.target.value})
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value})
    }

    handleSubmit(event) {
        const templateId = 'restaurant';

        this.sendFeedback(
            templateId, {
                message_html:this.state.feedback,
                first_name: this.state.first, 
                last_name: this.state.last,
                reply_to: this.state.email
            }
        )
    }

    sendFeedback (templateId, variables) {
        window.emailjs.send(
            'gmail', templateId, variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
        .catch(err => console.error('Oh well, you failed.'))
    }
}

export default Feedback;