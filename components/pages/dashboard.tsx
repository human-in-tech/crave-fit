'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
import { TrendingUp, TrendingDown, Flame, LogOut, UserCircle2, ChevronRight, Utensils, Lightbulb } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { UtensilLoader } from '@/components/ui/utensil-loader'
<<<<<<< HEAD
=======
=======
import { ArrowRight, TrendingUp, Flame, Droplet, LogOut, Calendar, Target } from 'lucide-react'
import { authStorage } from '@/lib/auth'
import { useRouter } from 'next/navigation'
>>>>>>> origin/main
>>>>>>> origin/main

interface WeeklyProgress {
  day: string
  calories: number
  protein: number
  carbs: number
  fat: number
  goal: number
}

interface DashboardProps {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
  onNavigate: (view: 'landing' | 'meal-tracker' | 'quiz' | 'recommendations' | 'dashboard' | 'profile') => void
  userData?: {
    full_name?: string
    avatar_url?: string
    age?: number
    weight?: number
    height?: number
    goal?: string
    allergies?: string
  }
}

const healthFacts = [
  "💧 Drinking water before meals can help reduce calorie intake by up to 13%",
  "🥗 Eating protein at breakfast can reduce cravings by 60% throughout the day",
  "🏃 Just 10 minutes of exercise can boost your metabolism for hours",
  "😴 Getting 7-9 hours of sleep helps regulate hunger hormones",
  "🥜 Nuts are packed with healthy fats that keep you full longer",
  "🍎 Eating fiber-rich foods can help you feel 25% fuller",
  "🧘 Mindful eating can reduce overeating by up to 30%",
  "🥤 Sugary drinks can add 500+ calories to your daily intake without filling you up"
]

export function Dashboard({ onNavigate, userData }: DashboardProps) {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [weeklyData, setWeeklyData] = useState<WeeklyProgress[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [randomFact, setRandomFact] = useState('')

  useEffect(() => {
    setRandomFact(healthFacts[Math.floor(Math.random() * healthFacts.length)])
  }, [])

  useEffect(() => {
    const checkUserAndProfile = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        if (!session) {
          router.push('/')
          return
        }

        setUser(session.user)

        // Fetch weekly progress data
        const { data: meals } = await supabase
          .from('meals')
          .select('*')
          .eq('user_id', session.user.id)
          .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString())

        if (meals && meals.length > 0) {
          const groupedByDay = meals.reduce((acc: any, meal: any) => {
            const day = new Date(meal.created_at).toLocaleDateString('en-US', { weekday: 'short' })
            if (!acc[day]) {
              acc[day] = { calories: 0, protein: 0, carbs: 0, fat: 0, count: 0 }
            }
            acc[day].calories += meal.calories || 0
            acc[day].protein += meal.protein || 0
            acc[day].carbs += meal.carbs || 0
            acc[day].fat += meal.fat || 0
            acc[day].count += 1
            return acc
          }, {})

          const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          const formattedData = weekDays.map(day => ({
            day,
            calories: groupedByDay[day]?.calories || 0,
            protein: groupedByDay[day]?.protein || 0,
            carbs: groupedByDay[day]?.carbs || 0,
            fat: groupedByDay[day]?.fat || 0,
            goal: 2000
          }))

          setWeeklyData(formattedData)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    checkUserAndProfile()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const avgCalories = weeklyData.length > 0
    ? Math.round(weeklyData.reduce((sum, d) => sum + d.calories, 0) / weeklyData.filter(d => d.calories > 0).length)
    : 0

  const totalProtein = weeklyData.length > 0
    ? Math.round(weeklyData.reduce((sum, d) => sum + d.protein, 0) / weeklyData.filter(d => d.protein > 0).length)
    : 0

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
        <UtensilLoader />
      </div>
    )
  }

  const hasData = weeklyData.some(d => d.calories > 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary/5">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-sm border-b border-border/50 py-6 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center border-2 border-border shadow-sm">
              {userData?.avatar_url ? (
                <img src={userData.avatar_url} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <UserCircle2 className="w-8 h-8 text-muted-foreground" />
              )}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Welcome, {userData?.full_name?.split(' ')[0] || 'User'}
              </h1>
              <p className="text-sm text-muted-foreground mt-1">Your health dashboard</p>
            </div>
<<<<<<< HEAD
=======
=======
  onNavigate: (view: 'landing' | 'meal-tracker' | 'quiz' | 'recommendations' | 'dashboard') => void
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [weeklyData, setWeeklyData] = useState<WeeklyProgress[]>([])

  useEffect(() => {
    const currentUser = authStorage.getUser()
    setUser(currentUser)

    // Load weekly progress from localStorage
    const stored = localStorage.getItem('craveFit_weeklyProgress')
    if (stored) {
      setWeeklyData(JSON.parse(stored))
    } else {
      // Initialize with demo data
      const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      const demoData = days.map((day, index) => ({
        day,
        calories: Math.floor(Math.random() * 500) + 1500,
        protein: Math.floor(Math.random() * 30) + 80,
        carbs: Math.floor(Math.random() * 40) + 150,
        fat: Math.floor(Math.random() * 20) + 60,
        goal: 2000,
      }))
      setWeeklyData(demoData)
      localStorage.setItem('craveFit_weeklyProgress', JSON.stringify(demoData))
    }
  }, [])

  const handleLogout = () => {
    authStorage.logout()
    router.push('/auth/login')
  }

  const avgCalories = weeklyData.length > 0 ? Math.round(weeklyData.reduce((sum, d) => sum + d.calories, 0) / weeklyData.length) : 0
  const totalProtein = weeklyData.length > 0 ? Math.round(weeklyData.reduce((sum, d) => sum + d.protein, 0) / weeklyData.length) : 0
  const weeklyGoalAttainment = weeklyData.length > 0 ? Math.round((weeklyData.filter(d => d.calories <= d.goal).length / weeklyData.length) * 100) : 0

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/3">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/50 backdrop-blur-sm border-b border-border/30 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Welcome, {user?.name || 'User'}</h1>
            <p className="text-sm text-muted-foreground mt-1">Your weekly progress dashboard</p>
>>>>>>> origin/main
>>>>>>> origin/main
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleLogout}
            className="text-muted-foreground hover:text-red-600 hover:bg-red-50"
            title="Sign out"
          >
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-10">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
        <div className="max-w-6xl mx-auto space-y-8">

          {!hasData ? (
            /* Empty State with Health Fact */
            <div className="space-y-6">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-blue-500/20 rounded-full">
                    <Utensils className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Start Tracking Your Meals</h3>
                    <p className="text-muted-foreground mb-6">Log your meals to get accurate visualizations, personalized insights, and track your progress towards your health goals.</p>
                    <Button
                      onClick={() => onNavigate('meal-tracker')}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 h-12 rounded-xl shadow-lg"
                    >
                      Track Your First Meal
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/20 rounded-full">
                    <Lightbulb className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-emerald-700 uppercase tracking-wider mb-2">Did You Know?</h4>
                    <p className="text-lg text-foreground">{randomFact}</p>
                  </div>
                </div>
              </Card>
            </div>
          ) : (
            /* Dashboard with Data */
            <>
              {/* Top Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Total Progress */}
                <Card className="p-6 bg-white border-border shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Total Progress</p>
                      <div className="flex items-baseline gap-2">
                        <p className="text-4xl font-bold text-emerald-600">
                          {userData?.weight ? `${(75 - userData.weight).toFixed(1)}` : '0.0'}
                        </p>
                        <span className="text-sm text-muted-foreground">lbs lost</span>
                      </div>
                    </div>
                    <div className="p-3 bg-emerald-100 rounded-full">
                      <TrendingDown className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                </Card>

                {/* Goal Progress */}
                <Card className="p-6 bg-white border-border shadow-sm">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Goal Progress</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all"
                            style={{ width: `${Math.min((avgCalories / 2000) * 100, 100)}%` }}
                          />
                        </div>
                      </div>
                      <p className="text-sm text-foreground">
                        <span className="font-bold text-orange-600">{Math.round((avgCalories / 2000) * 100)}%</span> towards daily goal
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Current Streak */}
                <Card className="p-6 bg-white border-border shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Current Streak</p>
                      <div className="flex items-baseline gap-2">
                        <p className="text-4xl font-bold text-blue-600">{weeklyData.filter(d => d.calories > 0).length}</p>
                        <span className="text-sm text-muted-foreground">days tracked</span>
                      </div>
                    </div>
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Flame className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </Card>
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Weight Trend Chart */}
                <Card className="p-6 bg-white border-border shadow-sm">
                  <h3 className="text-lg font-bold text-foreground mb-6">Weight Trend</h3>
                  <div className="h-64 flex items-end justify-between gap-2">
                    {weeklyData.map((day, idx) => {
                      const weight = userData?.weight ? userData.weight + (idx * 0.1) : 70 - (idx * 0.3)
                      const maxWeight = 75
                      const minWeight = 68
                      const heightPercent = ((weight - minWeight) / (maxWeight - minWeight)) * 100

                      return (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                          <div className="relative w-full h-48">
                            <div
                              className="absolute bottom-0 w-2 bg-slate-300 rounded-full mx-auto left-1/2 -translate-x-1/2"
                              style={{ height: `${Math.max(heightPercent, 10)}%` }}
                            >
                              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-600 rounded-full" />
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground">{day.day}</span>
                        </div>
                      )
                    })}
                  </div>
                </Card>

                {/* Calories Weekly Chart */}
                <Card className="p-6 bg-white border-border shadow-sm">
                  <h3 className="text-lg font-bold text-foreground mb-6">Calories Weekly</h3>
                  <div className="h-64 flex items-end justify-between gap-2">
                    {weeklyData.map((day, idx) => {
                      const percentage = day.calories > 0 ? (day.calories / 2400) * 100 : 0

                      return (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                          <div className="relative w-full h-48">
                            <div
                              className="absolute bottom-0 w-full bg-slate-800 rounded-t-sm transition-all"
                              style={{ height: `${Math.max(Math.min(percentage, 100), 5)}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">{day.day}</span>
                        </div>
                      )
                    })}
                  </div>
                </Card>
              </div>

              {/* Nutrition Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: 'Protein', avg: totalProtein, unit: 'g', color: 'from-blue-50 to-blue-100', textColor: 'text-blue-600', border: 'border-blue-200' },
                  { label: 'Carbs', avg: Math.round(weeklyData.reduce((sum, d) => sum + d.carbs, 0) / Math.max(weeklyData.filter(d => d.carbs > 0).length, 1)), unit: 'g', color: 'from-yellow-50 to-yellow-100', textColor: 'text-yellow-600', border: 'border-yellow-200' },
                  { label: 'Fat', avg: Math.round(weeklyData.reduce((sum, d) => sum + d.fat, 0) / Math.max(weeklyData.filter(d => d.fat > 0).length, 1)), unit: 'g', color: 'from-rose-50 to-rose-100', textColor: 'text-rose-600', border: 'border-rose-200' },
                ].map((macro, idx) => (
                  <Card key={idx} className={`p-6 bg-gradient-to-br ${macro.color} ${macro.border} shadow-sm`}>
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{macro.label}</p>
                    <p className={`text-4xl font-bold ${macro.textColor} mt-4`}>{macro.avg}{macro.unit}</p>
                    <p className="text-xs text-muted-foreground mt-3">Average daily intake</p>
                  </Card>
                ))}
              </div>
            </>
          )}

<<<<<<< HEAD
=======
=======
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-5 border border-orange-200/50">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Avg Daily Calories</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{avgCalories}</p>
                  <p className="text-xs text-muted-foreground mt-2">2000 cal goal</p>
                </div>
                <div className="p-3 bg-orange-200 rounded-lg">
                  <Flame className="w-5 h-5 text-orange-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-5 border border-blue-200/50">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Avg Protein</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{totalProtein}g</p>
                  <p className="text-xs text-muted-foreground mt-2">Daily intake</p>
                </div>
                <div className="p-3 bg-blue-200 rounded-lg">
                  <Droplet className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-50 to-green-5 border border-green-200/50">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Goal Attainment</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{weeklyGoalAttainment}%</p>
                  <p className="text-xs text-muted-foreground mt-2">This week</p>
                </div>
                <div className="p-3 bg-green-200 rounded-lg">
                  <Target className="w-5 h-5 text-green-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-5 border border-purple-200/50">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Total Days</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{weeklyData.length}</p>
                  <p className="text-xs text-muted-foreground mt-2">Tracked this week</p>
                </div>
                <div className="p-3 bg-purple-200 rounded-lg">
                  <Calendar className="w-5 h-5 text-purple-600" />
                </div>
              </div>
            </Card>
          </div>

          {/* Weekly Progress Chart */}
          <Card className="p-8 bg-white border border-border/30 shadow-sm">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                Weekly Calorie Intake
              </h2>
              <p className="text-sm text-muted-foreground mt-2">Daily progress towards your 2000 calorie goal</p>
            </div>

            <div className="grid grid-cols-7 gap-4">
              {weeklyData.map((day, index) => {
                const percentage = (day.calories / day.goal) * 100
                const isGoalMet = day.calories <= day.goal

                return (
                  <div key={index} className="flex flex-col items-center gap-3">
                    <div className="text-sm font-bold text-foreground">{day.day}</div>
                    <div className="relative w-12 h-32 bg-muted rounded-lg overflow-hidden border border-border/50">
                      <div
                        className={`absolute bottom-0 left-0 right-0 transition-all duration-500 ${
                          isGoalMet ? 'bg-gradient-to-t from-primary to-primary/70' : 'bg-gradient-to-t from-orange-400 to-orange-300'
                        }`}
                        style={{ height: `${Math.min(percentage, 100)}%` }}
                      />
                    </div>
                    <div className="text-xs font-semibold text-foreground">{day.calories}</div>
                    <div className={`text-xs font-semibold ${isGoalMet ? 'text-primary' : 'text-orange-600'}`}>
                      {Math.round(percentage)}%
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 pt-8 border-t border-border/30 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Daily Average: {avgCalories} cal</p>
                <p className="text-xs text-muted-foreground">Based on {weeklyData.length} days tracked</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-xs text-muted-foreground">Goal Met</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                  <span className="text-xs text-muted-foreground">Over Goal</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Nutrition Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Protein', avg: totalProtein, unit: 'g', color: 'from-blue-50 to-blue-5', icon: 'text-blue-600' },
              { label: 'Carbs', avg: Math.round(weeklyData.reduce((sum, d) => sum + d.carbs, 0) / weeklyData.length), unit: 'g', color: 'from-yellow-50 to-yellow-5', icon: 'text-yellow-600' },
              { label: 'Fat', avg: Math.round(weeklyData.reduce((sum, d) => sum + d.fat, 0) / weeklyData.length), unit: 'g', color: 'from-rose-50 to-rose-5', icon: 'text-rose-600' },
            ].map((macro, idx) => (
              <Card key={idx} className={`p-6 bg-gradient-to-br ${macro.color} border-opacity-50 border`}>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{macro.label}</p>
                <p className="text-4xl font-bold text-foreground mt-4">{macro.avg}{macro.unit}</p>
                <p className="text-xs text-muted-foreground mt-3">Average daily intake</p>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 cursor-pointer hover:shadow-lg transition-all" onClick={() => onNavigate('meal-tracker')}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Track Meals</h3>
                  <p className="text-sm text-muted-foreground mt-2">Log today's meals and monitor progress</p>
                </div>
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 cursor-pointer hover:shadow-lg transition-all" onClick={() => onNavigate('landing')}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Browse Foods</h3>
                  <p className="text-sm text-muted-foreground mt-2">Discover and learn about different foods</p>
                </div>
                <ArrowRight className="w-6 h-6 text-secondary-foreground" />
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-5 border-blue-200/50 cursor-pointer hover:shadow-lg transition-all" onClick={() => onNavigate('quiz')}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Take Quiz</h3>
                  <p className="text-sm text-muted-foreground mt-2">Get personalized food recommendations</p>
                </div>
                <ArrowRight className="w-6 h-6 text-blue-600" />
              </div>
            </Card>
          </div>
>>>>>>> origin/main
>>>>>>> origin/main
        </div>
      </div>
    </div>
  )
}
