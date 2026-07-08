import { AppLayout } from "../../components/layout/AppLayout";
import { Header } from "../../components/layout/Header";
import { Sidebar } from "../../components/layout/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppLayout>
      <Sidebar />

      <section className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </section>
    </AppLayout>
  );
}
