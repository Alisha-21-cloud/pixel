"use client"

import { DarkModeToggle } from "@/components/dark-mode-toggle"
import { SidebarTrigger } from "@/components/ui/sidebar"


const Header = () => {

    return (
        <header className="w-full z-50 pt-3 pb-7 bg-background">
            <div className="flex h-14 items-center justify-between">
                <div>
                    <SidebarTrigger />
                </div>

                <div className="flex items-center gap-2">
                    <DarkModeToggle />
                </div>
            </div>
        </header>
    )
}

export default Header
