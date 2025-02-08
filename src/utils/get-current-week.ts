import moment from "moment/moment";

export function getCurrentWeek() {
    return moment().isoWeek();
}