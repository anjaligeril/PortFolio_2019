import React ,{Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Work extends Component{
    render(){
        return(
            <div className="workSection text-left">
                <span className="heading-meta title">My Work</span>
                <h2 className="subheading title">Recent Works</h2>
                <ReactCSSTransitionGroup transitionName="slide4"
                                         transitionAppear={true}
                                         transitionAppearTimeout={1000}
                                         transitionEnterTimeout={1000}
                                         transitionLeaveTimeout={1000}>
                <div className="row row-bottom-padded-sm " >

                    <div className="col-md-12">
                        <p className="work-menu"><span><a
                            href="#" className="active">Web Design</a></span> <span><a href="#">Software</a></span> <span><a
                            href="#">Apps</a></span></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 " >
                        <div className="project img1">
                            <div className="desc ">
                                <div className="con ">
                                    <h3><a href="work.html">Work 01</a></h3>
                                    <span>Website</span>
                                    <p className="icon">
                                        <span><a href="#"><i className="glyphicon glyphicon-share-alt"></i></a></span>
                                        <span><a href="#"><i className="glyphicon glyphicon-eye-open"></i> 100</a></span>
                                        <span><a href="#"><i className="glyphicon glyphicon-heart"></i> 49</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 " >
                        <div className="project img2">
                            <div className="desc ">
                                <div className="con ">
                                    <h3><a href="work.html">Work 02</a></h3>
                                    <span>Website</span>
                                    <p className="icon">
                                        <span><a href="#"><i className="glyphicon glyphicon-share-alt"></i></a></span>
                                        <span><a href="#"><i className="glyphicon glyphicon-eye-open"></i> 100</a></span>
                                        <span><a href="#"><i className="glyphicon glyphicon-heart"></i> 49</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 " >
                        <div className="project img3 " >
                            <div className="desc ">
                                <div className="con ">
                                    <h3><a href="work.html">Work 03</a></h3>
                                    <span>Illustration</span>
                                    <p className="icon">
                                        <span><a href="#"><i className="glyphicon glyphicon-share-alt"></i></a></span>
                                        <span><a href="#"><i className="glyphicon glyphicon-eye-open"></i> 100</a></span>
                                        <span><a href="#"><i className="glyphicon glyphicon-heart"></i> 49</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 " >
                        <div className="project img4 " >
                            <div className="desc ">
                                <div className="con ">
                                    <h3><a href="work.html">Work 04</a></h3>
                                    <span>Application</span>
                                    <p className="icon">
                                        <span><a href="#"><i className="glyphicon glyphicon-share-alt"></i></a></span>
                                        <span><a href="#"><i className="glyphicon glyphicon-eye-open"></i> 100</a></span>
                                        <span><a href="#"><i className="glyphicon glyphicon-heart"></i> 49</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </ReactCSSTransitionGroup>
            </div>

        )
    }
}

export default Work;