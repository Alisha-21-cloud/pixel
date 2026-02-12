import { PixelLogo } from "@/components/pixel-logo";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@insforge/nextjs";
import Link from "next/link";

const Header = () => {
    return (
        <div className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
                <Link href="/">
                    <PixelLogo />
                </Link>

                <nav className="flex-1 hidden md:flex items-center justify-center gap-6 pl-5">
                    <Link href="#"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Why Pixel?
                    </Link>

                    <Link href="#"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Pricing
                    </Link>

                    <Link href="#"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Docs
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <SignedOut>
                        <SignInButton>
                            <Button variant="secondary">LogIn</Button>
                        </SignInButton>
                        <SignUpButton>
                            <Button variant="default">Sign Up</Button>
                        </SignUpButton>
                    </SignedOut>
                    
                    <SignedIn>
                        <UserButton />
                        {/* <Button variant="outline" asChild>
                            <Link href="/dashboard">Dashboard</Link>
                        </Button> */}
                    </SignedIn>
                </div>
            </div>
        </div>
    )
}

export default Header;