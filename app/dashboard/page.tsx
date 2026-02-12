"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Calendar, Globe, Plus } from "lucide-react"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty"
import AddWebsiteDialog from "./_common/add-website-dialog"
import { getWebsites } from "../action/website"

export default function DashboardPage() {
    
    const [open, setOpen] = useState(false)

    const { data, isLoading } = useQuery({
        queryKey: ["websites"],
        queryFn: async () => {
            const res = await getWebsites()
            console.log(res, "res")
            if (res?.error) throw new Error(res.error)
            return res.websites
        },
    })

    return (
        <>
            <div className="w-full min-h-screen space-y-8">
                <div className="flex flex-col justify-between gap-4 border-b border-border pb-8 md:flex-row md:items-center">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-bold tracking-tight">Websites</h1>
                        <p className="text-sm text-muted-foreground">
                            Manage and monitor your digital footprint across all registered
                            domains.
                        </p>
                    </div>
                    <Button onClick={() => setOpen(true)}>
                        <Plus className="size-4" />
                        Add Website
                    </Button>
                </div>

                {isLoading ? (
                    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 6 }, (_, i) => (
                            <Skeleton key={i} className="h-44 w-full rounded-2xl" />
                        ))}
                    </div>
                ) : !data || data.length === 0 ? (
                    <Empty>
                        <EmptyHeader>
                            <EmptyMedia
                                variant="icon"
                                className="size-16 rounded-full bg-primary/5 text-primary/40"
                            >
                                <Globe className="size-10" />
                            </EmptyMedia>
                            <EmptyTitle>No website found</EmptyTitle>
                            <EmptyDescription>
                                Start by adding your first domain to begin tracking powerful
                                analytics in real-time.
                            </EmptyDescription>
                        </EmptyHeader>
                        <EmptyContent>
                            <Button variant="outline" onClick={() => setOpen(true)}>
                                <Plus className="size-4" />
                                Add Website
                            </Button>
                        </EmptyContent>
                    </Empty>
                ) : (
                    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {data?.map((item) => (
                            <Link
                                key={item.id}
                                href={`/dashboard/${item.id}`}
                                className="group block"
                            >
                                <Card className="h-full transition-all duration-300 hover:border-primary/50">
                                    <CardHeader className="!pb-0">
                                        <div className="mb-2 flex items-center gap-3">
                                            <div className="rounded-xl bg-primary/10 p-2 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                                                <Globe className="size-5" />
                                            </div>
                                        </div>
                                        <CardTitle className="truncate pr-8 text-xl font-bold transition-colors group-hover:text-primary">
                                            {item.domain}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="!pt-4 p-6">
                                        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                            <Calendar className="size-3.5" />
                                            <span>
                                                Added {format(new Date(item.created_at), "MMMM d, yyyy")}
                                            </span>
                                        </div>

                                        <div className="mt-6 flex items-center justify-between">
                                            <span className="text-xs font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-all group-hover:decoration-primary">
                                                View Stats
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <AddWebsiteDialog open={open} onOpenChange={setOpen} />
        </>
    )
}
