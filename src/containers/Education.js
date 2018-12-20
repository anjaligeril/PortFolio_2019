import React ,{Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Education extends Component{
    render(){
        return(
            <div className="eductionSection text-left">
                <span className="heading-meta title">Education</span>
                <h2 className="subheading title">Education</h2>
                <div className="row">
                    <ReactCSSTransitionGroup transitionName="fade"
                                             transitionAppear={true}
                                             transitionAppearTimeout={800}
                                             transitionEnterTimeout={800}
                                             transitionLeaveTimeout={800}>

                            <div className="col-md-12 " >
                                <div className="fancy-collapse-panel">
                                    <div className="panel-group" id="accordion" role="tablist"
                                         aria-multiselectable="true">
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingOne">
                                                <h4 className="panel-title">
                                                    <a data-toggle="collapse" data-parent="#accordion"
                                                       href="#collapseOne" aria-expanded="true"
                                                       aria-controls="collapseOne">Master Degree Computer Science And Engineering
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel"
                                                 aria-labelledby="headingOne">
                                                <div className="panel-body">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>Far far away, behind the word mountains, far from the
                                                                countries Vokalia and Consonantia, there live the blind
                                                                texts. </p>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>Separated they live in Bookmarksgrove right at the coast
                                                                of the Semantics, a large language ocean.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingTwo">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" data-toggle="collapse"
                                                       data-parent="#accordion" href="#collapseTwo"
                                                       aria-expanded="false" aria-controls="collapseTwo">Bachelor Degree
                                                        Computer Science And Engineering
                                                    </a>

                                                </h4>
                                            </div>
                                            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel"
                                                 aria-labelledby="headingTwo">
                                                <div className="panel-body">
                                                    <p>Far far away, behind the word <strong>mountains</strong>, far
                                                        from the countries Vokalia and Consonantia, there live the blind
                                                        texts. Separated they live in Bookmarksgrove right at the coast
                                                        of the Semantics, a large language ocean.</p>
                                                    <ul>
                                                        <li>Separated they live in Bookmarksgrove right</li>
                                                        <li>Separated they live in Bookmarksgrove right</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingFour">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" data-toggle="collapse"
                                                       data-parent="#accordion" href="#collapseFour"
                                                       aria-expanded="false" aria-controls="collapseFour">Diploma Web and Mobile Application
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseFour" className="panel-collapse collapse" role="tabpanel"
                                                 aria-labelledby="headingFour">
                                                <div className="panel-body">
                                                    <p>Far far away, behind the word <strong>mountains</strong>, far
                                                        from the countries Vokalia and Consonantia, there live the blind
                                                        texts. Separated they live in Bookmarksgrove right at the coast
                                                        of the Semantics, a large language ocean.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingFive">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" data-toggle="collapse"
                                                       data-parent="#accordion" href="#collapseFive"
                                                       aria-expanded="false" aria-controls="collapseFive">High School
                                                        Secondary Education
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseFive" className="panel-collapse collapse" role="tabpanel"
                                                 aria-labelledby="headingFive">
                                                <div className="panel-body">
                                                    <p>Far far away, behind the word <strong>mountains</strong>, far
                                                        from the countries Vokalia and Consonantia, there live the blind
                                                        texts. Separated they live in Bookmarksgrove right at the coast
                                                        of the Semantics, a large language ocean.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}

export default Education;