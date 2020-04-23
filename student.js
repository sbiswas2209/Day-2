class Student{
     constructor(n , a, s, sL , m){
         this.name = n;
         this.age = a;
         this.school = s;
         this.subjectList = sL;
         this.marks = m;
    }

    getAverage(){
        return ((this.marks[0]+this.marks[1]+this.marks[2])/3);
    }

    printDetails(){
        console.log(`Name : ${this.name}`);
        console.log(`Age : ${this.age}`);
        console.log(`School : ${this.school}`);
        console.log(`Average marks of ${this.name} is ${this.getAverage()}`);
    }
    

}
function forEachStudent(s){
    s.printDetails();
}

let students = [new Student('ABC' , 16 , 'ABC School' , ['A' , 'B' , 'C'] , [10 , 8 , 9]),
                new Student('DEF' , 15 , 'DEF School' , ['A' , 'B' , 'C'] , [6 , 8 , 4]),
                new Student('GHI' , 16 , 'GHI School' , ['A' , 'B' , 'C'] , [7 , 9 , 6])    
                ];

function forEachStudent(s){
    s.printDetails();
}

for(let i=0 ; i<3 ; i++){
    forEachStudent(students[i]);
}
