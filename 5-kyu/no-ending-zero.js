// Numbers ending with zeros are boring. They might be fun in your world, but not here. Get rid of them. Only the ending 
function noBoringZeros(n) {
    while(n%10==0 && n!=0){n/=10;}
    return n;
  }


