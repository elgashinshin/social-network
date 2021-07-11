import React, {useState, useEffect, ChangeEvent} from "react";
import {setStatusProfile} from "../../../redux/profile-reducer";

type PropsType = {
    isOwner: boolean
    status: string
    setStatus: (status: string) => void
}

let ProfileStatus: React.FC<PropsType> = ({isOwner, status, setStatus}) => {
    let [editMode, setEditMode] = useState(false)
    let [localeStatus, setLocaleStatus] = useState(status)

    const activateEditMode = () => {
        if (isOwner) {
            setEditMode(true)
        }

    }

    const deactivateEditMode = () => {
        setEditMode(false)
        setStatus(localeStatus)
    }

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setLocaleStatus(e.currentTarget.value)
    }

    useEffect(() => {
        setLocaleStatus(status)
    }, [status])

    return (
        <div>
            {
                !editMode ? <span onClick={activateEditMode}>{!status ? '-------'
                    : status}</span> : <input onBlur={deactivateEditMode} onChange={onChangeStatus} autoFocus={true} value={localeStatus}/>
            }
        </div>
    )
}

export default ProfileStatus
