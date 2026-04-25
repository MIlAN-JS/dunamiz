import { useState, useEffect } from "react";
import {
  GiCrossedSwords,
  GiFireShield,
  GiTrophyCup,
} from "react-icons/gi";
import {
  IoGameController,
  IoNotifications,
  IoChatbubbleEllipses,
  IoPeople,
} from "react-icons/io5";
import { HiUser } from "react-icons/hi2";
import { RiSwordFill } from "react-icons/ri";
import { useNavigate } from "react-router";

const TABS = [
  {
    id: "matchfeed",
    label: "Match Feed",
    icon: <GiCrossedSwords size={22} />,
    activeColor: "text-orange-400",
    glowColor: "shadow-orange-500/60",
    to : "/match-feed"
  },
//   {
//     id: "friends",
//     label: "Squad",
//     icon: <IoPeople size={22} />,
//     activeColor: "text-cyan-400",
//     glowColor: "shadow-cyan-500/60",
//   },
];

const BinduLogo = () => (
  <div className="flex items-center gap-2 select-none">
    {/* Geometric logo mark */}
    <div className="relative w-9 h-9 flex items-center justify-center">
      {/* Outer rotating hexagon-ish */}
      <div
        className="absolute inset-0 rounded-sm rotate-45 border-2 border-orange-500/80"
        style={{
          background:
            "linear-gradient(135deg, rgba(251,107,7,0.15) 0%, rgba(220,38,38,0.15) 100%)",
        }}
      />
      <div
        className="absolute inset-[3px] rounded-sm rotate-45 border border-red-700/50"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(30,5,5,0.9) 100%)",
        }}
      />
      <RiSwordFill
        size={17}
        className="relative z-10 text-orange-400 drop-shadow-[0_0_6px_rgba(251,107,7,0.9)]"
      />
    </div>

    {/* Wordmark */}
    <div className="flex flex-col leading-none">
      <span
        className="text-[17px] font-black tracking-[0.18em] uppercase text-white"
        style={{
          fontFamily: "'Oswald', 'Impact', sans-serif",
          textShadow: "0 0 18px rgba(251,107,7,0.6)",
          letterSpacing: "0.2em",
        }}
      >
        BINDU
      </span>
      <span
        className="text-[7px] tracking-[0.35em] uppercase text-orange-500/90 font-semibold"
        style={{ fontFamily: "'Oswald', sans-serif" }}
      >
        BATTLEGROUND
      </span>
    </div>
  </div>
);

const SearchBar = () => {
  const [focused, setFocused] = useState(false);
  return (
    <div
      className={`relative hidden md:flex items-center gap-2 px-3 h-9 rounded-sm border transition-all duration-300 ${
        focused
          ? "border-orange-500/70 bg-orange-500/5 shadow-[0_0_12px_rgba(251,107,7,0.2)]"
          : "border-white/10 bg-white/5"
      }`}
      style={{ minWidth: 180, maxWidth: 240 }}
    >
      <GiTrophyCup
        size={13}
        className={`transition-colors duration-300 ${
          focused ? "text-orange-400" : "text-white/30"
        }`}
      />
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Search players..."
        className="bg-transparent text-[13px] text-white/80 placeholder-white/25 outline-none w-full"
        style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em" }}
      />
    </div>
  );
};

const NavTab = ({ tab, active, onClick }) => (
  <button
    onClick={() => onClick(tab.id)}
    className="relative flex flex-col items-center gap-[3px] px-5 py-1 group transition-all duration-200 outline-none"
    aria-label={tab.label}
  >
    {/* Icon */}
    <span
      className={`transition-all duration-200 ${
        active
          ? `${tab.activeColor} drop-shadow-[0_0_8px_currentColor] scale-110`
          : "text-white/40 group-hover:text-white/70 group-hover:scale-105"
      }`}
    >
      {tab.icon}
    </span>

    {/* Label */}
    <span
      className={`text-[9px] uppercase tracking-[0.12em] font-bold transition-colors duration-200 ${
        active ? tab.activeColor : "text-white/25 group-hover:text-white/50"
      }`}
      style={{ fontFamily: "'Oswald', sans-serif" }}
    >
      {tab.label}
    </span>

    {/* Active underline bar */}
    <span
      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 ${
        active ? "w-8 opacity-100" : "w-0 opacity-0"
      } ${tab.id === "matchfeed" ? "bg-orange-400" : "bg-cyan-400"}`}
      style={{
        boxShadow:
          tab.id === "matchfeed"
            ? "0 0 8px rgba(251,107,7,0.8)"
            : "0 0 8px rgba(34,211,238,0.8)",
      }}
    />
  </button>
);

const IconBtn = ({ icon, label, badge, onClick, color = "text-white/60" }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-center justify-center w-9 h-9 rounded-sm group transition-all duration-200 outline-none"
      style={{
        background: hovered ? "rgba(255,255,255,0.06)" : "transparent",
        border: hovered ? "1px solid rgba(255,255,255,0.1)" : "1px solid transparent",
      }}
      aria-label={label}
      title={label}
    >
      <span
        className={`transition-all duration-200 ${color} ${
          hovered ? "scale-110 brightness-150" : ""
        }`}
      >
        {icon}
      </span>

      {/* Badge */}
      {badge > 0 && (
        <span
          className="absolute -top-1 -right-1 min-w-[16px] h-4 px-[3px] flex items-center justify-center rounded-sm text-[9px] font-black text-white bg-red-600 border border-black/50"
          style={{
            fontFamily: "'Oswald', sans-serif",
            boxShadow: "0 0 6px rgba(220,38,38,0.7)",
          }}
        >
          {badge > 9 ? "9+" : badge}
        </span>
      )}

      {/* Tooltip */}
      <span
        className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[9px] tracking-widest uppercase text-white/50 whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ fontFamily: "'Oswald', sans-serif" }}
      >
        {label}
      </span>
    </button>
  );
};

const ProfileAvatar = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-9 h-9 rounded-sm overflow-hidden outline-none transition-all duration-200"
      style={{
        border: hovered
          ? "2px solid rgba(251,107,7,0.9)"
          : "2px solid rgba(255,255,255,0.15)",
        boxShadow: hovered ? "0 0 14px rgba(251,107,7,0.5)" : "none",
      }}
      aria-label="Profile"
      title="Profile"
    >
      {/* FF-style avatar placeholder */}
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, #1a0a0a 0%, #2d1200 50%, #0a0a1a 100%)",
        }}
      >
        <HiUser size={20} className="text-orange-400/80" />
        {/* "Online" indicator */}
        <span
          className="absolute bottom-[2px] right-[2px] w-2 h-2 rounded-full bg-green-400 border border-black"
          style={{ boxShadow: "0 0 6px rgba(74,222,128,0.8)" }}
        />
      </div>
    </button>
  );
};

// Animated scan line for the navbar background
const ScanLine = () => (
  <div
    className="absolute inset-0 pointer-events-none overflow-hidden"
    style={{ zIndex: 0 }}
  >
    <div
      className="absolute left-0 right-0 h-[1px] opacity-20"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, rgba(251,107,7,0.6) 30%, rgba(251,107,7,0.9) 50%, rgba(251,107,7,0.6) 70%, transparent 100%)",
        animation: "scanline 3.5s ease-in-out infinite",
        top: "50%",
      }}
    />
  </div>
);

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("matchfeed");
  const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate()
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const handleTabClick = (to) => {
  setActiveTab(to);
  // Add your logic to handle tab click
   navigate(to)
};

  return (
    <>
      {/* Load Oswald font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700;900&display=swap');

        @keyframes scanline {
          0%, 100% { transform: translateY(-200%); opacity: 0; }
          20% { opacity: 0.25; }
          50% { transform: translateY(200%); opacity: 0.15; }
          80% { opacity: 0; }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        .bindu-navbar {
          background: linear-gradient(
            180deg,
            rgba(8, 5, 3, 0.98) 0%,
            rgba(14, 7, 3, 0.97) 100%
          );
        }

        .bindu-navbar::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.012) 2px,
            rgba(255,255,255,0.012) 4px
          );
          pointer-events: none;
        }

        .corner-cut {
          clip-path: polygon(8px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 8px);
        }
      `}</style>

      <nav
        className="bindu-navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 relative p-2  justify-between "
        style={{
          borderBottom: scrolled
            ? "1px solid rgba(251,107,7,0.25)"
            : "1px solid rgba(255,255,255,0.06)",
          boxShadow: scrolled
            ? "0 4px 30px rgba(0,0,0,0.8), 0 1px 0 rgba(251,107,7,0.12)"
            : "0 2px 20px rgba(0,0,0,0.5)",
        }}
      >
        <ScanLine />

        {/* Orange accent line at very top */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(251,107,7,0.5) 20%, rgba(251,107,7,0.9) 50%, rgba(251,107,7,0.5) 80%, transparent 100%)",
            animation: "pulse-glow 2.5s ease-in-out infinite",
          }}
        />

        <div
          className="relative z-10 mx-auto flex items-center justify-between h-[56px] px-3 md:px-5"
          style={{ maxWidth: 1400 }}
        >
          {/* ── LEFT: Logo + Search ── */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <BinduLogo />
            <SearchBar />
          </div>

          {/* ── CENTER: Nav Tabs ── */}
          <div className="flex items-stretch justify-center gap-1 flex-1 h-full">
            {TABS.map((tab) => (
              <NavTab
                key={tab.id}
                tab={tab}
                active={activeTab === tab.id}
                onClick={()=>{
                  handleTabClick(tab.to)
                }}
              />
            ))}
          </div>

          {/* ── RIGHT: Icon Actions ── */}
          <div className="flex items-center gap-1 flex-shrink-0">
            <IconBtn
              icon={<IoChatbubbleEllipses size={20} />}
              label="Messages"
              badge={3}
              color="text-cyan-400/70"
            />
            <IconBtn
              icon={<IoNotifications size={20} />}
              label="Notifications"
              badge={7}
              color="text-orange-400/70"
            />
            <div className="w-[1px] h-6 bg-white/10 mx-1" />
            <ProfileAvatar />
          </div>
        </div>
      </nav>

      
    </>
  );
}