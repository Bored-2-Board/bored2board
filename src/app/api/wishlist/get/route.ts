import { NextResponse } from "next/server";
import connectToDatabase from "../../sql/sql";

export async function GET(req: Request) {

  // SQL FUNCTIONS TO CONNECT AND DISCONNECT
  const { dbClient, dbRelease } = await connectToDatabase();

  try {

    // GET USERID FROM URL PARAMS
    const searchParams: URLSearchParams = new URL(req.url).searchParams;
    const userID: string | null = searchParams.get('userID');

    // // GET USER ID
    // const queryID = `
    // SELECT id FROM users
    // WHERE users.username = $1
    // `;

    // const userID = await dbClient?.query(queryID, [username]);

    // QUERY DATABASE FOR WISHLIST
    const queryWishlist = `
    SELECT * FROM wishlist
    WHERE user_id = $1
    `;

    const wishlist = await dbClient?.query(queryWishlist, [userID]);

    /* RETURN RESPONSE: 
          - Empty: message
          - Data: wishlist games
    */
    if (wishlist) {
      return wishlist.rows.length > 0 ?
        NextResponse.json({ wishlist: wishlist.rows }) :
        NextResponse.json({ message: 'Empty Wishlist' })
    }

  } catch (error) {

    console.error('Error with GET request in Wishlist:', error);
    return NextResponse.json(
      {
        message: 'Error with GET request for Wishlist',
        error: (error as Error).message
      }, { status: 500 });

  } finally {

    // DISCONNECT FROM DB (Account for if dbRelease is undefined with ? operator)
    dbRelease?.();
  }

}






