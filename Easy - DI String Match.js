var diStringMatch = function (s) {
  const perm = [];
  let i = 0;
  const nums = Array.from({ length: s.length + 1 }, () => i++);
  for (let i = 0; i < s.length; i++) {
    s[i] === "I" ? perm.push(nums.shift()) : perm.push(nums.pop());
  }
  perm.push(nums.pop());
  return perm;
};
