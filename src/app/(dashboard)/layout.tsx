import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboadrdNavbar } from "@/modules/dashboard/ui/dashboard-navbar";
import { DashboadrdSidebar } from "@/modules/dashboard/ui/dashboard-sidebar";

interface Props{
    children: React.ReactNode;
}

const Layout = ({children}:Props) => {
    return ( 
        <SidebarProvider>
            <DashboadrdSidebar/>
            <main className="flex flex-col h-screen w-screen bg-muted">
                 <DashboadrdNavbar/>
                 {children}
            </main>
           
        </SidebarProvider>
     );
}
 
export default Layout;