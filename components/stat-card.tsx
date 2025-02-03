import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
  icon: React.ReactNode
  value: string | number
  label: string
  summary: string
}

export function StatCard({ icon, value, label, summary }: StatCardProps) {
  return (
    <Card>
      <CardContent className="flex justify-start gap-4 p-6 flex-col">
        <div className="flex justify-between items-center gap-10">
            <div className="text-normal text-gray-700">{label}</div>
            <div className="flex h-12 w-12 items-center justify-center">
                {icon}
            </div>
        </div>

        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-sm font-sm text-gray-500">{summary}</p>
      </CardContent>
    </Card>
  )
}

