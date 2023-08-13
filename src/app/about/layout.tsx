import Navbar from "@/components/Navbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-56">
      <Navbar textStyle="text-primary dark:text-white " />
      {children}
    </div>
  );
}
