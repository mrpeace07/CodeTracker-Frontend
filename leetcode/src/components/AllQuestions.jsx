// src/components/AllQuestions.js
import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";

const AllQuestions = ({ user }) => {
    console.log(user);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const q = query(collection(db, "questions"), where("uid", "==", user.uid));
        const querySnapshot = await getDocs(q);
        const questionsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setQuestions(questionsList);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching questions:", err);
        setError(err);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching questions: {error.message}</div>;
  }

  return (
    <div>
      <h2>All Questions</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Difficulty</th>
            <th>Email</th>
            <th>Link</th>
            <th>Time</th>
            <th>Topics</th>
          </tr>
        </thead>
        <tbody>
          {questions.map(question => (
            <tr key={question.id}>
              <td>{question.title}</td>
              <td>{question.difficulty}</td>
              <td>{question.email}</td>
              <td><a href={question.link} target="_blank" rel="noopener noreferrer">{question.link}</a></td>
              <td>{new Date(question.time).toLocaleString()}</td>
              <td>{question.topics.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllQuestions;

