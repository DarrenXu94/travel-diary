const data = [
    {
        id: "0", dateLabel: "January 2017", title: "Gathering Information", locations: [
            { order: 0, coordinate: [-33.826790, 151.021891] }
        ]
    },
    { id: "1", dateLabel: "February 2017", title: "Planning" },
    { id: "2", dateLabel: "March 2017", title: "Design" },
    { id: "3", dateLabel: "April 2017", title: "Content Writing and Assembly" },
    { id: "4", dateLabel: "May 2017", title: "Coding" },
    { id: "5", dateLabel: "June 2017", title: "Testing, Review & Launch" },
    { id: "6", dateLabel: "July 2017", title: "Maintenance" }
];
export function getAllTripsAPI() {
    return data;
}
