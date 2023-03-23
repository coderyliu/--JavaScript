/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

function mergeArray(nums1,nums2){
  let i=nums1.length-1
  let j=nums2.length-1
  let k=nums1.length+nums2.length-1
  let nums3=[]

  while(i>=0||j>=0){
    if(nums1[i]>nums2[j]){
      nums3[k]=nums1[i]
      i--
      k--
    }else{
      nums3[k]=nums2[j]
      j--
      k--
    }
  }

  while(i>=0){
    nums3[k]=nums1[i]
    i--
    k--
  }

  while(j>=0){
    nums3[k]=nums2[j]
    j--
    k--
  }

  return nums3
}


