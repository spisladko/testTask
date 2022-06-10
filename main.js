let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, Infinity] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [-Infinity, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, Infinity] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [-Infinity, Infinity] },
];

let requiredRange1 = [-Infinity, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, Infinity];

let sortCourses = (courses, requiredRange) => {
    return courses.filter(function (course) {
        if (requiredRange[0] === -Infinity) return (course.prices[0] <= requiredRange[1] && course.prices[1] <= requiredRange[1]) || (course.prices[0] === -Infinity && course.prices[1] <= requiredRange[1])
        if (requiredRange[1] === Infinity) return (course.prices[0] >= requiredRange[0] && course.prices[1] >= requiredRange[0]) || (course.prices[1] === Infinity && course.prices[0] >= requiredRange[1])
        else return course.prices[0] >= requiredRange[0] && course.prices[1] <= requiredRange[1]
    })
}
