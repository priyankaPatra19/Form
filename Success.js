
import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
    const location = useLocation();
    const { formData } = location.state || {};

    return (
        <div>
            <h2>Submission Successful!</h2>
            {formData ? (
                <ul>
                    {Object.entries(formData).map(([key, value]) => (
                        <li key={key}>
                            <strong>{key.replace(/([A-Z])/g, ' $1')}: </strong>{value}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No data submitted.</p>
            )}
        </div>
    );
};

export default Success;