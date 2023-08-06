import React from 'react'
import PersonalDetails from './personal_details/PersonalDetails'
import ReportDetails from './report_details/ReportDetails'
import './detailcardStyles.css'

const DetailsCard = () => {
    const details={
        name: 'Jahawar J. Shah',
        sex: 'Female',
        age: '48',
        occupation: 'Artist',
        email: 'abc@gmail.com',
        phone: '+91 41245 78945',
        region: 'Andhra Pradesh',
    
        medicalinfo: 'None',
        allergies: 'None'
      }
  return (
    <div className='detailcard-container'>
        <PersonalDetails details={details}/>
        <ReportDetails details={details}/>
    </div>
  )
}

export default DetailsCard