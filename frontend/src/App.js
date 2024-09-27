import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import UserLogin from "./Pages/user_login";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AdminLogin from "./Pages/admin_login";
import JudgeLogin from "./Pages/judge_login";
import LawyerLogin from "./Pages/lawyer_login";
import UserHome from "./Pages/user_home";
import UserCases from "./Pages/user_cases";
import UserFileCase from "./Pages/user_file_case";
import LawyerHome from "./Pages/lawyer_home";
import LaywerCases from "./Pages/lawyer_cases";
import AvailableCases from "./Pages/lawyer_av_cases";

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/judge-login" element={<JudgeLogin />} />
        <Route path="/lawyer-login" element={<LawyerLogin />} />
        <Route path="/user-home" element={<UserHome />} />
        <Route path="/lawyer-home" element={<LawyerHome />} />
        <Route path="/user-cases" element={<UserCases />} />
        <Route path="/lawyer-cases" element={<LaywerCases />} />
        <Route path="/user-file-case" element={<UserFileCase />} />
        <Route path="/available-cases" element={<AvailableCases />} />
      </Routes>
    </Router>
    <ToastContainer
        position="top-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
export default App;