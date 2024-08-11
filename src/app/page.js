import CoachCard from "@/components/CoachCard";
import Hero from "@/components/Hero";
import RegistrationForm from "@/components/RegistrationForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <div className="m-5">
        <RegistrationForm />
      </div>
      <div className="m-5">
        <CoachCard
          name="Jerwaski Coleman"
          image="/images/waski_profile.jpg"
          bio="Varsity Girls Head Coach"
        />
      </div>
    </main>
  );
}
