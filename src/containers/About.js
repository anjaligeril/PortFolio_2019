import React ,{Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './css/AboutCSS.css'
import Img1 from "./images/profilePic.jpg";
import SkillBar from 'react-skillbars';
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


                            <div className="text"><p  className="title"><strong>Hi I'm Anjali Elizabeth Joseph</strong><br/> I'm an aspiring web designer and front end developer.I have interest for UI effects, animations and creating intuitive, dynamic user experiences.I am passionate about building excellent software that improves the lives of those around me.
                            </p></div>

                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6" >
                            <SkillBar skills={this.SKILLS} animationDuration={4000}/>
                        </div>

                    </div>
                    <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-4 block ">
                        <div className="services color-4">
                            <span className="icon2 fa fa-rocket"></span>
                            <h3 className=""><span className="no">01. </span> Research</h3>
                            <h5>Understand the client’s subject matter completely
                                and build on the knowledge related to it, becoming
                                intimately familiar with the subject matter.
                                Determine methods to address the specific customer’s needs and requirements.</h5>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 col-sm-4 block" >
                        <div className="services color-3">
                            <i className="material-icons icon2">phonelink</i>
                            <h3 className=""><span className="no">02. </span> Design</h3>
                            <h5>Misleadingly thought of as the superficial appearance of a product,
                                design actually encompasses a lot more. It is a
                                cross functional process that includes market research,
                                technical research, design of a concept, and prototype mockup.</h5>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-4 block" >
                        <div className="services color-2">

                            <span className="icon2 	fa fa-lightbulb-o"></span>

                            <h3 className=""><span className="no">03. </span> Develop</h3>
                            <h5>Findings from the research and design phases are utilized for the
                                production of specific products including materials, systems, and methods.
                                Engineer utilizing the research and designs to produce commercial products
                                for the customer.</h5>
                        </div>
                    </div>

                </div>



                        <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 " >
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