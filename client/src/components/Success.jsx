import React from 'react';

const Success = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
                <i className="fas fa-check-circle text-green-500 text-7xl mb-4"></i>
                <h2 className="text-2xl font-semibold">Hang Tight while your Resume Downloads!</h2>
                <br />
            </div>
        </div>
    );
};

export default Success;