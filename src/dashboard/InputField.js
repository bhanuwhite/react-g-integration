import React from 'react'

const InputField = ({ label, name, value, handleChange }) => {
    return (
      <div className="form-group">
        <label className="profile_details_text_editgroup">{label}</label>
        <input
          type="text"
          name={name}
          className="form-control"
          value={value}
          onChange={handleChange}
          required
        />
      </div>
    );
  };

export default InputField
