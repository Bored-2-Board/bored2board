import { NextResponse } from "next/server";

export async function GET(req: Request) {

  try {

    const response = await fetch('https://api.boardgameatlas.com/api/search?order_by=rank&client_id=JLBr5npPhV');
    const data = await response.json();
    console.log('trending/route.ts: trending games:', data);

    return NextResponse.json({ data });

  } catch (error) {
    console.log('Error with GET request:', error);
    return NextResponse.json({ message: 'Error with GET request for Popular Games', error, status: 500 });
  }

}

