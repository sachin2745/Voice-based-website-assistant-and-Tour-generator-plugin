import { Button } from "@mantine/core"
import { TwitterIcon } from "@mantinex/dev-icons"
import { IconBrandFacebook } from "@tabler/icons-react"
import Link from "next/link"

export function TwitterButton(props) {
  return (
    <Button
      leftSection={
        <TwitterIcon
          style={{ width: "1rem", height: "1rem" }}
          color="#00ACEE"
        />
        
      }
      variant="default" component={Link} href=""
      {...props}
    />
  )
}
