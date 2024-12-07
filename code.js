function tsp_hk(distance_matrix) {
    // Sizes of 0 or 1 have no distance
    let size = distance_matrix.length;
    if (size == 0 || size == 1) { return 0; }
    

    let bestMin = Infinity; // Initialize min
    let dictionaryCache = {};

    // Make Every City the Starting Node
    for (let i = 0; i < size; i++) {
        let cities = [];

        // Fill array with the all cities
        for (let j = 0; j < size; j++) { cities.push(j); }

        let currentMin = heldKarp(i, cities, distance_matrix, dictionaryCache);

        // Replaces current min with new min
        if (currentMin < bestMin) { bestMin = currentMin; }
    }
    
    return bestMin;
}


// Based on the psuedocode in the README
function heldKarp(city, cities, matrix, cache) {
    let size = cities.length;

    // Check if it exists already in cache
    let key = JSON.stringify([city, cities]);
    console.log("cities: " + cities);
    if (cache[key] != undefined) { return cache[key]; }
    

    // Base Case when there are two cities
    if (size == 2) {
        for (let i = 0; i < size; i++) {
            if (cities[i] != city) {
                cache[key] = matrix[city][cities[i]];
                return cache[key];
            }
        }
    } else { 
        let minDistance = Infinity;

        for (let i = 0; i < size; i++) {
            if (cities[i] == city) { continue; } // Skips current city

            let newCities = [];

            // Removes current city from cities list
            for (let j = 0; j < size; j++) {
                if (cities[j] == city) { continue; } // Skips current city

                newCities.push(cities[j]);
            }
            
            let distance = matrix[city][cities[i]] 
                            + heldKarp(cities[i], newCities, matrix, cache);

            // Find the min
            if (minDistance > distance) { minDistance = distance; }
        }

        cache[key] = minDistance;
        return minDistance;
    }
}


function tsp_ls(distance_matrix) {
   if (distance_matrix.length === 0 || distance_matrix[0].length === 0) {
        return 0; // No cities to visit
    }
    if (distance_matrix.length === 1) {
        return 0; // Only one city, no travel needed
    }
   
//Initialize random route
   //Set incumbent route as the random route
   function randomRoute(cities) {
       let route = Array.from({ length: cities }, (_, index) => index);
       for (let i = route.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // Random index
           [route[i], route[j]] = [route[j], route[i]]; // Swap elements
       }
       return route;
   }

   //Total distance
   function distance(route){
      let dist = 0;
        for (let i = 0; i < route.length - 1; i++) {
            dist += distance_matrix[route[i]][route[i + 1]];
        }
        dist += distance_matrix[route[route.length - 1]][route[0]]; 
        return dist;
   }
 //Perform 2-opt swap
       function optSwap(route, i, k) {
            let start = route.slice(0, i);
            let reversed = route.slice(i, k + 1).reverse();
            let end = route.slice(k + 1);
            return start.concat(reversed, end);
        }
   
   //Initialize random route
    let route = randomRoute(distance_matrix.length);
    let currentdist = distance(route);
   
//Repeat until stopping condition met:
   let noimprove = 0;
   while (noimprove < 100) {
       let i = Math.floor(Math.random() * (route.length-1));
       let k = Math.floor(Math.random() * (route.length-i-1)) + i+1;
      
       let newroute = optSwap(route, i, k);
       let newdist = distance(newroute);
      
     /*If new route is shorter:
        Update incumbent route
        Return length of shortest route*/
        if(newdist < currentdist){
            route = newroute;
            currentdist = newdist;
            noimprove = 0;
        }
        else{
            noimprove++;
        }
    }
    
    return currentdist;
}
