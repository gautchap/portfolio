import { SideNav } from "@/components/side-nav";
import { MainNav } from "@/components/main-nav";

export function NavBar() {
    return (
        <>
            <nav className="sticky top-0 z-10 flex h-12 bg-background/80 px-0 shadow-sm backdrop-blur-sm">
                <div className="container flex items-center justify-between">
                    <SideNav />
                    <MainNav />
                </div>
            </nav>
        </>
    );
}
