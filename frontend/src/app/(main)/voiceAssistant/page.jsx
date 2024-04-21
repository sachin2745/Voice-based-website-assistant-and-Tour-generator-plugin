'use client'
import { Title } from '@mantine/core'
import React from 'react'
import { Audio, ThreeDots, Vortex } from 'react-loader-spinner'
import classes from './voiceAssistant.module.css'

const page = () => {
  return (
    <div ><Title order={1} className={classes.Title}>Voice Assistant
    </Title><Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="white"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />

    </div>

  )
}

export default page