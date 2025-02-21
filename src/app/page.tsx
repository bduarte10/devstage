import { Button } from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { ArrowRight, Mail } from 'lucide-react'

export default function Home() {
  return (
    <main>
      <InputRoot>
        <InputIcon>
          <Mail />
        </InputIcon>
        <InputField placeholder="Type your message..." />
      </InputRoot>
      <Button>
        Enviar
        <ArrowRight />
      </Button>
    </main>
  )
}
