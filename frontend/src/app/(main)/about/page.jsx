import React from 'react'
import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './about.module.css';

export function About() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner} >
        <Title className={classes.title}>
          ABOUT{' '}
          <Text component="span" inherit className={classes.highlight}>
            US
          </Text>
        </Title>

       
        
      </div>
    </div>
  )
}

export default About;