/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { Skeleton } from "@mui/material";

export default function SkeletonLoader() {
  return (
    <div className="mt-[2.2%] overflow-hidden flex align-center justify-center relative m-3">
      <Skeleton
        animation="wave"
        variant="rounded"
        width={300}
        height={425}
        sx={{ borderRadius: "10px" }}
      />
      <div className="absolute">
        <Skeleton
          animation="wave"
          sx={{ bgcolor: "grey.900" }}
          variant="rounded"
          width={300}
          height={160}
          sx={{ borderRadius: "10px" }}
        />
        <Skeleton
          animation="wave"
          className="mt-[30px] ml-4"
          sx={{ bgcolor: "grey.900" }}
          variant="rounded"
          width={270}
          height={30}
          sx={{ borderRadius: "5px" }}
        />
        <Skeleton
          animation="wave"
          className="mt-[30px] ml-4"
          sx={{ bgcolor: "grey.900" }}
          variant="rounded"
          width={270}
          height={30}
          sx={{ borderRadius: "5px" }}
        />
        <Skeleton
          animation="wave"
          className="mt-[30px] ml-4"
          sx={{ bgcolor: "grey.900" }}
          variant="rounded"
          width={270}
          height={30}
          sx={{ borderRadius: "5px" }}
        />
      </div>
    </div>
  );
}
