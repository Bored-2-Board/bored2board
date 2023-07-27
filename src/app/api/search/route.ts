import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    // GET CATEGORYID FROM URL PARAMS
    const searchParams: URLSearchParams = new URL(req.url).searchParams;
    const categoryID: string | null = searchParams.get("categoryID");

    // PARAMS
    const category: string = categoryID ? `categories=${categoryID}&` : "";
    const fields: string = `fields=name,description,price,images,image_url,players,min_players,max_players,playtime,min_playtime,max_playtime,url,official_url&`;

    // CHECK NUMBER OF PLAYERS
    const numPlayers: string | null = searchParams.get("numPlayers");

    // MIN PLAYERS
    const minPlayers: string = numPlayers
      ? `lt_min_players=${parseInt(numPlayers as string) + 1}&`
      : "";

    // MAX PLAYERS
    const maxPlayers: string = numPlayers
      ? `gt_max_players=${parseInt(numPlayers as string) - 1}&`
      : "";

    // Check Cost and set price variable
    let price: string = "";
    const priceType: string | null = searchParams.get("price");

    if (priceType === "free") price = "lt_price=0.01&";
    else if (priceType === "less") price = "lt_price=10&";
    else if (priceType === "more") price = "gt_price=9.99&";

    // FETCH
    const response = await fetch(
      `https://api.boardgameatlas.com/api/search?${category}${fields}${price}${minPlayers}${maxPlayers}client_id=JLBr5npPhV`
    );
    const data = await response.json();
    console.log("trending/route.ts: trending games:", data);

    return NextResponse.json({ data });
  } catch (error) {
    console.log("Error with GET request:", error);
    return NextResponse.json({
      message: "Error with GET request for Game Search",
      error,
      status: 500,
    });
  }
}
