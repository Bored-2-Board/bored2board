import { NextResponse, NextRequest } from 'next/server'
import { createEdgeRouter } from "next-connect"

/* https://www.npmjs.com/package/next-connect */

//SETUP FOR NEXT-CONNECT ROUTER
interface RequestContext {
  params: {
    id: string;
  };
};

const router = createEdgeRouter<NextRequest, RequestContext>();

router
  .post(async (req, event, next) => {
    // processing or fetch
    // middleware 1

    return next() // for next middleware
  })

  .post(async (req, res, next) => {

    //middleware2
  })

  .post(async (req, res, next) => {

    //middleware2
    return NextResponse.json({ response: 'response', status: 200 })
  })

export async function POST(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}

/// alternative


// export async function POST(request: NextRequest) {

//   // process data
//   const message = 'data';
//   return NextResponse.json({});

// }