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
import classes from './signup.module.css';
import cx from 'clsx';
import { MantineProvider, Container, createTheme } from '@mantine/core';
import Link from 'next/link';
import { BackgroundImage, Center, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';





export function SignUp() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      termsOfService: false,

    },

    validate: {
      name: (value) => (value.length < 5 ? 'Name must have at least 5 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length <= 8 ? 'Password should include at least 8 characters' : null),
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,

    },
  });



  return (

    <Box mx="auto" >
      <BackgroundImage
        src="https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg"
        radius="md"
        
      >
        <Center p="md">
          <Container mt={10} w={800} fluid>
            <Paper withBorder shadow="md"  mt={30} radius="md" p="xl" withBorder className={classes.Paper}>
              <Title className={classes.title} >
                Welcome to Mantine</Title>
              <Text className={classes.text}>SignUp with</Text>

              <Group grow mb="md" mt="md">
                <GoogleButton radius="xl" variant="outline" color="rgba(0, 0, 0, 1)">Google</GoogleButton>
                <TwitterButton radius="xl" variant="outline" color="rgba(0, 0, 0, 1)">Twitter</TwitterButton>
              </Group>

              <Divider label={
                <p style={{ color: 'blue' }}>Or continue with email</p>
              }
                labelPosition="center" my="lg" />

              <form onSubmit={form.onSubmit((values) => console.log(values))}>

                <TextInput label="Name" placeholder="Full Name"  {...form.getInputProps('name')} />

                <TextInput withAsterisk label="Email" placeholder="your@email.com"
                  {...form.getInputProps('email')} required mt="md" />

                <PasswordInput label="Password"
                  placeholder="Your password"
                  value={form.values.password}
                  onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                  error={form.errors.password && 'Password should include at least 8 characters'}
                  mt="md"
                  {...form.getInputProps('password')}
                  required />
                <PasswordInput
                  mt="sm"
                  label="Confirm password"
                  placeholder="Confirm password"
                  {...form.getInputProps('confirmPassword')}
                  mt='md'
                  required
                />


                <Group justify="space-between" mt="lg">
                  <Checkbox label="I accept the Terms of Use & Privacy Policy"
                    checked={form.values.terms}
                    {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                  />

                </Group>
                <Group justify="space-between" mt="xl">
                  <Anchor component={Link} underline="hover" type="button" c="dimmed" href="/login" size="xs">
                    Already have an account? Login here
                  </Anchor>
                  <Button type="submit" variant="outline" color="rgba(0, 0, 0, 1)"
                  >
                    Sign Up
                  </Button>
                </Group>
              </form>
            </Paper>
          </Container>
        </Center>
      </BackgroundImage>
    </Box>

  )
}

export default SignUp;