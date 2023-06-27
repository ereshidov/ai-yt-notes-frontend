import React from 'react'

import MUISkeleton, { SkeletonProps } from '@mui/material/Skeleton'

export const Skeleton = ({
  variant = 'rounded',
  animation = 'wave',
  width = '100%',
  height = '100%',
  ...skeletonProps
}: SkeletonProps) => {
  return (
    <MUISkeleton
      width={width}
      height={height}
      variant={variant}
      animation={animation}
      {...skeletonProps}
    />
  )
}
