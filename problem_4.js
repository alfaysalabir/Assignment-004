"use strict";
/* ********* Problem 4 — Traffic Light Action ********* */
function getTrafficAction(light) {
    if (light === "red") {
        return "Stop";
    }
    else if (light === "yellow") {
        return "Slow Down";
    }
    else {
        return "Go";
    }
}
