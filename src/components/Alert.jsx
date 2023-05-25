/* eslint-disable react/prop-types */
export default function Alert({alertInfo}){
    return (
        <div className={`alert ${alertInfo.className} alert-dismissible fade show`} role="alert">
            {alertInfo.message}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}