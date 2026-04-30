import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MemoizedComponent from "./learn-hooks/MemoizedComponent.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MemoizedComponent />
  </StrictMode>,
);
