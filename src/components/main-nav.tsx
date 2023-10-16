import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export function MainNav() {
    return (
        <div className="hidden md:flex md:w-full md:items-center md:justify-between">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="#gaut" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <b>&lt;ggaut.dev&gt;</b>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="#projects" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                &lt;/projects&gt;
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="#about" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                &lt;/about&gt;
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="#contact" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                &lt;/contact&gt;
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <div className="flex pl-5">
                        <NavigationMenuItem>
                            <Button variant="ghost" size="icon">
                                <Link target="_blank" href="https://github.com/gautchap">
                                    <Icons.gitHub className="h-[1.2rem] w-[1.2rem]" />
                                </Link>
                            </Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button variant="ghost" size="icon">
                                <Link target="_blank" href="https://linkedin.com/in/gauthier-chapon">
                                    <Icons.linkedin className="h-[1.2rem] w-[1.2rem]" />
                                </Link>
                            </Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <ThemeToggle />
                        </NavigationMenuItem>
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
