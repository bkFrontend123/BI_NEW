import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import {Row, Col} from 'react-bootstrap';

import DashboardCard from '@/component/BIDashboard/DashboardCard'
import DashboardHeadingItem from '@/component/BIDashboard/DashboardHeading'
import PolicyCardItem from "@/component/BIDashboard/DashboardElements/PolicyCard";
import PremiumFieldItem from '@/component/BIDashboard/DashboardElements/PremiumField';
import LinkItem from '@/component/BIDashboard/DashboardElements/LinkItem';
import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';
import NoItemCard from "@/component/BIDashboard/DashboardElements/NoItemCard";

import EmailIcon from '@/component/BIDashboard/Icons/IconEmail';
import ArrowPrimaryIcon from '@/component/BIDashboard/Icons/IconArrowPrimary';

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';

import bajajAllianz_logo from '@/public/policyLogos/bajajAllianz_logo.png'
import icici_logo from '@/public/policyLogos/icici_logo.png'
import tataAIG_logo from '@/public/policyLogos/tataAIG_logo.png'

export default function YourPolicies() {

  return (
    <>
      <Head>
        <title>Your Policies | BimaKavach</title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Head>
      <DashboardCard>
        <Row className="g-3 g-md-4 align-items-center justify-space-between mb-4">
          <Col md>
            <DashboardHeadingItem
              title="Your Policies"
            />
          </Col>
          <Col md="auto">
            
          </Col>
        </Row>
        
        <Row className="g-3 g-md-4">
          <Col xs={12}>
            <PolicyCardItem
              title="Fire Insurance"
              purchaseDate="24 April 2023"
              insurerLogo={icici_logo}
              insurerName="ICICI Lombard"
              policyPeriod="29 April 2023 to 28 April 2024"
              statusType="pending"
            >
              <Row className="g-0 align-items-center">
                <Col md={8} lg={9}>
                  <Row className="g-3 align-items-center">
                    <Col md>
                      <PremiumFieldItem
                        title="Sum insured"
                        cost="1500 Cr"
                      />
                    </Col>
                    <Col md>
                      <PremiumFieldItem
                        title="Premium"
                        cost="50,000"
                      />
                    </Col>
                    <Col md={4}>
                      <LinkItem
                        title="Email Policy"
                        icon="true"
                        href="javascript:void(0);"
                      >
                        <EmailIcon />
                      </LinkItem>
                    </Col>
                  </Row>
                </Col>
                <Col md={4} lg={3}>
                  <Row className="g-3 align-items-center">
                    <Col md={12}>
                      <ButtonItem
                        title="Fill Proposal Form"
                        type="submit"
                        iconPosition="right"
                        customClass={`w-100 m-0 px-2 ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
                      >
                        <ArrowPrimaryIcon />
                      </ButtonItem>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </PolicyCardItem>
          </Col>
          <Col xs={12}>
            <PolicyCardItem
              title="Shopkeepers Insurance"
              purchaseDate="24 April 2023"
              insurerLogo={tataAIG_logo}
              insurerName="TATA AIG"
              policyPeriod="29 April 2023 to 28 April 2024"
              statusType="process"
            >
              <Row className="g-0 align-items-center">
                <Col md={8} lg={9}>
                  <Row className="g-3 align-items-center">
                    <Col md>
                      <PremiumFieldItem
                        title="Sum insured"
                        cost="1 Cr"
                      />
                    </Col>
                    <Col md>
                      <PremiumFieldItem
                        title="Premium"
                        cost="50,000"
                      />
                    </Col>
                    <Col md={4}>
                      <LinkItem
                        title="Email Policy"
                        icon="true"
                        href="javascript:void(0);"
                      >
                        <EmailIcon />
                      </LinkItem>
                    </Col>
                  </Row>
                </Col>
                <Col md={4} lg={3}>
                  <Row className="g-3 align-items-center">
                    <Col md={12}>
                      <ButtonItem
                        title="Fill Proposal Form"
                        type="submit"
                        iconPosition="right"
                        customClass={`w-100 m-0 px-2 ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
                      >
                        <ArrowPrimaryIcon />
                      </ButtonItem>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </PolicyCardItem>
          </Col>
          <Col xs={12}>
            <PolicyCardItem
              title="Office Insurance"
              purchaseDate="24 April 2023"
              insurerLogo={bajajAllianz_logo}
              insurerName="Bajaj"
              policyPeriod="29 April 2023 to 28 April 2024"
              statusType="confirm"
            >
              <Row className="g-0 align-items-center">
                <Col md={8} lg={9}>
                  <Row className="g-3 align-items-center">
                    <Col md>
                      <PremiumFieldItem
                        title="Sum insured"
                        cost="1 Cr"
                      />
                    </Col>
                    <Col md>
                      <PremiumFieldItem
                        title="Premium"
                        cost="50,000"
                      />
                    </Col>
                    <Col md={4}>
                      <LinkItem
                        title="Email Policy"
                        icon="true"
                        href="javascript:void(0);"
                      >
                        <EmailIcon />
                      </LinkItem>
                    </Col>
                  </Row>
                </Col>
                <Col md={4} lg={3}>
                  <Row className="g-3 align-items-center">
                    <Col md={12}>
                      <ButtonItem
                        title="Fill Proposal Form"
                        type="submit"
                        iconPosition="right"
                        customClass={`w-100 m-0 px-2 ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
                      >
                        <ArrowPrimaryIcon />
                      </ButtonItem>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </PolicyCardItem>
          </Col>
        </Row>

        <NoItemCard customClass="mt-4">No Policies Found</NoItemCard>
      </DashboardCard>
    </>
  )
}
