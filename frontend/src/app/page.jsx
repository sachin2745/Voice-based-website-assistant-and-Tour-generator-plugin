'use client'
import React from 'react'
import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
  Overlay
} from "@mantine/core"
import { IconCheck } from "@tabler/icons-react"

import classes from "./page.module.css"
import FeaturesCards from './FeaturesCards'
import Faqsection from './faqSection'
import cx from 'clsx';


const page = () => {
  return (
    <>
      <section >
        <Container size="md">
          <div className={classes.inner}>
            <div className={classes.content}>
            <Title className={classes.title}><span className={classes.highlight}>Welcome to</span> <br />VoiceTour Navigator <br />Plugin System</Title>
              <Text c="dimmed" mt="md">
              Revolutionizing Website Navigation with Voice Technology
              </Text>

              <List className={classes.List} size="xl" mt="xl" spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <IconCheck
                      style={{ width: rem(12), height: rem(12) }}
                      stroke={1.5}
                    />
                  </ThemeIcon>
                }
              >
                {/* <List.Item>
                  <b>Voice-Based Navigation</b> – build type safe applications, all
                  components and hooks export types
                </List.Item> */}
                <List.Item>
                  <b>Voice-Based Navigation</b>
                </List.Item>
                <List.Item>
                  <b>Personalized Website Tours</b>
                </List.Item>
                <List.Item>
                  <b>Plugin Customization</b>
                </List.Item>
                <List.Item>
                  <b>Intuitive User Experience</b>
                </List.Item>
                <List.Item>
                  <b>Continuous Improvement</b>
                </List.Item>
              </List>

              <Group mt={15}>
              <div className={classes.controls}>
                <Button className={classes.control} variant="outline" color="rgba(255, 255, 255, 1)" size="lg">
                  Get started
                </Button>
                <Button className={cx(classes.control, classes.secondaryControl)} variant="outline" color="rgba(255, 255, 255, 1)" size="lg">
                  Live demo
                </Button>
              </div>
              </Group>
            </div>
            <Image src="loginimg.svg" className={classes.image} />
          </div>
        </Container>
      </section>

      <FeaturesCards />

      <Faqsection />

    </>
  )
}

export default page