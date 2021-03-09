import React, {useState, useEffect} from "react";
import {setStatusProfile} from "../../../redux/profile-reducer";


let ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        if (props.isOwner) {
            setEditMode(true)
        }

    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.setStatus(status)
    }

    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return (
        <div>
            {
                !editMode ? <span onClick={activateEditMode}>{!props.status ? '-------'
                    : props.status}</span> : <input onBlur={deactivateEditMode} onChange={onChangeStatus} autoFocus={true} value={status}/>
            }
        </div>
    )
}

export default ProfileStatus
