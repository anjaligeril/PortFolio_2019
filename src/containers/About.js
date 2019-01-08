import React ,{Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './css/AboutCSS.css'
import Img1 from "./images/profilePic.jpg";
import SkillBar from 'react-skillbars';
import Cv from "./images/cv.pdf";
class About extends Component{
    SKILLS = [
        {
            "type": "HTML5",
            "level": 100
        },
        {
            "type": "CSS",
            "level": 99
        },
        {
            "type": "BootStrap",
            "level": 97
        },
        {
            "type": "JavaScript",
            "level": 95
        },
        {
            "type": "React.js",
            "level": 90
        },
        {
            "type": "MySQL",
            "level": 95
        },
        {
            "type": "Java",
            "level": 75
        },
        {
            "type": "Python",
            "level": 80
        },


    ];
    render(){
        return(

            <div className="aboutme-outer">

            <div className="aboutme text-left">
                <ReactCSSTransitionGroup transitionName="fade"
                                         transitionAppear={true}
                                         transitionAppearTimeout={2500}
                                         transitionEnterTimeout={2500}
                                         transitionLeaveTimeout={2500}>

                <span className="heading-meta title">About Me</span>
                <h2 className="subheading title">Who Am I?</h2>
                    <div className="row">

                        <div className="  col-lg-6 col-md-6 col-sm-6 ">
                            <img src={Img1} height="175" width="175" className="img-thumbnail profilePic" alt="photo"/>
                            <div className="text"><p  className="title"><strong>Hi I am Anjali Elizabeth Joseph</strong><br/> I am an aspiring web designer and front end developer. I love creating intuitive, dynamic user experiences.
                                I can help you build an easy-to-use and beautiful website. I can create all kind of websites or online shops, helping you out with your business or project.
                            </p></div>

                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6" >
                            <SkillBar skills={this.SKILLS} animationDuration={1000}/>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 " >
                            <div className="hire">
                                <h2 className="title">I am happy to work for you . Let's make something special.</h2>
                                <a href="mailto:anjali99malu@gmail.com" className="btn-hire">Hire me</a>
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