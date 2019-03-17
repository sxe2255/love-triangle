/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count=0;
  let a,b,c;
  preferences.unshift(0);
  for(i=1;i<=preferences.length-1;i++){
    a = preferences[i];
    preferences[i] = 0;
    b = preferences[a];
    c = preferences[b];
    if(i == c){
      count++;
      preferences[a]=0;
      preferences[b]=0;
    } 
  }
return count;
};
