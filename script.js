function findDays() {
    
    let month = document.getElementById("month").value.toLowerCase();
    console.log(month);
    


    if (month === 'january' || month === 'march' || month === 'may' || month === 'july' || month === 'august' || month === 'october' || month === 'december') {
        days = 31;
    } else if (month === 'april' || month === 'june' || month === 'september' || month === 'november') {
        days = 30;
    } else if (month === 'february') {
        days = 28; 
        
        // Then If none of the conditions are met
    } else {
        days = "Invalid month name!";
    }

    // Display Result
    document.getElementById("result").innerText = `Number of days: ${days}`;
}
