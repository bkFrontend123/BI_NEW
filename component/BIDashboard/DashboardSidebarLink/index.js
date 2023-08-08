import React from 'react'
import Link from 'next/link'

import dashLayoutStyle from '@/assets/css/dashboardLayout.module.css'

export default function DashboardSidebarLink(props) {
  const {icon, title, href } = props;

  return (
    <div className={`${dashLayoutStyle.sdbrLnksItem}`}>
      <Link href={href} className={`${dashLayoutStyle.sdbrLnksAnchor}`}>
        <span>{icon}</span>
        <h4>{title}</h4>
      </Link>
    </div>
  )
}