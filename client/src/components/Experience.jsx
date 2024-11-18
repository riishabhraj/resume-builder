import React from 'react';

const Experience = ({ values, handleChange, prevStep, nextStep }) => {
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
            <h3 className="text-2xl font-semibold text-center mb-4">Experience Info</h3>
            <form onSubmit={continueToNext}>
                {/* First Experience Entry */}
                <div className="mb-6">
                    <h4 className="text-xl font-medium mb-2"><b>1</b></h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Institute/Organisation*</label>
                            <input
                                type="text"
                                name="exp1_org"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                                value={values.exp1_org}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Position*</label>
                            <input
                                type="text"
                                name="exp1_pos"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                                value={values.exp1_pos}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Duration*</label>
                            <input
                                type="text"
                                name="exp1_dur"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                                value={values.exp1_dur}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Description for First Experience Entry */}
                    <label className="block text-sm font-medium text-gray-700 mt-4">Description*</label>
                    <input
                        type="text"
                        name="exp1_desc"
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                        value={values.exp1_desc}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Second Experience Entry */}
                <div className="mb-6">
                    <h4 className="text-xl font-medium mb-2"><b>2</b></h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Institute/Organisation*</label>
                            <input
                                type="text"
                                name="exp2_org"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                                value={values.exp2_org}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Position*</label>
                            <input
                                type="text"
                                name="exp2_pos"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                                value={values.exp2_pos}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Duration*</label>
                            <input
                                type="text"
                                name="exp2_dur"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                                value={values.exp2_dur}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Description for Second Experience Entry */}
                    <label className="block text-sm font-medium text-gray-700 mt-4">Description*</label>
                    <input
                        type="text"
                        name="exp2_desc"
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                        value={values.exp2_desc}
                        onChange={handleChange}
                        required
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

export default Experience;