let obj={
    [Symbol.iterator]:function()
    {
            count=0;
    let iterator={
        next:function()
        {
            count++

            if(count==1){
                return{value:"pink",done:false}
            }
            else if (count==2){
                return{value:"green",done:false}
            }
            else if(count==3){
                return{value:"orange",done:false}
            }
            else if(count==4){
                return{value:"blue",done:false}
            }
            
            else if(count==5){
                return{value:"navy",done:false}
            }
        }
    }
      return iterator;
    }

}
for(p of obj){
console.log(p)

}