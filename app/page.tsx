'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { LandingPage } from '@/components/pages/landing'
import { QuizFlow } from '@/components/pages/quiz-flow'
import { RecommendationsScreen } from '@/components/pages/recommendations'
import { MealTracker } from '@/components/pages/meal-tracker'
import { Dashboard } from '@/components/pages/dashboard'
<<<<<<< HEAD
import { Header } from '@/components/header'
=======
>>>>>>> 1154a2da7d7b6d875836dc60b9665c645596fa24
import { authStorage } from '@/lib/auth'

type PageView = 'dashboard' | 'landing' | 'quiz' | 'recommendations' | 'meal-tracker'

export default function Page() {
  const router = useRouter()
<<<<<<< HEAD
  const [currentView, setCurrentView] = useState<PageView>('landing')
=======
  const [currentView, setCurrentView] = useState<PageView>('dashboard')
>>>>>>> 1154a2da7d7b6d875836dc60b9665c645596fa24
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({})
  const [healthPreference, setHealthPreference] = useState(50)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const user = authStorage.getUser()
<<<<<<< HEAD
    if (user) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleNavigate = (view: PageView) => {
    if (view !== 'landing' && !isLoggedIn) {
      router.push('/auth/login')
      return
    }
    setCurrentView(view)
  }
=======
    if (!user) {
      router.push('/auth/login')
    } else {
      setIsLoggedIn(true)
    }
  }, [router])
>>>>>>> 1154a2da7d7b6d875836dc60b9665c645596fa24

  const handleStartQuiz = () => {
    setCurrentView('quiz')
    setQuizAnswers({})
  }

  const handleQuizComplete = (answers: Record<string, string>) => {
    setQuizAnswers(answers)
    setCurrentView('recommendations')
  }

  const handleSkipQuiz = () => {
    setCurrentView('recommendations')
    setQuizAnswers({})
  }

  const handleBackToLanding = () => {
    setCurrentView('landing')
  }

<<<<<<< HEAD
  // No early return for !isLoggedIn to allow Landing Page visibility

  return (
    <main className="min-h-screen bg-background">
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        isLoggedIn={isLoggedIn}
      />
      {currentView === 'dashboard' && (
        <Dashboard
          onNavigate={handleNavigate}
        />
      )}
      {currentView === 'landing' && (
        <LandingPage
          onStartQuiz={() => handleNavigate('quiz')}
          onNavigate={handleNavigate}
          onMealTrackerClick={() => handleNavigate('meal-tracker')}
=======
  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground font-semibold">Loading CraveFit...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {currentView === 'dashboard' && (
        <Dashboard 
          onNavigate={setCurrentView}
        />
      )}
      {currentView === 'landing' && (
        <LandingPage 
          onStartQuiz={handleStartQuiz} 
          onNavigate={setCurrentView}
          onMealTrackerClick={() => setCurrentView('meal-tracker')}
>>>>>>> 1154a2da7d7b6d875836dc60b9665c645596fa24
        />
      )}
      {currentView === 'quiz' && (
        <QuizFlow
          onComplete={handleQuizComplete}
          onSkip={handleSkipQuiz}
          onBack={handleBackToLanding}
        />
      )}
      {currentView === 'recommendations' && (
        <RecommendationsScreen
          quizAnswers={quizAnswers}
          healthPreference={healthPreference}
          onHealthPreferenceChange={setHealthPreference}
          onBack={handleBackToLanding}
<<<<<<< HEAD
          onMealTrackerClick={() => handleNavigate('meal-tracker')}
=======
          onMealTrackerClick={() => setCurrentView('meal-tracker')}
>>>>>>> 1154a2da7d7b6d875836dc60b9665c645596fa24
        />
      )}
      {currentView === 'meal-tracker' && (
        <MealTracker onBack={handleBackToLanding} />
      )}
    </main>
  )
}
