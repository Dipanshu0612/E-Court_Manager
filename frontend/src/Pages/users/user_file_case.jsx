import React, { useState } from 'react'
import UserHeader from '../../Components/user_header'
import Footer from '../../Components/footer'
import axios from 'axios'
import {toast} from "react-toastify"

export default function UserFileCase() {
    const user_id = sessionStorage.getItem("user_id");
    const [caseData, setCaseData] = useState({
        title: '',
        description: '',
        fileType: '',
        documents: null,
    });

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

        const formData = new FormData();
        formData.append('title', caseData.title);
        formData.append('description', caseData.description);
        formData.append('fileType', caseData.fileType);
        if (caseData.documents) {
            formData.append('documents', caseData.documents);
        }

        try{
            console.log(caseData)
            const response = await axios.post('http://localhost:3001/add_case', {caseData, user_id});
            if(response.data.success){
                toast.success(response.data.message)
                setCaseData({
                    title: '',
                    description: '',
                    fileType: '',
                    documents: null,
                });
        }
        else{
            toast.error(response.data.message)
        }
    }
        catch{
            toast.error(response.data.message)
        }
    };


    return (
        <>
            <UserHeader />
            <div className='flex bg-slate-200'>
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
                                style={{ resize: 'none' }}
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
                            className={`mt-4 w-full py-2 rounded-md text-white font-semibold bg-blue-600 hover:bg-blue-700 transition duration-200`} onClick={handleSubmit}
                        >
                            File Case
                        </button>
                    </form>
                </div>
                <div className='w-1/2 mt-3'>
                    <img src="https://imagecdn.99acres.com//microsite/wp-content/blogs.dir/6161/files/2024/01/judge-signing-on-the-papers-stockpack-pexels-270x180.jpg?1716533012" alt="" className='h-[31.4rem]' />
                </div>
            </div>
            <Footer />
        </>
    )
}
