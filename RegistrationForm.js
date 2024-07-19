
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        phoneNo: '',
        country: '',
        city: '',
        panNo: '',
        aadharNo: '',
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const countries = ['India', 'USA', 'UK'];
    const cities = ['City1', 'City2', 'City3']; // You can customize this based on the selected country

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear error on change
    };

    const validate = () => {
        const newErrors = {};
        for (const key in formData) {
            if (!formData[key]) {
                newErrors[key] = `${key.replace(/([A-Z])/g, ' $1')} is required`;
            }
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Redirect to success page with form data
            navigate('/success', { state: { formData } });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registration Form</h2>
            <div>
                <label>First Name:</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                {errors.firstName && <span>{errors.firstName}</span>}
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                {errors.lastName && <span>{errors.lastName}</span>}
            </div>
            <div>
                <label>Username:</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
                {errors.username && <span>{errors.username}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <label>Password:</label>
                <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} />
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? 'Hide' : 'Show'}
                </button>
                {errors.password && <span>{errors.password}</span>}
            </div>
            <div>
                <label>Phone No:</label>
                <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
                {errors.phoneNo && <span>{errors.phoneNo}</span>}
            </div>
            <div>
                <label>Country:</label>
                <select name="country" value={formData.country} onChange={handleChange}>
                    <option value="">Select Country</option>
                    {countries.map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                    ))}
                </select>
                {errors.country && <span>{errors.country}</span>}
            </div>
            <div>
                <label>City:</label>
                <select name="city" value={formData.city} onChange={handleChange}>
                    <option value="">Select City</option>
                    {cities.map((city, index) => (
                        <option key={index} value={city}>{city}</option>
                    ))}
                </select>
                {errors.city && <span>{errors.city}</span>}
            </div>
            <div>
                <label>PAN No:</label>
                <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
                {errors.panNo && <span>{errors.panNo}</span>}
            </div>
            <div>
                <label>Aadhar No:</label>
                <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
                {errors.aadharNo && <span>{errors.aadharNo}</span>}
            </div>
            <button type="submit" disabled={Object.keys(errors).length > 0}>Submit</button>
        </form>
    );
};

export default RegistrationForm;