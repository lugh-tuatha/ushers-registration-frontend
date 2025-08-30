export interface AttendeesResponseHttpData {
    _id: string,
    first_name: string,
    last_name: string,
    age: number,
    status: string,
    address: string,
    network: string,
    church_hierarchy: string,
    primary_leader: string,
    church_process: string,
    member_status: string,
}

export interface CreateNewAttendeeBody {
    _id: string,
    first_name: string,
    last_name: string,
    age: string,
    status: string,
    address: string,
    network: string,
    church_hierarchy: string,
    primary_leader: string,
    church_process: string,
    member_status: string,
    invited_by: string
}

export interface UpdateAttendeeBody {
    _id: string,
    first_name: string,
    last_name: string,
    age: number,
    status: string,
    address: string,
    network: string,
    church_hierarchy: string,
    primary_leader: string,
    church_process: string,
    member_status: string,
}