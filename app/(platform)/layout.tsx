import { PropsWithChildren } from "react";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";

const PlatformLayout = ({ children }: PropsWithChildren) => {
   return (
      <ClerkProvider>
         <Toaster />
         {children}
      </ClerkProvider>
   );
};

export default PlatformLayout;
