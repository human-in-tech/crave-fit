<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
>>>>>>> origin/main
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
>>>>>>> origin/main
import { Button } from '@/components/ui/button'

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        router.push('/?view=dashboard')
      }
    }
    checkSession()
  }, [router])

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======

export default function Page() {
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
>>>>>>> origin/main
              <CardTitle className="text-2xl text-center">
                Check your email!
              </CardTitle>
              <CardDescription className="text-center italic">We&apos;ve sent you a confirmation link</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground text-center">
                Please check your inbox (and spam folder) to confirm your account.
              </p>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <p className="text-xs text-primary font-medium text-center">
                  Once confirmed, simply refresh this page to access your dashboard.
                </p>
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.location.reload()}
              >
                I&apos;ve confirmed, let&apos;s go!
              </Button>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
              <CardTitle className="text-2xl">
                Thank you for signing up!
              </CardTitle>
              <CardDescription>Check your email to confirm</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                You&apos;ve successfully signed up. Please check your email to
                confirm your account before signing in.
              </p>
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
