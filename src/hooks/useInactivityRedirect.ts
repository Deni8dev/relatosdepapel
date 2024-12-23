import { useNavigate } from 'react-router'
import { useEffect, useRef, useState } from 'react'

const USER_EVENTS = ['mousemove', 'keydown', 'click', 'scroll']

export function useInactivityRedirect(
  redirectPath: string,
  inactivityLimit = 5000,
  onCountdown: (time: number) => void
) {

  const navigate = useNavigate()
  const redirectTimerRef = useRef<number | undefined>(undefined)
  const countdownTimerRef = useRef<number | undefined>(undefined)
  const [remainingTime, setRemainingTime] = useState(inactivityLimit)

  useEffect(() => {

    const resetTimers = () => {
      if (redirectTimerRef.current) clearTimeout(redirectTimerRef.current)
      if (countdownTimerRef.current) clearInterval(countdownTimerRef.current)

      setRemainingTime(inactivityLimit)

      countdownTimerRef.current = setInterval(() => {
        setRemainingTime(prev => {
          const time = prev - 1000
          if (onCountdown) onCountdown(time)
          return time > 0 ? time : 0
        })
      }, 1000)

      redirectTimerRef.current = setTimeout(() => {
        clearInterval(countdownTimerRef.current)
        void navigate(redirectPath)
      }, inactivityLimit)
    }

    const handleUserActivity = () => resetTimers()

    USER_EVENTS.forEach(event => window.addEventListener(event, handleUserActivity))

    // Start the initial timers
    resetTimers()

    return () => {
      USER_EVENTS.forEach(event => window.removeEventListener(event, handleUserActivity))
      if (redirectTimerRef.current) clearTimeout(redirectTimerRef.current)
      if (countdownTimerRef.current) clearInterval(countdownTimerRef.current)
    }
  }, [navigate, redirectPath, inactivityLimit, onCountdown])

  return remainingTime
}
