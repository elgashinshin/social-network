import React from "react";
import {setStatusProfile} from "../../../redux/profile-reducer";



class ProfileStatus extends React.Component {
    state = {
        status: this.props.status,
        editMode: false
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
        this.state.status = this.props.status
    }

    onChangeStatus = (ev) => {
        this.setState({
            status: ev.currentTarget.value
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.setStatus(this.state.status)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode ? <span onClick={this.activateEditMode}>{!this.props.status ? '-------'
                        : this.props.status}</span> : <input onBlur={this.deactivateEditMode} onChange={this.onChangeStatus} autoFocus={true} value={this.state.status}/>
                }
            </div>
        )
    }
}

