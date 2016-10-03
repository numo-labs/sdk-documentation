(function () {
    // SDK initialization with 'uk' market
    var sdk = SDK.init('uk');


    /**
     * 
     * Departure airport autocomplete example
     * 
     *  
     */

    // Autocomplete for departure airport
    var autocomplete = sdk.autocomplete('departure_airport');

    var datalist = document.getElementById('departureAirportList-ex2');
    var input = document.getElementById('departureAirportInput-ex2');
    input.onkeyup = function (event) {
        // If arrows are clicked do not change option list
        if(event.keyCode > 36 && event.keyCode < 41){return;}
        
        while (datalist.firstChild) {
            datalist.removeChild(datalist.firstChild);
        }
        // Invoque autocomplete using input text as an argument and operate with results within the callback 
        autocomplete.for(input.value, function (err, elements) {
            elements.map(function (item) {
                var option = document.createElement('option');
                option.setAttribute('value', item);
                datalist.appendChild(option);
            });
        });
    };



    /**
     * 
     * Destination autocomplete example
     * 
     * 
     */

    var inputDep = document.getElementById('departureAirportInput-ex1');
    var datalistDep = document.getElementById('departureAirportList-ex1');

    // The first input is a departure airport one because it is required for destination
    var autocomplete = sdk.autocomplete('departure_airport');
    inputDep.onkeyup = function (event) {
        if(event.keyCode > 36 && event.keyCode < 41){return;}
        while (datalistDep.firstChild) {
            datalistDep.removeChild(datalistDep.firstChild);
        }
        autocomplete.for(inputDep.value, function (err, elements) {
            elements.map(function (item) {
                var option = document.createElement('option');
                option.setAttribute('value', item);
                datalistDep.appendChild(option);
            });
        });
    };

    var inputDest = document.getElementById('destinationInput-ex1');
    var datalistDest = document.getElementById('destinationList-ex1');
    // Autocomplete destination instance
    var autocompleteDest = sdk.autocomplete('destination');
    inputDest.onkeyup = function (event) {
        if(event.keyCode > 36 && event.keyCode < 41){return;}
        while (datalistDest.firstChild) {
            datalistDest.removeChild(datalistDest.firstChild);
        }
        // Using dstination input value and departure airport a list of matches is returned
        console.log(inputDest.value, "  ", inputDep.value);
        autocompleteDest.for(inputDest.value || '', inputDep.value, function (err, elements) {
            console.log(elements);
            elements.map(function (item) {
                var option = document.createElement('option');
                option.setAttribute('value', item);
                datalistDest.appendChild(option);
            });
        });
    };
})();
