import { useEffect, useState } from "react";

function Werewolf() {
  const [isDark, setIsDark] = useState(false);
  const [isWolfWakeUp, setIsWolfWakeup] = useState(false);

  useEffect(() => {
    console.log("render everytime");
  });
  useEffect(() => {
    console.log("render on init");
  }, []);

  useEffect(() => {
    console.log(`status: ${isWolfWakeUp}`);
  }, [isWolfWakeUp]);

  useEffect(() => {
    // if (isDark) {
    //   setIsWolfWakeup(true);
    // } else {
    //   setIsWolfWakeup(false);
    // }
    setIsWolfWakeup(isDark);
  }, [isDark]);

  return (
    <div>
      <p>เวลา: {isDark ? "กลางคืน" : "กลางวัน"}</p>
      <p>หมาป่า: {isWolfWakeUp ? "ตื่น" : "หลับ"}</p>
      <button onClick={() => setIsDark((e) => !e)}>Toggle dark</button>
    </div>
  );
}

export default Werewolf;
