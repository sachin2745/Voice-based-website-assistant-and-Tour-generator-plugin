'use client'
import React from 'react'
import classes from "./CardsCarousel.module.css"
import { ThemeIcon, Progress, Text, Group, Badge, Paper, rem, Container, SimpleGrid } from '@mantine/core';
import { IconSwimming } from '@tabler/icons-react';
import { Avatar } from '@mantine/core';



const mockdata = [
  {
    image: 'ava.jpg',
    name: "Sarah M",
    email:
      "@sarahm",
      description:
      "Using the Voice Assistant on this website has been a game-changer for me. It's so intuitive and easy to use, and it's made navigating complex websites a breeze!"
  },
  {
    image: 'ava.jpg',
    name: "John D.",
    email:
      "@johnd",
      description:
      "I'm amazed by the accuracy and responsiveness of the Voice Assistant. It's like having a personal guide right there to help me find what I need quickly and efficiently."
  },
  {
    image: 'micimg.png',
    name: "Emily L.",
    email:
      "@emilyl",
      description:
      "As someone with visual impairment, the Voice Assistant has truly enhanced my online experience. It's incredibly empowering to be able to navigate websites with just my voice."
  }
]

export function CardsCarousel() {


  const features = mockdata.map((feature) => (
    <Paper radius="md" withBorder className={classes.card} >
      <ThemeIcon className={classes.icon} size={60} radius={60} >
        <Avatar src={[feature.image]} alt="it's me" style={{ width: rem(52), height: rem(52) }} />
      </ThemeIcon>

      <Text ta="center" fw={700} className={classes.title}>
        {feature.name}
      </Text>
      <Text c="dimmed" ta="center" fz="sm">
        {feature.email}
      </Text>
      <Text fz="sm" ta="center">
        {feature.description}
      </Text>
    </Paper>
  ));

  return (
    <Container size="xl" py="xl" >
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
        {features}
      </SimpleGrid>
    </Container>
  )
}