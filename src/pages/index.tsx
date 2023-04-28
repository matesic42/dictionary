import Header from "../components/Header";
import Info from "@/components/Info";
import { useEffect, useState } from "react";
function App() {


  return (
    <div className="mx-auto mt-8 flex h-screen max-w-screen-lg flex-col items-center justify-start gap-5 px-5">
      <Header   />
      <Info />
    </div>
  );
}

export default App;
