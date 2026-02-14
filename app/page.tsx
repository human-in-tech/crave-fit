'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { LandingPage } from '@/components/pages/landing'
import { QuizFlow } from '@/components/pages/quiz-flow'
import { RecommendationsScreen } from '@/components/pages/recommendations'
import { MealTracker } from '@/components/pages/meal-tracker'
import { Dashboard } from '@/components/pages/dashboard'
<<<<<<< HEAD
import { Profile } from '@/components/pages/profile'
import { Header } from '@/components/header'
import { ChefFriend } from '@/components/chef-friend'
import { supabase } from '@/lib/supabase'

type PageView = 'dashboard' | 'landing' | 'quiz' | 'recommendations' | 'meal-tracker' | 'profile' | 'chef'

export default function Page() {
  const router = useRouter()
=======
<<<<<<< HEAD
import { Profile } from '@/components/pages/profile'
import { Header } from '@/components/header'
import { supabase } from '@/lib/supabase'
import { BrowseScreen } from '@/components/pages/browse'

type PageView =
  | 'dashboard'
  | 'landing'
  | 'quiz'
  | 'recommendations'
  | 'browse'
  | 'meal-tracker'
  | 'profile'

export default function Page() {
  const router = useRouter()

>>>>>>> origin/main
  const [currentView, setCurrentView] = useState<PageView>('landing')
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({})
  const [healthPreference, setHealthPreference] = useState(50)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState<any>(null)
<<<<<<< HEAD
  const [activeRecipe, setActiveRecipe] = useState<{ name: string, instructions: string[] } | undefined>(undefined)
=======
>>>>>>> origin/main

  const fetchProfile = async (userId: string) => {
    const { data } = await supabase
      .from('profiles')
      .select('full_name, avatar_url, age, weight, height, goal, allergies')
      .eq('id', userId)
      .single()

    if (data) {
      setUserData({ ...data, id: userId })
    }
  }

  useEffect(() => {
<<<<<<< HEAD
    // Check initial session
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        setIsLoggedIn(true)
        fetchProfile(session.user.id)

        // Check for view redirect
        const urlParams = new URLSearchParams(window.location.search)
        const view = urlParams.get('view') as PageView
        if (view === 'dashboard') {
          setCurrentView('dashboard')
          window.history.replaceState({}, '', '/')
        }
=======
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (session) {
        setIsLoggedIn(true)
        fetchProfile(session.user.id)
>>>>>>> origin/main
      }
    }

    checkSession()

<<<<<<< HEAD
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
=======
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
>>>>>>> origin/main
      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        setIsLoggedIn(true)
        if (session) fetchProfile(session.user.id)
      } else if (event === 'SIGNED_OUT') {
        setIsLoggedIn(false)
        setUserData(null)
        setCurrentView('landing')
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

<<<<<<< HEAD
  const handleNavigate = (view: PageView) => {
=======
  // 🔥 Controlled Navigation
  const handleNavigate = (view: PageView) => {
    // ❌ Block manual access to recommendations
    if (view === 'recommendations') return

    // 🔐 Protect non-landing routes
=======
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
>>>>>>> origin/main
>>>>>>> origin/main
    if (view !== 'landing' && !isLoggedIn) {
      router.push('/auth/login')
      return
    }
<<<<<<< HEAD
    setCurrentView(view)
  }

=======
<<<<<<< HEAD

    setCurrentView(view)
  }

  // Quiz → Recommendations ONLY
=======
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

>>>>>>> origin/main
  const handleStartQuiz = () => {
    setCurrentView('quiz')
    setQuizAnswers({})
  }

<<<<<<< HEAD
=======
>>>>>>> origin/main
>>>>>>> origin/main
  const handleQuizComplete = (answers: Record<string, string>) => {
    setQuizAnswers(answers)
    setCurrentView('recommendations')
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/main
  const handleSkipQuiz = () => {
    setCurrentView('recommendations')
    setQuizAnswers({})
  }

<<<<<<< HEAD
=======
>>>>>>> origin/main
>>>>>>> origin/main
  const handleBackToLanding = () => {
    setCurrentView('landing')
  }

<<<<<<< HEAD
  // No early return for !isLoggedIn to allow Landing Page visibility

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  // No early return for !isLoggedIn to allow Landing Page visibility

>>>>>>> origin/main
>>>>>>> origin/main
  return (
    <main className="min-h-screen bg-background">
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        isLoggedIn={isLoggedIn}
<<<<<<< HEAD
        userData={userData}
      />
      {currentView === 'dashboard' && (
        <Dashboard
          onNavigate={handleNavigate}
          userData={userData}
=======
<<<<<<< HEAD
        userData={userData}
      />

      {currentView === 'dashboard' && (
        <Dashboard onNavigate={handleNavigate} userData={userData} />
      )}

      {currentView === 'landing' && (
        <LandingPage
          onStartQuiz={() => setCurrentView('quiz')}
          onNavigate={handleNavigate}
          onMealTrackerClick={() => handleNavigate('meal-tracker')}
        />
      )}

      {currentView === 'quiz' && (
        <QuizFlow
          onComplete={handleQuizComplete}
          onSkip={() => setCurrentView('recommendations')}
          onBack={handleBackToLanding}
        />
      )}

=======
      />
      {currentView === 'dashboard' && (
        <Dashboard
          onNavigate={handleNavigate}
>>>>>>> origin/main
        />
      )}
      {currentView === 'landing' && (
        <LandingPage
          onStartQuiz={() => handleNavigate('quiz')}
          onNavigate={handleNavigate}
          onMealTrackerClick={() => handleNavigate('meal-tracker')}
<<<<<<< HEAD
=======
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
>>>>>>> origin/main
        />
      )}
      {currentView === 'quiz' && (
        <QuizFlow
          onComplete={handleQuizComplete}
          onSkip={handleSkipQuiz}
          onBack={handleBackToLanding}
        />
      )}
<<<<<<< HEAD
=======
>>>>>>> origin/main
>>>>>>> origin/main
      {currentView === 'recommendations' && (
        <RecommendationsScreen
          quizAnswers={quizAnswers}
          healthPreference={healthPreference}
          onHealthPreferenceChange={setHealthPreference}
          onBack={handleBackToLanding}
<<<<<<< HEAD
          onMealTrackerClick={() => handleNavigate('meal-tracker')}
          onCookWithChef={(recipe: { name: string, instructions: string[] }) => {
            setActiveRecipe(recipe)
            setCurrentView('chef')
          }}
        />
      )}
      {currentView === 'meal-tracker' && (
        <MealTracker onBack={handleBackToLanding} />
      )}
=======
<<<<<<< HEAD
          onMealTrackerClick={() => handleNavigate('meal-tracker')}
        />
      )}

      {currentView === 'browse' && (
        <BrowseScreen onBack={handleBackToLanding} />
      )}

      {currentView === 'meal-tracker' && (
        <MealTracker onBack={handleBackToLanding} />
      )}

>>>>>>> origin/main
      {currentView === 'profile' && (
        <Profile
          onBack={() => setCurrentView('dashboard')}
          onUpdate={() => fetchProfile(userData?.id || '')}
        />
      )}
<<<<<<< HEAD
      {currentView === 'chef' && (
        <ChefFriend
          recipe={activeRecipe}
          onClose={() => {
            setCurrentView('recommendations')
            setActiveRecipe(undefined)
          }}
        />
      )}
=======
=======
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
>>>>>>> origin/main
>>>>>>> origin/main
    </main>
  )
}
