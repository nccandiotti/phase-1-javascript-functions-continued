// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

// function wrapAdjective() {
//   const adjective = function (word = `special`, emphatic = "*") {
//     return `You are ${emphatic}${word}${emphatic}!`
//   }
//   return adjective
// }
function wrapAdjective() {
  return function (word = "special", emphatic = "*") {
    return `You are ${emphatic}${word}${emphatic}!`
  }
}
