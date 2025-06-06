'use client'

import { useState } from 'react'
import { Assessment, AssessmentQuestion } from '@/lib/supabase'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'

interface AssessmentProps {
  assessment: Assessment
  onComplete: (score: number, passed: boolean) => void
}

export default function AssessmentComponent({ assessment, onComplete }: AssessmentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>(new Array(assessment.questions.length).fill(-1))
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answerIndex
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < assessment.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateScore()
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    let correctAnswers = 0
    assessment.questions.forEach((question, index) => {
      if (answers[index] === question.correct_answer) {
        correctAnswers++
      }
    })
    
    const finalScore = Math.round((correctAnswers / assessment.questions.length) * 100)
    const passed = finalScore >= assessment.passing_score
    
    setScore(finalScore)
    setShowResults(true)
    onComplete(finalScore, passed)
  }

  const restartAssessment = () => {
    setCurrentQuestion(0)
    setAnswers(new Array(assessment.questions.length).fill(-1))
    setShowResults(false)
    setScore(0)
  }

  if (showResults) {
    const passed = score >= assessment.passing_score
    
    return (
      <div className="card max-w-2xl mx-auto">
        <div className="text-center">
          <div className={`mx-auto flex items-center justify-center h-12 w-12 rounded-full ${
            passed ? 'bg-success-100' : 'bg-danger-100'
          }`}>
            {passed ? (
              <CheckCircleIcon className="h-6 w-6 text-success-600" />
            ) : (
              <XCircleIcon className="h-6 w-6 text-danger-600" />
            )}
          </div>
          
          <h3 className="mt-4 text-lg font-semibold text-gray-900">
            Assessment {passed ? 'Completed!' : 'Failed'}
          </h3>
          
          <p className="mt-2 text-sm text-gray-600">
            You scored {score}% ({score >= assessment.passing_score ? 'Pass' : 'Fail'})
          </p>
          
          <div className="mt-4 space-y-2">
            <div className="text-sm text-gray-600">
              Required: {assessment.passing_score}% | Your Score: {score}%
            </div>
            <div className="progress-bar">
              <div 
                className={`h-full transition-all duration-300 ease-out ${
                  passed ? 'bg-success-600' : 'bg-danger-600'
                }`}
                style={{ width: `${Math.min(score, 100)}%` }}
              />
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {passed ? (
              <p className="text-success-700 text-sm">
                Congratulations! You have successfully completed this assessment.
              </p>
            ) : (
              <p className="text-danger-700 text-sm">
                Don't worry! You can retake the assessment after reviewing the course materials.
              </p>
            )}
            
            <div className="flex space-x-3 justify-center">
              <button
                onClick={restartAssessment}
                className="btn-secondary"
              >
                Retake Assessment
              </button>
              <button
                onClick={() => window.history.back()}
                className={passed ? 'btn-primary' : 'btn-secondary'}
              >
                {passed ? 'Continue to Next Module' : 'Review Course'}
              </button>
            </div>
          </div>
        </div>

        {/* Show correct answers */}
        <div className="mt-8 border-t border-gray-200 pt-6">
          <h4 className="font-semibold text-gray-900 mb-4">Review Answers</h4>
          <div className="space-y-4">
            {assessment.questions.map((question, index) => (
              <div key={question.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center ${
                    answers[index] === question.correct_answer ? 'bg-success-100' : 'bg-danger-100'
                  }`}>
                    {answers[index] === question.correct_answer ? (
                      <CheckCircleIcon className="h-4 w-4 text-success-600" />
                    ) : (
                      <XCircleIcon className="h-4 w-4 text-danger-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-900 mb-2">
                      Question {index + 1}: {question.question}
                    </h5>
                    <div className="space-y-1 text-sm">
                      <div className="text-success-700">
                        ✓ Correct: {question.options[question.correct_answer]}
                      </div>
                      {answers[index] !== question.correct_answer && answers[index] !== -1 && (
                        <div className="text-danger-700">
                          ✗ Your answer: {question.options[answers[index]]}
                        </div>
                      )}
                      {question.explanation && (
                        <div className="text-gray-600 mt-2 p-2 bg-gray-50 rounded">
                          {question.explanation}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const question = assessment.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / assessment.questions.length) * 100

  return (
    <div className="card max-w-2xl mx-auto">
      {/* Progress Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{assessment.title}</h3>
          <span className="text-sm text-gray-500">
            Question {currentQuestion + 1} of {assessment.questions.length}
          </span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <h4 className="text-xl font-medium text-gray-900 mb-4">
          {question.question}
        </h4>
        
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <label
              key={index}
              className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                answers[currentQuestion] === index
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                value={index}
                checked={answers[currentQuestion] === index}
                onChange={() => handleAnswerSelect(index)}
                className="h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500"
              />
              <span className="ml-3 text-gray-900">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        
        <div className="text-sm text-gray-500">
          {answers.filter(a => a !== -1).length} of {assessment.questions.length} answered
        </div>
        
        <button
          onClick={handleNext}
          disabled={answers[currentQuestion] === -1}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentQuestion === assessment.questions.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  )
} 