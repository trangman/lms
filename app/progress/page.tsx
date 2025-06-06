'use client'

import Layout from '../../components/Layout'
import { mockCourses } from '../../lib/mockData'
import { CheckCircleIcon, ClockIcon, TrophyIcon } from '@heroicons/react/24/outline'

export default function ProgressPage() {
  const overallStats = {
    totalCourses: 6,
    completedCourses: 2,
    totalHours: 6,
    studiedHours: 2.5,
    overallProgress: 42,
    averageScore: 85,
    timeSpent: '12h 30m'
  }

  const courseProgress = [
    { courseId: '1', status: 'completed', progress: 100, score: 92, timeSpent: '1h 15m', completedDate: '2024-01-15' },
    { courseId: '2', status: 'in-progress', progress: 65, score: null, timeSpent: '45m', completedDate: null },
    { courseId: '3', status: 'available', progress: 0, score: null, timeSpent: '0m', completedDate: null },
    { courseId: '4', status: 'locked', progress: 0, score: null, timeSpent: '0m', completedDate: null },
    { courseId: '5', status: 'locked', progress: 0, score: null, timeSpent: '0m', completedDate: null },
    { courseId: '6', status: 'locked', progress: 0, score: null, timeSpent: '0m', completedDate: null }
  ]

  return (
    <Layout title="Learning Progress">
      <div className="space-y-6">
        {/* Overall Progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card">
            <div className="flex items-center">
              <div className="p-2 bg-primary-100 rounded-lg">
                <TrophyIcon className="h-6 w-6 text-primary-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Overall Progress</p>
                <p className="text-2xl font-bold text-gray-900">{overallStats.overallProgress}%</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${overallStats.overallProgress}%` }} />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="p-2 bg-success-100 rounded-lg">
                <CheckCircleIcon className="h-6 w-6 text-success-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">
                  {overallStats.completedCourses}/{overallStats.totalCourses}
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="p-2 bg-warning-100 rounded-lg">
                <ClockIcon className="h-6 w-6 text-warning-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Time Studied</p>
                <p className="text-2xl font-bold text-gray-900">{overallStats.timeSpent}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="p-2 bg-primary-100 rounded-lg">
                <TrophyIcon className="h-6 w-6 text-primary-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg. Score</p>
                <p className="text-2xl font-bold text-gray-900">{overallStats.averageScore}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Progress */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Course Progress Details</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Progress
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Score
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time Spent
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Completed
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {courseProgress.map((progress) => {
                  const course = mockCourses.find(c => c.id === progress.courseId)
                  if (!course) return null

                  return (
                    <tr key={course.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                              progress.status === 'completed' ? 'bg-success-100' :
                              progress.status === 'in-progress' ? 'bg-primary-100' :
                              progress.status === 'available' ? 'bg-gray-100' : 'bg-gray-50'
                            }`}>
                              <span className="text-sm font-medium">{course.order}</span>
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{course.title}</div>
                            <div className="text-sm text-gray-500">{course.duration_hours}h</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          progress.status === 'completed' ? 'bg-success-100 text-success-800' :
                          progress.status === 'in-progress' ? 'bg-primary-100 text-primary-800' :
                          progress.status === 'available' ? 'bg-gray-100 text-gray-800' :
                          'bg-gray-50 text-gray-500'
                        }`}>
                          {progress.status === 'completed' ? 'Completed' :
                           progress.status === 'in-progress' ? 'In Progress' :
                           progress.status === 'available' ? 'Available' : 'Locked'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-16 progress-bar mr-2">
                            <div className="progress-fill" style={{ width: `${progress.progress}%` }} />
                          </div>
                          <span className="text-sm text-gray-500">{progress.progress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {progress.score ? `${progress.score}%` : '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {progress.timeSpent}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {progress.completedDate || '-'}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Progress Chart */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Learning Timeline</h3>
          <div className="space-y-4">
            {courseProgress
              .filter(p => p.status === 'completed' || p.status === 'in-progress')
              .map((progress) => {
                const course = mockCourses.find(c => c.id === progress.courseId)
                if (!course) return null

                return (
                  <div key={course.id} className="flex items-center space-x-4">
                    <div className={`h-4 w-4 rounded-full ${
                      progress.status === 'completed' ? 'bg-success-600' : 'bg-primary-600'
                    }`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium text-gray-900">{course.title}</h4>
                        <span className="text-sm text-gray-500">
                          {progress.status === 'completed' ? progress.completedDate : 'In Progress'}
                        </span>
                      </div>
                      <div className="mt-1 progress-bar">
                        <div className="progress-fill" style={{ width: `${progress.progress}%` }} />
                      </div>
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