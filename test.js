// 2. Merge and Sort Two Lists
// ● Problem: Given two pre-sorted lists, merge them into a new list and sort the combined
// elements.
// ● Input/Output:
// ○ Input: list1 = [4, 8, 9], list2 = [3, 7, 10]
// ■ Output: [3, 4, 7, 8, 9, 10]
// ○ Input: list1 = [2, 5, 6], list2 = [1, 7, 8]
// ■ Output: [1, 2, 5, 6, 7, 8]

// Solution:

var inp=[4,8,9];
var inp1=[3,7,10];

var sorted=inp.concat(inp1);
console.log(sorted);

sorted.sort((a,b)=>{
    return a-b;
    
})
console.log("sorted array is",sorted)



// var inp=[2,5,6];
// var inp1=[1,7,8];
// var sorted=inp.concat(inp1);
// console.log(sorted);

// sorted.sort((a,b)=>{
//     return a-b;
    
// })
// console.log("sorted array is",sorted)



// 3. Remove Consecutive Duplicates from List
// ● Problem: Write a function that removes consecutive duplicate elements from a sorted
// list, modifying the list in place, and return the length of the new list.
// ● Input/Output:
// ○ Input: nums = [3, 3, 4, 5, 5]
// ■ Output: 3, nums = [3, 4, 5]
// ○ Input: nums = [1, 2, 2, 2, 3]
// ■ Output: 3, nums = [1, 2, 3]
// Solution:

// var inp=[3,3,4,5,5,3]

// function duplicateremover(inp){
//     for(var i=0; i<=inp.length-1;i++){
//         if(inp[i]==inp[i+1]){
//             inp.splice(i,1);
//             i--;

//         }
//     }
// console.log(inp.length);
// console.log(inp);
// }

// duplicateremover(inp)


// var inp=[1,2,2,2,3]

// function duplicateremover(inp){
//     for(var i=0; i<=inp.length-1;i++){
//         if(inp[i]==inp[i+1]){
//             inp.splice(i,1);
//             i--;

//         }
//     }
// console.log(inp.length);
// console.log(inp);
// }

// duplicateremover(inp)

// 4. Compute Common Elements in Lists
// ● Problem: Given two lists, write a function to find their common elements, returning a list
// of unique common elements.
// ● Input/Output:
// ○ Input: nums1 = [2, 4, 6, 8], nums2 = [4, 8, 10]
// ■ Output: [4, 8]

// solution:

// var inp=[2,4,6,8];
// var inp1=[4,8,10]
// function common(inp,inp1){
//     var array=[];

// for(var i=0; i<=inp.length-1;i++){
//     for(var z=0; z<=inp1.length-1;z++){

//         if(inp[i]==inp1[z]){
//             array.push(inp[i]);

//         }

//     }

// }
// console.log(array);


// }

// common(inp,inp1)








// Input: nums1 = [1, 2, 2, 5], nums2 = [2, 5, 7, 8]
// ■ Output: [2, 5]
// inp=[1,2,2,5];
// inp1=[2,5,7,8]
// function common(inp,inp1){
//     var array=[];

// for(var i=0; i<=inp.length-1;i++){
//     for(var z=0; z<=inp1.length-1;z++){

//         if(inp[i]==inp1[z]){
//             array.push(inp[i]);

//         }

//     }

// }
// for(var k=0; k<=array.length-1;k++){
//     if(array[k]==array[k+1]){
//         array.splice(k,1);
//         k--;


//     }
// }
// console.log(array);


// }

// common(inp,inp1)


// 5. Find Subarray with Maximum Product
// ● Problem: Find the contiguous subarray within an array that has the maximum product.
// ● Input/Output:
// ○ Input: nums = [2, 3, -2, 4]
// ■ Output: 6 (subarray: [2, 3])
// ○ Input: nums = [-2, 0, -1]
// ■ Output: 0 (subarray: [0])

// var inp=[2,3,-2,4]
// function contiguous(inp){
//     var count=1;
//     var count1=1;
//     var count2=1;
// for(var i=0; i<=inp.length-1;i++){
//     count=count*inp[i];
    
    
// }
// for(var i=0; i<=inp.length-2;i++){
//     count1=count1*inp[i];
    
    
// }
// for(var i=0; i<=inp.length-3;i++){
//     count2=count2*inp[i];
    
    
// }
// console.log(count);
// console.log(count1);
// console.log(count2);

// if(count1>count && count1>count2){
//     console.log("The greatest is",count1)
// }

// else if(count>count1 && count>count2){
//     console.log("The greatest is",count)
// }
// else{
//     console.log("The greatest is",count2)
// }



// }
// contiguous(inp);





// var inp=[-2,0,-1]
// function contiguous(inp){
//     var count=1;
//     var count1=1;
//     var count2=1;
// for(var i=0; i<=inp.length-1;i++){
//     count=count*inp[i];
    
    
// }
// for(var i=0; i<=inp.length-2;i++){
//     count1=count1*inp[i];
    
    
// }

// console.log(count);
// console.log(count1);


// if(count1>count && count1>count2){
//     console.log("The greatest is",count1)
// }

// else {
//     console.log("The greatest is",count)
// }




// }
// contiguous(inp);


