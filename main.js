const button = document.querySelector('button');


button.addEventListener('click',()=>{
   let dateStart = document.querySelector('#startDate').value;
   let dateEnd = document.querySelector('#endDate').value;
   
    dateStart = Date.parse(dateStart); // Parse to Timestamp (ms)
    dateEnd = Date.parse(dateEnd); // Parse to Timestamp (ms);

    let output = document.querySelector('#output');


    // console.log('Date Start',dateStart)
    // console.log('Date End',dateEnd);

    // index = index+24*60*60*1000 = 1 day in ms

    for (let index = dateStart; index <= dateEnd; index=index+24*60*60*1000) {
        // console.log('Days between two dates',index);
        rangeBetweenTwoDatesByDate = new Date(index).toISOString().substr(0,10)+ '<br>'; // Format the date 
        // console.log('Range between two dates by date',rangeBetweenTwoDatesByDate)
        output.innerHTML += rangeBetweenTwoDatesByDate;
    }

    //Check moment.js for format dates
});


