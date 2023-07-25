import { NextResponse } from "next/server";

export async function GET(req: Request) {

  try {

    const date = new Date();
    const year = date.getFullYear();

    const response = await fetch(`https://api.boardgameatlas.com/api/search?year_published=${year}&limit=5&client_id=JLBr5npPhV`);
    const data = await response.json();
    // console.log('new/app.ts: data:', data);
    console.log('test');

    return NextResponse.json({ data });

  } catch (error) {

    console.error('Error with GET request:', error);
    return NextResponse.json({ message: 'Error with GET request for New Games', error, status: 500 });

  }

}






