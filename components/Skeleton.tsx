/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { Skeleton } from '@mui/material';

export default function SkeletonLoader() {
  return (
    <div className='mt-[2.2%] overflow-hidden flex align-center justify-center relative m-3'>
      <Skeleton animation='wave' variant="rounded" width={250} height={365} sx={{borderRadius: '10px'}} />
      <div className='absolute'>
        <Skeleton animation='wave' sx={{ bgcolor: 'grey.900' }} variant="rounded" width={249} height={130} sx={{borderRadius: '10px'}}/>
        <Skeleton animation='wave' className='mt-5 ml-4' sx={{ bgcolor: 'grey.900' }} variant="rounded" width={220} height={20} sx={{borderRadius: '5px'}}/>
        <Skeleton animation='wave' className='mt-5 ml-4' sx={{ bgcolor: 'grey.900' }} variant="rounded" width={220} height={20} sx={{borderRadius: '5px'}}/>
        <Skeleton animation='wave' className='mt-5 ml-4' sx={{ bgcolor: 'grey.900' }} variant="rounded" width={220} height={20} sx={{borderRadius: '5px'}}/>
      </div>
    </div>
  )
}
