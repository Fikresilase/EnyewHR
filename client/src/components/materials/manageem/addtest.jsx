import React, { useState } from 'react';
import axios from 'axios';
//
const AddTest = () => {
  const [formData, setFormData] = useState({
    type: '',
    question: '',
    choiceA: '',
    choiceB: '',
    choiceC: '',
    choiceD: '',
    correctAnswer: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { question, choiceA, choiceB, choiceC, choiceD, type } = formData;
  
    const questionData = {
      no: Date.now(), // Use a unique number for the question (you can implement a better method)
      question,
      choice_a: choiceA,
      choice_b: choiceB,
      choice_c: choiceC,
      choice_d: choiceD,
      answer: `choice_${formData.correctAnswer.toLowerCase()}`, // Format the answer as 'choice_a', 'choice_b', etc.
    };
  
    try {
      const response = await axios.post(`https://ebc-training-and-research-center.onrender.com/tests/${type}`, questionData);
      setMessage(response.data.message);
      setFormData({
        type: '',
        question: '',
        choiceA: '',
        choiceB: '',
        choiceC: '',
        choiceD: '',
        correctAnswer: '',
      });
    } catch (error) {
      console.error('Error submitting question:', error);
      setMessage(error.response?.data?.message || 'Error submitting question. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Submit a Question</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="type">
            Type
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Type</option>
            <option value="audio">Audio</option>
            <option value="video">Video</option>
            <option value="light">Light</option>
            <option value="camera">Camera</option>
            <option value="rf">RF</option>
            <option value="it">IT</option>
            <option value="editing">Editing</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="question">
            Question
          </label>
          <input
            type="text"
            id="question"
            name="question"
            value={formData.question}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        {['choiceA', 'choiceB', 'choiceC', 'choiceD'].map((choice, index) => (
          <div className="mb-4" key={index}>
            <label className="block mb-1" htmlFor={choice}>
              Choice {String.fromCharCode(65 + index)}
            </label>
            <input
              type="text"
              id={choice}
              name={choice}
              value={formData[choice]}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        ))}
        <div className="mb-4">
          <label className="block mb-1" htmlFor="correctAnswer">
            Correct Answer
          </label>
          <select
            id="correctAnswer"
            name="correctAnswer"
            value={formData.correctAnswer}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Correct Answer</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default AddTest;