// Stephen Silverstein
// https://github.com/sjsilverstein

$(document).ready(function(){
// BODY
$('form').submit(function() {
        // your code here (build up your url)
        //
        //
        //OPEN WEATHER API KEY: 06fd1b0dec4b567ee49423509a107adf
        //api.openweathermap.org/data/2.5/find?q=London&units=imperial&APPID=06fd1b0dec4b567ee49423509a107adf
        // London == {cityhere}
        //
        $.get(`https://api.openweathermap.org/data/2.5/find?q=${$('#city_name').val()}&units=imperial&APPID=06fd1b0dec4b567ee49423509a107adf`, 
        	function(res) {
        		console.log(res);
        		$('.main').html(`
        				<h1>${res.list[0].name}</h1>
        				<h2>Temperature Fahrenheit: ${res.list[0].main.temp}</h2>
        			`);
            // your code here
        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
})