import React from 'react'
import certifications from '../assets/certifications.json'
import CertificationCard from './CertificationCard'

const CertificationCardContainer = () => {
  return (
    certifications.map((cert)=>{
        return <CertificationCard key={cert.certification} {...cert}/>
    })
  )
}

export default CertificationCardContainer