interface LineChartData{
    name: String,
    attendees: Number,
    pv: Number,
    amt: Number,
}

export interface DashboardResponseHttpData{
    status: String,
    total_attendees: Number,
    regular_disciple: Number,
    children: Number,
    vips: Number,
    attendance_trends: LineChartData[],
}