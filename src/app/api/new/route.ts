import { NextResponse } from "next/server";

export async function GET(req: Request) {

  try {

    const date = new Date();
    const currentYear = date.getFullYear();

    // PARAMS
    const fields: string = `fields=name,description,price,images,image_url,players,min_players,max_players,playtime,min_playtime,max_playtime,url,official_url`;
    const order: string = 'order_by=rank';
    const year = `gt_year_published=${currentYear - 1}&lt_year_published=${currentYear + 1}`;

    // FETCH
    const response = await fetch(`https://api.boardgameatlas.com/api/search?${order}&${fields}&${year}&client_id=JLBr5npPhV`);

    const data = await response.json();

    return NextResponse.json({ data });

  } catch (error) {

    console.error('Error with GET request:', error);
    return NextResponse.json({ message: 'Error with GET request for New Games', error, status: 500 });

  }

}






