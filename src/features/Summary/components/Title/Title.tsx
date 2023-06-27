'use client'

import { Typography } from '@mui/material'
import React from 'react'

interface Props {
  title: Maybe<string>
}

export const Title = ({ title }: Props) => {
  return <div>{title ?? "Can not retrieve youtube video title"}</div>
}
