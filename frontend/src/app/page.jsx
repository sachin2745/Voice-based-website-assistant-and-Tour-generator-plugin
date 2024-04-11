'use client'
import React, { useEffect } from 'react'
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
  Overlay,
  Box,
  BackgroundImage
} from "@mantine/core"
import { IconCheck, IconProgressCheck } from "@tabler/icons-react"

import classes from "./page.module.css"
import FeaturesCards from './FeaturesCards'
import Faqsection from './faqSection'
import cx from 'clsx';
import { GithubIcon } from '@mantinex/dev-icons'
import Footer from './(main)/footer'
import Navbar from './(main)/navbar'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Lottie from 'lottie-react'
import mainimg from './mainimg.json'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Testimonial from './Testimonial'
import HeroBullet from './HeroBullet'
import HeroBullet2 from './HeroBullet2'




const page = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [typeEffect] = useTypewriter({
    words: ['Voice', 'Tour', 'Navigator'],
    loop: {},
    typeSpeed: 200,
    delaySpeed: 80
  })


  return (
    <>

      <Navbar />


      <section  >
        <Box mx="auto" className={classes.box}>

          <Container  >
            <div className={classes.inner}>
              <div className={classes.content} data-aos="fade-up">
                <Title className={classes.title} >
                  <span className={classes.highlight}>Welcome to</span> <br />
                  <span className={classes.subtitle}>{typeEffect} </span>
                  <span style={{ color: 'white' }}><Cursor cursorStyle='|' /></span>
                  <br />Plugin System</Title>
                <Text mt="md">
                  Revolutionizing Website Navigation with Voice Technology
                </Text>

                <List className={classes.List} size="md" mt="xl" spacing="sm"

                  icon={
                    <ThemeIcon size={20} radius="xl" style={{ backgroundImage: 'linear-gradient(to right, #01fffb, #4cbbff)' }}>
                      <IconCheck
                        style={{ width: rem(12), height: rem(12) }}
                        stroke={5}
                        color='black'
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


                <Group className={classes.controls}>
                  <Button
                    variant='outline'
                    size="sm"
                    className={classes.control}
                    color="rgba(0, 0, 0, 1)"
                  >
                    Get started
                  </Button>

                  <Button
                    component="a"
                    variant='outline'
                    href="https://github.com/mantinedev/mantine"
                    color="rgba(0, 0, 0, 1)"
                    className={classes.control}
                    leftSection={<GithubIcon size={20} />}
                  >
                    GitHub
                  </Button>
                </Group>

              </div>

              <Lottie loop={true} animationData={mainimg} size='xl' className={classes.image} data-aos="fade-up" />
            </div>
          </Container>

        </Box>
      </section>

      <FeaturesCards />

      <Faqsection />

      <HeroBullet />
      <HeroBullet2 />

      <Testimonial />

      <Footer />
    </>
  )
}

export default page