// src/MultiStepForm.js

import React, { useState } from 'react';

const MultiStepForm = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        personalInfo: {
            name: '',
            email: '',
            phone: '',
        },
        education: {
            school: '',
            degree: '',
            year: '',
        },
        experience: {
            company: '',
            position: '',
            duration: '',
        },
    });

    const steps = [
        {
            title: 'Personal Information',
            content: (
                <>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={formData.personalInfo.name}
                            onChange={(e) => setFormData({ ...formData, personalInfo: { ...formData.personalInfo, name: e.target.value } })}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={formData.personalInfo.email}
                            onChange={(e) => setFormData({ ...formData, personalInfo: { ...formData.personalInfo, email: e.target.value } })}
                        />
                    </label>
                    <label>
                        Phone:
                        <input
                            type="text"
                            value={formData.personalInfo.phone}
                            onChange={(e) => setFormData({ ...formData, personalInfo: { ...formData.personalInfo, phone: e.target.value } })}
                        />
                    </label>
                </>
            ),
        },
        {
            title: 'Education',
            content: (
                <>
                    <label>
                        School:
                        <input
                            type="text"
                            value={formData.education.school}
                            onChange={(e) => setFormData({ ...formData, education: { ...formData.education, school: e.target.value } })}
                        />
                    </label>
                    <label>
                        Degree:
                        <input
                            type="text"
                            value={formData.education.degree}
                            onChange={(e) => setFormData({ ...formData, education: { ...formData.education, degree: e.target.value } })}
                        />
                    </label>
                    <label>
                        Year of Graduation:
                        <input
                            type="text"
                            value={formData.education.year}
                            onChange={(e) => setFormData({ ...formData, education: { ...formData.education, year: e.target.value } })}
                        />
                    </label>
                </>
            ),
        },
        {
            title: 'Work Experience',
            content: (
                <>
                    <label>
                        Company:
                        <input
                            type="text"
                            value={formData.experience.company}
                            onChange={(e) => setFormData({ ...formData, experience: { ...formData.experience, company: e.target.value } })}
                        />
                    </label>
                    <label>
                        Position:
                        <input
                            type="text"
                            value={formData.experience.position}
                            onChange={(e) => setFormData({ ...formData, experience: { ...formData.experience, position: e.target.value } })}
                        />
                    </label>
                    <label>
                        Duration:
                        <input
                            type="text"
                            value={formData.experience.duration}
                            onChange={(e) => setFormData({ ...formData, experience: { ...formData.experience, duration: e.target.value } })}
                        />
                    </label>
                </>
            ),
        },
    ];

    const handleNext = () => {
        if (step < steps.length - 1) {
            setStep(step + 1);
        }
    };

    const handleBack = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Final Data:', formData);
        // You can handle form submission here (e.g., send data to an API)
    };

    return (
        <div className="multi-step-form">
            <h2>{steps[step].title}</h2>
            <form onSubmit={handleSubmit}>
                {steps[step].content}
                <div className="buttons">
                    {step > 0 && (
                        <button type="button" onClick={handleBack}>
                            Back
                        </button>
                    )}
                    {step < steps.length - 1 ? (
                        <button type="button" onClick={handleNext}>
                            Next
                        </button>
                    ) : (
                        <button type="submit">Submit</button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default MultiStepForm;