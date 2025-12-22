// src/main.js

// 1. 匯入客製化的 SCSS (Vite 會處理編譯，並將樣式注入到網頁中)
import './custom.scss'

// 2. 匯入 Bootstrap 的 JavaScript 模組
// 啟用所有需要 JS 互動的功能，例如 Navbar 的 RWD 選單收合 (Toggler)
import * as bootstrap from 'bootstrap' 

// 移除 Vite 模板中不必要的計數器、Logo 圖片和範例 HTML 注入邏輯
// 網頁內容現在由 index.html 直接提供。

// 未來可以將文藻小咖啡的特定 JS 邏輯放在這裡
// 例如：
// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))