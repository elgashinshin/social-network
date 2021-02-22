import React from 'react';
import {getStatus, setStatusProfile, setUserId, setUserSuccess} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import Profile from "../Profile";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 14676;
        }
        this.props.setUserId(userId);
        this.props.getStatus(userId);
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

// let UrlDataContainer = withRouter(ProfileContainer);

// export default connect(mapStateToProps, {setUserSuccess, setUserId, getStatus, setStatusProfile})(UrlDataContainer, ProfileContainer);

export default compose(
    connect(mapStateToProps, {setUserSuccess, setUserId, getStatus, setStatusProfile}),
    withRouter
)(ProfileContainer);