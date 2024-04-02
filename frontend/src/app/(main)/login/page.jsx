'use client'
import React from 'react';
import { useToggle, upperFirst } from "@mantine/hooks"
import { Form, useForm } from "@mantine/form"
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Title
} from "@mantine/core"
import { GoogleButton } from "./GoogleButton"
import { TwitterButton } from "./TwitterButton"
import classes from './login.module.css';
import cx from 'clsx';
import { MantineProvider, Container, createTheme } from '@mantine/core';
import Link from 'next/link';
import { BackgroundImage, Center, Box } from '@mantine/core';


const theme = createTheme({
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer]: size === 'responsive' }),
      }),
    }),
  },
});


export function Login() {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      terms: true,

    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length <= 8 ? 'Password should include at least 8 characters' : null),

    },
  });



  return (
    <MantineProvider theme={theme} >
      <Box mx="auto" >
        <BackgroundImage src=''
          radius="md">
          

          <Center p="md">
            <Container size="responsive" mt={20} w={700} >
              <Paper withBorder shadow="md" p={30} mt={30} mb={30} radius="md" withBorder className={classes.Paper}>
                <Title className={classes.title} >
                  Welcome to VoiceTour Navigator</Title>
                <Text className={classes.text}>Login with</Text>

                <Group grow mb="md" mt="md" >
                  <GoogleButton radius="xl" variant="outline"  className={classes.Button}>Google</GoogleButton>
                  <TwitterButton radius="xl" variant="outline"  className={classes.Button}>Facebook</TwitterButton>
                </Group>

                <Divider label={
                  <p style={{ color: 'grey' }}>Or continue with email</p>
                } labelPosition="center" my="lg" color='white' />

                <form onSubmit={form.onSubmit((values) => console.log(values))}>

                  <TextInput withAsterisk label="Email" placeholder="your@email.com"
                    {...form.getInputProps('email')} required />
                  <PasswordInput label="Password"
                    placeholder="Your password"
                    value={form.values.password}
                    onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                    error={form.errors.password && 'Password should include at least 8 characters'}
                    required mt="md" />

                  <Group justify="space-between" mt="lg">
                    <Checkbox label="Remember me"
                      checked={form.values.terms}
                      onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                    />
                    <Anchor component={Link} href="/resetPassword" size="sm">
                      Forgot password?
                    </Anchor>
                  </Group>
                  <Group justify="space-between" mt="xl">
                    <Anchor component={Link} underline="hover" c="dimmed" href="/signup" size="xs">
                      Don't have an account? Register
                    </Anchor>
                    <Button type="submit" variant="outline" className={classes.Button}
                    >
                      Login
                    </Button>
                  </Group>
                </form>
              </Paper>
              <img src="loginimg.svg" alt="" className={classes.image} />
            </Container>
            
          </Center>
          
        </BackgroundImage>
      </Box>
    </MantineProvider>
  )
}

export default Login;