export interface SudaysOfYearHttpData {
    week_no: number;
    date: string;
}

export interface CalendarResponseHttpData {
    [monthName: string]: SudaysOfYearHttpData[];
}