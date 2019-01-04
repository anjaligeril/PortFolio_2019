import React ,{Component} from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './css/ExperienceCSS.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Experience extends Component{
    render(){
        return(
            <div className="experienceSection-outer">
            <div className="experienceSection text-left">
                <ReactCSSTransitionGroup transitionName="fade"
                                         transitionAppear={true}
                                         transitionAppearTimeout={1500}
                                         transitionEnterTimeout={1500}
                                         transitionLeaveTimeout={800}>
                <span className="heading-meta title">Education & Experience </span>
                <h2 className="subheading title"> My Education & Work Experience</h2>
                </ReactCSSTransitionGroup>
                <div className="row">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"

                            iconStyle={{ background: 'orange', color: '#fff' }}
                            icon={<i className="fa fa-car icon1"></i>}
                        >
                            <h4 className="vertical-timeline-element-title title">Web Application Developer Intern</h4>
                            <h5 className="vertical-timeline-element-subtitle">Toronto ,Canada.</h5>
                            <h5>Dec 2018</h5>
                            <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"

                            iconStyle={{ background: 'purple', color: '#fff' }}
                            icon={<i className="fa fa-car icon1"></i>}
                        >
                            <h4 className="vertical-timeline-element-title title">Diploma in Web Application Development</h4>
                            <h5 className="vertical-timeline-element-subtitle">Toronto ,Canada.</h5>
                            <h5>June 2018 - August 2019 </h5>
                            <p>
                                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"

                            iconStyle={{ background: 'blue', color: '#fff' }}
                            icon={<i className="fa fa-car icon1"></i>}
                        >
                            <h4 className="vertical-timeline-element-title title">Assistant Professor(CSE)</h4>
                            <h5 className="vertical-timeline-element-subtitle">Kerala ,India.</h5>
                            <h5>March 2014 - March 2018</h5>
                            <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"

                            iconStyle={{ background: 'red', color: '#fff' }}
                            icon={<i className="fa fa-car icon1"></i>}
                        >
                            <h4 className="vertical-timeline-element-title title">Master Of Technology in Computer Science and Engineering</h4>
                            <h5 className="vertical-timeline-element-subtitle">Kerala ,India.</h5>
                            <h5>August 2011 - July 2013</h5>
                            <p>
                                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"

                            iconStyle={{ background: 'yellow', color: '#fff' }}
                            icon={<i className="fa fa-car icon1"></i>}
                        >
                            <h4 className="vertical-timeline-element-title title">Bachelor Of Technology in Computer Science and Engineering</h4>
                            <h5 className="vertical-timeline-element-subtitle">Kerala ,India.</h5>
                            <h5>September 2007 - June 2011</h5>
                            <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement>


                        <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}

                        />
                    </VerticalTimeline>
                </div>
            </div>
            </div>
        )
    }
}

export default Experience;