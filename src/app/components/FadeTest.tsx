'use client'
import React from 'react'
import { ChakraProvider, Fade, useDisclosure, Button, Box } from '@chakra-ui/react';

const FadeTest = () => {
    
        const { isOpen, onToggle } = useDisclosure()
      
        return (
          <>
            <Button onClick={onToggle}>Click Me</Button>
            <Fade in={false}>
              <Box
                p='40px'
                color='white'
                mt='4'
                bg='teal.500'
                rounded='md'
                shadow='md'
              >
                Fade
              </Box>
            </Fade>
          </>
        )
      
}

export default FadeTest