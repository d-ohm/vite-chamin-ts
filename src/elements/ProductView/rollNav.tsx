import { 
  Box, 
  Button, 
  Drawer, 
  DrawerBody, 
  DrawerContent, 
  DrawerHeader, 
  DrawerOverlay, 
  // Radio, 
  // RadioGroup, 
  // SlideDirection, 
  // Stack, 
  useDisclosure } from "@chakra-ui/react"



function PlacementExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const { isOpen, onClose } = useDisclosure()
  // const [placement, setPlacement] = useState<SlideDirection>("right")


  return (
    <Box >
      {/* <RadioGroup defaultValue={placement} onChange={(val: SlideDirection) => setPlacement(val)}>
        <Stack direction='row' mb='4'>
          <Radio value="top">Top</Radio>
          <Radio value="right">Right</Radio>
          <Radio value="bottom">Bottom</Radio>
          <Radio value="left">Left</Radio>
        </Stack>
      </RadioGroup>
      <Button colorScheme='blue' onClick={onOpen}>
        Open
      </Button> */}
      {/* <Drawer placement={placement} onClose={onClose} isOpen={isOpen}> */}
      <Button colorScheme='blue' onClick={onOpen} mt={450}>
        Open
      </Button>
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default PlacementExample

