import React, { useState } from 'react';
import '../App.css';
import PersonalDetails from './PersonalDetails';
import Experience from './Experience';
import Project from './Project';
import Education from './Education';
import Success from './Success';
import Extras from './Extras';

const UserForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        skills: '',

        exp1_org: '',
        exp1_pos: '',
        exp1_desc: '',
        exp1_dur: '',

        exp2_org: '',
        exp2_pos: '',
        exp2_desc: '',
        exp2_dur: '',

        proj1_title: '',
        proj1_link: '',
        proj1_desc: '',

        proj2_title: '',
        proj2_link: '',
        proj2_desc: '',

        edu1_school: '',
        edu1_year: '',
        edu1_qualification: '',
        edu1_desc: '',

        edu2_school: '',
        edu2_year: '',
        edu2_qualification: '',
        edu2_desc: '',

        extra_1: '',
        extra_2: '',
        extra_3: '',
        extra_4: '',
        extra_5: '',

        status: 0,
    });

    // Proceed to next step
    const nextStep = () => setStep(prevStep => prevStep + 1);

    // Go back to previous step
    const prevStep = () => setStep(prevStep => prevStep - 1);

    const submitted = () => {
        setFormData(prevData => ({ ...prevData, status: prevData.status + 1 }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    // Render the appropriate component based on the current step
    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <PersonalDetails
                        values={formData}
                        nextStep={nextStep}
                        handleChange={handleChange}
                    />
                );
            case 2:
                return (
                    <Experience
                        values={formData}
                        prevStep={prevStep}
                        nextStep={nextStep}
                        handleChange={handleChange}
                    />
                );
            case 3:
                return (
                    <Project
                        values={formData}
                        prevStep={prevStep}
                        nextStep={nextStep}
                        handleChange={handleChange}
                    />
                );
            case 4:
                return (
                    <Education
                        values={formData}
                        prevStep={prevStep}
                        nextStep={nextStep}
                        handleChange={handleChange}
                    />
                );
            case 5:
                return (
                    <Extras
                        values={formData}
                        prevStep={prevStep}
                        nextStep={nextStep}
                        submitted={submitted}
                        handleChange={handleChange}
                    />
                );
            case 6:
                return <Success />;
            default:
                return null;
        }
    };

    return (
      <div className="App pt-5 mt-5">
          <div className="container col-lg-8 mx-auto text-center">
              <div className="max-w-3xl flex justify-between px-1 mb-6 mx-auto">
                  <h3 className={`text-xl font-semibold ${step === 1 ? 'text-blue-600' : 'text-gray-500'}`}>Personal Details</h3>
                  <h3 className={`text-xl font-semibold ${step === 2 ? 'text-blue-600' : step > 2 ? 'text-gray-500' : ''}`}>Experience</h3>
                  <h3 className={`text-xl font-semibold ${step === 3 ? 'text-blue-600' : step > 3 ? 'text-gray-500' : ''}`}>Education</h3>
                  <h3 className={`text-xl font-semibold ${step === 4 ? 'text-blue-600' : step > 4 ? 'text-gray-500' : ''}`}>Projects</h3>
                  <h3 className={`text-xl font-semibold ${step === 5 ? 'text-blue-600' : step > 5 ? 'text-gray-500' : ''}`}>Extras</h3>
              </div>

              {renderStep()}
          </div>
          <br />
      </div>
    );
};

export default UserForm;