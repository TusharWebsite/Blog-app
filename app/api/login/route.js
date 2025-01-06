import { NextResponse } from 'next/server';

export async function POST(req){

  try {
    const data = await req.json();

    const {email,password} = data;
    
    console.log("data",data);

    if(!email || ! password){
      return NextResponse.json(
        {message : "Email and Password is required!"},
        {status : 400}
      )
    }


    if(email && password ){
      return NextResponse.json(
        {message : "Login Successfully"},
        {status : 200}
      )
    }else{
      return NextResponse.json(
        {message : "Email or Password is pfjsfp"},
        {status : 404}
      )
    }

  } catch (error) {
    console.log("Error in login api :",error);
    return NextResponse.json(
      {message : "Error in login api"},
      {status : 505}
    )
  }
  
}