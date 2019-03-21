var fs = require('./db');
const Query = {
   greeting:() => {
      return "hello from  TutorialsPoint !!!"
   },
   sayHello:(root,args,context,info)=>{
      return `Hi ${args.name} GraphQL server says Hello to you!!`
   }
   ,
   students:() => fs.students.list(),
   
   studentById:(root,args,context,info) => {


      return fs.students.get(id=args.id);
   },
   
   colleges:()=>fs.colleges.list()




   
}
const Mutation = {
   createStudent:(root,args,context,info) => {
      id= fs.students.create({collegeId:args.collegeId,
      firstName:args.firstName,
      lastName:args.lastName})
      return fs.students.get(id)
   }
}


const Student = {
   fullName:(root,args,context,info) => {
      return root.firstName+":"+root.lastName
   }
   ,
   college:(root) => {
      return fs.colleges.get(root.collegeId);
   }
}

module.exports = {Query,Student,Mutation}


