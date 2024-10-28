export interface AttendeesResponseHttpData {
    _id: String,
    first_name: String,
    last_name: String,
    age: Number,
    status: String,
    address: String,
    church_roles: String,
    church_heirarchy: String,
    assigned_leader: String,
    is_leader: boolean
}

export interface CreateNewAttendeeBody {
    first_name: String,
    last_name: String,
    age: Number,
    status: String,
    address: String,
    church_roles: String,
    church_heirarchy: String,
    assigned_leader: String,
    is_leader: boolean
}