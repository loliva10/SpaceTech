import "./Header.css";
import { Link } from "react-router-dom";
import LogoTipo from "../../assets/LogoTipo.png";

export default function Header() {
    const tipoUsuario = localStorage.getItem("tipoUsuario");

    return (
        <header className="header">
            <div className="logo">
                <span className="logo-text">
                    Space Tech
                </span>
            </div>
            <nav className="menu">
                <Link to="/home" className="icone">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M3 10.5L12 3l9 7.5" />
                        <path d="M5 9.5V21h14V9.5" />
                        <path d="M9 21v-6h6v6" />
                    </svg>
                </Link>
                {tipoUsuario === "admin" && (
  <>
    <Link to="/eletronicos" className="icone">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="white" strokeWidth="2">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M12 18h.01" />
        <path d="M9 12h6" />
        <path d="M12 9v6" />
      </svg>
    </Link>
    <Link to="/tipo-eletronicos" className="icone">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="white" strokeWidth="2">
        <path d="M12 2l8 10-8 10-8-10 8-10z" />
        <path d="M12 9v6" />
        <path d="M9 12h6" />
      </svg>
    </Link>
  </>
)}
                <Link to="/buscar" className="icone">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </Link>
                <Link to="/conta" className="icone">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                </Link>
            </nav>
        </header>
    );
}