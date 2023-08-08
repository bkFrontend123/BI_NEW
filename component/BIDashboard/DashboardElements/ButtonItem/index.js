import React from 'react'
import Link from 'next/link'

import {Button} from 'react-bootstrap';

import style from './style.module.css'

export default function ButtonItem(props) {
  const {customClass, title, type, onClick, iconPosition, children} = props;

  return (
    <>
      <Button className={`${style.btnCommon} ${style.noRotate} ${customClass}`} type={type} onClick={onClick}> 
        <span>
          {iconPosition === 'left' ? (
            <i className={`${style.iconLeft}`}>{children}</i>
          ):(
            null
          )}
          {title}
          {iconPosition === 'right' ? (
            <i className={`${style.iconRight}`}>{children}</i>
          ):(
            null
          )}
        </span>
      </Button>
    </>
  )
}
