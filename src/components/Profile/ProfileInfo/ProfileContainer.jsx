import React from 'react';
import * as axios from 'axios';
import {setUser} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import Profile from "../Profile";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        axios
            .get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
            .then(response => {
                console.log(response)
                this.props.setUser(response.data)
            })
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile
    }
}

let UrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUser})(UrlDataContainer, ProfileContainer);