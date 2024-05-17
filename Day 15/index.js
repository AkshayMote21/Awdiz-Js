// Binary Search
            //  0   1  2  3  4  5  6 7   8  9
var array = [11,12,13,14,15,16,17,18,19,20];
var target = 19;
function BinarySearch(array,target){
    left = 0;
    right = array.length-1;                         // 1st iteration    //2nd iteration    //3rd iteration
    while(left <= right){                           // 0<=9 - true;     //5<=9 - true;     //8<=9-true;
        var midPoint = Math.floor((left+right)/2);  // (0+9)/2=4;       //(5+9)/2=7;       //(8+9)/2=8;
        if(array[midPoint] == target){              // 15==19-flase;    //18==19-false;    //19==19-true;
            return midPoint;                         // return 8;
        }
        else if(array[midPoint] < target){          // 15<19-true;      //18<19-true;
            left = midPoint + 1;                    // left=4+1=5;      //left=7+1=8;
        }
        else if(array[midPoint] > target){
            right = midPoint - 1;
        }
    }
    // console.log(midPoint);
}
console.log(BinarySearch(array,target));



