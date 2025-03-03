"use client";
import React, { useState, useEffect } from "react";

const WindowSize = () => {
  // 创建状态变量来存储窗口的宽度和高度
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [windowHeight, setWindowHeight] = useState<number>(
    typeof window !== "undefined" ? window.innerHeight : 0
  );

  useEffect(() => {
    // 定义一个函数来更新窗口大小
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    // 监听窗口的 resize 事件
    window.addEventListener("resize", handleResize);

    // 初始化窗口大小
    handleResize();

    // 清理函数，在组件卸载时移除事件监听器
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <p className="mb-4 text-gray-600">
      窗口宽度: {windowWidth}px, 窗口高度: {windowHeight}px
    </p>
  );
};

export default WindowSize;
