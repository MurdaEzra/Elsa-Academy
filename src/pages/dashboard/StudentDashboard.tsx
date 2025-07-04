import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Book, FileText, BarChart2, MessageSquare, Calendar, LogOut, Menu, X, ChevronRight } from 'lucide-react';
// Dashboard components
const Assignments = () => <div className="bg-white shadow rounded-lg p-6">
    <h2 className="text-2xl font-bold mb-6">My Assignments</h2>
    <div className="space-y-6">
      {[{
      id: 1,
      subject: 'Mathematics',
      title: 'Algebra Equations',
      deadline: '2023-06-15',
      status: 'Pending'
    }, {
      id: 2,
      subject: 'English',
      title: 'Essay on Literature',
      deadline: '2023-06-10',
      status: 'Submitted'
    }, {
      id: 3,
      subject: 'Science',
      title: 'Physics Experiment',
      deadline: '2023-06-20',
      status: 'Pending'
    }, {
      id: 4,
      subject: 'Social Studies',
      title: 'History Research',
      deadline: '2023-06-12',
      status: 'Graded',
      grade: 'A-'
    }].map(assignment => <div key={assignment.id} className="border rounded-lg p-4 hover:bg-gray-50">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-lg">{assignment.title}</h3>
              <p className="text-sm text-gray-500">{assignment.subject}</p>
            </div>
            <span className={`px-2 py-1 text-xs rounded-full ${assignment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : assignment.status === 'Submitted' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
              {assignment.status}
              {assignment.grade && ` • ${assignment.grade}`}
            </span>
          </div>
          <div className="mt-2">
            <p className="text-sm">Deadline: {assignment.deadline}</p>
          </div>
          <div className="mt-3">
            <button className="text-sm text-yellow-600 hover:text-yellow-700 font-medium">
              View Details
            </button>
          </div>
        </div>)}
    </div>
  </div>;
const Performance = () => <div className="bg-white shadow rounded-lg p-6">
    <h2 className="text-2xl font-bold mb-6">Academic Performance</h2>
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-4">Current Term Summary</h3>
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-white rounded shadow">
            <p className="text-sm text-gray-500">Average Grade</p>
            <p className="text-2xl font-bold text-yellow-600">B+</p>
          </div>
          <div className="text-center p-3 bg-white rounded shadow">
            <p className="text-sm text-gray-500">Position</p>
            <p className="text-2xl font-bold text-yellow-600">5 / 32</p>
          </div>
          <div className="text-center p-3 bg-white rounded shadow">
            <p className="text-sm text-gray-500">Attendance</p>
            <p className="text-2xl font-bold text-yellow-600">98%</p>
          </div>
          <div className="text-center p-3 bg-white rounded shadow">
            <p className="text-sm text-gray-500">Behavior</p>
            <p className="text-2xl font-bold text-yellow-600">Excellent</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Subject Performance</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subject
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mid-Term
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                End-Term
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Average
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Grade
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[{
            subject: 'Mathematics',
            midTerm: 78,
            endTerm: 82,
            average: 80,
            grade: 'A-'
          }, {
            subject: 'English',
            midTerm: 75,
            endTerm: 79,
            average: 77,
            grade: 'B+'
          }, {
            subject: 'Science',
            midTerm: 81,
            endTerm: 85,
            average: 83,
            grade: 'A-'
          }, {
            subject: 'Social Studies',
            midTerm: 72,
            endTerm: 76,
            average: 74,
            grade: 'B'
          }, {
            subject: 'Kiswahili',
            midTerm: 68,
            endTerm: 74,
            average: 71,
            grade: 'B-'
          }].map((subject, idx) => <tr key={idx} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">
                    {subject.subject}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {subject.midTerm}%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {subject.endTerm}%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {subject.average}%
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {subject.grade}
                  </span>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  </div>;
const Feedback = () => {
  const [message, setMessage] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    alert('Feedback submitted!');
    setMessage('');
  };
  return <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Feedback & Support</h2>
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Send Message to Admin</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <select id="subject" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500">
              <option>Technical Issue</option>
              <option>Assignment Problem</option>
              <option>Account Access</option>
              <option>General Question</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea id="message" rows={4} value={message} onChange={e => setMessage(e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500" placeholder="Describe your issue or question..." required></textarea>
          </div>
          <div>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-4">Previous Messages</h3>
        <div className="space-y-4">
          {[{
          id: 1,
          subject: 'Technical Issue',
          message: 'I cannot access my science assignment.',
          date: '2023-05-20',
          status: 'Resolved'
        }, {
          id: 2,
          subject: 'Account Access',
          message: 'Need help resetting my password.',
          date: '2023-05-15',
          status: 'Pending'
        }].map(item => <div key={item.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{item.subject}</h4>
                  <p className="text-sm text-gray-500">
                    Submitted on {item.date}
                  </p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${item.status === 'Resolved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {item.status}
                </span>
              </div>
              <p className="mt-2 text-sm">{item.message}</p>
            </div>)}
        </div>
      </div>
    </div>;
};
const Overview = () => <div className="space-y-6">
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h2>
      <p className="text-gray-600">
        Access your assignments, check your academic performance, and
        communicate with your teachers and administrators.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Calendar className="mr-2 h-5 w-5 text-yellow-500" />
          Upcoming Events
        </h3>
        <ul className="space-y-3">
          <li className="border-b pb-2">
            <p className="font-medium">End of Term Exams</p>
            <p className="text-sm text-gray-500">June 20-24, 2023</p>
          </li>
          <li className="border-b pb-2">
            <p className="font-medium">School Sports Day</p>
            <p className="text-sm text-gray-500">June 15, 2023</p>
          </li>
          <li>
            <p className="font-medium">Parent-Teacher Meeting</p>
            <p className="text-sm text-gray-500">June 30, 2023</p>
          </li>
        </ul>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Book className="mr-2 h-5 w-5 text-yellow-500" />
          Pending Assignments
        </h3>
        <ul className="space-y-3">
          <li className="border-b pb-2">
            <p className="font-medium">Mathematics: Algebra Equations</p>
            <p className="text-sm text-gray-500">Due: June 15, 2023</p>
          </li>
          <li className="border-b pb-2">
            <p className="font-medium">Science: Physics Experiment</p>
            <p className="text-sm text-gray-500">Due: June 20, 2023</p>
          </li>
          <li>
            <Link to="/student-dashboard/assignments" className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center">
              View all assignments
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>;
const StudentDashboard = () => {
  const {
    user,
    logout
  } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  const navigation = [{
    name: 'Overview',
    href: '/student-dashboard',
    icon: <Calendar className="mr-3 h-5 w-5" />
  }, {
    name: 'Assignments',
    href: '/student-dashboard/assignments',
    icon: <Book className="mr-3 h-5 w-5" />
  }, {
    name: 'Performance',
    href: '/student-dashboard/performance',
    icon: <BarChart2 className="mr-3 h-5 w-5" />
  }, {
    name: 'Feedback',
    href: '/student-dashboard/feedback',
    icon: <MessageSquare className="mr-3 h-5 w-5" />
  }];
  return <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 flex z-40 md:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-black">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button type="button" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={() => setSidebarOpen(false)}>
              <span className="sr-only">Close sidebar</span>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <span className="text-yellow-500 font-bold text-xl">E.P.J.A</span>
              <span className="ml-2 text-white text-sm">Student Portal</span>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${window.location.pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
                  {item.icon}
                  {item.name}
                </Link>)}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-700 p-4">
            <button onClick={handleLogout} className="flex-shrink-0 group block w-full">
              <div className="flex items-center">
                <div>
                  <div className="h-9 w-9 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">
                    {user?.name?.charAt(0) || 'S'}
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">
                    {user?.name || 'Student'}
                  </p>
                  <div className="flex items-center text-xs font-medium text-gray-300 group-hover:text-gray-200">
                    <LogOut className="mr-1 h-4 w-4" /> Sign out
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* Desktop sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex-1 flex flex-col min-h-0 bg-black">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <span className="text-yellow-500 font-bold text-xl">
                  E.P.J.A
                </span>
                <span className="ml-2 text-white text-sm">Student Portal</span>
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {navigation.map(item => <Link key={item.name} to={item.href} className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${window.location.pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
                    {item.icon}
                    {item.name}
                  </Link>)}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-700 p-4">
              <button onClick={handleLogout} className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <div className="h-9 w-9 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">
                      {user?.name?.charAt(0) || 'S'}
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">
                      {user?.name || 'Student'}
                    </p>
                    <div className="flex items-center text-xs font-medium text-gray-300 group-hover:text-gray-200">
                      <LogOut className="mr-1 h-4 w-4" /> Sign out
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button type="button" className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900" onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                {window.location.pathname === '/student-dashboard' ? 'Dashboard Overview' : window.location.pathname === '/student-dashboard/assignments' ? 'Assignments' : window.location.pathname === '/student-dashboard/performance' ? 'Academic Performance' : 'Feedback & Support'}
              </h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-4">
              <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/assignments" element={<Assignments />} />
                <Route path="/performance" element={<Performance />} />
                <Route path="/feedback" element={<Feedback />} />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </div>;
};
export default StudentDashboard;