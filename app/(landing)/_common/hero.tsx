"use client";

import { Button } from "@/components/ui/button";
import { SignUpButton, useUser } from "@insforge/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Hero = () => {
  const { user } = useUser();
  const router = useRouter();

  const handleClick = () => {
    if (user) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="w-full bg-muted py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Easy to use and privacy-friendly{" "}
          <span className="text-primary">
            Google Analytics alternative
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Pixel is powerful, intuitive and lightweight analytics.
          No cookies just insights.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {user ? (
            <Button onClick={handleClick}>Go to Dashboard</Button>
          ) : (
            <SignUpButton>
              <Button>Get Started</Button>
            </SignUpButton>
          )}

          <Button variant="outline" asChild>
            <Link href="#">Live demo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
