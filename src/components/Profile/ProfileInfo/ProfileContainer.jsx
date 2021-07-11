import React from 'react';
import {
    getStatus,
    savePhoto,
    setStatusProfile,
    setUserId,
    setUserSuccess,
    updateProfile
} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import Profile from "../Profile";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.setUserId(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                isOwner={!this.props.match.params.userId}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.header.userId
    }
}

export default compose(
    connect(mapStateToProps, {setUserSuccess, setUserId, getStatus, setStatusProfile, savePhoto, updateProfile}),
    withRouter
)(ProfileContainer);