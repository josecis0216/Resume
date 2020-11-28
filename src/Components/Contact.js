import React, { Component } from 'react'


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { feedback: '', contact_name: '', user_email: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <div>
                <div className="containerStyles" style={{textAlign: "center", padding:25+'px'}}>
                    <h2>Contact Me</h2>
                    <h3 style={{marginBottom:25+'px'}}>Let's connect, send me an email! </h3>
                </div>
                <div className="container" style={{padding:25+'px'}}>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <form className="test-mailing">
                                <div className="form-group">
                                <label>Name</label>
                                <input 
                                    className="form-control"
                                    id="txtName" 
                                    type="text" 
                                    name="contact_name"
                                    
                                    required
                                    value={this.state.fullName}
                                    onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                <label>Email</label>
                                <input 
                                    className="form-control"
                                    id="txtEmail" 
                                    type="email" 
                                    name="user_email"
                                    onChange={this.handleChange}
                                    required
                                    value={this.state.email}
                                    />
                                </div>
                                <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    className="form-control"
                                    id="test-mailing"
                                    name="feedback"
                                    onChange={this.handleChange}
                                    placeholder="Send me your message..."
                                    required
                                    value={this.state.feedback}
                                    style={{width: '50%', height: '150px'}}
                                />
                                </div>
                                <button 
                                    type="button" 
                                    value="Submit" 
                                    className="btn btn--submit btn-primary" 
                                    onClick={this.handleSubmit} 
                                    >
                                    Send Email
                                </button>
                                <h6 id="success" style={{color:'green', display:'none'}}>Email successfuly sent!</h6>
                            </form>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                        <iframe
                            title="Current Employment, Sendsations" 
                            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d387941.29817548196!2d-112.1575209545185!3d40.568283753127616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d40.858930799999996!2d-111.8926302!4m5!1s0x874d84c33f734179%3A0x24ad0a58576a779e!2sSendsations%2C%201074%20Industrial%20Park%20Rd%2C%20Orem%2C%20UT%2084057%2C%20United%20States!3m2!1d40.3162581!2d-111.72694759999999!5e0!3m2!1sen!2sus!4v1606586155999!5m2!1sen!2sus" 
                            width="600" 
                            height="450" 
                            frameBorder="0" 
                            style={{ border:0 }}
                            allowFullScreen="" 
                            aria-hidden="false" 
                            tabIndex="0">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit() {
    const templateId = 'template_76b2s45';

	this.sendFeedback(templateId, {
        to_name: "Jose",
        message: this.state.feedback, 
        from_name: this.state.contact_name, 
        reply_to: this.state.user_email,
        from_email: this.state.user_email
        })
    }

    sendFeedback (templateId, variables) {
    window.emailjs.send(
        'service_cftw0yp', templateId,
        variables
        ).then(res => {
        console.log('Email successfully sent!')
        const x = document.getElementById("success");
        x.style.display = "block";
        })
        // Handle errors here however you like, or use a React error boundary
        .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
}

export default Contact;