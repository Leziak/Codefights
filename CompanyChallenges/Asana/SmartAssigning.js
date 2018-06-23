function smartAssigning(names, statuses, projects, tasks) {
    let arr = [];
    for(let i=0;i<names.length;i++){
        if(!statuses[i]){
            arr.push({
                name: names[i],
                project: projects[i],
                task: tasks[i]
            });
        }
    }
    let taskMin = Math.min(...arr.map(el=>el.task))
    return arr.filter(el=>el.task==taskMin).sort((a,b)=> a.project - b.project)[0].name
}

console.log(smartAssigning(
    ["John", "Martin"],
    [false, false],
    [10, 9],
    [10, 9]))