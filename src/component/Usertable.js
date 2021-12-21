import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    Button, ButtonGroup,
    Stack
} from "@chakra-ui/react"

const UserTable = () => {
    return ( 
        <Table variant='striped' colorScheme='teal'>
  <TableCaption>User Table</TableCaption>
  <Thead>
    <Tr>
      <Th>user name</Th>
      <Th>User email</Th>
      <Th>Plan</Th>
      <Th>Action</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>Suman choubey</Td>
      <Td>suman@gmail.com</Td>
      <Td>Basic</Td>
      <Td>
        <Stack direction="row" spacing={4} align="center">
            <Button colorScheme="red" variant="solid">
                 Delete
            </Button>
            <Button colorScheme="purple" variant="solid">
                Edit
             </Button>
         </Stack>
    </Td>
    </Tr>
    <Tr>
      <Td>king</Td>
      <Td>King@gmail.com</Td>
      <Td>Free</Td>
      <Td>
        <Stack direction="row" spacing={4} align="center">
            <Button colorScheme="red" variant="solid">
                Delete
            </Button>
            <Button colorScheme="purple" variant="solid">
                Edit
            </Button>
        </Stack>
    </Td>
    </Tr>
    <Tr>
      <Td>ram</Td>
      <Td>ram@gmail.com</Td>
      <Td>Premium</Td>
      <Td>
        <Stack direction="row" spacing={4} align="center">
            <Button colorScheme="red" variant="solid">
                Delete
            </Button>
            <Button colorScheme="purple" variant="solid">
                Edit
            </Button>
        </Stack>
    </Td>
    </Tr>
    <Tr>
      <Td>Mad max</Td>
      <Td>madmax@gmail.com</Td>
      <Td>Professional</Td>
      <Td>
        <Stack direction="row" spacing={4} align="center">
            <Button colorScheme="red" variant="solid">
                Delete
            </Button>
            <Button colorScheme="purple" variant="solid">
                Edit
            </Button>
    </Stack>
    </Td>
    </Tr>
  </Tbody>
</Table>
     );
}
 
export default UserTable;