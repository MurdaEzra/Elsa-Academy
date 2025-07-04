import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Users, BookOpen, Settings, MessageSquare, Calendar, LogOut, Menu, X, ChevronRight, Plus, Edit, Trash2, FileText, School, User, BarChart2, Mail, Clock, UserPlus, Key } from 'lucide-react';
// Dashboard components
const Overview = () => <div className="space-y-6">
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Welcome to Admin Dashboard</h2>
      <p className="text-gray-600">
        Manage all aspects of Elsa Preparatory And Junior Academy from this
        central dashboard.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Users className="mr-2 h-5 w-5 text-yellow-500" />
          User Statistics
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center pb-2 border-b">
            <span className="text-gray-600">Total Students</span>
            <span className="font-medium">432</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b">
            <span className="text-gray-600">Total Teachers</span>
            <span className="font-medium">28</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Admin Staff</span>
            <span className="font-medium">6</span>
          </div>
          <div className="mt-4">
            <Link to="/admin-dashboard/users" className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center">
              Manage users
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <School className="mr-2 h-5 w-5 text-yellow-500" />
          School Divisions
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center pb-2 border-b">
            <span className="text-gray-600">Pre-School</span>
            <span className="font-medium">65 students</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b">
            <span className="text-gray-600">Lower-School</span>
            <span className="font-medium">124 students</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b">
            <span className="text-gray-600">Upper-School</span>
            <span className="font-medium">156 students</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">JSS</span>
            <span className="font-medium">87 students</span>
          </div>
        </div>
      </div>
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
            <p className="font-medium">Board Meeting</p>
            <p className="text-sm text-gray-500">June 18, 2023</p>
          </li>
          <li>
            <p className="font-medium">Parent-Teacher Meeting</p>
            <p className="text-sm text-gray-500">June 30, 2023</p>
          </li>
          <li className="mt-4">
            <Link to="/admin-dashboard/calendar" className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center">
              View calendar
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <MessageSquare className="mr-2 h-5 w-5 text-yellow-500" />
          Recent Messages
        </h3>
        <div className="space-y-4">
          {[{
          sender: 'John Smith (Teacher)',
          subject: 'Assignment System Issue',
          date: '2023-06-08'
        }, {
          sender: 'Sarah Johnson (Student)',
          subject: 'Login Problem',
          date: '2023-06-07'
        }, {
          sender: 'Michael Brown (Teacher)',
          subject: 'Grading System Suggestion',
          date: '2023-06-05'
        }].map((message, idx) => <div key={idx} className="border-b pb-3">
              <p className="font-medium">{message.subject}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{message.sender}</span>
                <span>{message.date}</span>
              </div>
            </div>)}
          <div className="mt-2">
            <Link to="/admin-dashboard/messages" className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center">
              View all messages
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Settings className="mr-2 h-5 w-5 text-yellow-500" />
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <Link to="/admin-dashboard/users/create" className="flex items-center p-3 border rounded-md hover:bg-gray-50">
            <User className="mr-2 h-5 w-5 text-yellow-500" />
            <span>Add User</span>
          </Link>
          <Link to="/admin-dashboard/announcements/create" className="flex items-center p-3 border rounded-md hover:bg-gray-50">
            <Mail className="mr-2 h-5 w-5 text-yellow-500" />
            <span>New Announcement</span>
          </Link>
          <Link to="/admin-dashboard/reports" className="flex items-center p-3 border rounded-md hover:bg-gray-50">
            <BarChart2 className="mr-2 h-5 w-5 text-yellow-500" />
            <span>View Reports</span>
          </Link>
          <Link to="/admin-dashboard/settings" className="flex items-center p-3 border rounded-md hover:bg-gray-50">
            <Settings className="mr-2 h-5 w-5 text-yellow-500" />
            <span>System Settings</span>
          </Link>
        </div>
      </div>
    </div>
  </div>;
const AttendanceTracking = () => {
  const [activeTab, setActiveTab] = useState('students');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const studentAttendance = {
    'Grade 5': {
      total: 32,
      present: 28,
      students: [{
        id: 'ST001',
        name: 'John Doe',
        checkIn: '07:45 AM'
      }, {
        id: 'ST002',
        name: 'Jane Smith',
        checkIn: '07:50 AM'
      }
      // Add more students as needed
      ]
    },
    'Grade 6': {
      total: 35,
      present: 33,
      students: [{
        id: 'ST003',
        name: 'Mike Johnson',
        checkIn: '07:40 AM'
      }, {
        id: 'ST004',
        name: 'Sarah Williams',
        checkIn: '07:55 AM'
      }
      // Add more students as needed
      ]
    }
    // Add more classes as needed
  };
  const teacherAttendance = [{
    id: 'T001',
    name: 'Mr. Anderson',
    checkIn: '07:30 AM',
    checkOut: '4:30 PM',
    date: '2023-06-09'
  }, {
    id: 'T002',
    name: 'Mrs. Brown',
    checkIn: '07:25 AM',
    checkOut: null,
    date: '2023-06-09'
  }
  // Add more teachers as needed
  ];
  return <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Attendance Tracking</h2>
          <div className="flex items-center space-x-4">
            <input type="date" value={date} onChange={e => setDate(e.target.value)} className="border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500" />
            <div className="flex rounded-md shadow-sm">
              <button onClick={() => setActiveTab('students')} className={`px-4 py-2 text-sm font-medium rounded-l-md ${activeTab === 'students' ? 'bg-black text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
                Students
              </button>
              <button onClick={() => setActiveTab('teachers')} className={`px-4 py-2 text-sm font-medium rounded-r-md ${activeTab === 'teachers' ? 'bg-black text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
                Teachers
              </button>
            </div>
          </div>
        </div>
        {activeTab === 'students' ? <div>
            {Object.entries(studentAttendance).map(([className, classData]) => <div key={className} className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">{className}</h3>
                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-gray-500">
                      Present: {classData.present} / {classData.total}
                    </div>
                    <div className={`px-2 py-1 rounded-full text-sm ${classData.present === classData.total ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {Math.round(classData.present / classData.total * 100)}%
                      Attendance
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Student ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Check-in Time
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {classData.students.map(student => <tr key={student.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {student.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {student.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {student.checkIn}
                          </td>
                        </tr>)}
                    </tbody>
                  </table>
                </div>
              </div>)}
          </div> : <div>
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Teacher ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Check-in Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Check-out Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {teacherAttendance.map(teacher => <tr key={teacher.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {teacher.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {teacher.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {teacher.checkIn}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {teacher.checkOut || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${teacher.checkOut ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {teacher.checkOut ? 'Checked Out' : 'Present'}
                        </span>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>}
      </div>
    </div>;
};
const UserManagement = () => {
  const {
    user,
    logout
  } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showPasswordReset, setShowPasswordReset] = useState(false);
  const [passwordResetData, setPasswordResetData] = useState({
    userId: '',
    newPassword: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    role: 'student',
    email: '',
    status: 'Active',
    grade: '',
    class: '',
    subjects: [],
    fingerprint: ''
  });
  const [formType, setFormType] = useState('student');
  // Add users state
  const [users, setUsers] = useState([{
    id: 1,
    name: 'John Doe',
    role: 'student',
    email: 'john@example.com',
    status: 'Active',
    grade: '5',
    class: 'A'
  }, {
    id: 2,
    name: 'Jane Smith',
    role: 'teacher',
    email: 'jane@example.com',
    status: 'Active',
    subjects: ['Mathematics', 'Science']
  }, {
    id: 3,
    name: 'Admin User',
    role: 'admin',
    email: 'admin@example.com',
    status: 'Active'
  }]);
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
      // Update existing user
      setUsers(users.map(user => user.id === formData.id ? {
        ...formData
      } : user));
    } else {
      // Add new user
      const newUser = {
        ...formData,
        id: Date.now()
      };
      setUsers([...users, newUser]);
    }
    // Reset form
    setFormData({
      id: null,
      name: '',
      role: 'student',
      email: '',
      status: 'Active'
    });
    setShowForm(false);
  };
  const handleEdit = user => {
    setFormData(user);
    setShowForm(true);
  };
  const handleDelete = id => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };
  const handlePasswordReset = e => {
    e.preventDefault();
    // Implement password reset logic here
    alert('Password has been reset successfully!');
    setShowPasswordReset(false);
    setPasswordResetData({
      userId: '',
      newPassword: ''
    });
  };
  return <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">User Management</h2>
          <div className="space-x-4">
            <button onClick={() => {
            setFormType('student');
            setShowForm(true);
          }} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
              <UserPlus className="mr-2 h-4 w-4" />
              Add Student
            </button>
            <button onClick={() => {
            setFormType('teacher');
            setShowForm(true);
          }} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
              <UserPlus className="mr-2 h-4 w-4" />
              Add Teacher
            </button>
          </div>
        </div>
        {/* Password Reset Form */}
        {showPasswordReset && <div className="mb-6 border rounded-lg p-4 bg-gray-50">
            <h3 className="text-lg font-medium mb-4">Reset Password</h3>
            <form onSubmit={handlePasswordReset}>
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
                    User ID
                  </label>
                  <input type="text" name="userId" id="userId" value={passwordResetData.userId} onChange={e => setPasswordResetData({
                ...passwordResetData,
                userId: e.target.value
              })} required className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                    New Password
                  </label>
                  <input type="password" name="newPassword" id="newPassword" value={passwordResetData.newPassword} onChange={e => setPasswordResetData({
                ...passwordResetData,
                newPassword: e.target.value
              })} required className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button type="button" onClick={() => setShowPasswordReset(false)} className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                  Cancel
                </button>
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                  Reset Password
                </button>
              </div>
            </form>
          </div>}
        {showForm && <div className="mb-6 border rounded-lg p-4 bg-gray-50">
            <h3 className="text-lg font-medium mb-4">
              {formData.id ? 'Edit User' : 'Create New User'}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                    Role
                  </label>
                  <select id="role" name="role" value={formData.role} onChange={handleChange} required className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md">
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <select id="status" name="status" value={formData.status} onChange={handleChange} required className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md">
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                {formType === 'student' && <div className="sm:col-span-3">
                    <label htmlFor="grade" className="block text-sm font-medium text-gray-700">
                      Grade
                    </label>
                    <input type="text" name="grade" id="grade" value={formData.grade} onChange={handleChange} required className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>}
                {formType === 'student' && <div className="sm:col-span-3">
                    <label htmlFor="class" className="block text-sm font-medium text-gray-700">
                      Class
                    </label>
                    <input type="text" name="class" id="class" value={formData.class} onChange={handleChange} required className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>}
                {formType === 'teacher' && <div className="sm:col-span-3">
                    <label htmlFor="subjects" className="block text-sm font-medium text-gray-700">
                      Subjects
                    </label>
                    <input type="text" name="subjects" id="subjects" value={formData.subjects.join(',')} onChange={e => setFormData({
                ...formData,
                subjects: e.target.value.split(',').map(subject => subject.trim())
              })} required className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>}
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
          <h3 className="text-lg font-medium mb-4">User List</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map(user => <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${user.role === 'admin' ? 'bg-purple-100 text-purple-800' : user.role === 'teacher' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button onClick={() => handleEdit(user)} className="text-yellow-600 hover:text-yellow-900 mr-4">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button onClick={() => handleDelete(user.id)} className="text-red-600 hover:text-red-900">
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
const Messages = () => {
  const [messages, setMessages] = useState([{
    id: 1,
    sender: 'John Smith',
    role: 'teacher',
    subject: 'Assignment System Issue',
    message: 'I am having trouble with the assignment submission system. Students are reporting errors when uploading files.',
    date: '2023-06-08',
    status: 'Pending'
  }, {
    id: 2,
    sender: 'Sarah Johnson',
    role: 'student',
    subject: 'Login Problem',
    message: 'I cannot log into my account even though I am using the correct password.',
    date: '2023-06-07',
    status: 'Resolved'
  }, {
    id: 3,
    sender: 'Michael Brown',
    role: 'teacher',
    subject: 'Grading System Suggestion',
    message: 'I would like to suggest an improvement to the grading system to include more detailed feedback options.',
    date: '2023-06-05',
    status: 'Pending'
  }]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [reply, setReply] = useState('');
  const handleStatusChange = (id, newStatus) => {
    setMessages(messages.map(message => message.id === id ? {
      ...message,
      status: newStatus
    } : message));
    if (selectedMessage && selectedMessage.id === id) {
      setSelectedMessage({
        ...selectedMessage,
        status: newStatus
      });
    }
  };
  const handleReply = e => {
    e.preventDefault();
    alert(`Reply sent to ${selectedMessage.sender}`);
    handleStatusChange(selectedMessage.id, 'Resolved');
    setReply('');
  };
  return <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Support Messages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 border-r pr-6">
          <h3 className="text-lg font-medium mb-4">Messages</h3>
          <div className="space-y-3">
            {messages.map(message => <div key={message.id} className={`border rounded-lg p-3 cursor-pointer hover:bg-gray-50 ${selectedMessage && selectedMessage.id === message.id ? 'bg-gray-50 border-yellow-500' : ''}`} onClick={() => setSelectedMessage(message)}>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{message.subject}</h4>
                    <p className="text-sm text-gray-500">
                      From: {message.sender} ({message.role})
                    </p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${message.status === 'Resolved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {message.status}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">{message.date}</p>
              </div>)}
          </div>
        </div>
        <div className="md:col-span-2">
          {selectedMessage ? <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-medium">
                    {selectedMessage.subject}
                  </h3>
                  <p className="text-sm text-gray-500">
                    From: {selectedMessage.sender} ({selectedMessage.role}) •{' '}
                    {selectedMessage.date}
                  </p>
                </div>
                <div>
                  <select value={selectedMessage.status} onChange={e => handleStatusChange(selectedMessage.id, e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-1 text-sm border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 rounded-md">
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                  </select>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-gray-800">{selectedMessage.message}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Reply</h4>
                <form onSubmit={handleReply}>
                  <textarea rows={4} value={reply} onChange={e => setReply(e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500" placeholder="Type your reply here..."></textarea>
                  <div className="mt-3 flex justify-end">
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                      Send Reply
                    </button>
                  </div>
                </form>
              </div>
            </div> : <div className="h-full flex items-center justify-center text-gray-500">
              Select a message to view details
            </div>}
        </div>
      </div>
    </div>;
};
const SystemSettings = () => <div className="bg-white shadow rounded-lg p-6">
    <h2 className="text-2xl font-bold mb-6">System Settings</h2>
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">General Settings</h3>
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
          <div>
            <label htmlFor="school-name" className="block text-sm font-medium text-gray-700">
              School Name
            </label>
            <input type="text" id="school-name" defaultValue="Elsa Preparatory And Junior Academy" className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="school-email" className="block text-sm font-medium text-gray-700">
              School Email
            </label>
            <input type="email" id="school-email" defaultValue="ezranyamwange2@gmail.com" className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="school-phone" className="block text-sm font-medium text-gray-700">
              School Phone
            </label>
            <input type="text" id="school-phone" defaultValue="+254728135200" className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="school-address" className="block text-sm font-medium text-gray-700">
              School Address
            </label>
            <input type="text" id="school-address" defaultValue="P.O Box 1730, Ogembo, Kisii, Kenya" className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-4">System Preferences</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input id="enable-notifications" name="enable-notifications" type="checkbox" defaultChecked className="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300 rounded" />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="enable-notifications" className="font-medium text-gray-700">
                Enable Email Notifications
              </label>
              <p className="text-gray-500">
                Send email notifications for important system events.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input id="enable-auto-logout" name="enable-auto-logout" type="checkbox" defaultChecked className="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300 rounded" />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="enable-auto-logout" className="font-medium text-gray-700">
                Enable Auto Logout
              </label>
              <p className="text-gray-500">
                Automatically log out users after 30 minutes of inactivity.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input id="enable-maintenance" name="enable-maintenance" type="checkbox" className="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300 rounded" />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="enable-maintenance" className="font-medium text-gray-700">
                Enable Maintenance Mode
              </label>
              <p className="text-gray-500">
                Put the website into maintenance mode. Only administrators can
                access the site.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-4">Backup & Security</h3>
        <div className="space-y-4">
          <div>
            <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
              Backup Database
            </button>
            <p className="mt-1 text-sm text-gray-500">
              Last backup: June 8, 2023, 09:15 AM
            </p>
          </div>
          <div>
            <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
              Security Audit Log
            </button>
            <p className="mt-1 text-sm text-gray-500">
              View system security audit logs
            </p>
          </div>
        </div>
      </div>
      <div className="pt-5 border-t border-gray-200">
        <div className="flex justify-end">
          <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
            Cancel
          </button>
          <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>;
const AdminDashboard = () => {
  const {
    user,
    logout
  } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  const navigation = [{
    name: 'Overview',
    href: '/admin-dashboard',
    icon: <Calendar className="mr-3 h-5 w-5" />
  }, {
    name: 'Attendance',
    href: '/admin-dashboard/attendance',
    icon: <Clock className="mr-3 h-5 w-5" />
  }, {
    name: 'User Management',
    href: '/admin-dashboard/users',
    icon: <Users className="mr-3 h-5 w-5" />
  }, {
    name: 'Messages',
    href: '/admin-dashboard/messages',
    icon: <MessageSquare className="mr-3 h-5 w-5" />
  }, {
    name: 'System Settings',
    href: '/admin-dashboard/settings',
    icon: <Settings className="mr-3 h-5 w-5" />
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
              <span className="ml-2 text-white text-sm">Admin Portal</span>
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
                    {user?.name?.charAt(0) || 'A'}
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">
                    {user?.name || 'Admin'}
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
                <span className="ml-2 text-white text-sm">Admin Portal</span>
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
                      {user?.name?.charAt(0) || 'A'}
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">
                      {user?.name || 'Admin'}
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
                {window.location.pathname === '/admin-dashboard' ? 'Dashboard Overview' : window.location.pathname === '/admin-dashboard/users' ? 'User Management' : window.location.pathname === '/admin-dashboard/messages' ? 'Support Messages' : 'System Settings'}
              </h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-4">
              <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/attendance" element={<AttendanceTracking />} />
                <Route path="/users" element={<UserManagement />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/settings" element={<SystemSettings />} />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </div>;
};
export default AdminDashboard;