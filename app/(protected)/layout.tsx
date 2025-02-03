// This layout will be used for protected pages
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // You can add additional client-side protection here if needed
  return (
    <SidebarProvider>
        <AppSidebar />
        <main>
            <SidebarTrigger />
            {children}
        </main>
    </SidebarProvider>
  );
}
