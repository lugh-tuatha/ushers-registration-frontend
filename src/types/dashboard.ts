interface LineChartData{
    name: String,
    attendees: number,
    pv: number,
    amt: number,
}

export interface DashboardResponseHttpData{
    status: String,
    total_attendees: number,
    regular_disciple: number,
    children: number,
    vips: number,
    attendance_trends: LineChartData[],
}