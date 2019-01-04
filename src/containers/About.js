import React ,{Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './css/AboutCSS.css'
class About extends Component{
    render(){
        return(

            <div className="aboutme-outer">

            <div className="aboutme text-left">
                <ReactCSSTransitionGroup transitionName="fade"
                                         transitionAppear={true}
                                         transitionAppearTimeout={1500}
                                         transitionEnterTimeout={1500}
                                         transitionLeaveTimeout={800}>
                <span className="heading-meta title">About Us</span>
                <h2 className="subheading title">Who Am I?</h2>
                </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup
                        transitionName="slide"
                        transitionAppear={true}
                        transitionAppearTimeout={2500}
                        transitionEnterTimeout={2500}
                        transitionLeaveTimeout={1000}>
                <p><strong>Hi I'm Anjali Elizabeth Joseph</strong> On her way she met a copy. The copy warned the Little Blind Text,
                    that where it came from it would have been rewritten a thousand times and everything that was left
                    from its origin would be the word "and" and the Little Blind Text should turn around and return to
                    its own, safe country.</p>
                <p></p>


                <div className="row">
                    <div className="col-md-4 " >
                        <div className="services color-2">
                            <span className="icon2 glyphicon glyphicon-globe"></span>
                            <h3 className="title">Web Design</h3>
                        </div>
                    </div>
                    <div className="col-md-4 " >
                        <div className="services color-3">
                            <span className="icon2 glyphicon glyphicon-tasks"></span>
                            <h3 className="title">Software Development</h3>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="services color-4">
                            <span className="icon2 glyphicon glyphicon-phone"></span>
                            <h3 className="title">Application Development</h3>
                        </div>
                    </div>
                </div>
                        <div className="row1">
                            <div className="col-md-12 " >
                                <div className="hire">
                                    <h2 className="title">I am happy to know you <br/>that 300+ projects done sucessfully!</h2>
                                    <a href="#" className="btn-hire">Hire me</a>
                                </div>
                            </div>
                        </div>
                </ReactCSSTransitionGroup>
            </div>

            </div>
        )
    }
}

export default About;