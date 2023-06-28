import React from 'react'
// import '../icons/style.css'
// import '../../../assets/css/icons.css'



export default function Clock(props) {
  const { iconColor, height, width, customClass } = props 
  return (

    <svg width={width} height={height} className={`${customClass}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={iconColor} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#00916E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path className={iconColor} d="M12 6V12L16 14" stroke="#00916E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>







  )
}



