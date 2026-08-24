"use strict";
/* ********* Problem 1 — Battery Level Status ********* */
/* Function name must be: getBatteryStatus

Scenario
A phone's settings screen shows a friendly battery status label instead of just the raw percentage.

Task
Create a function named getBatteryStatus. The function receives the battery percentage (0–100) and returns a status string.

Status Rules
Percentage
Status
0–20
"Low"
21–50
"Medium"
51–90
"High"
91–100
"Full"

Function Requirement
Accept the percentage as a number.
Return the status as a string.

Starter Code
function getBatteryStatus(percentage: <type>): <type> {
    // write your code here
}

Test Cases
Input
Output
10
"Low"
35
"Medium"
75
"High"
100
"Full" */
function getBatteryStatus(percentage) {
    if (percentage >= 0 && percentage <= 20) {
        return "Low";
    }
    else if (percentage >= 21 && percentage <= 50) {
        return "Medium";
    }
    else if (percentage >= 51 && percentage <= 90) {
        return "High";
    }
    else if (percentage >= 91 && percentage <= 100) {
        return "Full";
    }
    else {
        return "Invalid percentage";
    }
}
