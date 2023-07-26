import { NextResponse } from "next/server";
import connectToDatabase from "../../sql/sql";

export async function POST(req: Request) {

  // SQL FUNCTIONS TO CONNECT AND DISCONNECT
  const { dbClient, dbRelease } = await connectToDatabase();

  try {

    // // GET USERNAME, GAMENAME, COST FROM REQUEST
    // const body = await req.json();
    // const { username, gamename, cost } = body;

    // // GET USER ID
    // const queryID = `
    // SELECT id FROM users
    // WHERE users.username = $1
    // `;

    // const userID = await dbClient?.query(queryID, [username]);

    const body = await req.json();
    const { userID, gamename, cost, image_url } = body;

    // ADD TO WISHLIST DB
    const queryWish = `
    INSERT INTO wishlist (name, cost, user_id, image)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `;

    const wishlist = await dbClient?.query(queryWish, [gamename, cost, userID, image_url])

    /* 
    RETURN RESPONSE: 
    - Data: wishlist games
    */
    if (wishlist) {
      return NextResponse.json({ wishlist: wishlist.rows })
    }

  } catch (error) {

    console.error('Error with POST request for Updating Wishlist:', error);
    return NextResponse.json({
      message: 'Error with POST request for Updating Wishlist',
      error: (error as Error).message
    }, { status: 500 });

  } finally {

    // DISCONNECT FROM POOL (Account for if dbRelease is undefined with ? operator)
    dbRelease?.();
  }

}






