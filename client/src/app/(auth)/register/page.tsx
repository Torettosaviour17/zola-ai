import { AuthCard } from "@/components/auth/AuthCard";
import { RegisterForm } from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4 py-8">
      <AuthCard title="Create Account" subtitle="Create your ZolaAI account">
        <RegisterForm />
      </AuthCard>
    </div>
  );
}
