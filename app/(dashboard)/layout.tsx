import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-60 md:flex-col md:fixed md:inset-y-0 z-[80] bg-[#FFF] border-e border-e-gray-100 shadow-md">
        <SideBar />
      </div>
      <main className="md:pl-60"> {children}</main>
    </div>
  );
};

export default DashboardLayout;
