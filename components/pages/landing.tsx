<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Utensils, Sparkles, Leaf, TrendingUp, Heart, LayoutDashboard, Search, UtensilsCrossed, Zap, ArrowRight } from 'lucide-react'
import { UtensilLoader } from '@/components/ui/utensil-loader'
<<<<<<< HEAD
=======
=======
'use client';

import { Button } from '@/components/ui/button'
<<<<<<< HEAD
import { Utensils, Sparkles, Leaf, TrendingUp, Heart, LayoutDashboard, Search, UtensilsCrossed, Zap } from 'lucide-react'
>>>>>>> origin/main
>>>>>>> origin/main

interface LandingPageProps {
  onStartQuiz: () => void
  onNavigate: (view: any) => void
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
import { Utensils, Sparkles, Leaf, TrendingUp, Heart } from 'lucide-react'

interface LandingPageProps {
  onStartQuiz: () => void
  onNavigate: (view: 'recommendations') => void
>>>>>>> 1154a2da7d7b6d875836dc60b9665c645596fa24
>>>>>>> origin/main
>>>>>>> origin/main
  onMealTrackerClick?: () => void
}

export function LandingPage({ onStartQuiz, onNavigate, onMealTrackerClick }: LandingPageProps) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
  const [isDealing, setIsDealing] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const dealTimer = setTimeout(() => {
      setIsDealing(false);
      setShowCards(true);
    }, 1800);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(dealTimer);
    };
  }, []);

  const features = [
    {
      id: 0,
      title: "Dashboard",
      subtitle: "Command Center",
      description: "Track your calories, protein, and daily macro progress in one sleek viewport.",
      icon: LayoutDashboard,
      color: "orange",
      gradient: "from-orange-400 to-orange-600",
      tint: "bg-orange-50/40"
    },
    {
      id: 1,
      title: "Smart Quiz",
      subtitle: "Discovery 2.0",
      description: "AI-powered quick quiz to pinpoint your hunger state and texture preferences.",
      icon: Sparkles,
      color: "blue",
      gradient: "from-blue-400 to-blue-600",
      tint: "bg-blue-50/40"
    },
    {
      id: 2,
      title: "Recommendations",
      subtitle: "Results Engine",
      description: "Get personalized food matches with healthy swaps to satisfy every craving.",
      icon: Utensils,
      color: "rose",
      gradient: "from-rose-400 to-rose-600",
      tint: "bg-rose-50/40"
    },
    {
      id: 3,
      title: "Meal Tracker",
      subtitle: "Log & Analyze",
      description: "Easily log meals and monitor your remaining calorie gap in real-time.",
      icon: UtensilsCrossed,
      color: "indigo",
      gradient: "from-indigo-400 to-indigo-600",
      tint: "bg-indigo-50/40"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-white to-[#E8F5E9] flex flex-col pt-10 overflow-hidden text-foreground">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-[5%] -left-32 w-[35rem] h-[35rem] bg-emerald-100 rounded-full blur-[140px] opacity-60 will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        />
        <div
          className="absolute top-[35%] -right-32 w-[40rem] h-[40rem] bg-green-50 rounded-full blur-[160px] opacity-80 will-change-transform"
          style={{ transform: `translateY(${scrollY * -0.04}px)` }}
        />
        <div
          className="absolute top-[65%] left-1/4 w-[30rem] h-[30rem] bg-emerald-200/20 rounded-full blur-[120px] opacity-50 will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        />

        <div
          className="absolute top-[15%] right-[20%] opacity-5 rotate-12 will-change-transform animate-float shadow-sm"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <Leaf className="w-24 h-24 text-[#8BA88E]" strokeWidth={1} />
        </div>
        <div
          className="absolute top-[45%] left-[15%] opacity-5 -rotate-12 will-change-transform animate-float-delayed"
          style={{ transform: `translateY(${scrollY * 0.25}px)` }}
        >
          <Utensils className="w-20 h-20 text-[#8BA88E]" strokeWidth={1} />
        </div>
        <div
          className="absolute top-[75%] right-[15%] opacity-5 rotate-45 will-change-transform animate-float"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        >
          <Zap className="w-28 h-28 text-[#8BA88E]" strokeWidth={1} />
        </div>
        <div
          className="absolute top-[25%] left-[10%] opacity-5 rotate-[-20deg] animate-float-delayed"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <Sparkles className="w-32 h-32 text-[#8BA88E]" strokeWidth={1} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col w-full">
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="w-full max-w-7xl space-y-10 text-center">
            {/* Tagline */}
            <div className="space-y-6 animate-fade-in max-w-3xl mx-auto">
              <div className="inline-block">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full">
                  ✨ Craving-Based Nutrition
                </span>
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground text-balance leading-tight">
                Eat what you crave.<br />
                <span className="bg-gradient-to-r from-primary via-emerald-600 to-primary bg-clip-text text-transparent italic">
                  Know what you eat.
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed font-medium">
                Discover delicious foods that match your cravings, explore their nutrition, and find healthier alternatives—all personalized just for you.
              </p>
            </div>

            {/* Feature Highlights (Small Row) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 animate-slide-up max-w-4xl mx-auto">
              {[
                { title: "Smart Discovery", icon: Sparkles, desc: "AI-matched craving logic.", color: "primary" },
                { title: "Health Focused", icon: Heart, desc: "In-depth macro analysis.", color: "emerald-600" },
                { title: "Smart Swaps", icon: Leaf, desc: "Guilt-free alternatives.", color: "primary" }
              ].map((h, i) => (
                <div key={i} className="group transition-all duration-300">
                  <div className="h-full p-6 rounded-[2rem] bg-white/40 backdrop-blur-3xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-emerald-400/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <h.icon className={`w-6 h-6 text-${h.color}`} strokeWidth={1.5} />
                    </div>
                    <h4 className="font-black text-sm text-foreground tracking-tight mb-1">{h.title}</h4>
                    <p className="text-[10px] text-muted-foreground leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation hint */}
            <div className="pt-2 pb-6 scale-95 opacity-50">
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] italic animate-pulse">
                Explore the features below
              </p>
            </div>

            {/* Detailed Feature Section - 4 Column Grid */}
            <div className="relative min-h-[400px] py-8">
              {isDealing && (
                <div className="absolute inset-0 z-50 flex items-center justify-center animate-out fade-out duration-700 scale-in-95">
                  <UtensilLoader />
                </div>
              )}

              <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${showCards ? 'opacity-100' : 'opacity-0'}`}>
                {features.map((f, i) => (
                  <div
                    key={f.id}
                    className={`group transition-all duration-500 ${showCards ? 'translate-y-0 scale-100' : 'translate-y-20 scale-90'}`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className={`relative h-full p-8 rounded-[2.5rem] ${f.tint} backdrop-blur-3xl border border-white/30 shadow-2xl transition-all duration-500 overflow-hidden hover:scale-[1.02] hover:shadow-3xl`}>
                      <div className={`absolute top-0 right-0 w-24 h-24 bg-${f.color}-400/20 blur-3xl -mr-12 -mt-12 group-hover:bg-${f.color}-400/30 transition-colors`} />

                      <div className="flex flex-col gap-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 shadow-${f.color}-500/20`}>
                          <f.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-xl font-black text-foreground tracking-tight leading-none mb-2">{f.title}</h3>
                          <div className="flex items-center gap-2 mb-4">
                            <span className={`w-1.5 h-1.5 rounded-full bg-${f.color}-500 animate-pulse`} />
                            <p className={`text-[10px] font-bold text-${f.color}-600/70 uppercase tracking-widest`}>{f.subtitle}</p>
                          </div>
                          <p className="text-sm text-muted-foreground/90 leading-relaxed font-medium line-clamp-2">
                            {f.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="pt-16 border-t border-border/30 mt-20 text-center">
                <p className="text-sm text-muted-foreground mb-6 font-medium">Trusted by health-conscious foodies</p>
                <div className="flex items-center justify-center gap-8 text-xs text-muted-foreground font-bold">
                  <div className="flex items-center gap-2 group/item hover:text-primary transition-colors cursor-default">
                    <TrendingUp className="w-4 h-4 text-primary group-hover/item:scale-110 transition-transform" />
                    <span>100+ FOODS</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-border"></div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span>AI MATCHING</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-border"></div>
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-emerald-500" />
                    <span>HEALTHY SWAPS</span>
                  </div>
                </div>
<<<<<<< HEAD
=======
=======
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5 flex flex-col pt-10">
=======
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5 flex flex-col">
      {/* Header */}
      <header className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border/30 bg-white/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex items-center gap-3 justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
              <Utensils className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-foreground">CraveFit</h1>
              <p className="text-xs text-primary font-semibold">Smart Eating Habits</p>
            </div>
          </div>
        </div>
      </header>

>>>>>>> 1154a2da7d7b6d875836dc60b9665c645596fa24
      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="w-full max-w-3xl space-y-10 text-center">
          {/* Tagline */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full">
                ✨ Craving-Based Nutrition
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground text-balance leading-tight">
              Eat what you crave.<br />
              <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                Know what you eat.
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
              Discover delicious foods that match your cravings, explore their nutrition, and find healthier alternatives—all personalized just for you.
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 py-10 animate-slide-up">
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-5 border border-blue-200/50 hover:border-blue-300 transition-all hover:shadow-xl hover:shadow-blue-200/30">
              <div className="w-12 h-12 rounded-xl bg-blue-200 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-blue-600" />
              </div>
              <p className="font-bold text-sm text-foreground">Smart Discovery</p>
              <p className="text-xs text-muted-foreground mt-2">AI-matched foods based on your cravings</p>
            </div>
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-5 border border-green-200/50 hover:border-green-300 transition-all hover:shadow-xl hover:shadow-green-200/30">
              <div className="w-12 h-12 rounded-xl bg-green-200 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <p className="font-bold text-sm text-foreground">Health Focused</p>
              <p className="text-xs text-muted-foreground mt-2">Detailed nutrition & health scores</p>
            </div>
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-5 border border-orange-200/50 hover:border-orange-300 transition-all hover:shadow-xl hover:shadow-orange-200/30">
              <div className="w-12 h-12 rounded-xl bg-orange-200 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Leaf className="w-6 h-6 text-orange-600" />
              </div>
              <p className="font-bold text-sm text-foreground">Healthier Recipes</p>
              <p className="text-xs text-muted-foreground mt-2">Find smarter swaps with recipes</p>
            </div>
          </div>

<<<<<<< HEAD
          {/* Navigation hint */}
          <div className="pt-4 pb-8 scale-95 opacity-50">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest italic animate-pulse">
              Use the header above to explore the features
            </p>
          </div>

          {/* Detailed Feature Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left py-12">
            {/* Dashboard Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200/50 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-200 flex items-center justify-center">
                  <LayoutDashboard className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-foreground">📊 Dashboard</h3>
                  <p className="text-xs font-bold text-orange-600/70 uppercase tracking-wider">Command Center</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Your personalized command center for health progress.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                  <span><strong>Weekly Overview:</strong> Tracks average calorie intake, protein, and macro balance.</span>
                </li>
                <li className="flex gap-3 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                  <span><strong>Goal Tracking:</strong> Visual bar chart comparisons to your 2,000-calorie daily target.</span>
                </li>
                <li className="flex gap-3 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                  <span><strong>Success Metrics:</strong> Calculate "Goal Attainment" percentage for total consistency.</span>
                </li>
              </ul>
            </div>

            {/* Quiz Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/50 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-200 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-foreground">🎢 Quiz</h3>
                  <p className="text-xs font-bold text-blue-600/70 uppercase tracking-wider">Smart Discovery</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                A quick, interactive way to find exactly what you're craving.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span><strong>Context-Aware:</strong> We factor in your current mood, texture preference, and hunger.</span>
                </li>
                <li className="flex gap-3 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span><strong>Personalized Logic:</strong> Smart filtering to find the perfect match for your state.</span>
                </li>
                <li className="flex gap-3 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span><strong>Skip Option:</strong> Directly browse the database if you already have a plan.</span>
                </li>
              </ul>
            </div>

            {/* Foods Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200/50 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-200 flex items-center justify-center">
                  <Utensils className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-foreground">🥗 Foods</h3>
                  <p className="text-xs font-bold text-green-600/70 uppercase tracking-wider">Recommendations</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The results engine of CraveFit, where discovery happens.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
                  <span><strong>Health Slider:</strong> Toggle between Indulgent and Healthy versions of cravings.</span>
                </li>
                <li className="flex gap-3 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
                  <span><strong>Nutritional Deep-Dive:</strong> Detailed breakdown of every calorie and macro.</span>
                </li>
                <li className="flex gap-3 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
                  <span><strong>Smart Swaps:</strong> Healthier recipe alternatives so you can eat without the guilt.</span>
                </li>
              </ul>
            </div>

            {/* Tracker Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-secondary/15 to-secondary/5 border border-secondary/20 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <UtensilsCrossed className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-foreground">📝 Meal Tracker</h3>
                  <p className="text-xs font-bold text-secondary-foreground/70 uppercase tracking-wider">Nutrition Log</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                A daily log to keep your nutrition on track automatically.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                  <span><strong>Calorie Counter:</strong> Real-time display showing calories remaining for the day.</span>
                </li>
                <li className="flex gap-3 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                  <span><strong>Smart Suggestions:</strong> Meal recommendations based on your current macro gap.</span>
                </li>
                <li className="flex gap-3 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                  <span><strong>Macro Balance:</strong> Visual progress bars for Protein, Carbs, and Fats.</span>
                </li>
              </ul>
            </div>
=======
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              onClick={onStartQuiz}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-10 py-7 rounded-xl font-bold transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1"
            >
              Start the Quiz
            </Button>
            <Button
              onClick={() => onNavigate('recommendations')}
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary/10 text-base sm:text-lg px-10 py-7 rounded-xl font-bold transition-all hover:shadow-lg"
            >
              Browse Foods
            </Button>
            {onMealTrackerClick && (
              <Button
                onClick={onMealTrackerClick}
                variant="outline"
                size="lg"
                className="border-2 border-secondary text-secondary-foreground hover:bg-secondary/10 text-base sm:text-lg px-10 py-7 rounded-xl font-bold transition-all hover:shadow-lg bg-transparent"
              >
                Track Meals
              </Button>
            )}
>>>>>>> 1154a2da7d7b6d875836dc60b9665c645596fa24
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 border-t border-border/30 mt-10">
            <p className="text-sm text-muted-foreground mb-4 font-medium">Trusted by health-conscious foodies</p>
            <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>100+ Foods</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-border"></div>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-red-500" />
                <span>AI Matching</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-border"></div>
              <div className="flex items-center gap-1">
                <Leaf className="w-4 h-4 text-green-600" />
                <span>Healthier Recipes</span>
>>>>>>> origin/main
>>>>>>> origin/main
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
