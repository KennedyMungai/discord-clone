import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <main className='min-h-screen'>
      <a href="/api/auth/login">Login</a>
      <ModeToggle />
    </main>
  )
}
