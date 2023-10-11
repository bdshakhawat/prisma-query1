
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


export async function POST(req,res){
    try{
        // Catch the value from the request body by prisma client inside result variable
        const reqBody=await req.json();
        // Create an instance of prisma client
        const prisma=new PrismaClient();
        // Create a new record in the database and keep it inside result variable
        const result=await prisma.Employee.create({
            data:reqBody
        });
        // finally return the response to the client as a json format with status and data from
        // result variable. if the parsing data and inserting data is success then it will return
        // status as success and data from result variable
        return NextResponse.json({status:"success",data:result});

}
catch(err){
   return NextResponse.json({status:"Failed",data:err});
}
}
// ---------
// First catch the sending data by prisma in the request body and keep it inside reqBody variable
// Create an instance of prisma client
// Create a new record in the database by inserting the data from 
// request body by using prisma client method create()
// Finally return the response to the client as a json format with status and data from
// result variable. if the parsing data and inserting data is success then it will return
// status as success and data from result variable
// If any error occurs then it will return status as failed and data as error message
// ----------


