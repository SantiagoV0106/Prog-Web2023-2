import { ring2 } from 'ldrs'
import './loader.css'
export function Loader() {
    ring2.register()
    return (
        <div className="loader-container">
            <l-ring-2
                size="50"
                stroke="6"
                stroke-length="0.25"
                bg-opacity="0.1"
                speed="0.8"
                color="#0084FF"
            ></l-ring-2>
        </div>
    )
}