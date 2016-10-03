'use strict';

var config;
function autocomplete (context, cfg) {
    config = cfg;
    return _autocomplete[context];
}
var _autocomplete = {
    departure_airport: {
        for: function (input, callback) {
            var results = Object.keys(config.departureAirports)
                            .filter(function (item, idx) {
                                return item.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                            });
            return callback(null, results);
        }
    },
    destination: {
        for: function(input, departure_airport, callback) {
            try{
                var destinations = config.departureAirports[departure_airport].avail_dest;
                var results = [];
                destinations.forEach(function (item) {
                    if(item.displayName.toLowerCase().indexOf(input.toLowerCase()) >= 0) results.push(item.displayName);
                });
            } catch(err) {
                var error = err;
            }
            return callback(error || null, results);
        }
    }
};

const ukConfig = {
    "departureAirports": {
        "Any London":{
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "displayName": "Antigua",
                    "airportCode": "whatever"
                },
                {
                    "displayName": "Balearic Islands",
                    "airportCode": "whatever"
                },
                {
                    "displayName": "Barbados",
                    "airportCode": "whatever"
                },
                {
                    "displayName": "Bulgaria",
                    "airportCode": "whatever"
                },
                {
                    "displayName": "Canary Island",
                    "airportCode": "whatever"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cape Verde"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cuba"
                },
                {
                    "displayName": "Cyprus",
                    "airportCode": "whatever"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Dominican Republic"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Egypt"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Florida"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Gambia"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Goa"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Greece"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Italy"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Lapland"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Las Vegas"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Malta & Gozo"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Mexico"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Miami"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "New York"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "St Lucia"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Tobago"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "USA"
                }
            ]
        },
        "Any Midlands": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "displayName": "Balearic Islands",
                    "airportCode": "whatever"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Barbados"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Bulgaria"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Canary Island"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cape Verde"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cyprus"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Egypt"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Florida"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Gambia"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Greece"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Italy"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Lapland"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Malta & Gozo"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Mexico"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Miami"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "New York"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "USA"
                }
            ]
        },
        "Any North East": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Barbados"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Bulgaria"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Canary Island"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cyprus"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Egypt"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Greece"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Italy"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Lapland"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Malta & Gozo"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Mexico"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "New York"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                }
            ]
        },
        "Any North West": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Antigua"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Barbados"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Bulgaria"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Canary Island"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cape Verde"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Croatia"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cuba"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cyprus"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Dominican Republic"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Egypt"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Florida"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Gambia"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Goa"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Greece"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Italy"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Lapland"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Las Vegas"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Malta & Gozo"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Mexico"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Miami"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "New York"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "St Lucia"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Tobago"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "USA"
                }
            ]
        },
        "Any Scotland": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Barbados"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Bulgaria"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Canary Island"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cuba"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cyprus"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Dominican Republic"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Egypt"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Florida"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Greece"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Italy"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Lapland"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Las Vegas"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Malta & Gozo"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Mexico"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Miami"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "New York"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "USA"
                }
            ]
        },
        "Any South East": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Antigua"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Barbados"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Bulgaria"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Canary Island"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cape Verde"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cuba"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cyprus"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Dominican Republic"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Egypt"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Florida"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Gambia"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Goa"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Greece"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Italy"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Lapland"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Las Vegas"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Malta & Gozo"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Mexico"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Miami"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "New York"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "St Lucia"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Tobago"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "USA"
                }
            ]
        },
        "Any South West": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Barbados"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Bulgaria"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Canary Island"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cyprus"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Egypt"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Florida"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Greece"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Italy"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Malta & Gozo"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Mexico"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Miami"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "USA"
                }
            ]
        },
        "Any Wales": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Barbados"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Bulgaria"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Canary Island"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cape Verde"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cyprus"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Egypt"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Florida"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Gambia"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Greece"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Italy"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Lapland"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Malta & Gozo"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Mexico"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Miami"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "New York"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "USA"
                }
            ]
        },
        "Aberdeen": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Canary Island"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                }
            ]
        },
        "Belfast international": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Bulgaria"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Canary Island"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cyprus"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Egypt"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Florida"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Greece"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Lapland"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Las Vegas"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Malta & Gozo"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Mexico"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Miami"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "New York"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "USA"
                }
            ]
        },
        "Birmingham": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Barbados"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Bulgaria"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Canary Island"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cape Verde"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cyprus"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Egypt"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Florida"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Gambia"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Greece"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Italy"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Lapland"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Malta & Gozo"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Mexico"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Miami"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "New York"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "USA"
                }
            ]
        },
        "Bournemouth": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Canary Island"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Egypt"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Malta & Gozo"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                }
            ]
        },
        "Bristol": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Barbados"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Bulgaria"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Canary Island"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cyprus"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Egypt"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Greece"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Italy"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Malta & Gozo"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                }
            ]
        },
        "Cardiff": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Barbados"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Bulgaria"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Canary Island"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cyprus"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Egypt"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Florida"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Greece"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Malta & Gozo"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Mexico"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Miami"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "USA"
                }
            ]
        },
        "Doncaster": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Canary Island"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Egypt"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                }
            ]
        },
        "East Midlands": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Bulgaria"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Canary Island"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cyprus"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Egypt"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Greece"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Italy"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Lapland"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Malta & Gozo"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Mexico"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                }
            ]
        },
        "Edinburg": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Bulgaria"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Canary Island"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Egypt"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Greece"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Italy"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Malta & Gozo"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Mexico"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "New York"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                }
            ]
        },
        "Exeter": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Canary Island"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cyprus"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Egypt"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Malta & Gozo"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                }
            ]
        },
        "Glasgow": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Barbados"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Bulgaria"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Canary Island"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cuba"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cyprus"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Dominican Republic"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Egypt"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Florida"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Greece"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Italy"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Lapland"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Las Vegas"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Malta & Gozo"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Mexico"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Miami"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "New York"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "USA"
                }
            ]
        },
        "Leeds Bradford": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Canary Island"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cyprus"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Greece"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Italy"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Malta & Gozo"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "New York"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                }
            ]
        },
        "Liverpool": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cyprus"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Italy"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Malta & Gozo"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                }
            ]
        },
        "London City": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "New York"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                }
            ]
        },
        "London Gatwick": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Antigua"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Barbados"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Bulgaria"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Canary Island"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cape Verde"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cuba"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cyprus"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Dominican Republic"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Egypt"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Florida"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Gambia"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Goa"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Greece"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Italy"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Lapland"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Las Vegas"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Malta & Gozo"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Mexico"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Miami"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "New York"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "St Lucia"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Tobago"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "USA"
                }
            ]
        },
        "London Heathrow": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cyprus"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Florida"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Greece"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Las Vegas"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Malta & Gozo"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Miami"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "New York"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "USA"
                }
            ]
        },
        "London Luton": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Bulgaria"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Canary Island"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cyprus"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Egypt"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Greece"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Italy"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Malta & Gozo"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                }
            ]
        },
        "London Southend": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                }
            ]
        },
        "Manchester": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Antigua"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Barbados"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Bulgaria"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Canary Island"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cape Verde"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Croatia"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cuba"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cyprus"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Dominican Republic"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Egypt"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Florida"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Gambia"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Goa"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Greece"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Italy"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Lapland"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Las Vegas"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Malta & Gozo"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Mexico"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Miami"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "New York"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "St Lucia"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Tobago"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "USA"
                }
            ]
        },
        "Newcastle": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Barbados"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Bulgaria"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Canary Island"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Cyprus"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Egypt"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Greece"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Italy"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Lapland"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Malta & Gozo"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Mexico"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "New York"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                }
            ]
        },
        "Norwich": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Canary Island"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Malta & Gozo"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Turkey"
                }
            ]
        },
        "Southamptom": {
            "airportCode": "whatever",
            "avail_dest": [
                {
                    "airportCode": "whatever",
                    "displayName": "Balearic Islands"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Italy"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Las Vegas"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Portugal"
                },
                {
                    "airportCode": "whatever",
                    "displayName": "Spain"
                }
            ]
        }
    }
};

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define([autocomplete, ukMarket], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(autocomplete, ukConfig);
    } else {
        window.SDK = factory(autocomplete, ukConfig);
    }
}(function (autocomplete$$1, ukConfig$$1) {
    'use strict';
    var SDK = (function () {
        var markets = {
            uk: ukConfig$$1
        };
        var SDK = function () {
            this.config = null;
            this.configMarket = function (market) {
                this.config = markets[market] || null;
            };
            this.autocomplete = function(context) {
                return autocomplete$$1(context, this.config);
            }
        };
        var sdk;
        function init(market) {
            if(!sdk) {
                sdk = new SDK();
            }
            sdk.configMarket(market);
            return sdk;
        }
        return { init: init };
    })();
    return SDK;
}));
