import React, { Component } from 'react';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';
import CloudItem from '../components/CloudItem';
import './css/CloudSkillsCSS.css';
import Video from "./images/background.mp4";
import Cv from "./images/cv.pdf";
import Image1 from'./images/img4.png'
import Image2 from'./images/img3.jpg'
import Image3 from './images/Img5.png'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import BackgroundSlideshow from 'react-background-slideshow'

const styles = {
    large: {
        fontSize: 60,
        fontWeight: 'bold'
    },
    small: {
        opacity: 0.7,
        fontSize: 16
    }
};

class SkillsCloud extends Component {
    componentDidMount() {


        setInterval(() => {
            this.forceUpdate();
        }, 3000);
    }


    render() {
        return (
            <div className="SkillsCloudBody ">
                <BackgroundSlideshow images={[ Image1, Image2, Image3 ]} />
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={2500}
                    transitionEnterTimeout={2500}
                    transitionLeaveTimeout={3000}>


                    <div className="skills1">
                        <h2>Hi. I’m Anjali, a software developer from Toronto, Canada.</h2> <h3>Please take a look around!</h3>
                    </div>

                    <div className="SkillsCloud-outer">


                        <div className="col-lg-3"></div>

                        <div className="SkillsCloud-inner col-lg-6">

                            <TagCloud
                                className='tag-cloud'
                                style={{
                                    fontFamily: 'sans-serif',
                                    fontSize: 30,
                                    color: () => randomColor({
                                        hue: 'blue'
                                    }),
                                    padding: 5,
                                }}>
                                <div
                                    style={{
                                        fontFamily: 'serif',
                                        fontSize: 40,
                                        fontStyle: 'italic',
                                        fontWeight: 'bold',
                                        color: randomColor()
                                    }}>Photoshop</div>
                                <div> </div>
                                <div >JavaScript</div>
                                <div >HTML5</div>
                                <div >CSS</div>
                                <div >React.js</div>
                                <div >BootStrap</div>
                                <div >Java</div>
                                <div >C</div>
                                <div >C++</div>
                                <div >C#</div>
                                <div >ASP.net</div>
                                <div >Python</div>
                                <div>JSP</div>
                                <div>SQL</div>
                                <div>TSQL</div>
                                <div>JSON</div>
                                <div>XML</div>
                                <div >Angular.js</div>

                            </TagCloud>

                        </div>

                        <div className="col-lg-3"></div>

                    </div>


                    <div className="headButton ">

                        <a className="link1" href="mailto:anjali99malu@gmail.com">anjali99malu@gmail.com</a>
                        <a className="link1" target="_blank" href={Cv}>Resume  <i
                            className="fa fa-download"></i></a>



                        <a className="link1" target="_blank" href="https:/www.linkedin.com/in/anjali-elizabeth-joseph">LinkedIn <i
                            className="fa fa-linkedin-square"></i></a>



                        <a className="link1"  target="_blank" href="https://github.com/anjaligeril"> GitHub <i
                            className="fa fa-github"></i></a>

                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default SkillsCloud;