import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    // PARAMS
    const fields: string = `fields=name,description,price,images,image_url,players,min_players,max_players,playtime,min_playtime,max_playtime,url,official_url`;
    const random: string = "random=true";

    // FETCH
    const response = await fetch(
      `https://api.boardgameatlas.com/api/search?${random}&${fields}&client_id=JLBr5npPhV`
    );

    const data = await response.json();
    console.log("trending/route.ts: trending games:", data);

    return NextResponse.json({ data });
  } catch (error) {
    console.log("Error with GET request:", error);
    return NextResponse.json({
      message: "Error with GET request for Popular Games",
      error,
      status: 500,
    });
  }
}
