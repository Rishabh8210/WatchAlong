import { useRef, useEffect } from 'react'

export const useChatScroll = (message:any[]) => {
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if(ref.current){
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [message])
  
  return ref
}