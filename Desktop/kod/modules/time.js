
function time(uptime) {
    var hour = Math.floor(uptime / 3600);
    var min = Math.floor((uptime - (hour * 3600)) / 60);
    var sec = Math.floor(uptime - (hour * 3600) - (min * 60));
    
    if (uptime < 3600) {
        return min + ' min., ' + sec + ' sec. ';
    } else {
        return hour + ' h., ' + min + ' min., ' + sec + ' sec. ';
    }
}

exports.print = time;