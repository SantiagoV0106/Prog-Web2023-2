import { wobble } from 'ldrs'
import './loader.css'


export function Loader() {
    wobble.register()

    return (
        <div className="loader-container">
            <l-wobble
                size="50"
                speed="1"
                color="white"
            ></l-wobble>
        </div>
    )

}
