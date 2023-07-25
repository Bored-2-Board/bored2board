import { NextResponse } from "next/server";
import connectToDatabase from "../../sql/sql";

export async function POST(req: Request) {

  // SQL FUNCTIONS TO CONNECT AND DISCONNECT
  const { dbClient, dbRelease } = await connectToDatabase();

  try {

    // GET USERID FROM REQUEST
    const body = await req.json();
    const { username, game, cost } = body;

    // GET USER ID
    const queryID = `
    SELECT id FROM users
    WHERE users.username = $1
    `;

    const userID = await dbClient?.query(queryID, [username]);

    // ADD TO WISHLIST DB
    const queryWish = `
    INSERT INTO wishlist (name, cost, user_id)
    VALUES ($1, $2, $3)
    `;

    const wishlist = await dbClient?.query(queryWish, [game, cost, userID])

    /* 
    RETURN RESPONSE: 
    - Empty: message
    - Data: wishlist games
    */
    if (wishlist) {
      return wishlist.rows.length > 0 ?
        NextResponse.json({ message: 'Empty Wishlist' }) :
        NextResponse.json({ wishlist: wishlist.rows })
    }

  } catch (error) {

    console.error('Error with GET request in Wishlist:', error);
    return NextResponse.json({ message: 'Error with GET request for Wishlist', error, status: 500 });

  } finally {

    // DISCONNECT FROM DB (Account for if dbRelease is null with ? operator)
    dbRelease?.();
  }

}






