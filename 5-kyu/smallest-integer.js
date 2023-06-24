// Given an array of integers your solution should find the smallest 
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }


//   OR

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a,b)=>a-b)[0];
    }
  }
