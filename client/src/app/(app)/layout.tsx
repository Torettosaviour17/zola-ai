import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { AppLayout } from "../../components/layout/AppLayout";
import { Header } from "../../components/layout/Header";
import { Sidebar } from "../../components/layout/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <AppLayout>
        <Sidebar />

        <section className="ml-72 flex h-screen min-w-0 flex-1 flex-col">
          <Header />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </section>
      </AppLayout>
    </ProtectedRoute>
  );
}
