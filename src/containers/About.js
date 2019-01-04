import React ,{Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './css/AboutCSS.css'
import Img1 from "./images/profilePic.jpg";
import SkillBar from 'react-skillbars';
class About extends Component{
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
                    <div className="col-md-3 block ">
                        <div className="services color-4">
                            <span className="icon2 fa fa-rocket"></span>
                            <h3 className="">Fast</h3>
                            <h5>Fast load times and lag free interaction, my highest priority.</h5>
                        </div>
                    </div>

                    <div className="col-md-3 block" >
                        <div className="services color-3">
                            <i className="material-icons icon2">phonelink</i>
                            <h3 className="">Responsive</h3>
                            <h5>My layouts will work on any device, big or small.</h5>
                        </div>
                    </div>
                    <div className="col-md-3 block" >
                        <div className="services color-2">

                            <span className="icon2 	fa fa-lightbulb-o"></span>

                            <h3 className="">Intuitive</h3>
                            <h5>Strong preference for easy to use, intuitive UX/UI.</h5>
                        </div>
                    </div>
                    <div className="col-md-3 block">
                        <div className="services color-5">
                            <span className="icon2 fa fa-magic"></span>
                            <h3 className="title">Dynamic</h3>
                            <h5>Websites don't have to be static, I love making pages come to life.</h5>
                        </div>
                    </div>
                </div>

                        <div className="row">

                            <div className=" containerPic col-lg-6 ">
                                <img src={Img1} alt="profilePic" className="image img-thumbnail " />
                                    <div className="overlay">
                                        <div className="text"><p  className="title"><strong>Hi I'm Anjali Elizabeth Joseph</strong> I'm an aspiring web designer and front end developer.I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                                            </p></div>
                                    </div>
                            </div>

                            <div className="col-lg-6 " >
                                <SkillBar skills={this.SKILLS} animationDuration={4000}/>
                            </div>

                        </div>

                        <div className="row">
                        <div className="col-lg-12 " >
                            <div className="hire">
                                <h2 className="title">I am happy to work for you . Let's make something special.</h2>
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