import {BaseResponseClass, ProblemBaseClass, CommonErrorCodes} from "./common-types-v2.enum.js";

let problem1: ProblemBaseClass = {
    message: "ooops we are screwed!",
    severity: "error",
    errorCodes: []
    // errorCodes: [
    //     Commo
    // ]
}
let buu: BaseResponseClass = {
    requestReceivedAt: 12345,
    problems: [
        problem1
    ]
}

console.log("error resp: "+buu)
