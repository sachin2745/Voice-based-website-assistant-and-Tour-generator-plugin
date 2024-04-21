'use client'
import { Container, Title } from '@mantine/core'
import React from 'react'
import { Audio, Bars, ThreeDots, Vortex } from 'react-loader-spinner'
import classes from './voiceAssistant.module.css'

const page = () => {
  return (
    <div >
      <Container className={classes.Container}>
        <Title order={1} className={classes.Title}>Voice Assistant
        </Title><Audio
          height="80"
          radius="9"
          color="white"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
          wrapperClass

        />
        <ThreeDots
          visible={true}
          color="white"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
          wrapperClass=""
        />
        <Bars
          height="80"
          width="80"
          color="white"
          ariaLabel="bars-loading"
          wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
          wrapperClass=""
          visible={true}
        />
      </Container>
    </div>

  )
}

export default page