"use client";
import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores/storeContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({className, ...props}: React.ComponentPropsWithoutRef<"div">) {

    const { userStore } = useStore();
    const router = useRouter();
    const [credentials, setCredentials] = useState({
      email: '',
      password: '',
    });
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      await userStore.login(credentials);
      if (userStore.isAuthenticated) {
        router.push('/dashboard');
      }
    };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={credentials.email}
                  onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} required />
              </div>
              <Button type="submit" className="w-full bg-green-600">
                {userStore.isLoading ? 'Logging in...' : 'Login'}
              </Button>
              {userStore.error && <div className="error">{userStore.error}</div>}
            
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
