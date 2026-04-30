import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloVariable from "./learn-component/HelloVariable.tsx";
import ConditionalExample from "./learn-component/ConditionalExample.tsx";
import ShowBadge from "./learn-component/ShowBadge.tsx";
import PremiumFeature from "./learn-component/PremiumFeature.tsx";
import UserList from "./learn-component/UserList.tsx";
import DeleteButton from "./learn-component/DeleteButton.tsx";
import MyCard from "./learn-component/MyCard.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelloVariable name="test" age={15} />
    <HelloVariable name="cat" age={20} verify={true} />
    <HelloVariable name="lily" age={25} verify={false} />
    <ConditionalExample isLoggedIn={false} />
    <ConditionalExample isLoggedIn={true} />
    <ShowBadge />
    <ShowBadge badge={""} />
    <ShowBadge badge={"sale"} />
    <PremiumFeature isPremium={true} />
    <PremiumFeature isPremium={false} />
    <UserList
      users={[
        { id: 1, name: "nicha" },
        { id: 2, name: "meena" },
        { id: 3, name: "tina" },
      ]}
    />
    <DeleteButton
      onDelete={(id: number) => {
        alert(`Deleted id: ${id}`);
      }}
    />
    <MyCard title="Profile" footer={<HelloVariable name="test" age={15} />}>
      <h1>name: Nick</h1>
      <p>age: 17</p>
      <p>type: fox</p>
    </MyCard>
  </StrictMode>,
);
