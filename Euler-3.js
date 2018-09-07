function devide_prime( num, dev_num ){
  while( num % dev_num == 0){
    num /= dev_num;
  }
  return num;
}
var primal = [ 1, 2 ];
var limit = 600851475143;
limit = devide_prime(limit, 2);
for( var num = 3; num <= limit; num += 2 ){
  flag = 1;
  for( i = 1 ; num >= primal[i] * primal[i] && flag; i++)
    if( num % primal[i] == 0 ){
      flag=0;
    }
  if( flag ){
    primal.push(num);
    limit = devide_prime(limit, num);
  }
}
primal[primal.length-1];
