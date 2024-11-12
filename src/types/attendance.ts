interface attendee{
    _id: String,
    first_name: String,
    last_name: String,
    primary_leader: String,
    church_process: String,
    member_status: String
}

export interface AttendanceResponseHttpData{
    _id: String,
    week_no: number,
    attendance_type: "sunday",
    attendee: attendee,
    time_in: Date,
    church_process: String,
    member_status: String
}

export interface checkInBody {
    week_no: Number,
    attendee: String,
    time_in: Date,
    attendance_type: String,
}