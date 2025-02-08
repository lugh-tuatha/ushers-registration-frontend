interface LineChartData{
    name: string,
    attendees: number,
    pv: number,
    amt: number,
}

export interface DashboardResponseHttpData{
    status: string,
    total_attendees: number,
    regular_disciples: number,
    regular_attendees: number,
    regular_startup: number,
    vips: number,
    children: number,
    back_to_life: number,
    attendance_trends: LineChartData[],
}