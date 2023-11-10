import { ModeToggle } from "@/components/ModeToggle";

export default async function Home() {
  return (
    <main className='min-h-screen bg-white dark:bg-[#313338]'>
      <a href="/api/auth/login">Login</a>
      <ModeToggle />
    </main>
  )
}
