import { stats } from "@/lib/data"

export function StatsBar() {
  return (
    <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <p className="font-serif text-4xl font-semibold text-foreground lg:text-5xl">{stat.value}</p>
          <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
