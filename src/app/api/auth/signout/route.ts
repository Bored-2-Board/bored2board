import connectToDatabase from "../../sql/sql";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
        const response = NextResponse.json({ message: 'Success!'});
        response.cookies.set('username', null);
        response.cookies.set('password', null);
        console.log(response)
        return response;

} catch (error) {
    console.error('Error Message', error);
    return NextResponse.json({ error: (error as Error).message }, { status: 401 });
  }
}