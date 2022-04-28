import React,{useState} from 'react'
import './Register.css';
import register from './images/register.png'
import PersonalDetails from './Forms/PersonalDetails';
import CollegeDetails from './Forms/CollegeDetails';
import PersonalMobile from './Forms/PersonalMobile';

const Register = () => {
  const [step,setStep]  = useState(1);
  
  const [formData,setFormData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    username:"",
    password:"",
    branch:"cs",
    year:"1",
    division:"",
    prn:"",
    roll:"",
  })

  const nextStep = () => {
     setStep(step+1);
  }

  const hanelInputData = (input) => e => {
     const {value} = e.target;
     setFormData(prevState => ({
       ...prevState,
       [input]:value
     }) 
     )
  }

  const renderPC = () => {
    const choice = step;
    switch(choice){
      case 1:
        return <PersonalDetails nextStep={nextStep} handleFormData={hanelInputData} value={formData} />;
      
      case 2:
        return <CollegeDetails nextStep={nextStep} handleFormData={hanelInputData} value={formData}  />;
    }
  }

  const renderMOBILE = () => {
    const choice = step;
    switch(choice){
      case 1:
        return <PersonalMobile nextStep={nextStep} handleFormData={hanelInputData} value={formData}/>
    }
  }
  return(
    <>
    <div className='registerPC'>
    <div className='rBlock'>
      <div className='rLeft'>
          <img src={register} />
      </div>
      {renderPC()}
    </div>
    </div>
    <div className='registerMOB'>
    {renderMOBILE()}
    </div>
    </>
  )
};

export default Register;
