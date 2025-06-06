'use client'

import Layout from '../components/Layout'
import { mockCourses } from '../lib/mockData'
import { ClockIcon, CheckCircleIcon, PlayCircleIcon, BookOpenIcon, ChartBarIcon, AcademicCapIcon, UserIcon } from '@heroicons/react/24/outline'

export default function Dashboard() {
  // Mock user progress data
  const userProgress = {
    totalCourses: 6,
    completedCourses: 2,
    inProgressCourses: 1,
    totalHours: 6,
    completedHours: 2.5,
    overallProgress: 42
  }

  const recentActivity = [
    { course: 'Introduction to AML/CTF Laws', action: 'Completed', time: '2 hours ago' },
    { course: 'Risk Assessment and Management', action: 'Started lesson 2', time: '1 day ago' },
    { course: 'Transaction Reporting Procedures', action: 'Viewed', time: '3 days ago' }
  ]

  return (
    <Layout title="Dashboard">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl text-white p-6">
          <h2 className="text-2xl font-bold mb-2">Welcome back, John!</h2>
          <p className="text-primary-100">
            Continue your AML compliance training. You're making great progress!
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Overall Progress</p>
                <p className="text-2xl font-bold text-gray-900">{userProgress.overallProgress}%</p>
              </div>
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <CheckCircleIcon className="h-6 w-6 text-primary-600" />
              </div>
            </div>
            <div className="mt-4">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${userProgress.overallProgress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed Courses</p>
                <p className="text-2xl font-bold text-gray-900">
                  {userProgress.completedCourses}/{userProgress.totalCourses}
                </p>
              </div>
              <div className="h-12 w-12 bg-success-100 rounded-lg flex items-center justify-center">
                <CheckCircleIcon className="h-6 w-6 text-success-600" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Study Hours</p>
                <p className="text-2xl font-bold text-gray-900">
                  {userProgress.completedHours}/{userProgress.totalHours}h
                </p>
              </div>
              <div className="h-12 w-12 bg-warning-100 rounded-lg flex items-center justify-center">
                <ClockIcon className="h-6 w-6 text-warning-600" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-gray-900">{userProgress.inProgressCourses}</p>
              </div>
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <PlayCircleIcon className="h-6 w-6 text-primary-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Continue Learning */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Learning</h3>
            <div className="space-y-4">
              {mockCourses.slice(0, 3).map((course, index) => {
                const progress = index === 0 ? 100 : index === 1 ? 65 : 0
                const status = progress === 100 ? 'completed' : progress > 0 ? 'in-progress' : 'not-started'
                
                return (
                  <div key={course.id} className="flex items-center space-x-4 p-3 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors cursor-pointer">
                    <div className="flex-shrink-0">
                      <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                        status === 'completed' ? 'bg-success-100' : 
                        status === 'in-progress' ? 'bg-primary-100' : 'bg-gray-100'
                      }`}>
                        {status === 'completed' ? (
                          <CheckCircleIcon className="h-5 w-5 text-success-600" />
                        ) : (
                          <PlayCircleIcon className={`h-5 w-5 ${
                            status === 'in-progress' ? 'text-primary-600' : 'text-gray-400'
                          }`} />
                        )}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 truncate">{course.title}</h4>
                      <p className="text-sm text-gray-500">{course.duration_hours}h • Module {course.order}</p>
                      {progress > 0 && (
                        <div className="mt-2">
                          <div className="progress-bar h-1">
                            <div className="progress-fill h-1" style={{ width: `${progress}%` }} />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex-shrink-0">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        status === 'completed' ? 'bg-success-100 text-success-800' :
                        status === 'in-progress' ? 'bg-primary-100 text-primary-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {status === 'completed' ? 'Completed' :
                         status === 'in-progress' ? 'In Progress' : 'Start'}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="mt-4">
              <a href="/courses" className="btn-primary w-full text-center">
                View All Courses
              </a>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <div className="h-2 w-2 bg-primary-600 rounded-full" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{activity.action}</span> {activity.course}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="/courses" className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors">
              <BookOpenIcon className="h-6 w-6 text-primary-600 mr-3" />
              <span className="text-sm font-medium text-gray-900">Browse Courses</span>
            </a>
            <a href="/progress" className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors">
              <ChartBarIcon className="h-6 w-6 text-primary-600 mr-3" />
              <span className="text-sm font-medium text-gray-900">View Progress</span>
            </a>
            <a href="/certificates" className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors">
              <AcademicCapIcon className="h-6 w-6 text-primary-600 mr-3" />
              <span className="text-sm font-medium text-gray-900">Certificates</span>
            </a>
            <a href="/profile" className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors">
              <UserIcon className="h-6 w-6 text-primary-600 mr-3" />
              <span className="text-sm font-medium text-gray-900">Profile Settings</span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
} 