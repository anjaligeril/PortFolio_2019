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
                <span className="heading-meta title">Experience</span>
                <h2 className="subheading title">Work Experience</h2>
                </ReactCSSTransitionGroup>
                <div className="row">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"

                            iconStyle={{ background: 'orange', color: '#fff' }}
                            icon={<i className="fa fa-car icon1"></i>}
                        >
                            <h3 className="vertical-timeline-element-title">Creative Director</h3>
                            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"

                            iconStyle={{ background: 'purple', color: '#fff' }}
                            icon={<i className="fa fa-car icon1"></i>}
                        >
                            <h3 className="vertical-timeline-element-title">Art Director</h3>
                            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
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