


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
