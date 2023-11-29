import { auth } from "@clerk/nextjs";
import { notFound, redirect } from "next/navigation";
import { PropsWithChildren } from "react";

import { db } from "@/lib/db";
import { BoardNavbar } from "./_components/board-navbar";

export async function generateMetadata({ params }: { params: { boardId: string } }) {
   const { orgId } = auth();
   if (!orgId) return { title: "Board" };
   const board = await db.board.findUnique({
      where: {
         id: params.boardId,
         orgId,
      },
   });

   return {
      title: board?.title || "Board",
   };
}

const BoardIdLayout = async ({
   children,
   params,
}: PropsWithChildren<{ params: { boardId: string } }>) => {
   const { orgId } = auth();

   if (!orgId) return redirect("/select-org");

   const board = await db.board.findUnique({
      where: {
         id: params.boardId,
         orgId,
      },
   });

   if (!board) {
      notFound();
   }

   return (
      <div
         style={{ backgroundImage: `url(${board.imageFullUrl})` }}
         className="relative h-full bg-no-repeat bg-cover bg-center"
      >
         <BoardNavbar data={board} />
         <div className="absolute inset-0 bg-black/10" />
         <main className="relative h-full pt-28">{children}</main>
      </div>
   );
};

export default BoardIdLayout;
