"use client";
import { useEffect, useState } from "react";

// const Timer = () => {
function Timer() {
  // 创建一个状态变量来存储当前时间
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isClient, setIsClient] = useState(false);

  // 使用 useEffect 钩子设置定时器
  useEffect(() => {
    const intervalId = setInterval(() => {
      // 每秒更新一次时间
      setCurrentTime(new Date());
    }, 1000);

    setIsClient(true);
    // 清理定时器，防止内存泄漏
    return () => clearInterval(intervalId);
  }, []);

  // 格式化时间为字符串
  const formattedTime = currentTime.toLocaleTimeString();
  return (
    <div>
      {/* 显示当前时间 */}
      <p className="mb-4 text-gray-600">{isClient ? formattedTime : ""}</p>
    </div>
  );
}

export default Timer;
