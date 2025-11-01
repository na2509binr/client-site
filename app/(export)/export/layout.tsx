import ExportHeader from "./header";

export default function ExportGroupLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <header>ádasd</header> */}
      <ExportHeader />
      <main className="export-wrapper">
        {children}
      </main>
    </>
  );
}
