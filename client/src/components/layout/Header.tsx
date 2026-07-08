export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <h1 className="text-xl font-semibold">Dashboard</h1>

      <button className="rounded-lg bg-black px-4 py-2 text-white">
        New Project
      </button>
    </header>
  );
}
