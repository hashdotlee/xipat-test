import { createRoot } from "react-dom/client";
import App from "./app";
import "./global.css";
import 'react-day-picker/dist/style.css';

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
