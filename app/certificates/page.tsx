'use client'

import Layout from '@/components/Layout'
import { AcademicCapIcon, DocumentTextIcon, CalendarDaysIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'

export default function CertificatesPage() {
  const certificates = [
    {
      id: '1',
      title: 'Introduction to AML/CTF Laws',
      type: 'Course Completion',
      issueDate: '2024-01-15',
      score: 92,
      certificateNumber: 'AML-001-2024-001',
      status: 'issued'
    },
    {
      id: '2',
      title: 'Risk Assessment and Management',
      type: 'Course Completion',
      issueDate: '2024-01-20',
      score: 88,
      certificateNumber: 'AML-002-2024-001',
      status: 'issued'
    }
  ]

  const overallCertificate = {
    title: 'AMLO Compliance Training Certificate',
    subtitle: 'Form Kor Sor 02',
    completionDate: null,
    overallScore: 85,
    validUntil: '2025-01-15',
    status: 'in-progress',
    progress: 33 // 2 out of 6 courses completed
  }

  return (
    <Layout title="Certificates & Achievements">
      <div className="space-y-6">
        {/* Overall Certificate Status */}
        <div className="card bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 bg-primary-600 rounded-xl flex items-center justify-center">
                <AcademicCapIcon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{overallCertificate.title}</h3>
                <p className="text-primary-700 font-medium">{overallCertificate.subtitle}</p>
                <p className="text-sm text-gray-600 mt-1">
                  Required for AMLO compliance in Thailand's real estate industry
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                overallCertificate.status === 'issued' ? 'bg-success-100 text-success-800' :
                'bg-warning-100 text-warning-800'
              }`}>
                {overallCertificate.status === 'issued' ? 'Certified' : 'In Progress'}
              </span>
              <p className="text-sm text-gray-600 mt-2">
                Progress: {overallCertificate.progress}% complete
              </p>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-600">Certification Progress</span>
              <span className="font-medium">2 of 6 modules completed</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${overallCertificate.progress}%` }} />
            </div>
          </div>

          {overallCertificate.status === 'issued' ? (
            <div className="mt-6 flex space-x-3">
              <button className="btn-primary">
                <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                Download Certificate
              </button>
              <button className="btn-secondary">
                Verify Certificate
              </button>
            </div>
          ) : (
            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-3">
                Complete all 6 training modules and pass the final assessment to receive your official AMLO certificate.
              </p>
              <a href="/courses" className="btn-primary">
                Continue Training
              </a>
            </div>
          )}
        </div>

        {/* Individual Course Certificates */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Course Completion Certificates</h3>
          
          {certificates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificates.map((cert) => (
                <div key={cert.id} className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-12 w-12 bg-success-100 rounded-lg flex items-center justify-center">
                        <DocumentTextIcon className="h-6 w-6 text-success-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{cert.title}</h4>
                        <p className="text-sm text-gray-600">{cert.type}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-success-100 text-success-800">
                      Issued
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <CalendarDaysIcon className="h-4 w-4 mr-2" />
                      <span>Issued: {cert.issueDate}</span>
                    </div>
                    <div>
                      <span className="font-medium">Score:</span> {cert.score}%
                    </div>
                    <div>
                      <span className="font-medium">Certificate ID:</span> {cert.certificateNumber}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 btn-secondary text-sm py-2">
                      <ArrowDownTrayIcon className="h-4 w-4 mr-1" />
                      Download
                    </button>
                    <button className="flex-1 btn-secondary text-sm py-2">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <AcademicCapIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h4 className="mt-2 text-lg font-medium text-gray-900">No certificates yet</h4>
              <p className="mt-1 text-sm text-gray-600">
                Complete your first course to earn a certificate
              </p>
              <div className="mt-6">
                <a href="/courses" className="btn-primary">
                  Start Learning
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Certification Requirements */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">AMLO Certification Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Training Requirements</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-primary-600 rounded-full mr-3"></div>
                  Complete all 6 mandatory training modules
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-primary-600 rounded-full mr-3"></div>
                  Minimum 6 hours of training content
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-primary-600 rounded-full mr-3"></div>
                  Interactive content delivery methods
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-primary-600 rounded-full mr-3"></div>
                  Progressive module completion
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Assessment Requirements</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-success-600 rounded-full mr-3"></div>
                  60% minimum score per subject
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-success-600 rounded-full mr-3"></div>
                  70% overall minimum score
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-success-600 rounded-full mr-3"></div>
                  30+ questions per assessment
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-success-600 rounded-full mr-3"></div>
                  Multi-choice question format
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-primary-50 rounded-lg">
            <p className="text-sm text-primary-800">
              <strong>Note:</strong> Your AMLO Form Kor Sor 02 certificate will be automatically reported to AMLO via AMFICS/ATS system upon completion.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
} 