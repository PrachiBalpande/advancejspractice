class Student
{
    constructor(StudentId,firstName,lastName,dob,mob)
    {
        this.StudentId=StudentId,
        this.firstName=firstName,
        this.lastName=lastName,
        this.dob=dob,
        this.mob=mob
    }

    show()
    {
        console.log(this.StudentId,this.firstName,this.lastName,this.dob,this.mob)
    }
}

let s1=new Student('123456','prachi','R',"XYZ",7769830651)
let s2=new Student('3456','sneha','R',"XYZ",8805826785)
let s3=new Student('456','prajwal','R',"XYZ",774523698)
s1.show()
s2.show()
s3.show()