import React from 'react';

const Education = ({ values, handleChange, prevStep, nextStep }) => {
    const back = (e) => {
        e.preventDefault();
        prevStep();
    };

    const continueToNext = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-center mb-4">Education Info</h3>
            <form onSubmit={continueToNext}>
                {/* First Education Entry */}
                <div className="mb-6">
                    <h4 className="text-xl font-medium mb-2"><b>1</b></h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">College/University*</label>
                            <input
                                type="text"
                                name="edu1_school"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                                value={values.edu1_school}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Year*</label>
                            <input
                                type="text"
                                name="edu1_year"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                                value={values.edu1_year}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Qualification*</label>
                            <input
                                type="text"
                                name="edu1_qualification"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                                value={values.edu1_qualification}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Description for First Education Entry */}
                    <label className="block text-sm font-medium text-gray-700 mt-4">Description*</label>
                    <input
                        type="text"
                        name="edu1_desc"
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                        value={values.edu1_desc}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Second Education Entry */}
                <div className="mb-6">
                    <h4 className="text-xl font-medium mb-2"><b>2</b></h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">School</label>
                            <input
                                type="text"
                                name="edu2_school"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                                value={values.edu2_school}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Year</label>
                            <input
                                type="text"
                                name="edu2_year"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                                value={values.edu2_year}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Qualification</label>
                            <input
                                type="text"
                                name="edu2_qualification"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                                value={values.edu2_qualification}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Description for Second Education Entry */}
                    <label className="block text-sm font-medium text-gray-700 mt-4">Description</label>
                    <input
                        type="text"
                        name="edu2_desc"
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                        value={values.edu2_desc}
                        onChange={handleChange}
                    />
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between">
                    <button
                        type="button"
                        className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded transition duration-200"
                        onClick={back}>
                        Back
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200">
                        Next<i className="fas fa-angle-right ml-1"></i>
                    </button>
                </div>

            </form>
        </div>
    );
};

export default Education;