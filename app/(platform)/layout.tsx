import { PropsWithChildren } from "react";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/components/providers/modal-provider";
import { QueryProvider } from "@/components/providers/query-provider";

const PlatformLayout = ({ children }: PropsWithChildren) => {
   return (
      <ClerkProvider>
         <QueryProvider>
            <Toaster />
            <ModalProvider />
            {children}
         </QueryProvider>
      </ClerkProvider>
   );
};

export default PlatformLayout;
