import React, { useState } from 'react';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    doctor: '',
    date: '',
    time: '',
    reason: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days from now
    .toISOString()
    .split('T')[0];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Appointment Data:', formData);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      patientName: '',
      doctor: '',
      date: '',
      time: '',
      reason: '',
    });
    setSubmitted(false);
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 p-8 shadow-2xl rounded-xl bg-gray-50">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        Book a Doctor's Appointment
      </h2>

      {submitted ? (
        <div className="text-center">
          <div className="text-green-700 text-lg font-medium mb-4">
            Your appointment has been successfully booked!
          </div>
          <button
            onClick={handleReset}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Book Another Appointment
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Patient Name */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Patient Name</label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Doctor Selection */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Select Doctor</label>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="">-- Choose a doctor --</option>
              <option value="Dr. Smith">Dr. Emily Smith (Cardiologist)</option>
              <option value="Dr. Johnson">Dr. Robert Johnson (General Physician)</option>
              <option value="Dr. Sharma">Dr. Anjali Sharma (Dermatologist)</option>
            </select>
          </div>

          {/* Appointment Date */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Appointment Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={today}
              max={maxDate}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <p className="text-sm text-gray-500 mt-1">* Date must be within the next 30 days</p>
          </div>

          {/* Appointment Time */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Appointment Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Reason for Visit */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Reason for Visit</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="e.g. regular checkup, skin rash, chest pain..."
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Book Appointment
          </button>
        </form>
      )}
    </div>
  );
};

export default BookAppointment;
