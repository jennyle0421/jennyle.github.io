import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, CardActions } from "@mui/material";

export default function ProjectCard({ title, description, link, image }) {
  return (
    <Card
        sx={{
            maxWidth: 360,
            minHeight: 420, // 🔹 ensures all cards have same height
            borderRadius: 3,
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 10px 24px rgba(0, 0, 0, 0.25)",
            },
        }}
    >

      {/* Project Image */}
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          height: 180,
          objectFit: "cover",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      />

      {/* Project Details */}
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      {/* View Project Button */}
      <CardActions sx={{ padding: "0 16px 16px" }}>
        <Button
          size="small"
          variant="contained"
          color="primary"
          href={link}
          target="_blank"
          sx={{
            borderRadius: 2,
            textTransform: "none",
            fontWeight: "bold",
            width: "100%",
          }}
        >
          View Project
        </Button>
      </CardActions>
    </Card>
  );
}
