import React, { useState } from 'react'
import { Button, FieldLabel, FieldRoot } from '@chakra-ui/react'
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
    DialogActionTrigger
  } from "./components/ui/dialog"

import { Input, Textarea } from '@chakra-ui/react'

function NewEntry({method}) {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const handleSubmit = () => {
    method(prev => [...prev, {'title':title, 'desc':desc}]);
    setTitle('');
    setDesc('');
  }

  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button variant="surface" colorPalette={'teal'} size="sm" marginLeft={'auto'}>
          Add
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Todo</DialogTitle>
        </DialogHeader>
        <DialogBody>
            <FieldRoot>
                <FieldLabel>Title</FieldLabel>
                <Input value={title} onChange={e=>setTitle(e.target.value)}/>
            </FieldRoot>
            <FieldRoot mt={4}>
                <FieldLabel>Description</FieldLabel>
                <Textarea rows={4} value={desc} onChange={e=>setDesc(e.target.value)}/>
            </FieldRoot>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogActionTrigger>
          <DialogActionTrigger asChild>
            <Button onClick={handleSubmit}>Save</Button>
          </DialogActionTrigger>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}

export default NewEntry