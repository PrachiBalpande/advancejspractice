/*function multiplication(a)
{
    return function(b)
    {
        return a*b;
    }

}
 let store=multiplication(5)(6);//currying
 //let res= store(25);
 //console.log(res)

 */


function getEmp(obj)
{
    return function(key){
        return obj[key]
    }
}
 let addmition={
    name:'prachi',
    sal:50000,
    div:"A"
 }

 let de=getEmp(addmition)('sal')
 console.log(de)