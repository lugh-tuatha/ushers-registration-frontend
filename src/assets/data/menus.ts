export const Menus = [
    {
        name: "Dashboard",
        href: "/dashboard",
    },
    {
        name: "Guest",
        href: "#",
        sub_menu: [
            {
                name: "Regular",
                href: "/guest/regular"
            },
            {
                name: "VIP",
                href: "/guest/vip"
            }
        ]
    },
    {
        name: "Check In",
        href: "/check-in",
    },
    {
        name: "Attendance",
        href: "#",
        sub_menu: [
            {
                name: "Sunday Attendance",
                href: "/attendance/sunday"
            },
            {
                name: "Pepsol Attendance",
                href: "/attendance/pepsol"
            },
            {
                name: "Prayer Night Attendance",
                href: "/attendance/prayer-night"
            },
            {
                name: "Valenzuela Attendance",
                href: "/attendance/valenzuela"
            },
            // {
            //     name: "Mentoring Attendance",
            //     href: "#"
            // },
            // {
            //     name: "Conference Attendance",
            //     href: "#"
            // },
            // {
            //     name: "Wild Fire Attendance",
            //     href: "#"
            // },
            // {
            //     name: "Japan Attendance",
            //     href: "#"
            // },
            // {
            //     name: "Herbosa Attendance",
            //     href: "#"
            // },
        ]
    },
    {
        name: "Upcoming Events",
        href: "/upcoming-events",
    },
    {
        name: "Reports",
        href: "/reports",
    },
]