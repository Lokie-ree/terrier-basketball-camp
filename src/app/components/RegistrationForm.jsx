"use client";

import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentAge: "",
    guardianName: "",
    phoneNumber: "",
    address: "",
    allergies: "",
    healthConcerns: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    school: "",
    studentGrade: "",
    reference: "",
    termsAndConditions: "",
    paymentType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add API call or form submission logic here
  };

  return (
    <>
      <form
        className="max-w-screen mx-auto bg-vc-blue p-2"
        onSubmit={handleSubmit}
      >
        {[
          { label: "Student Name", id: "studentName", type: "text" },
          { label: "Student Age", id: "studentAge", type: "number" },
          { label: "Guardian Name", id: "guardianName", type: "text" },
          { label: "Phone Number", id: "phoneNumber", type: "text" },
          { label: "Address", id: "address", type: "text" },
          { label: "Allergies", id: "allergies", type: "text" },
          { label: "Health Concerns", id: "healthConcerns", type: "text" },
          {
            label: "Emergency Contact Name",
            id: "emergencyContactName",
            type: "text",
          },
          {
            label: "Emergency Contact Number",
            id: "emergencyContactNumber",
            type: "text",
          },
          { label: "School (2024-2025)", id: "school", type: "text" },
          {
            label: "Student Grade (2024-2025)",
            id: "studentGrade",
            type: "number",
          },
          {
            label: "How did you hear about the camp?",
            id: "reference",
            type: "text",
          },
          {
            label:
              "I, the undersigned parent or guardian of named minor do hereby consent and agree that the named minor may participate in Jerwaski Coleman’s Basketball Academy Camp. ... Please type your full name below.",
            id: "termsAndConditions",
            type: "text",
          },
          { label: "Payment (Cash or Check)", id: "paymentType", type: "text" },
        ].map(({ label, id, type }) => (
          <div className="mb-4" key={id}>
            <label
              className="block text-sm font-bold mb-2 text-vc-gold"
              htmlFor={id}
            >
              {label}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-2 text-vc-blue"
              id={id}
              name={id}
              type={type}
              value={formData[id]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <div className="flex justify-center">
          <button
            className="btn rounded-full bg-vc-gold text-vc-blue"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
