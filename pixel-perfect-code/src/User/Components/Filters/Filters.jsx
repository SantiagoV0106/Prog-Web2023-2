//Icons
import { FaCode } from "react-icons/fa6";

import './filters.css'

export function Filters({ filters, handleChange }) {
    return (
        <div className="filter-container">
            <h2>Filter by Tags
                <span id="icon-filter">
                    <FaCode />
                </span>
            </h2>
            <div className="filters">
                <div className="checkbox-wrapper-4">
                    <input
                        className="inp-cbx"
                        id="uxresearch"
                        name="uxresearch"
                        type="checkbox"
                        checked={filters.ux}
                        onChange={() => handleChange('ux')}
                    />
                    <label
                        className="cbx"
                        htmlFor="uxresearch"><span>
                            <svg width="12px" height="10px">

                            </svg></span><span>UX Research</span></label>
                    <svg className="inline-svg">
                        <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </symbol>
                    </svg>
                </div>

                <div className="checkbox-wrapper-4">
                    <input
                        className="inp-cbx"
                        id="uidesign"
                        name="uidesign"
                        type="checkbox"
                        checked={filters.ui}
                        onChange={() => handleChange('ui')}
                    />
                    <label
                        className="cbx"
                        htmlFor="uidesign"><span>
                            <svg width="12px" height="10px">

                            </svg></span><span>UI Design</span></label>
                    <svg className="inline-svg">
                        <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </symbol>
                    </svg>
                </div>
                <div className="checkbox-wrapper-4">
                    <input
                        className="inp-cbx"
                        id="webdev"
                        name="webdev"
                        checked={filters.web}
                        onChange={() => handleChange('web')}
                        type="checkbox"
                    />
                    <label
                        className="cbx"
                        htmlFor="webdev"><span>
                            <svg width="12px" height="10px">

                            </svg></span><span>Web Dev</span></label>
                    <svg className="inline-svg">
                        <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </symbol>
                    </svg>
                </div>
            </div>
        </div>
    )
}