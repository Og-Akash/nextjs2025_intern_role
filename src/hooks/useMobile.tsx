import { useSidebar } from "@/context/SidebarContext"
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)
  const {setExpanded} = useSidebar()

  React.useEffect(() => {
    const cheeckIsMobile = () => {
      const checkIsMobile = window.innerWidth < MOBILE_BREAKPOINT
      setIsMobile(checkIsMobile)

      if(checkIsMobile) {
        setExpanded(false)
      }
    }

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => cheeckIsMobile()
  
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}