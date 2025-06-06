import { Course, Lesson, Assessment, AssessmentQuestion } from './supabase'

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Introduction to AML/CTF Laws',
    description: 'Understanding the fundamentals of Anti-Money Laundering and Counter-Terrorism Financing laws in Thailand',
    duration_hours: 1,
    order: 1,
    is_published: true,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    title: 'Risk Assessment and Management',
    description: 'Learn how to identify, assess, and manage money laundering and terrorism financing risks',
    duration_hours: 1,
    order: 2,
    is_published: true,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    title: 'Transaction Reporting Procedures',
    description: 'Master the procedures for reporting suspicious transactions and compliance requirements',
    duration_hours: 1,
    order: 3,
    is_published: true,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '4',
    title: 'Customer Identification Guidelines',
    description: 'Best practices for customer identification and verification processes',
    duration_hours: 1,
    order: 4,
    is_published: true,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '5',
    title: 'Customer Due Diligence and Record Keeping',
    description: 'Comprehensive guide to CDD procedures and maintaining compliant records',
    duration_hours: 1,
    order: 5,
    is_published: true,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '6',
    title: 'Sanctions Screening and Asset Freezing',
    description: 'Understanding sanctions lists, screening procedures, and asset freezing requirements',
    duration_hours: 1,
    order: 6,
    is_published: true,
    created_at: '2024-01-01T00:00:00Z'
  }
]

export const mockLessons: Lesson[] = [
  // Course 1 lessons
  {
    id: '1-1',
    course_id: '1',
    title: 'Overview of AML/CTF Framework',
    content: 'This lesson covers the basic framework of Anti-Money Laundering and Counter-Terrorism Financing laws in Thailand...',
    duration_minutes: 15,
    order: 1,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '1-2',
    course_id: '1',
    title: 'Key Definitions and Terminology',
    content: 'Understanding important terms and definitions used in AML/CTF regulations...',
    duration_minutes: 20,
    order: 2,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '1-3',
    course_id: '1',
    title: 'Legal Obligations for Real Estate Professionals',
    content: 'Specific obligations and requirements for real estate industry professionals...',
    duration_minutes: 25,
    order: 3,
    created_at: '2024-01-01T00:00:00Z'
  },
  // Course 2 lessons
  {
    id: '2-1',
    course_id: '2',
    title: 'Risk-Based Approach',
    content: 'Understanding the risk-based approach to AML/CTF compliance...',
    duration_minutes: 20,
    order: 1,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2-2',
    course_id: '2',
    title: 'Risk Assessment Methodologies',
    content: 'Methods and tools for conducting effective risk assessments...',
    duration_minutes: 25,
    order: 2,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2-3',
    course_id: '2',
    title: 'Risk Mitigation Strategies',
    content: 'Implementing effective risk mitigation and management strategies...',
    duration_minutes: 15,
    order: 3,
    created_at: '2024-01-01T00:00:00Z'
  }
]

export const mockAssessments: Assessment[] = [
  {
    id: 'assess-1',
    course_id: '1',
    title: 'AML/CTF Laws Assessment',
    passing_score: 60,
    questions: [
      {
        id: 'q1-1',
        question: 'What is the minimum threshold for property transaction reporting in Thailand?',
        options: ['2 million THB', '3 million THB', '5 million THB', '10 million THB'],
        correct_answer: 2,
        explanation: 'Property transactions of 5 million THB or more must be reported under Thai AML laws.'
      },
      {
        id: 'q1-2',
        question: 'Which of the following is considered a predicate offense under the expanded Thai AML laws?',
        options: ['Tax evasion', 'Nominee arrangements', 'Foreign business violations', 'All of the above'],
        correct_answer: 3,
        explanation: 'The 2025 amendments expanded predicate offenses to include all these categories.'
      },
      {
        id: 'q1-3',
        question: 'What is the minimum record retention period for client documentation?',
        options: ['3 years', '5 years', '7 years', '10 years'],
        correct_answer: 1,
        explanation: 'Thai AML laws require a minimum 5-year retention period for all client documentation.'
      },
      {
        id: 'q1-4',
        question: 'Cash transaction reporting threshold is:',
        options: ['1 million THB', '2 million THB', '3 million THB', '5 million THB'],
        correct_answer: 1,
        explanation: 'Cash transactions of 2 million THB or more must be reported.'
      },
      {
        id: 'q1-5',
        question: 'Which entities are subject to AML laws in the real estate sector?',
        options: ['Real estate agencies only', 'Lawyers and accountants only', 'Developers only', 'All real estate professionals including agencies, lawyers, accountants, developers, and rental management companies'],
        correct_answer: 3,
        explanation: 'The enhanced scope includes all real estate industry professionals.'
      }
    ],
    created_at: '2024-01-01T00:00:00Z'
  }
] 