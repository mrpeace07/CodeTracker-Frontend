// // src/components/AllQuestions.js
// import React, { useState, useEffect } from "react";
// import { collection, getDocs, query, where } from "firebase/firestore";
// import { db } from "../config/firebase";

// const AllQuestions = ({ user }) => {
//     console.log(user);
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const q = query(collection(db, "questions"), where("uid", "==", user.uid));
//         const querySnapshot = await getDocs(q);
//         const questionsList = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));
//         setQuestions(questionsList);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching questions:", err);
//         setError(err);
//         setLoading(false);
//       }
//     };

//     fetchQuestions();
//   }, [user]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error fetching questions: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h2>All Questions</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Difficulty</th>
//             <th>Email</th>
//             <th>Link</th>
//             <th>Time</th>
//             <th>Topics</th>
//           </tr>
//         </thead>
//         <tbody>
//           {questions.map(question => (
//             <tr key={question.id}>
//               <td>{question.title}</td>
//               <td>{question.difficulty}</td>
//               <td>{question.email}</td>
//               <td><a href={question.link} target="_blank" rel="noopener noreferrer">{question.link}</a></td>
//               <td>{new Date(question.time).toLocaleString()}</td>
//               <td>{question.topics.join(", ")}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AllQuestions;
import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";

const AllQuestions = ({ user }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const q = query(collection(db, "questions"), where("uid", "==", user.uid));
        const querySnapshot = await getDocs(q);
        const questionsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
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
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">Title</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Difficulty</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Link</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Time</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Topics</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {questions.map((question) => (
            <tr key={question.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {question.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {question.difficulty}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {question.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500 hover:underline">
                <a
                  href={question.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Question
                </a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(question.time).toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {question.topics.join(", ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllQuestions;

