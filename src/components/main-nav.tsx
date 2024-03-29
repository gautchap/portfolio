"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";

export function MainNav() {
    return (
        <div className="hidden md:flex md:w-full md:items-center md:justify-between">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <b className="text-shadow-glow">&lt;ggaut.dev&gt;</b>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">
                <span className="relative flex size-3">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
                </span>
                <p className="text-xs text-green-400">Available for new opportunities</p>
            </div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/contact" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                &lt;/contact&gt;
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="flex pl-5">
                        <Button variant="ghost" size="icon" title="github">
                            <Link target="_blank" aria-label="github" href="https://github.com/gautchap">
                                <Icons.gitHub className="size-[1.2rem]" />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" title="linkedin">
                            <Link target="_blank" aria-label="linkedin" href="https://linkedin.com/in/gauthier-chapon">
                                <Icons.linkedin className="size-[1.2rem]" />
                            </Link>
                        </Button>
                        <ThemeToggle />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
