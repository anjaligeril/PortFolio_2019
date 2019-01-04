import React ,{Component} from 'react'
import './css/EducationCSS.css'
import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from 'react-collapsible-component'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Education extends Component{
    constructor() {
        super();
    }

    render(){
        return(
            <div className="eductionSection-outer">
            <div className="eductionSection text-left">
                <ReactCSSTransitionGroup transitionName="fade"
                                         transitionAppear={true}
                                         transitionAppearTimeout={1500}
                                         transitionEnterTimeout={1500}
                                         transitionLeaveTimeout={800}>
                <span className="heading-meta title">Education</span>
                <h2 className="subheading title">My Education</h2>
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup transitionName="slide5"
                                         transitionAppear={true}
                                         transitionAppearTimeout={2500}
                                         transitionEnterTimeout={2500}
                                         transitionLeaveTimeout={1000}>
                <div className="row">

                    <CollapsibleComponent>
                        <CollapsibleHead className="additionalClassForHead" isExpanded={true}>Head title 1</CollapsibleHead>
                        <CollapsibleContent className="additionalClassForContent" isExpanded={true}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex </p>
                        </CollapsibleContent>

                        <CollapsibleHead >Head title 2</CollapsibleHead>
                        <CollapsibleContent >
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </CollapsibleContent>

                        <CollapsibleHead>Head title 3</CollapsibleHead>
                        <CollapsibleContent>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </CollapsibleContent>
                    </CollapsibleComponent>
                </div>
                </ReactCSSTransitionGroup>
            </div>
            </div>
        )
    }
}

export default Education;