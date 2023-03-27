var triangleNumber = function(nums) {
    let answer = 0;
    nums = nums.sort((a,b)=>a-b);
    for (let i=0; i<nums.length-2; i++) {
        let k = i + 2; // k는 세번째 숫자이기 때문
        if (nums[i] === 0) continue;
        for (let j=i+1; j<nums.length-1; j++) {
            while (k < nums.length && nums[i]+nums[j]>nums[k]) 
                k++;
            answer += k - j - 1;
        }
    }
    return answer;
};