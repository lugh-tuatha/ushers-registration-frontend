export interface AttendeesResponseHttpData {
    _id: String,
    first_name: String,
    last_name: String,
    age: Number,
    status: String,
    address: String,
    network: String,
    church_hierarchy: String,
    primary_leader: String,
    is_leader: boolean
}

export interface CreateNewAttendeeBody {
    first_name: String,
    last_name: String,
    age: Number,
    status: String,
    address: String,
    network: String,
    church_hierarchy: String,
    primary_leader: String,
    is_leader: boolean
}