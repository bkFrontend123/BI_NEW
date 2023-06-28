import React from 'react'
// import '../icons/style.css'
// import '../../../assets/css/icons.css'

export default function BackArrow(props) {
    const { iconColor, height, width } = props
    return (
        <svg width={width} height={height} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={iconColor} d="M0.146447 3.64645C-0.0488155 3.84171 -0.0488155 4.15829 0.146447 4.35355L3.32843 7.53553C3.52369 7.7308 3.84027 7.7308 4.03553 7.53553C4.2308 7.34027 4.2308 7.02369 4.03553 6.82843L1.20711 4L4.03553 1.17157C4.2308 0.976311 4.2308 0.659728 4.03553 0.464466C3.84027 0.269204 3.52369 0.269204 3.32843 0.464466L0.146447 3.64645ZM21.5 3.5H0.5V4.5H21.5V3.5Z" fill="currentColor" />
        </svg>
    )
}