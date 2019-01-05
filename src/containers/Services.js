import React ,{Component} from 'react'
import './css/ServicesCSS.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Services extends Component{
    render(){
        return(
            <div className="services-outer">
            <div className="servicesSection text-left">
                <ReactCSSTransitionGroup transitionName="fade"
                                         transitionAppear={true}
                                         transitionAppearTimeout={1500}
                                         transitionEnterTimeout={1500}
                                         transitionLeaveTimeout={800}>
                <span className="heading-meta title">What I do?</span>
                <h2 className="subheading title">Here are some of my expertise</h2>
                </ReactCSSTransitionGroup>
                <div className="row  row-pt-md">
                    <ReactCSSTransitionGroup transitionName="slide2"
                                             transitionAppear={true}
                                             transitionAppearTimeout={2000}
                                             transitionEnterTimeout={2000}
                                             transitionLeaveTimeout={1000}>
                    <div className=" col-md-4 text-center">
                        <div className="box1 services color-1">
                            <span className="icon  "><i className="glyphicon glyphicon-flash"></i></span>
                            <div className="desc">
                                <h3 className="title">Websites</h3>
                                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-4 text-center ">
                        <div className="box1 services color-2">
                            <span className=" icon "><i className="glyphicon glyphicon-send"></i></span>
                            <div className="desc">
                                <h3 className="title">Sofware </h3>
                                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-4 text-center ">
                        <div className="box1 services color-3">
                            <span className=" icon "><i className=" fa fa-rocket"></i></span>
                            <div className="desc">
                                <h3 className="title">Android & IOS Apps</h3>
                                <p>Fast load times and lag free interaction, my highest priority.</p>
                            </div>
                        </div>
                    </div>
                    </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup transitionName="slide5"
                                             transitionAppear={true}
                                             transitionAppearTimeout={2000}
                                             transitionEnterTimeout={2000}
                                             transitionLeaveTimeout={1000}>
                    <div className="col-md-4 text-center ">
                        <div className=" box1 services color-4">
                            <span className=" icon "><i className=" fa fa-rocket"></i></span>
                            <div className="desc">
                                <h3 className="title">Innovative Ideas</h3>
                                <p>My layouts will work on any device, big or small.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-4 text-center ">
                        <div className="box1 services color-5">
                            <span className="icon "> <i className="  fa fa-lightbulb-o"></i></span>
                            <div className="desc">
                                <h3 className="title">Logo Designing</h3>
                                <p>Strong preference for easy to use, intuitive UX/UI.</p>
                            </div>
                        </div>
                    </div>
                    <div className="  col-md-4 text-center ">
                        <div className="box1 services color-6">
                            <span className="icon  "><i className="fa fa-magic"></i></span>
                            <div className="desc">
                                <h3 className="title">Resonsive & Dynamic Pages</h3>
                                <p>Websites don't have to be static, I love making pages come to life.</p>
                            </div>
                        </div>
                    </div>
                    </ReactCSSTransitionGroup>
                </div>

            </div>
            </div>
        )
    }
}

export default Services;