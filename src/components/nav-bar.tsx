import { SideNav } from "@/components/side-nav";
import { MainNav } from "@/components/main-nav";

export function NavBar() {
    return (
        <>
            <nav className="h-12 flex px-0 sticky top-0 z-10 shadow-sm bg-background/80 backdrop-blur-sm">
                <div className="container flex items-center justify-between">
                    <SideNav />
                    <MainNav />
                </div>
            </nav>
        </>
    );
}
