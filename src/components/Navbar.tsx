import { ArrowRight, Link } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <link href="/" className="flex-z-40 font-semibold">
            <span>quill.</span>
          </link>
          {/** To do: add Mobile navbar */}
          <div className="hidden items-center space-x-4 sm:flex"> </div>
          <>
            <Link
              href="/pricing"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              {" "}
            </Link>
            <LoginLink
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              {" "}
              Sign in
            </LoginLink>
            <RegisterLink
              className={buttonVariants({
                size: "sm",
              })}
            >
              {" "}
              Get Started{" "}<ArrowRight className="ml-1.5 h-5 w-5"></ArrowRight>
            </RegisterLink>
            
          </>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
export default Navbar;
