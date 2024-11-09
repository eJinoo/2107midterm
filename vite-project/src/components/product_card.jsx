import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export default function ProductCard({ data }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 400 }}
      image={data.image}
      title={data.title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {data.title}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        {data.price}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {data.category}
      </Typography>
    </CardContent>
  </Card>
  )
}