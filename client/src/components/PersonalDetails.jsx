import React from 'react';

const PersonalDetails = ({ values, handleChange, nextStep }) => {
    const continueToNext = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-center mb-4">Personal Info</h3>
            <form onSubmit={continueToNext}>
                {/* Personal Information Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name*</label>
                        <input
                            type="text"
                            name="name"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                            onChange={handleChange}
                            value={values.name}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email*</label>
                        <input
                            type="email"
                            name="email"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                            onChange={handleChange}
                            value={values.email}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Mobile*</label>
                        <input
                            type="text"
                            name="phone"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                            onChange={handleChange}
                            value={values.phone}
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Linkedin</label>
                        <input
                            type="text"
                            name="linkedin"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                            value={values.linkedin}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Github</label>
                        <input
                            type="text"
                            name="github"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                            value={values.github}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Skills* (Separate each skill with a space and a comma)</label>
                    <input
                        type="text"
                        name="skills"
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                        value={values.skills}
                        onChange={handleChange}
                    />
                </div>

                {/* Navigation Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200">
                        Next<i className="fas fa-angle-right ml-1"></i>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PersonalDetails;