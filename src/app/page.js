import Hero from "@/components/Hero";
import RegistrationForm from "@/components/RegistrationForm";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <RegistrationForm />
    </main>
  )
}
