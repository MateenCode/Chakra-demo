import {
    FormHelperText,
    Stack,
    Input,
    FormControl,
    InputLeftElement,
    Icon,
    InputGroup,
    Button,
    Divider,
  } from "@chakra-ui/core";
  
  // FormControll allow you to control what is required and was it disabled
  // InputGroups puts icons and input field together
  
  const SignUpForm = () => {
    return (
      <form action="submit">
        <Stack spacing={4}>
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement children={<Icon name="info" />} />
              <Input
                type="name"
                placeholder="First name"
                aria-label="First name"
              />
            </InputGroup>
          </FormControl>
  
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement children={<Icon name="info" />} />
              <Input type="name" placeholder="Last name" aria-label="Last name" />
            </InputGroup>
          </FormControl>
  
          <Divider borderColor="gray.300" />
  
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement children={<Icon name="email" />} />
              <Input type="email" placeholder="Email" aria-label="Email" />
            </InputGroup>
          </FormControl>
  
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement children={<Icon name="lock" />} />
              <Input
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
            </InputGroup>
          </FormControl>
  
          <Button
            type="submit"
            variant="solid"
            variantColor="red"
            boxShadow="sm"
            _hover={{ boxShadow: "md" }}
            _active={{ boxShadow: "lg" }}
          >
            Sign Up!
          </Button>
          <FormHelperText textAlign="center">
            We will never share your email!
            <br />
            👏
          </FormHelperText>
        </Stack>
      </form>
    );
  };
  
  export default SignUpForm;
  