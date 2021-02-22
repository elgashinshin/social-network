import React from "react";
import style from './FormControls.module.css'

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div>
                {props.children}
            </div>
            {hasError ? <span className={style.errorSpan}>{meta.error}</span> : ''}
        </div>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}><input className={meta.touched && meta.error ? style.error : ''} {...input} {...restProps}/></FormControl>
    )
}

// export const Input = ({input, meta, ...props}) => {
//     return (
//         <div>
//             <div>
//                 <input className={meta.touched && meta.error ? style.error : ''} {...input} {...props}/>
//             </div>
//             {
//                 meta.error && meta.touched ? <span className={style.errorSpan}>{meta.error}</span> : ''
//             }
//         </div>
//     )
// }