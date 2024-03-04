import EmployeeTable from "@/components/EmployeeTable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-20 p-24 font-mono text-center">
      <h3 className="text-5xl">Employee List</h3>
      <div className="max-w-[90vw]">
        <EmployeeTable />
      </div>
    </main>
  );
}
