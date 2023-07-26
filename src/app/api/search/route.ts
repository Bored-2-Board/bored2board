import { NextResponse } from "next/server";

export async function GET(req: Request) {

  try {

    // GET USERID FROM URL PARAMS
    const searchParams: URLSearchParams = new URL(req.url).searchParams;
    const categoryID: string | null = searchParams.get('categoryID');

    // PARAMS
    const category: string = `categories=${categoryID}`;
    const fields: string = `fields=name,description,price,images,image_url,players,min_players,max_players,playtime,min_playtime,max_playtime,url,official_url`;
    const order: string = 'order_by=trending';

    // FETCH
    const response = await fetch(`https://api.boardgameatlas.com/api/search?${category}&${order}&${fields}client_id=JLBr5npPhV`);
    const data = await response.json();
    console.log('trending/route.ts: trending games:', data);

    return NextResponse.json({ data });

  } catch (error) {
    console.log('Error with GET request:', error);
    return NextResponse.json({ message: 'Error with GET request for Game Search', error, status: 500 });
  }

}