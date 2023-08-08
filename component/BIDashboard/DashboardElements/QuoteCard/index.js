import React, {useState} from 'react'

import DropdownArrowIcon from "@/component/BIDashboard/Icons/IconDropdownArrow";

import style from './style.module.css'

export default function QuoteCard(props) {
  const {title, dateTime, statusType, industry, turnover, employees, city, state, children} = props;

  const [isActive, setActive] = useState(true);
  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className={`${style.quoteCardCol}`}>
        <div className={`d-flex d-md-block align-items-center ${style.quoteCardTtl}`}>
          <span className={`d-md-none me-2 ${style.quoteCardArrow} ${!isActive ? style.active : ''}`} onClick={handleClick}><DropdownArrowIcon /></span>
          <h3>{title}</h3>
          <h5>Last updated: {dateTime}</h5>
          <div className={`${style.quoteStatus} ${statusType == 'progress' ? style.progressStatus : ''} ${statusType == 'offline' ? style.offlineStatus : ''}`}>Quote status:
            {statusType === 'progress' ? (
              <span>In Progress</span>
            ):(
              null
            )}
            {statusType === 'offline' ? (
              <span>Offline quote</span>
            ):(
              null
            )}
          </div>
        </div>
        <div className={`${style.mblQuoteCardInfo} ${!isActive ? style.show : ''}`}>
          <div className={`${style.quoteCardList}`}>
            <ul>
              <li>
                <p><strong>Industry:</strong> {industry}</p>
              </li>
              <li>
                <p><strong>Turnover:</strong> {turnover}</p>
              </li>
              <li>
                <p><strong>Number of Employees:</strong> {employees}</p>
              </li>
              <li>
                <p><strong>City:</strong> {city}</p>
              </li>
              <li>
                <p><strong>State:</strong> {state}</p>
              </li>
            </ul>
          </div>
          <div className={`${style.quoteCardInfo}`}>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
