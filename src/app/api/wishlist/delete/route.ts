import { NextResponse } from "next/server";
import connectToDatabase from "../../sql/sql";

export async function DELETE(req: Request) {
  // SQL FUNCTIONS TO CONNECT AND DISCONNECT
  const { dbClient, dbRelease } = await connectToDatabase();

  try {
    // GET USERID FROM URL PARAMS
    const searchParams: URLSearchParams = new URL(req.url).searchParams;
    const userID: string | null = searchParams.get("userID");
    const gamename: string | null = searchParams.get("name");

    console.log('name: ', gamename);
    console.log('id: ', userID);

    // QUERY DATABASE FOR WISHLIST
    const queryDelete = `
    DELETE FROM wishlist
    WHERE user_id = $1 AND name = $2
    `;

    const deleteResponse = await dbClient?.query(queryDelete, [userID, gamename]);

    console.log("deletedGame:", deleteResponse);

    /* RETURN RESPONSE: 
          - Empty: message
          - Data: wishlist games
    */
    if ((deleteResponse?.rowCount as number)) {
      return NextResponse.json({ message: "Entry Successfully Deleted!" });
    } else throw new Error('Entry does not exist')


  } catch (error) {
    console.error("Error with DELETE request in Wishlist:", error);
    return NextResponse.json(
      {
        message: "Error with DELETE request in Wishlist: " + (error as Error).message,
        error: (error as Error).message,
      },
      { status: 501 }
    );
  } finally {
    // DISCONNECT FROM DB (Account for if dbRelease is undefined with ? operator)
    dbRelease?.();
  }
}
