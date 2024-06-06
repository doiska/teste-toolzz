import { Button } from "@/components/ui/button.tsx";
import { ToolzLogo } from "@/components/icons/toolz-logo.tsx";
import {
  FaApple,
  FaFacebook,
  FaTwitter
} from "react-icons/fa6";


const thirdParties = [
  {
    name: "Toolzz",
    icon: ToolzLogo,
    url: "toolzz"
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "facebook"
  },
  {
    name: "Apple",
    icon: FaApple,
    url: "apple"
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "twitter"
  }
];

export function ThirdPartyLogin() {
  return (
      <div className="flex gap-4 justify-between">
        {thirdParties.map(({ url, icon: Icon }) => (
            <Button key={url} asChild={true} size="icon" variant="outline" className="w-full text-xl p-6 lg:p-0">
              <a href={`/oauth/${url}`}>
                <Icon />
              </a>
            </Button>
        ))}
      </div>
  )
}
