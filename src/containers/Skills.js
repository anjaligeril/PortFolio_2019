import React ,{Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Skills extends Component{
    render(){
        return(
            <div className="skillsSection text-left">
                <span className="heading-meta title">My Specialty</span>
                <h2 className="subheading title">My Skills</h2>
                <div className="row">
                    <ReactCSSTransitionGroup transitionName="slide1"
                                             transitionAppear={true}
                                             transitionAppearTimeout={1000}
                                             transitionEnterTimeout={1000}
                                             transitionLeaveTimeout={1000}>
                    <div className="col-md-12 " >
                        <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas,
                            wild Question.  Marks and devious Semikoli, but the Little Blind Text didn’t listen.
                            She packed her seven
                            versalia, put her initial into the belt and made herself on the way.</p>
                    </div>
                    <div className="col-md-6 " >
                        <div className="progress-wrap">
                            <h3>HTML5 + CSS</h3>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped  color-1" role="progressbar" aria-valuenow="98"
                                     aria-valuemin="0" aria-valuemax="100" >
                                    98%
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 " >
                        <div className="progress-wrap">
                            <h3>BootStrap</h3>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped  color-2" role="progressbar" aria-valuenow="95"
                                     aria-valuemin="0" aria-valuemax="100" >
                                    95%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 " >
                        <div className="progress-wrap">
                            <h3>React.js</h3>
                            <div className="progress">
                                <div className="progress-bar color-3" role="progressbar" aria-valuenow="90"
                                     aria-valuemin="0" aria-valuemax="100" >
                                    90%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 " >
                        <div className="progress-wrap">
                            <h3>JavaScript</h3>
                            <div className="progress">
                                <div className="progress-bar color-4" role="progressbar" aria-valuenow="98"
                                     aria-valuemin="0" aria-valuemax="100" >
                                    98%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 " >
                        <div className="progress-wrap">
                            <h3>Java</h3>
                            <div className="progress">
                                <div className="progress-bar color-5" role="progressbar" aria-valuenow="95"
                                     aria-valuemin="0" aria-valuemax="100" >
                                    95%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" >
                        <div className="progress-wrap">
                            <h3>SQL</h3>
                            <div className="progress">
                                <div className="progress-bar color-6" role="progressbar" aria-valuenow="96"
                                     aria-valuemin="0" aria-valuemax="100" >
                                    96%
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

export default Skills;