import React, { useEffect, useState } from 'react';
import Footer from '../../Components/footer';
import LawyerHeader from '../../Components/lawyer_header';

const LawyerUpcomingHearings = () => {
    const [hearings, setHearings] = useState([{ "id": 123, "caseName": "Case 1", "date": "2022-01-01", "location": "Location 1", "status": "Status 1" }, { "id": 124, "caseName": "Case 2", "date": "2022-01-02", "location": "Location 2", "status": "Status 2" }]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //   useEffect(() => {
    //     const fetchHearings = async () => {
    //       try {
    //         const response = await fetch('/api/upcoming-hearings');
    //         if (!response.ok) {
    //           throw new Error('Network response was not ok');
    //         }
    //         const data = await response.json();
    //         setHearings(data);
    //       } catch (err) {
    //         setError(err.message);
    //       } finally {
    //         setLoading(false);
    //       }
    //     };

    //     fetchHearings();
    //   }, []);

    if (loading) {
        return <div className="text-center text-blue-600">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-600">Error: {error}</div>;
    }

    return (
        <>
            <LawyerHeader />
            <div className="p-6 border border-gray-300 rounded-lg bg-slate-200 shadow-md">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Upcoming Hearings</h1>
                {hearings.length === 0 ? (
                    <p>No upcoming hearings.</p>
                ) : (
                    <ul className="space-y-4">
                        {hearings.map((hearing) => (
                            <li key={hearing.id} className="p-4 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition duration-300 shadow-md cursor-pointer hover:scale-105">
                                <div className='flex items-center'>
                  <div>
                    <h4 className="text-blue-600 font-semibold">{hearing.caseName}</h4>
                    <h5>Date: {new Date(hearing.date).toLocaleString()}</h5>
                    <h5>Location: {hearing.location}</h5>
                    <h5>Status: {hearing.status}</h5>
                  </div>
                  <div className='mx-5'>
                    <h5>Judge Name: ABCD</h5>
                    <h5>User Name: XYZ</h5>
                  </div>
                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <Footer />
        </>
    );
};

export default LawyerUpcomingHearings;
