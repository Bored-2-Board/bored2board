import { NextResponse } from "next/server";
import connectToDatabase from "../../sql/sql";

export async function DELETE(req: Request) {
  // SQL FUNCTIONS TO CONNECT AND DISCONNECT
  const { dbClient, dbRelease } = await connectToDatabase();

  try {
    // GET USERID FROM URL PARAMS
    const searchParams: URLSearchParams = new URL(req.url).searchParams;
    const userID: string | null = searchParams.get("userID");
    const gameName: string | null = searchParams.get("name");

    console.log('name: ', gameName);
    console.log('id: ', userID);

    // QUERY DATABASE FOR WISHLIST
    const queryWishlist = `
    DELETE FROM wishlist
    WHERE user_id = $1 AND name = $2
    `;

    await dbClient?.query(queryWishlist, [
      userID,
      gameName,
    ]);

    // console.log("deletedGame:", deletedGame);

    /* RETURN RESPONSE: 
          - Empty: message
          - Data: wishlist games
    */
    // if ((deletedGame?.rowCount as number) > 0) {
    //   NextResponse.json({ message: "Entry Successfully Deleted!" });
    // }

    return new NextResponse('Sucessfully Deleted!');

  } catch (error) {
    console.error("Error with DELETE request in Wishlist:", error);
    return NextResponse.json(
      {
        message: "Error with DELETE request for Wishlist",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  } finally {
    // DISCONNECT FROM DB (Account for if dbRelease is undefined with ? operator)
    dbRelease?.();
  }
}
