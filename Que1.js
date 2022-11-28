/*write a class with name Employee and basic as its data member,to find the gross pay of an employee for the following allowances and deduction.
Use meaningful variables. Dearess Allowace =25% of the Basic pay House rentAllowance=15% of basic pay provided Fund =8.33%  of Basic Pay Net 
pay =Basic Pay Net Pay = Basic Pay + Dearness Allowance + House Rent Allowance Gross Pay = Net Pay -Provident Fund*/



class Employee
{
    constructor(b)
    {
        this.basic=b;
    }
    calc()
    {
        let pf,gf,np,hra,da;
        da=25/100.0*this.basic;
        hra=15/100.0*this.basic;
        pf=8.33/100*this.basic;
        np=this.basic+da+hra;
        gf=np-pf;
        console.log("Gross Pay="+gf);

    }
}
let e1=new Employee(200000);
e1.calc()