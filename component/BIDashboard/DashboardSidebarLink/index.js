import React from 'react'
import Link from 'next/link'

import dashLayoutStyle from '@/assets/css/dashboardLayout.module.css'

export default function DashboardSidebarLink(props) {
  const { customClass, icon, title, href, onClick } = props;

  return (
    <div className={`${dashLayoutStyle.sdbrLnksItem} ${customClass}`}>
      <Link href={href} className={`${dashLayoutStyle.sdbrLnksAnchor}`} onClick={onClick}>
        <span>{icon}</span>
        <h4>{title}</h4>
      </Link>
    </div>
  )
}