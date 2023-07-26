import { NextResponse, NextRequest } from 'next/server'
import { createEdgeRouter } from "next-connect"

//SETUP FOR NEXT-CONNECT ROUTER
interface RequestContext {
  params: {
    id: string;
  };
};

const router = createEdgeRouter<ResponseContext, RequestContext>();

router
  .post(async(req, event, next) => {
    // processing or fetch
    // middleware 1
    
    return next() // for next middleware
  })

  .post(async(req, res, next) => {

    //middleware2
  })

  .post(async(req, res, next) => {

    //middleware2
    return NextResponse.json({response: response, status: 200})
  })




/// alternative

export async function POST(request: NextRequest) {

  // process data
  const message = data;
  return NextResponse.json({});

}