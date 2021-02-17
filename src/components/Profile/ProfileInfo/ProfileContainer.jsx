import React from 'react';
import * as axios from 'axios';
import {setUserId, setUserSuccess} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import Profile from "../Profile";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.setUserId(userId);
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let UrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserSuccess, setUserId})(UrlDataContainer, ProfileContainer);