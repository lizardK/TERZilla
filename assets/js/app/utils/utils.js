function dateToString(date){
    var m = date.getMonth() + 1;
    var frDays = ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
    var frMonths = ["janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","décembre"];
    return [frDays[date.getDay()], date.getDate() , frMonths[ date.getMonth()], date.getFullYear() ].join(" ");
    //return [date.getDate(),(m / 10 < 1)?"0"+m:m,date.getFullYear()].join(" / ");
}
