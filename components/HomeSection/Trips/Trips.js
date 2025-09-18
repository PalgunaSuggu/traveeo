import { Card, CardContent } from "@/components/ui/card"
import { Backpack, Plane, Mountain, Heart, Briefcase, Calendar } from "lucide-react"

const trips = [
    {
        title: "Backpacking Trips",
        icon: Backpack,
    },
    {
        title: "Weekend Getaways",
        icon: Calendar,
    },
    {
        title: "International Trips",
        icon: Plane,
    },
    {
        title: "Adventure Treks",
        icon: Mountain,
    },
    {
        title: "Honeymoon Trips",
        icon: Heart,
    },
    {
        title: "Corporate Trips",
        icon: Briefcase,
    },
]

export default function Trips() {
    return (
        <section className="bg-gray-100 dark:bg-gray-950 py-16">
            <div className="max-w-7xl mx-auto">
                {/* Heading + Description */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-white">Explore Our Trips</h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        From thrilling treks to relaxing getaways, choose the perfect trip
                        that matches your mood, style, and adventure spirit.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-6">
                    {trips.map((trip, index) => (
                        <Card
                            key={index}
                            className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 dark:hover:border-yellow-400/40 cursor-pointer"
                        >
                            <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 dark:from-yellow-400 dark:via-orange-300 dark:to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                                <trip.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 p-2 rounded-2xl bg-blue-50 dark:bg-blue-950/40 ring-1 ring-blue-200/60 dark:ring-blue-400/20 shadow-sm group-hover:shadow-lg group-hover:shadow-blue-500/20" />
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{trip.title}</h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
