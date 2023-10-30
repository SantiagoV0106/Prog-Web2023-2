import './inputs.css'

export function Inputs({type, placeholder}) {
    return (
        <>
            <input className='input' type={type} placeholder={placeholder} />
        </>
    )
}