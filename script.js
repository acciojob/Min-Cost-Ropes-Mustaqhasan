function mincost(arr)
{ 
//write your code here
// return the min cost
	let cost=0;
	while (arr.lenght>1) {
		let first=arr.shift();
		let second=arr.shift();

		let sum=first+second;

		cost=cost+sum;
		arr.push(sum);
	}
	return cost;
  
}

module.exports=mincost;
