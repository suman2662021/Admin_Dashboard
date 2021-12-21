import React from 'react'
import UserTable from './Usertable'
import Adminnavbar from './adminnavbar'
import { Box, Heading, } from '@chakra-ui/react'

export default function admin() {
    return (
        <Box p={4}>
            <Adminnavbar />
            <Heading textAlign={'center'} >ADMIN</Heading>
            <Box m={4}>
                <UserTable />
            </Box>
        </Box >
    )
}
