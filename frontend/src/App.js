import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UserLogin from "./Pages/users/user_login";
import LawyerLogin from "./Pages/lawyer/lawyer_login";
import JudgeLogin from "./Pages/judge/judge_login";
import AdminLogin from "./Pages/admin/admin_login";
import UserHome from "./Pages/users/user_home";
import LawyerHome from "./Pages/lawyer/lawyer_home";
import UserCases from "./Pages/users/user_cases";
import LaywerCases from "./Pages/lawyer/lawyer_cases";
import UserFileCase from "./Pages/users/user_file_case";
import UserUpcomingHearings from "./Pages/users/user_upcoming_hearing";
import AvailableCases from "./Pages/lawyer/lawyer_av_cases";
import LawyerUpcomingHearings from "./Pages/lawyer/lawyer_upcoming_hearings";
import JudgeHome from "./Pages/judge/judge_home";
import JudgeCases from "./Pages/judge/judge_cases";
import JudgeAvailableCases from "./Pages/judge/judge_av_cases";
import JudgeUpcomingHearings from "./Pages/judge/judge_upcoming_hearing";



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
        <Route path="/judge-home" element={<JudgeHome />} />
        <Route path="/user-cases" element={<UserCases />} />
        <Route path="/lawyer-cases" element={<LaywerCases />} />
        <Route path="/judge-cases" element={<JudgeCases />} />
        <Route path="/user-file-case" element={<UserFileCase />} />
        <Route path="/user-upcoming-hearing" element={<UserUpcomingHearings />} />
        <Route path="/lawyer-upcoming-hearing" element={<LawyerUpcomingHearings />} />
        <Route path="/judge-upcoming-hearing" element={<JudgeUpcomingHearings />} />
        <Route path="/available-cases" element={<AvailableCases />} />
        <Route path="/judge-available-cases" element={<JudgeAvailableCases />} />

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