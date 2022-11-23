let p;
function fun()
{
    let p=30;
    r=55
    return function fun2()
    {
        p=r+10
    }
}
fun()
console.log('after executive',p)