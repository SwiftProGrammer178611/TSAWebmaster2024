import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const KalaamDetails = () => {
  const { id } = useParams();
  const [kalaam, setKalaam] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/kalaams.json');
      const data = await response.json();
      const foundKalaam = data.find(kalaam => kalaam.id === parseInt(id));
      setKalaam(foundKalaam);
    };
    fetchData();
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Kalaam Details</h1>
        {kalaam ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-center text-indigo-600">{kalaam.title}</h2>
            <p className="text-gray-700 text-center whitespace-pre-line">{kalaam.lines}</p>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KalaamDetails;
