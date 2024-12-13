import { SiderBar, TopMenu } from "@/components";
import React from "react";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      <SiderBar />
      <div className="px-0 sm:px-10">{children}</div>
    </main>
  );
}
