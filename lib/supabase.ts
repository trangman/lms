import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Types for our database
export interface User {
  id: string
  email: string
  full_name: string
  company: string
  role: 'student' | 'admin'
  created_at: string
}

export interface Course {
  id: string
  title: string
  description: string
  duration_hours: number
  order: number
  is_published: boolean
  created_at: string
}

export interface Lesson {
  id: string
  course_id: string
  title: string
  content: string
  video_url?: string
  duration_minutes: number
  order: number
  created_at: string
}

export interface UserProgress {
  id: string
  user_id: string
  course_id: string
  lesson_id?: string
  status: 'not_started' | 'in_progress' | 'completed'
  completion_percentage: number
  started_at?: string
  completed_at?: string
  created_at: string
}

export interface Assessment {
  id: string
  course_id: string
  title: string
  passing_score: number
  questions: AssessmentQuestion[]
  created_at: string
}

export interface AssessmentQuestion {
  id: string
  question: string
  options: string[]
  correct_answer: number
  explanation?: string
}

export interface UserAssessment {
  id: string
  user_id: string
  assessment_id: string
  score: number
  passed: boolean
  answers: number[]
  completed_at: string
} 