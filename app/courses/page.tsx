'use client'

import Layout from '../../components/Layout'
import { mockCourses } from '../../lib/mockData'
import { ClockIcon, CheckCircleIcon, PlayCircleIcon, LockClosedIcon } from '@heroicons/react/24/outline'

export default function CoursesPage() {
  // Mock progress data for each course
  const courseProgress = {
    '1': { status: 'completed', progress: 100 },
    '2': { status: 'in-progress', progress: 65 },
    '3': { status: 'available', progress: 0 },
    '4': { status: 'locked', progress: 0 },
    '5': { status: 'locked', progress: 0 },
    '6': { status: 'locked', progress: 0 }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon className="h-6 w-6 text-success-600" />
      case 'in-progress':
        return <PlayCircleIcon className="h-6 w-6 text-primary-600" />
      case 'available':
        return <PlayCircleIcon className="h-6 w-6 text-gray-400" />
      case 'locked':
        return <LockClosedIcon className="h-6 w-6 text-gray-300" />
      default:
        return <PlayCircleIcon className="h-6 w-6 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-success-100 text-success-800'
      case 'in-progress':
        return 'bg-primary-100 text-primary-800'
      case 'available':
        return 'bg-gray-100 text-gray-800'
      case 'locked':
        return 'bg-gray-50 text-gray-500'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed'
      case 'in-progress':
        return 'In Progress'
      case 'available':
        return 'Start Course'
      case 'locked':
        return 'Locked'
      default:
        return 'Available'
    }
  }

  return (
    <Layout title="AML Training Courses">
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">AML Compliance Training Program</h2>
          <p className="text-gray-600 mb-4">
            Complete all 6 mandatory training modules to receive your AMLO compliance certification. 
            Each module builds upon the previous one and must be completed in order.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
              <span>Total Duration: 6+ hours</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-success-600 rounded-full"></div>
              <span>Passing Score: 60% per subject, 70% overall</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-warning-600 rounded-full"></div>
              <span>Certificate: AMLO Form Kor Sor 02</span>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockCourses.map((course) => {
            const progress = courseProgress[course.id as keyof typeof courseProgress]
            const isLocked = progress.status === 'locked'
            
            return (
              <div 
                key={course.id} 
                className={`card transition-all duration-200 ${
                  isLocked 
                    ? 'opacity-60 cursor-not-allowed' 
                    : 'hover:shadow-md cursor-pointer hover:border-primary-200'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${
                      progress.status === 'completed' ? 'bg-success-100' :
                      progress.status === 'in-progress' ? 'bg-primary-100' :
                      progress.status === 'available' ? 'bg-gray-100' :
                      'bg-gray-50'
                    }`}>
                      {getStatusIcon(progress.status)}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm font-medium text-gray-500">Module {course.order}</span>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(progress.status)}`}>
                          {getStatusText(progress.status)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <ClockIcon className="h-4 w-4" />
                      <span>{course.duration_hours} hour</span>
                    </div>
                  </div>
                </div>

                {progress.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium text-gray-900">{progress.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${progress.progress}%` }} 
                      />
                    </div>
                  </div>
                )}

                <div className="flex space-x-3">
                  <button 
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                      isLocked 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : progress.status === 'completed'
                        ? 'bg-success-100 text-success-700 hover:bg-success-200'
                        : 'btn-primary'
                    }`}
                    disabled={isLocked}
                  >
                    {progress.status === 'completed' ? 'Review Course' : 
                     progress.status === 'in-progress' ? 'Continue' :
                     progress.status === 'available' ? 'Start Course' : 'Locked'}
                  </button>
                  {progress.status === 'completed' && (
                    <button className="btn-secondary">
                      View Certificate
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Learning Path */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Learning Path</h3>
          <div className="space-y-4">
            {mockCourses.map((course, index) => {
              const progress = courseProgress[course.id as keyof typeof courseProgress]
              const isActive = progress.status === 'in-progress' || progress.status === 'available'
              
              return (
                <div key={course.id} className="flex items-center space-x-4">
                  <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                    progress.status === 'completed' ? 'bg-success-600' :
                    isActive ? 'bg-primary-600' : 'bg-gray-300'
                  }`}>
                    {progress.status === 'completed' ? (
                      <CheckCircleIcon className="h-5 w-5 text-white" />
                    ) : (
                      <span className="text-white text-sm font-medium">{course.order}</span>
                    )}
                  </div>
                  
                  {index < mockCourses.length - 1 && (
                    <div className={`flex-shrink-0 w-12 h-0.5 ${
                      progress.status === 'completed' ? 'bg-success-600' : 'bg-gray-200'
                    }`} />
                  )}
                  
                  <div className="flex-1">
                    <h4 className={`text-sm font-medium ${
                      isActive ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {course.title}
                    </h4>
                    <p className="text-xs text-gray-500">{course.duration_hours}h</p>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(progress.status)}`}>
                      {getStatusText(progress.status)}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
} 