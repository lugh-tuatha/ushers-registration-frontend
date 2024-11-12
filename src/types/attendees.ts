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
    is_leader: boolean,
    church_process: String,
    member_status: String,
}

export interface CreateNewAttendeeBody {
    _id: String,
    first_name: String,
    last_name: String,
    age: Number,
    status: String,
    address: String,
    network: String,
    church_hierarchy: String,
    primary_leader: String,
    is_leader: boolean,
    church_process: String,
    member_status: String,
}

export interface UpdateAttendeeBody {
    _id: String,
    first_name: String,
    last_name: String,
    age: Number,
    status: String,
    address: String,
    network: String,
    church_hierarchy: String,
    primary_leader: String,
    is_leader: boolean,
    church_process: String,
    member_status: String,
}