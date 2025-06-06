'use client'

import Layout from '../../components/Layout'
import { UserIcon, BuildingOfficeIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function ProfilePage() {
  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@realtycompany.com',
    phone: '+66 2 123 4567',
    company: 'Bangkok Premium Realty',
    role: 'Senior Real Estate Agent',
    department: 'Foreign Client Services',
    employeeId: 'BPR-2024-001',
    joinDate: '2023-03-15',
    lastLogin: '2024-01-25 09:30 AM'
  }

  const companyInfo = {
    name: 'Bangkok Premium Realty Co., Ltd.',
    address: '123 Sukhumvit Road, Watthana, Bangkok 10110',
    phone: '+66 2 123 4567',
    email: 'info@bangkokpremiumrealty.com',
    license: 'REA-2023-001234',
    amlOfficer: 'Jane Smith',
    amlOfficerEmail: 'compliance@bangkokpremiumrealty.com'
  }

  return (
    <Layout title="Profile Settings">
      <div className="space-y-6">
        {/* User Profile */}
        <div className="card">
          <div className="flex items-center space-x-6 mb-6">
            <div className="h-20 w-20 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">
                {userProfile.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{userProfile.name}</h2>
              <p className="text-gray-600">{userProfile.role}</p>
              <p className="text-sm text-gray-500">{userProfile.department}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">{userProfile.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Phone</p>
                    <p className="text-sm text-gray-600">{userProfile.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <UserIcon className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Employee ID</p>
                    <p className="text-sm text-gray-600">{userProfile.employeeId}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-900">Join Date</p>
                  <p className="text-sm text-gray-600">{userProfile.joinDate}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Last Login</p>
                  <p className="text-sm text-gray-600">{userProfile.lastLogin}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Account Status</p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-800">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <button className="btn-primary mr-3">Edit Profile</button>
            <button className="btn-secondary">Change Password</button>
          </div>
        </div>

        {/* Company Information */}
        <div className="card">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <BuildingOfficeIcon className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Company Information</h3>
              <p className="text-sm text-gray-600">Your organization details</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-900">Company Name</p>
                <p className="text-sm text-gray-600">{companyInfo.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Address</p>
                <p className="text-sm text-gray-600">{companyInfo.address}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Phone</p>
                <p className="text-sm text-gray-600">{companyInfo.phone}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Email</p>
                <p className="text-sm text-gray-600">{companyInfo.email}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-900">License Number</p>
                <p className="text-sm text-gray-600">{companyInfo.license}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">AML Compliance Officer</p>
                <p className="text-sm text-gray-600">{companyInfo.amlOfficer}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">AML Officer Email</p>
                <p className="text-sm text-gray-600">{companyInfo.amlOfficerEmail}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Training Summary */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Training Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">2</div>
              <div className="text-sm text-gray-600">Courses Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning-600">12h 30m</div>
              <div className="text-sm text-gray-600">Total Study Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success-600">85%</div>
              <div className="text-sm text-gray-600">Average Score</div>
            </div>
          </div>
        </div>

        {/* Compliance Status */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">AML Compliance Status</h3>
          <div className="bg-warning-50 border border-warning-200 rounded-lg p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="h-6 w-6 bg-warning-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">!</span>
                </div>
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-warning-800">Training In Progress</h4>
                <p className="text-sm text-warning-700 mt-1">
                  You have completed 2 out of 6 required training modules. Complete all modules to achieve full AMLO compliance.
                </p>
                <div className="mt-3">
                  <a href="/courses" className="text-sm font-medium text-warning-800 hover:text-warning-900">
                    Continue Training →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-500">
            <p>Last compliance check: January 25, 2024</p>
            <p>Next compliance review: February 25, 2024</p>
          </div>
        </div>

        {/* Notifications Settings */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Course Reminders</p>
                <p className="text-sm text-gray-600">Get reminded about incomplete courses</p>
              </div>
              <input type="checkbox" defaultChecked className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Assessment Notifications</p>
                <p className="text-sm text-gray-600">Receive notifications about new assessments</p>
              </div>
              <input type="checkbox" defaultChecked className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Certificate Updates</p>
                <p className="text-sm text-gray-600">Get notified when certificates are issued</p>
              </div>
              <input type="checkbox" defaultChecked className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500" />
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <button className="btn-primary">Save Preferences</button>
          </div>
        </div>
      </div>
    </Layout>
  )
} 