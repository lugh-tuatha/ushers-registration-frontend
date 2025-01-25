export interface AttendeeStats {
    member_status: string,
    count: number;
    change_percentage: string;
}

export interface ReportResponseHttpData{
    status: String,
    total_attendees: number,
    total_regulars: number,
    attendees: AttendeeStats[],
    total_vips: number,
    vips: AttendeeStats[],
}