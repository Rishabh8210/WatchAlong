import { IMessage } from '@/components/CreateRoom-Component/ChatScreen';
import { useRef, useEffect } from 'react'

export const useChatScroll = (message:IMessage[]) => {
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if(ref.current){
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [message])
  
  return ref
}