'use client'
import React from 'react';
import { useToggle, upperFirst } from "@mantine/hooks"
import { useForm } from "@mantine/form"
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
  Stack
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


export function Login(props) {

  const [type, toggle] = useToggle(["login", "register"])
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true
    },

    validate: {
      email: val => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: val =>
        val.length <= 6 ? "Password should include at least 6 characters" : null
    }
  })



  return (
    <MantineProvider theme={theme} >
      <Box mx="auto" >
        <BackgroundImage
          src="https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg"
          radius="md"
          h={700}
        >
          <Center p="md">
            <Container size="responsive"  mt={100} h={700} w={700} >
              <Paper radius="md" p="xl" withBorder {...props}  className={classes.Paper}>
                <Text size="lg" fw={500}>
                  Welcome to Mantine, {type} with
                </Text>

                <Group grow mb="md" mt="md">
                  <GoogleButton radius="xl" variant="outline" color="rgba(0, 0, 0, 1)">Google</GoogleButton>
                  <TwitterButton radius="xl" variant="outline" color="rgba(0, 0, 0, 1)">Twitter</TwitterButton>
                </Group>

                <Divider label="Or continue with email" labelPosition="center" my="lg" />

                <form onSubmit={form.onSubmit(() => { })}>
                  <Stack>
                   

                    <TextInput
                      required
                      label="Email"
                      placeholder="hello@mantine.dev"
                      value={form.values.email}
                      onChange={event =>
                        form.setFieldValue("email", event.currentTarget.value)
                      }
                      error={form.errors.email && "Invalid email"}
                      radius="md"
                      variant="filled"
                    />

                    <PasswordInput
                      required
                      label="Password"
                      placeholder="Your password"
                      value={form.values.password}
                      onChange={event =>
                        form.setFieldValue("password", event.currentTarget.value)
                      }
                      error={
                        form.errors.password &&
                        "Password should include at least 6 characters"
                      }
                      radius="md"
                    />

                    
                  </Stack>

                  <Group justify="space-between" mt="xl">
                    <Anchor component={Link} underline="hover" type="button" c="dimmed" href="/signup" size="xs">
                      Don't have an account? Register
                    </Anchor>
                    <Button type="submit"  variant="outline" color="rgba(0, 0, 0, 1)"
                    >
                      {upperFirst(type)}
                    </Button>
                  </Group>
                </form>
              </Paper>
            </Container>
          </Center>
        </BackgroundImage>
      </Box>
    </MantineProvider>
  )
}

export default Login;