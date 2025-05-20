import connect from "@/lib/db";
import User from "@/lib/modals/users";

import { NextResponse } from "next/server"

// const objectId = require("mongoose").Types.ObjectId;
export const  GET = async () =>{

  try {
  await connect();
  const users = await User.find();
  return new NextResponse(JSON.stringify(users), { status: 200 });
} catch (error: unknown) {
  // Narrow the error type safely
  if (error instanceof Error) {
    console.log("Error:", error.message);
    return new NextResponse("Error fetching users: " + error.message, { status: 500 });
  } else {
    console.log("Unknown error:", error);
    return new NextResponse("Unknown error occurred", { status: 500 });
  }
}
   
};

export const POST = async (request: Request) => {
  try {
  const body = await request.json();

  // Validate server-side too
  const { parentsname, studentname, phone, std } = body;
  if (!parentsname || !studentname || !phone || !std) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  await connect();

  const newUser = new User(body);
  await newUser.save();

  return NextResponse.json(
    { message: "Enrollment successful!", user: newUser },
    { status: 200 }
  );
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error("POST error:", error.message);
    return NextResponse.json(
      { error: "Error in POST request: " + error.message },
      { status: 500 }
    );
  } else {
    console.error("Unknown POST error:", error);
    return NextResponse.json(
      { error: "Unknown error occurred in POST request" },
      { status: 500 }
    );
  }
}
}

// export const DELETE = async (request:Request)=>{
//      try {
//         const {searchParams}=new URL(request.url);
//         const userId =searchParams.get("userId");
//         if(!userId){
//             return new NextResponse("userId is wrong" ,{status:400});
//         }
//         if (!Types.ObjectId.isValid(userId)){
//              return new NextResponse("user not found" ,{status:400});
//         }
//         await connect();
//        const deletedUser= await User.findByIdAndDelete(
//             new Types.ObjectId(userId)
//         ) ;
//         if(!deletedUser){
//              return new NextResponse("error in deleting user" ,{status:400});
//         }
//          return new NextResponse("Delete successfull" ,{status:200});
//      } catch (error) {
//          return new NextResponse("error"+error ,{status:500});
//      }
// }