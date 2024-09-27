import React, { useState } from 'react'
import UserHeader from '../Components/user_header'
import Footer from '../Components/footer'

export default function UserFileCase() {
    const [caseData, setCaseData] = useState({
        title: '',
        description: '',
        fileType: '',
        documents: null,
    });
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'documents') {
            setCaseData({ ...caseData, documents: files[0] });
        } else {
            setCaseData({ ...caseData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        const formData = new FormData();
        formData.append('title', caseData.title);
        formData.append('description', caseData.description);
        formData.append('fileType', caseData.fileType);
        if (caseData.documents) {
            formData.append('documents', caseData.documents);
        }
    };
  return (
    <>
    <UserHeader />
    <div className='flex'>
    <div className="w-1/2 p-6 m-3 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">File a New Case</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Case Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={caseData.title}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={caseData.description}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="fileType" className="block text-sm font-medium text-gray-700">File Type:</label>
                    <select
                        id="fileType"
                        name="fileType"
                        value={caseData.fileType}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select file type</option>
                        <option value="civil">Civil</option>
                        <option value="criminal">Criminal</option>
                        <option value="family">Family</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="documents" className="block text-sm font-medium text-gray-700">Upload Documents:</label>
                    <input
                        type="file"
                        id="documents"
                        name="documents"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button 
                    type="submit" 
                    disabled={loading}
                    className={`mt-4 w-full py-2 rounded-md text-white font-semibold ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} transition duration-200`}
                >
                    {loading ? 'Filing...' : 'File Case'}
                </button>
            </form>
            {message && <p className="mt-4 text-red-500">{message}</p>}
        </div>
        <div className='w-1/2 mt-2'>
            <img src="https://imagecdn.99acres.com//microsite/wp-content/blogs.dir/6161/files/2024/01/judge-signing-on-the-papers-stockpack-pexels-270x180.jpg?1716533012" alt="" className='h-[31.8rem]'/>
        </div>
        </div>
        <Footer />
    </>
  )
}
