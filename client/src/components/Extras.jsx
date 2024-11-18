import React from 'react';
import axios from 'axios';

const Extras = ({ values, handleChange, prevStep, submitted, nextStep }) => {
    const back = (e) => {
        e.preventDefault();
        prevStep();
    };

    const formSubmit = async (e) => {
        e.preventDefault();
        submitted();

        const data = values;
        const url = `http://localhost:5000`;

        try {
            await axios.post(`${url}/create-pdf`, data);
            const response = await axios({
                url: `${url}/fetch-pdf`, // Replace with the endpoint for fetching the PDF
                method: 'GET',
                responseType: 'blob', // Ensures binary data is received
            });

            // Create a URL for the binary data
            const pdfUrl = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.setAttribute('download', 'Resume.pdf'); // Set the desired filename
            document.body.appendChild(link);
            link.click(); // Programmatically trigger the download
            document.body.removeChild(link); // Clean up the link element
        } catch (error) {
            console.error('Error downloading the PDF:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-center mb-4">Miscellaneous</h3>
            <form onSubmit={formSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Languages</label>
                        <input
                            type="text"
                            name="extra_1"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                            value={values.extra_1}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Hobbies</label>
                        <input
                            type="text"
                            name="extra_2"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                            value={values.extra_2}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Activity/Achievement</label>
                        <input
                            type="text"
                            name="extra_3"
                            id="extra_3"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                            value={values.extra_3}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Activity/Achievement</label>
                        <input
                            type="text"
                            name="extra_4"
                            id="extra_4"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                            value={values.extra_4}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Activity/Achievement</label>
                    <input
                        type="text"
                        name="extra_5"
                        id="extra_5"
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                        value={values.extra_5}
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
                        Download PDF<i className="fas fa-download ml-1"></i>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Extras;