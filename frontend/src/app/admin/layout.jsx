'use client';
import React from 'react'
import AdminNavbar from './navbar'
import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import Sidebar from './sidebar';

const Layout = ({ children }) => {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: { base: 60, md: 70, lg: 80 } }}
            navbar={{
                width: { base: 200, md: 300, lg: 400 },
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <AdminNavbar />
            </AppShell.Header>
            <AppShell.Navbar p="md">
            <Sidebar/>

            </AppShell.Navbar>
            <AppShell.Main> {children}</AppShell.Main>
        </AppShell>
    );
}

export default Layout