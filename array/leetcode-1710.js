// Maximum Units on a Truck
// https://leetcode.com/problems/maximum-units-on-a-truck/

var maximumUnits = function (boxTypes, truckSize) {
  let ans = 0;
  let counter = 0;
  boxTypes.sort((a, b) => {
    return b[1] - a[1];
  });
  for (let i = 0; i < boxTypes.length; i++) {
    let boxes = boxTypes[i][0];
    while (boxes != 0) {
      if (counter != truckSize) {
        ans += boxTypes[i][1];
        counter++;
      }
      boxes--;
    }
  }
  return ans;
};

// var maximumUnits = function(boxTypes, truckSize) {
//     let maxUnits = 0;
//     boxTypes.sort((a,b) => b[1]-a[1]);//sort on the basis of units in each box
//     let i = 0;
//     while(truckSize>0 && i<boxTypes.length){// iterate through the boxes array untill capacity is zero or all the boxes are added
//         if(truckSize>boxTypes[i][0]){
//             maxUnits+= boxTypes[i][0] * boxTypes[i][1]; //add if the capacity is larget than total boxes of type i
//             truckSize -= boxTypes[i][0];
//         }
//         else{
//             maxUnits += truckSize * boxTypes[i][1];//add when capacity is less than total boxes of type i
//             truckSize = 0;
//         }
//         i++;
//     }

//     return maxUnits;
//     };
