import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";

export function SideNav() {
  return (
    <div className="flex w-full items-center justify-between md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="h-5 w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              className="fill-current bg-background text-foreground h-full w-full"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </SheetTrigger>
        <SheetContent side="top" className="p-10">
          <SheetHeader className="text-left">
            <SheetTitle>
              <SheetClose asChild>
                <Link href="#gaut">&lt;ggaut.dev&gt;</Link>
              </SheetClose>
            </SheetTitle>
            <hr />
          </SheetHeader>
          <div className="flex flex-col gap-2 pt-2">
            <SheetClose asChild>
              <Link href="#about">&lt;/about&gt;</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="#projects">&lt;/projects&gt;</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="#contact">&lt;/contact&gt;</Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
      <div>
        <Button variant="ghost" size="icon">
          <Link target="_blank" href="https://github.com/gautchap">
            <Icons.gitHub className="h-[1.2rem] w-[1.2rem]" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/gauthier-chapon"
          >
            <Icons.linkedin className="h-[1.2rem] w-[1.2rem]" />
          </Link>
        </Button>
        <ThemeToggle />
      </div>
    </div>
  );
}
