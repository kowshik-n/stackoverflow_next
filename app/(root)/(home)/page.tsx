import { useTheme } from "@/context/ThemeProvider";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/"></UserButton>
    </div>
  );
};

export default Home;
