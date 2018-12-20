import React ,{Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Services extends Component{
    render(){
        return(
            <div className="servicesSection text-left">

                <span className="heading-meta title">What I do?</span>
                <h2 className="subheading title">Here are some of my expertise</h2>
                <div className="row  row-pt-md">
                    <ReactCSSTransitionGroup transitionName="slide2"
                                             transitionAppear={true}
                                             transitionAppearTimeout={1000}
                                             transitionEnterTimeout={1000}
                                             transitionLeaveTimeout={1000}>
                    <div className=" col-md-4 text-center">
                        <div className="box1 services color-1">
                            <span className="icon  "><i className="glyphicon glyphicon-flash"></i></span>
                            <div className="desc">
                                <h3 className="title">Innovative Ideas</h3>
                                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-4 text-center ">
                        <div className="box1 services color-2">
                            <span className=" icon "><i className="glyphicon glyphicon-send"></i></span>
                            <div className="desc">
                                <h3 className="title">Software</h3>
                                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-4 text-center ">
                        <div className="box1 services color-3">
                            <span className=" icon "><i className="glyphicon glyphicon-phone"></i></span>
                            <div className="desc">
                                <h3 className="title">Application</h3>
                                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                            </div>
                        </div>
                    </div>
                    </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup transitionName="slide5"
                                             transitionAppear={true}
                                             transitionAppearTimeout={1000}
                                             transitionEnterTimeout={1000}
                                             transitionLeaveTimeout={1000}>
                    <div className="col-md-4 text-center ">
                        <div className=" box1 services color-4">
                            <span className="icon "><i className="glyphicon glyphicon glyphicon-globe"></i></span>
                            <div className="desc">
                                <h3 className="title">Graphic Design</h3>
                                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-4 text-center ">
                        <div className="box1 services color-5">
                            <span className="icon "> <i className="glyphicon glyphicon-tasks"></i></span>
                            <div className="desc">
                                <h3 className="title">Software</h3>
                                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                            </div>
                        </div>
                    </div>
                    <div className="  col-md-4 text-center ">
                        <div className="box1 services color-6">
                            <span className="icon  "><i className="glyphicon glyphicon-hourglass"></i></span>
                            <div className="desc">
                                <h3 className="title">Application</h3>
                                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                            </div>
                        </div>
                    </div>
                    </ReactCSSTransitionGroup>
                </div>

            </div>
        )
    }
}

export default Services;