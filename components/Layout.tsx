'use client'

import { useState } from 'react'
import { 
  HomeIcon, 
  BookOpenIcon, 
  ChartBarIcon, 
  UserIcon,
  Bars3Icon,
  XMarkIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Courses', href: '/courses', icon: BookOpenIcon },
  { name: 'Progress', href: '/progress', icon: ChartBarIcon },
  { name: 'Certificates', href: '/certificates', icon: AcademicCapIcon },
  { name: 'Profile', href: '/profile', icon: UserIcon },
]

interface LayoutProps {
  children: React.ReactNode
  title?: string
}

export default function Layout({ children, title = 'AML Compliance LMS' }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
          <div className="fixed inset-y-0 left-0 flex w-64 flex-col bg-white">
            <div className="flex h-16 items-center justify-between px-4">
              <div className="flex items-center">
                <AcademicCapIcon className="h-8 w-8 text-primary-600" />
                <span className="ml-2 text-lg font-semibold text-gray-900">AML LMS</span>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex-1 space-y-1 px-2 py-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-grow flex-col overflow-y-auto bg-white border-r border-gray-200">
          <div className="flex h-16 items-center px-4">
            <AcademicCapIcon className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-lg font-semibold text-gray-900">AML LMS</span>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="flex h-16 items-center bg-white border-b border-gray-200 px-4 lg:px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-500 hover:text-gray-600"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
          <div className="flex-1 lg:ml-0 ml-4">
            <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-500">
              Welcome, John Doe
            </div>
            <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center">
              <span className="text-white text-sm font-medium">JD</span>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  )
} 