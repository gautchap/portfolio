import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";

export function SideNav() {
    return (
        <div className="flex w-full items-center justify-between md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <button className="size-5" title="burger menu" aria-label="burger menu">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 448 512"
                            className="size-full bg-background fill-current text-foreground"
                        >
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                        </svg>
                    </button>
                </SheetTrigger>
                <SheetContent side="top" className="p-10">
                    <SheetHeader className="text-left">
                        <SheetTitle>
                            <SheetClose asChild>
                                <Link href="/" className="text-shadow-glow">
                                    &lt;ggaut.dev&gt;
                                </Link>
                            </SheetClose>
                        </SheetTitle>
                        <hr />
                    </SheetHeader>
                    <div className="flex flex-col gap-2 pt-2">
                        <SheetClose asChild>
                            <Link href="/contact">&lt;/contact&gt;</Link>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
            <div className="flex items-center gap-2 xs:absolute xs:left-1/2 xs:-translate-x-1/2">
                <span className="relative flex size-3">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
                </span>
                <span className="text-xs text-green-400">
                    Available<span className="hidden sm:inline-block"> for new opportunities</span>
                </span>
            </div>
            <div>
                <Button variant="ghost" size="icon" title="github">
                    <Link target="_blank" aria-label="github" href="https://github.com/gautchap">
                        <Icons.gitHub className="size-[1.2rem]" />
                    </Link>
                </Button>
                <Button variant="ghost" size="icon" title="linkedin">
                    <Link target="_blank" aria-label="linkedin" href="https://www.linkedin.com/in/gauthier-chapon">
                        <Icons.linkedin className="size-[1.2rem]" />
                    </Link>
                </Button>
                <ThemeToggle />
            </div>
        </div>
    );
}
