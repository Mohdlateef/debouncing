delete Array.prototype.filter;


let arr=[1,2,3,4]
// arr.filter((ele)=>{
//     console.log(ele)
// })

Array.prototype.filter=function(callback)
{
    let newarr=[];
    let newele=0;
    for(let i=0;i<this.length;i++)
        {
          let ele2=callback(this[i],i,this);
          if(ele2){
            newele=this[i]
            newarr.push(newele);
          }
        }
        return newarr;
}
let arr3=arr.filter((ele)=>{
    if(ele>3)
        {
            return false;
        }
        else{
            return 1;
        }
})
console.log(arr3);