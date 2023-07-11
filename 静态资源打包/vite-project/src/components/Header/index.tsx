import React, { useEffect } from "react";
import { devDependencies } from "../../../package.json";
import styles from "./index.module.scss";
// 1. 导入图片
import logoSrc from "@assets/imgs/vite.png";

// 方式一
export function Header() {
  return (
    <div className={`p-20px text-center ${styles.header}`}>
      <h1 className="font-bold text-2xl mb-4">
        {" "}
        vite version: {devDependencies.vite}
      </h1>

      <img className="m-auto mb-4" src={logoSrc} alt="" />
    </div>
  );
}
