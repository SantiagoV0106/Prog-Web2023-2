import './inputs.css'

export function Inputs( {type, placeholder, onChange, value}) {
    return (
        <>
            <input className='input' type={type} placeholder={placeholder} onChange={onChange} value={value} />
        </>
    )
}