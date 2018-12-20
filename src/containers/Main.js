import React ,{Component} from 'react'
import Video from './images/background.mp4'
import './css/FrontCss.css'

import Cv from './images/cv.pdf'


class Main extends Component{
    render(){
        return(
            <div className="headerSection col-lg-12">

                    <video autoPlay muted loop className="video1" >
                        <source src={Video} type="video/mp4" />
                    </video>


                    <div className="head-content">
                        <div className="col-lg-12 headData">
                            <h1>Hi! <br/>I'm Anjali</h1>
                            <h4 className="headDdata"> Enthusiastic Web Developer | Passionate Coder |Mastery in React.js,Javascript,HTML5,CSS,BootStrap,Json,C,C++,C#,Asp.net,Python,Adobe Photoshop &Illustrator
                                ..</h4>
                        </div>
                        <div className="headButton">
                            <div className="col-lg-4">

                                <p><a className="btn btn-info btn-learn" target="_blank" href={Cv}>Download CV <i
                                    className="fa fa-download"></i></a></p>
                            </div>
                            <div className="col-lg-4">

                                <p><a className="btn btn-success btn-learn" target="_blank" href="https:/www.linkedin.com/in/anjali-elizabeth-joseph">My LinkedIn <i
                                    className="fa fa-linkedin-square"></i></a></p>
                            </div>
                            <div className="col-lg-4">

                                <p><a className="btn btn-primary btn-learn"  target="_blank" href="https://github.com/anjaligeril"> My GitHub <i
                                    className="fa fa-github"></i></a></p>
                            </div>
                        </div>
                    </div>

            </div>
        )
    }


}

export default Main;