import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CurrentVideo = () => {
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    class: "",
    idNo: "",
    accessPassword: "",
  });
  const [correctAccessPassword, setCorrectAccessPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [testData, setTestData] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchTest = async () => {
      try {
        const response = await axios.get("https://ebc-training-and-research-center.onrender.com/currents/video");
        const { questions, password } = response.data;

        setTestData(questions);
        setCorrectAccessPassword(password);

        const answers = questions.map((question) => {
          const correctAnswerKey = question.answer;
          return correctAnswerKey.slice(-1).toUpperCase();
        });

        setCorrectAnswers(answers);
      } catch (error) {
        console.error("Error fetching test:", error);
      }
    };

    fetchTest();
  }, []);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (studentInfo.accessPassword === correctAccessPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid password. Please try again.");
    }
  };

  const handleAnswerChange = (questionIndex, choice) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: choice,
    });
  };

  const sendToTelegram = async (data) => {
    const telegramBotToken = "YOUR_TELEGRAM_BOT_TOKEN";
    const chatId = "YOUR_CHAT_ID";
  
    const message = `
      video Test
      Name: ${data.name}
      Class: ${data.class}
      ID No: ${data.idNo}
      Selected Answers: ${data.selected_answers.join(", ")}
      Result: ${data.result}
    `;
  
    try {
      await axios.post(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        chat_id: chatId,
        text: message.trim(),
      });
      alert("Results sent to Telegram successfully");
    } catch (error) {
      console.error("Error sending to Telegram:", error);
    }
  };

  const handleSubmitTest = async () => {
    const result = correctAnswers.reduce((acc, correctAnswer, index) => {
      return acc + (correctAnswer === selectedAnswers[index] ? 1 : 0);
    }, 0);
  
    const submissionData = {
      ...studentInfo,
      selected_answers: Object.values(selectedAnswers),
      result,
    };
  
    console.log("Submitting with the following data:", submissionData);
    await sendToTelegram(submissionData);

    navigate('/'); // Redirect to the homepage after submission
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {!isAuthenticated ? (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h3 className="text-xl font-bold text-center mb-6">Student Information</h3>
          <form onSubmit={handlePasswordSubmit}>
            <label className="block mb-4">
              <span className="text-gray-700">Name</span>
              <input
                type="text"
                name="name"
                value={studentInfo.name}
                onChange={(e) => setStudentInfo({ ...studentInfo, name: e.target.value })}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Class (Optional)</span>
              <input
                type="text"
                name="class"
                value={studentInfo.class}
                onChange={(e) => setStudentInfo({ ...studentInfo, class: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">ID No (Optional)</span>
              <input
                type="text"
                name="idNo"
                value={studentInfo.idNo}
                onChange={(e) => setStudentInfo({ ...studentInfo, idNo: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Access Password</span>
              <input
                type="password"
                name="accessPassword"
                value={studentInfo.accessPassword}
                onChange={(e) => setStudentInfo({ ...studentInfo, accessPassword: e.target.value })}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </label>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <h3 className="text-2xl font-bold text-center mb-6">Video Test</h3>
          {testData.map((question, index) => (
            <div key={index} className="mb-6">
              <p className="font-semibold text-lg">
                {question.no}. {question.questionText} {/* Displaying question number */}
              </p>
              <div className="mt-2 space-y-2">
                {Object.entries(question.choices).map(([key, choice]) => (
                  <label key={key} className="block">
                    <input
                      type="radio"
                      name={`question_${index}`}
                      value={key}
                      checked={selectedAnswers[index] === key}
                      onChange={() => handleAnswerChange(index, key)}
                      className="mr-2"
                    />
                    {choice}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={handleSubmitTest}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
          >
            Submit Test
          </button>
        </div>
      )}
    </div>
  );
};

export default CurrentVideo;