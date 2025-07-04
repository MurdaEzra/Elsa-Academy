import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Book, FileText, Users, MessageSquare, Calendar, LogOut, Menu, X, ChevronRight, Plus, Edit, Trash2 } from 'lucide-react';
// Dashboard components
const AssignmentsManagement = () => {
  const [showForm, setShowForm] = useState(false);
  const [assignments, setAssignments] = useState([{
    id: 1,
    subject: 'Mathematics',
    title: 'Algebra Equations',
    deadline: '2023-06-15',
    grade: '5',
    school: 'upper-school'
  }, {
    id: 2,
    subject: 'English',
    title: 'Essay on Literature',
    deadline: '2023-06-10',
    grade: '5',
    school: 'upper-school'
  }, {
    id: 3,
    subject: 'Science',
    title: 'Physics Experiment',
    deadline: '2023-06-20',
    grade: '6',
    school: 'upper-school'
  }]);
  const [formData, setFormData] = useState({
    id: null,
    subject: '',
    title: '',
    description: '',
    deadline: '',
    grade: '',
    school: ''
  });
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (formData.id) {
      // Update existing assignment
      setAssignments(assignments.map(assignment => assignment.id === formData.id ? {
        ...formData
      } : assignment));
    } else {
      // Add new assignment
      const newAssignment = {
        ...formData,
        id: Date.now()
      };
      setAssignments([...assignments, newAssignment]);
    }
    // Reset form
    setFormData({
      id: null,
      subject: '',
      title: '',
      description: '',
      deadline: '',
      grade: '',
      school: ''
    });
    setShowForm(false);
  };
  const handleEdit = assignment => {
    setFormData(assignment);
    setShowForm(true);
  };
  const handleDelete = id => {
    if (window.confirm('Are you sure you want to delete this assignment?')) {
      setAssignments(assignments.filter(assignment => assignment.id !== id));
    }
  };
  return <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Assignments Management</h2>
          <button onClick={() => setShowForm(!showForm)} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
            <Plus className="mr-2 h-4 w-4" />
            Create Assignment
          </button>
        </div>
        {showForm && <div className="mb-6 border rounded-lg p-4 bg-gray-50">
            <h3 className="text-lg font-medium mb-4">
              {formData.id ? 'Edit Assignment' : 'Create New Assignment'}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md">
                    <option value="">Select a subject</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="English">English</option>
                    <option value="Science">Science</option>
                    <option value="Social Studies">Social Studies</option>
                    <option value="Kiswahili">Kiswahili</option>
                  </select>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} required className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="sm:col-span-6">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea id="description" name="description" rows={3} value={formData.description} onChange={handleChange} className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
                    Deadline
                  </label>
                  <input type="date" name="deadline" id="deadline" value={formData.deadline} onChange={handleChange} required className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="grade" className="block text-sm font-medium text-gray-700">
                    Grade
                  </label>
                  <select id="grade" name="grade" value={formData.grade} onChange={handleChange} required className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md">
                    <option value="">Select grade</option>
                    <option value="1">Grade 1</option>
                    <option value="2">Grade 2</option>
                    <option value="3">Grade 3</option>
                    <option value="4">Grade 4</option>
                    <option value="5">Grade 5</option>
                    <option value="6">Grade 6</option>
                    <option value="7">Grade 7</option>
                    <option value="8">Grade 8</option>
                    <option value="9">Grade 9</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="school" className="block text-sm font-medium text-gray-700">
                    School
                  </label>
                  <select id="school" name="school" value={formData.school} onChange={handleChange} required className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md">
                    <option value="">Select school</option>
                    <option value="pre-school">Pre-School</option>
                    <option value="lower-school">Lower School</option>
                    <option value="upper-school">Upper School</option>
                    <option value="jss">JSS</option>
                  </select>
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button type="button" onClick={() => setShowForm(false)} className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                  Cancel
                </button>
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                  {formData.id ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>}
        <div>
          <h3 className="text-lg font-medium mb-4">Current Assignments</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Deadline
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Grade
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    School
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {assignments.map(assignment => <tr key={assignment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {assignment.subject}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {assignment.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {assignment.deadline}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {assignment.grade}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {assignment.school}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button onClick={() => handleEdit(assignment)} className="text-yellow-600 hover:text-yellow-900 mr-4">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button onClick={() => handleDelete(assignment.id)} className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>;
};
const StudentsProgress = () => <div className="bg-white shadow rounded-lg p-6">
    <h2 className="text-2xl font-bold mb-6">Students Progress</h2>
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Class Performance</h3>
        <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md">
          <option>Grade 5 - Upper School</option>
          <option>Grade 6 - Upper School</option>
          <option>Grade 7 - JSS</option>
        </select>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-white rounded shadow">
            <p className="text-sm text-gray-500">Class Average</p>
            <p className="text-2xl font-bold text-yellow-600">B (74%)</p>
          </div>
          <div className="text-center p-3 bg-white rounded shadow">
            <p className="text-sm text-gray-500">Top Score</p>
            <p className="text-2xl font-bold text-yellow-600">A (92%)</p>
          </div>
          <div className="text-center p-3 bg-white rounded shadow">
            <p className="text-sm text-gray-500">Assignments Completed</p>
            <p className="text-2xl font-bold text-yellow-600">87%</p>
          </div>
          <div className="text-center p-3 bg-white rounded shadow">
            <p className="text-sm text-gray-500">Students at Risk</p>
            <p className="text-2xl font-bold text-yellow-600">3</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Student List</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Average Grade
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Assignments Completed
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[{
            name: 'Jane Smith',
            id: 'ST2023001',
            average: 'A-',
            completed: '8/8',
            status: 'Excellent'
          }, {
            name: 'John Doe',
            id: 'ST2023002',
            average: 'B+',
            completed: '7/8',
            status: 'Good'
          }, {
            name: 'Sarah Johnson',
            id: 'ST2023003',
            average: 'B',
            completed: '8/8',
            status: 'Good'
          }, {
            name: 'Michael Brown',
            id: 'ST2023004',
            average: 'C+',
            completed: '6/8',
            status: 'Needs Improvement'
          }, {
            name: 'Emily Wilson',
            id: 'ST2023005',
            average: 'A',
            completed: '8/8',
            status: 'Excellent'
          }, {
            name: 'David Lee',
            id: 'ST2023006',
            average: 'D',
            completed: '4/8',
            status: 'At Risk'
          }].map((student, idx) => <tr key={idx} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">
                    {student.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.average}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.completed}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${student.status === 'Excellent' ? 'bg-green-100 text-green-800' : student.status === 'Good' ? 'bg-blue-100 text-blue-800' : student.status === 'Needs Improvement' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                    {student.status}
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
              <option>Assignment System</option>
              <option>Student Records</option>
              <option>Grading System</option>
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
          subject: 'Assignment System',
          message: 'I need help with the assignment grading feature.',
          date: '2023-05-18',
          status: 'Resolved'
        }, {
          id: 2,
          subject: 'Student Records',
          message: 'Unable to update student attendance records.',
          date: '2023-05-10',
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
        Manage assignments, track student progress, and communicate with
        administrators.
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
            <p className="font-medium">Staff Meeting</p>
            <p className="text-sm text-gray-500">June 16, 2023</p>
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
          Recent Assignments
        </h3>
        <ul className="space-y-3">
          <li className="border-b pb-2">
            <p className="font-medium">Mathematics: Algebra Equations</p>
            <p className="text-sm text-gray-500">Created: June 5, 2023</p>
          </li>
          <li className="border-b pb-2">
            <p className="font-medium">Science: Physics Experiment</p>
            <p className="text-sm text-gray-500">Created: June 8, 2023</p>
          </li>
          <li>
            <Link to="/teacher-dashboard/assignments" className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center">
              Manage all assignments
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>;
const TeacherDashboard = () => {
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
    href: '/teacher-dashboard',
    icon: <Calendar className="mr-3 h-5 w-5" />
  }, {
    name: 'Assignments',
    href: '/teacher-dashboard/assignments',
    icon: <Book className="mr-3 h-5 w-5" />
  }, {
    name: 'Students',
    href: '/teacher-dashboard/students',
    icon: <Users className="mr-3 h-5 w-5" />
  }, {
    name: 'Feedback',
    href: '/teacher-dashboard/feedback',
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
              <span className="ml-2 text-white text-sm">Teacher Portal</span>
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
                    {user?.name?.charAt(0) || 'T'}
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">
                    {user?.name || 'Teacher'}
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
                <span className="ml-2 text-white text-sm">Teacher Portal</span>
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
                      {user?.name?.charAt(0) || 'T'}
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">
                      {user?.name || 'Teacher'}
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
                {window.location.pathname === '/teacher-dashboard' ? 'Dashboard Overview' : window.location.pathname === '/teacher-dashboard/assignments' ? 'Assignments Management' : window.location.pathname === '/teacher-dashboard/students' ? 'Students Progress' : 'Feedback & Support'}
              </h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-4">
              <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/assignments" element={<AssignmentsManagement />} />
                <Route path="/students" element={<StudentsProgress />} />
                <Route path="/feedback" element={<Feedback />} />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </div>;
};
export default TeacherDashboard;