import { useState } from 'react'
import TextInput from '../TextInput'
import { typeStatus } from '../../@types/typeStatus'
import Button from '../Button'
import { Main } from './styles'

export default function SearchContainer() {
  const [inputStatus, setInputStatus] = useState<typeStatus>('normal')
  return (
    <Main>
      <TextInput
        placeholder="Search for a transaction"
        width="100%"
        inputStatus={inputStatus}
        onFocus={() => setInputStatus('selected')}
        onBlur={() => setInputStatus('normal')}
      />
      <Button isSearch>Search</Button>
    </Main>
  )
}
