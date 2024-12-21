import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditingTest = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]); // Store selected questions
  const [password, setPassword] = useState(""); // State for password input
  const navigate = useNavigate();
  useEffect(() => {
    // Fetching the data from the backend API
    axios
      .get("https://ebc-training-and-research-center.onrender.com/tests/editing")
      .then((response) => {
        setQuestions(response.data); // Set the questions into state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Handle question selection (toggle selection)
  const handleQuestionSelect = (question) => {
    if (selectedQuestions.some((q) => q.no === question.no)) {
      // Remove question if already selected
      setSelectedQuestions((prev) => prev.filter((q) => q.no !== question.no));
    } else {
      // Add question if not selected
      setSelectedQuestions((prev) => [...prev, question]);
    }
  };

  // Send selected questions and password to the backend
  const submitSelectedQuestions = () => {
    if (selectedQuestions.length === 0 || !password) {
      console.error("No questions selected or password missing.");
      return;
    }

    const formattedQuestions = selectedQuestions.map((question) => ({
      no: question.no,
      questionText: question.question,
      choices: {
        A: question.choice_a,
        B: question.choice_b,
        C: question.choice_c,
        D: question.choice_d,
      },
      answer: question.answer, // Include the correct answer
    }));

    axios
      .post("https://ebc-training-and-research-center.onrender.com/currents/editing", {
        questions: formattedQuestions,
        password,
      })
      .then((response) => {
        console.log("Test created successfully:", response.data);
        // Optionally reset the state after submission
        setSelectedQuestions([]);
        setPassword("");
      })
      .catch((error) => {
        console.error("Error submitting questions:", error);
      });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="container pb-6 justify-between flex">
        <h1 className="text-3xl px-10 font-bold mb-4">
          Select Questions for Editing and Graphics Test
        </h1>
        <button
          onClick={() => navigate("/addtest")}
          className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add questions
        </button>
      </div>
      {questions.length === 0 ? (
        <p>Loading questions...</p>
      ) : (
        <div>
          {questions.map((question) => (
            <div
              key={question.no}
              className={`mb-6 p-4 bg-white shadow-md rounded ${
                selectedQuestions.some((q) => q.no === question.no)
                  ? "border-2 border-blue-500"
                  : ""
              }`}
              onClick={() => handleQuestionSelect(question)}
            >
              <h2 className="text-xl font-semibold">{`${question.no}. ${question.question}`}</h2>
              <div className="ml-6 space-y-2">
                <p>{`A: ${question.choice_a}`}</p>
                <p>{`B: ${question.choice_b}`}</p>
                <p>{`C: ${question.choice_c}`}</p>
                <p>{`D: ${question.choice_d}`}</p>
                <p className="font-semibold">{`Correct Answer: ${question.answer.toUpperCase()}`}</p>
              </div>
            </div>
          ))}

          {/* Password input field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Enter access password:
            </label>
            <input
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>

          {/* Button to submit the selected questions */}
          <button
            onClick={submitSelectedQuestions}
            className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Create the test
          </button>
        </div>
      )}
    </div>
  );
};

export default EditingTest;
