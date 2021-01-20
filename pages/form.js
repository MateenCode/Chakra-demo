import {Image, TabPanels, TabPanel, Box, useColorMode, Tabs, Tab, TabList } from "@chakra-ui/core"

import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm'

// Variant changes the way the tabs behave
// mx stand for margin x axis

const form = () => {
        const { colorMode } = useColorMode()
    return (
        <Box w="350px" bg={colorMode === "light" ? "gray.200" : 'gray.600' } p={3} boxShadow="sm" rounded="lg">
        <Image src="./security.png" w="80px" mx="auto" my={6}/>
        <Tabs variant="enclosed-colored" isFitted m={4}>
            <TabList>
                <Tab>Sign Up</Tab>
                <Tab>login</Tab>
            </TabList>
            <TabPanels mt={3}>
                <TabPanel>
                    <SignUpForm />
                </TabPanel>
                <TabPanel>
                    <LoginForm />
                </TabPanel>
            </TabPanels>

        </Tabs>
    </Box>
    )
}

export default form
