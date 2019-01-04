import React ,{Component} from 'react'
import './css/SkillsCSS.css'
import SkillBar from 'react-skillbars';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Skills extends Component{
    SKILLS = [
        {
            "type": "Java",
            "level": 100
        },
        {
            "type": "React",
            "level": 85
        },
        {
            "type": "Javascript",
            "level": 75
        },
        {
            "type": "Spring",
            "level": 50
        },
        {
            "type": "Docker",
            "level": 25
        },
        {
            "type": "HTML",
            "level": 20
        },
        {
            "type": "NoSQL",
            "level": 0
        }
    ];
    render(){
        return(
            <div className="skillsSection-outer">
                <div className="skillsSection text-left">
                    <ReactCSSTransitionGroup transitionName="fade"
                                             transitionAppear={true}
                                             transitionAppearTimeout={1500}
                                             transitionEnterTimeout={1500}
                                             transitionLeaveTimeout={800}>
                    <span className="heading-meta title">My Specialty</span>
                    <h2 className="subheading title">My Skills</h2>
                        <div className="col-md-12 " >
                            <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas,
                                wild Question.  Marks and devious Semikoli, but the Little Blind Text didn’t listen.
                                She packed her seven
                                versalia, put her initial into the belt and made herself on the way.</p>
                        </div>
                    <div className="row col-lg-12">
                        <SkillBar skills={this.SKILLS} animationDuration={4000}/>
                    </div>
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}

export default Skills;