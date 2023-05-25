/* eslint-disable react/prop-types */
export default function Input(props){
    return (
        <div className="mb-3">
            <label 
                htmlFor={props.name} 
                className="form-label"
            >{props.title}</label>
            <input 
                type={props.type} 
                name={props.name} 
                id={props.name} 
                className={props.className} 
                placeholder={props.placeholder} 
                onChange={props.onChange} 
                value={props.value}
            />
            <div className={props.errorDiv}>{props.errorMsg}</div> 
        </div>
    )
}