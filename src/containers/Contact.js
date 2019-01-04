import React ,{Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './css/ContactCSS.css'
class Contact extends Component{
    render(){
        return(
            <div className="contactSection-outer">
            <div className="contactSection text-left">
                <ReactCSSTransitionGroup transitionName="fade"
                                         transitionAppear={true}
                                         transitionAppearTimeout={1500}
                                         transitionEnterTimeout={1500}
                                         transitionLeaveTimeout={800}>
                <span className="heading-meta title">Get in Touch</span>
                <h2 className="subheading title">Contact</h2>
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup
                    transitionName="slide"
                    transitionAppear={true}
                    transitionAppearTimeout={2500}
                    transitionEnterTimeout={2500}
                    transitionLeaveTimeout={1000}>
                <div className="row">

                    <div className="col-md-5">
                        <div className="contact-feature contact-feature-sm "
                             >
                            <div className="contact-icon">
                                <i className="glyphicon glyphicon-envelope"></i>
                            </div>
                            <div className="contact-text">
                                <p><a href="#">anjali99malu@gmail.com</a></p>
                            </div>
                        </div>

                        <div className="contact-feature contact-feature-sm "
                             >
                            <div className="contact-icon">
                                <i className="glyphicon glyphicon-home"></i>
                            </div>
                            <div className="contact-text">
                                <p>56 Leander Street ,Brampton ,Ontario L6S3M7</p>
                            </div>
                        </div>

                        <div className="contact-feature contact-feature-sm "
                             >
                            <div className="contact-icon">
                                <i className="glyphicon glyphicon-phone"></i>
                            </div>
                            <div className="contact-text">
                                <p><a href="tel://">+416 822 3193</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-md-push-1">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1 col-md-pull-1 "
                                 >
                                <form action="">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Subject"/>
                                    </div>
                                    <div className="form-group">
                                        <textarea name="" id="message" cols="30" rows="7" className="form-control"
                                                  placeholder="Message"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-primary btn-send-message"
                                               value="Send Message"/>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
                </ReactCSSTransitionGroup>
                </div>
            </div>



        )
    }
}

export default Contact;