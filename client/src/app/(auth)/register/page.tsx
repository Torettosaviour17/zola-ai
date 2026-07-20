import { AuthCard } from "@/components/auth/AuthCard";
import { RegisterForm } from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div>
      <AuthCard title="Create Account" subtitle="Create your ZolaAI account">
        <RegisterForm />
      </AuthCard>
    </div>
  );
}
