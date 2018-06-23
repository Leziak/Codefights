function tasksTypes(deadlines, day) {
    let today = deadlines.filter(el=>el<=day).length;
    let upcoming = deadlines.filter(el=>el>day && el<=day+7).length;
    let later = deadlines.filter(el=>el>day+7).length;
    return [today, upcoming, later];
}

console.log(tasksTypes([1, 2, 3, 4, 5], 2))