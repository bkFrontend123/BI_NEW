import React, {useState} from 'react'
import Image from 'next/image'

import LinkItem from '@/component/BIDashboard/DashboardElements/LinkItem';

import DropdownArrowIcon from "@/component/BIDashboard/Icons/IconDropdownArrow";
import InfoIcon from '@/component/BIDashboard/Icons/IconInfo';

import style from './style.module.css'

export default function CoverageCard(props) {
  const {icon, title, description, link, children} = props;

  const [isActive, setActive] = useState(true);
  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className={`${style.shopCovrgCol}`}>
        <div className={`${style.shopCovrgTtl}`}>
          <div className={`d-md-none me-2 ${style.shopCovrgArrow} ${!isActive ? style.active : ''}`} onClick={handleClick}><DropdownArrowIcon /></div>
          <span><i><Image src={icon} width={70} height={70} alt={title} /></i></span>
          <h3 onClick={handleClick}>{title}</h3>
          <div className={`${style.shopActnBtn}`}>
            {children}
          </div>
        </div>
        <div className={`${style.mblShopCovrgInfo} ${!isActive ? style.show : ''}`}>
          <p>{description}</p>
          <div className={`${style.shopCovrgBtns}`}>
            <LinkItem
              title={<>Learn more about {title} <span className='ms-1'><InfoIcon /></span></>}
              href={link}
            />
          </div>
        </div>
      </div>
    </>
  )
}
