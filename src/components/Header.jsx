import React, { useState, useEffect } from "react";
import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useSiteData } from "../hooks/useSiteData";
import {
  Phone,
  Lock,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Award,
  BookOpen,
  Users,
  User,
  Activity,
  PlayCircle,
  Home,
  BookMarked,
  GraduationCap,
  Sparkles,
  Trophy,
  Newspaper,
  Handshake,
  PhoneCall,
  Compass,
  IndianRupee,
  ClipboardList,
  FileText,
  Globe,
  Music,
  Palette,
} from "lucide-react";

export default function Header() {
  const [isHeaderScrolled, setIsHeaderScrolled] =
    useState(false);
  const [isHeaderHidden, setIsHeaderHidden] =
    useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const { schools } = useSiteData();

  // 1. Detect if we are in a school route context
  const match = location.pathname.match(
    /^\/school\/([^/]+)/,
  );
  const schoolId =
    match && schools[match[1]] ? match[1] : null;
  const currentSchool = schoolId ? schools[schoolId] : null;

  // Active link helper calculations
  const isCampusActive =
    schoolId &&
    location.pathname === `/school/${schoolId}/campus`;
  const isLeadershipActive =
    schoolId &&
    (location.pathname.startsWith(
      `/school/${schoolId}/principal-desk`,
    ) ||
      location.pathname.startsWith(
        `/school/${schoolId}/leadership`,
      ));
  const isAdmissionsActive =
    schoolId &&
    location.pathname.startsWith(
      `/school/${schoolId}/admissions`,
    );
  const isCurriculumActive =
    schoolId &&
    location.pathname.startsWith(
      `/school/${schoolId}/curriculum`,
    );
  const isHolisticActive =
    schoolId &&
    location.pathname.startsWith(
      `/school/${schoolId}/holistic-learning`,
    );
  const isCounsellingActive =
    schoolId &&
    location.pathname === `/school/${schoolId}/counselling`;
  const isWinningActive =
    schoolId &&
    location.pathname ===
      `/school/${schoolId}/winning-school`;
  const isEditorialsActive =
    schoolId &&
    location.pathname === `/school/${schoolId}/editorials`;

  const isAboutUsActive =
    !schoolId &&
    [
      "/thinking-school",
      "/vision-mission",
      "/management",
      "/parent-partners",
      "/awards",
      "/what-sets-us-apart",
    ].includes(location.pathname);
  const isPedagogyActive =
    !schoolId && location.pathname.startsWith("/pedagogy");
  const isSchoolsActive =
    location.pathname.startsWith("/school/");
  const isWhatSetsUsApartActive =
    !schoolId &&
    location.pathname === "/what-sets-us-apart";
  const isContactActive =
    !schoolId && location.pathname === "/contact";

  // Define dynamic theme configurations based on the selected school
  const theme = currentSchool
    ? currentSchool.theme
    : {
        primary: "brand-greenDeep",
        vibrant: "brand-greenVibrant",
        accent: "brand-gold",
        accentHex: "#C59B27",
      };

  const handleHashClick = (e, hash) => {
    e.preventDefault();
    const targetPath = schoolId
      ? `/school/${schoolId}`
      : "/";
    if (location.pathname === targetPath) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      navigate(targetPath + hash, { replace: true });
    } else {
      navigate(targetPath + hash);
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;
      setScrollProgress(
        docHeight > 0
          ? (currentScrollY / docHeight) * 100
          : 0,
      );

      if (currentScrollY > 50) {
        setIsHeaderScrolled(true);
      } else {
        setIsHeaderScrolled(false);
      }

      if (
        currentScrollY > lastScrollY &&
        currentScrollY > 150
      ) {
        setIsHeaderHidden(true);
      } else {
        setIsHeaderHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const renderOurSchoolsMenu = () => (
    <div className="group py-2 flex flex-col items-center justify-center">
      <button
        className={`relative flex items-center gap-1 hover:text-${!schoolId ? "brand-gold" : theme.vibrant} transition-colors duration-300 cursor-pointer font-semibold ${isSchoolsActive ? (!schoolId ? "text-brand-gold font-bold" : `text-${theme.vibrant} font-bold`) : ""}`}
      >
        Our Schools{" "}
        <ChevronDown
          className={`w-3.5 h-3.5 text-${theme.accent}`}
        />
        {isSchoolsActive && (
          <span
            className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-${!schoolId ? "brand-gold" : theme.vibrant}`}
          ></span>
        )}
      </button>
      {/* ── MASTER SITE: side-by-side visual dropdown with pictures ── */}
      {!schoolId && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 p-5 bg-white border border-gray-150 rounded-2xl shadow-2xl transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0"
          style={{ width: "560px", zIndex: 1000 }}
        >
          <p className="text-[9px] font-extrabold uppercase tracking-widest text-gray-400 mb-3 text-left">
            Our Educational Campuses
          </p>
          <div className="grid grid-cols-2 gap-4">
            {/* Sahibabad Card */}
            <Link
              to="/school/dlf-sahibabad"
              className="group/school-card flex flex-col rounded-xl border border-gray-100 hover:border-brand-greenDeep/30 hover:shadow-md transition-all duration-300 overflow-hidden bg-white text-left"
            >
              <div className="h-28 w-full overflow-hidden relative bg-brand-greenDeep">
                <img
                  src="/DJI_0044.JPG"
                  alt="DLF Public School Sahibabad Campus"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/school-card:scale-105"
                />
                <div className="absolute inset-0 bg-brand-greenDeep/10"></div>
              </div>
              <div className="p-3.5 space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-greenVibrant shrink-0" />
                  <span className="text-[11px] font-extrabold text-brand-greenDeep uppercase tracking-wide">
                    DLF Public School
                  </span>
                </div>
                <p className="text-[9.5px] text-gray-500 font-medium">
                  Sahibabad, Ghaziabad · CBSE Aff. 2130384
                </p>
                <span className="inline-block text-[8px] font-bold uppercase tracking-wider text-brand-greenDeep bg-brand-greenDeep/10 px-2 py-0.5 rounded-full mt-1.5">
                  Flagship Campus
                </span>
              </div>
            </Link>
            {/* Greater Noida Card */}
            <Link
              to="/school/dlf-greater-noida"
              className="group/school-card flex flex-col rounded-xl border border-gray-100 hover:border-brand-purpleDeep/30 hover:shadow-md transition-all duration-300 overflow-hidden bg-white text-left"
            >
              <div className="h-28 w-full overflow-hidden relative bg-brand-purpleDeep">
                <img
                  src="/dlws.jpeg"
                  alt="DLF World School Greater Noida Campus"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/school-card:scale-105"
                />
                <div className="absolute inset-0 bg-brand-purpleDeep/10"></div>
              </div>
              <div className="p-3.5 space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-purpleVibrant shrink-0" />
                  <span className="text-[11px] font-extrabold text-brand-purpleDeep uppercase tracking-wide">
                    DLF World School
                  </span>
                </div>
                <p className="text-[9.5px] text-gray-500 font-medium">
                  Greater Noida · CBSE Aff. 2131920
                </p>
                <span className="inline-block text-[8px] font-bold uppercase tracking-wider text-brand-purpleDeep bg-brand-purpleDeep/10 px-2 py-0.5 rounded-full mt-1.5">
                  World School Campus
                </span>
              </div>
            </Link>
          </div>
        </div>
      )}
      {/* ── SCHOOL SITE: full mega menu ── */}
      {schoolId && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto"
          style={{ width: "1008px", zIndex: 200 }}
        >
          <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300 relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex">
              {/* ── PART 1: Switch Campus (Left Panel) ── */}
              <div className="w-[33.33%] p-5 bg-gray-50 border-r border-gray-100 flex flex-col gap-3">
                <p className="text-[9px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">
                  Switch Campus
                </p>
                {/* DLF Public School card */}
                <Link
                  to="/school/dlf-sahibabad"
                  className={`group/card flex flex-col rounded-xl border bg-white hover:shadow-md transition-all duration-300 overflow-hidden relative ${
                    schoolId === "dlf-sahibabad"
                      ? "border-brand-greenDeep/50 ring-1 ring-brand-greenDeep/10"
                      : "border-gray-100 hover:border-brand-greenDeep/30"
                  }`}
                >
                  <div className="h-20 w-full overflow-hidden relative bg-brand-greenDeep">
                    <img
                      src="/DJI_0044.JPG"
                      alt="DLF Public School Sahibabad Campus"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-greenDeep/10"></div>
                    {schoolId === "dlf-sahibabad" && (
                      <div className="absolute top-2 right-2 bg-brand-greenDeep text-white text-[7px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full shadow-sm">
                        Currently Browsing
                      </div>
                    )}
                  </div>
                  <div className="p-3.5 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-greenVibrant shrink-0" />
                      <span className="text-[11px] font-extrabold text-brand-greenDeep uppercase tracking-wide leading-tight">
                        DLF Public School
                      </span>
                    </div>
                    <p className="text-[9.5px] text-gray-500 pl-4">
                      Sahibabad, Ghaziabad · CBSE Aff.
                      2130384
                    </p>
                    <div className="flex gap-1.5 pl-4 mt-1.5 flex-wrap">
                      {[
                        "Campus",
                        "Admissions",
                        "Curriculum",
                      ].map((lbl) => (
                        <Link
                          key={lbl}
                          to={`/school/dlf-sahibabad/${lbl.toLowerCase()}`}
                          className="text-[9px] bg-brand-greenDeep/10 text-brand-greenDeep hover:bg-brand-greenDeep hover:text-white px-2 py-0.5 rounded-full font-semibold transition-all"
                          onClick={(e) =>
                            e.stopPropagation()
                          }
                        >
                          {lbl}
                        </Link>
                      ))}
                    </div>
                  </div>
                </Link>
                {/* DLF World School card */}
                <Link
                  to="/school/dlf-greater-noida"
                  className={`group/card flex flex-col rounded-xl border bg-white hover:shadow-md transition-all duration-300 overflow-hidden relative ${
                    schoolId === "dlf-greater-noida"
                      ? "border-brand-purpleDeep/50 ring-1 ring-brand-purpleDeep/10"
                      : "border-gray-100 hover:border-brand-purpleDeep/30"
                  }`}
                >
                  <div className="h-20 w-full overflow-hidden relative bg-brand-purpleDeep">
                    <img
                      src="/dlws.jpeg"
                      alt="DLF World School Greater Noida Campus"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-purpleDeep/10"></div>
                    {schoolId === "dlf-greater-noida" && (
                      <div className="absolute top-2 right-2 bg-brand-purpleDeep text-white text-[7px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full shadow-sm">
                        Currently Browsing
                      </div>
                    )}
                  </div>
                  <div className="p-3.5 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-purpleVibrant shrink-0" />
                      <span className="text-[11px] font-extrabold text-brand-purpleDeep uppercase tracking-wide leading-tight">
                        DLF World School
                      </span>
                    </div>
                    <p className="text-[9.5px] text-gray-500 pl-4">
                      Greater Noida · CBSE Aff. 2131920
                    </p>
                    <div className="flex gap-1.5 pl-4 mt-1.5 flex-wrap">
                      {[
                        "Campus",
                        "Admissions",
                        "Curriculum",
                      ].map((lbl) => (
                        <Link
                          key={lbl}
                          to={`/school/dlf-greater-noida/${lbl.toLowerCase()}`}
                          className="text-[9px] bg-brand-purpleDeep/10 text-brand-purpleDeep hover:bg-brand-purpleDeep hover:text-white px-2 py-0.5 rounded-full font-semibold transition-all"
                          onClick={(e) =>
                            e.stopPropagation()
                          }
                        >
                          {lbl}
                        </Link>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
              {/* ── PART 2: Combined Master Links (Right Panel) ── */}
              <div
                className={`w-[66.67%] p-6 ${!schoolId ? "bg-brand-greenDeep" : `bg-${theme.primary}`} text-white flex flex-col justify-between`}
              >
                <div>
                  <p className="text-[9px] font-extrabold uppercase tracking-widest text-brand-gold mb-4">
                    Darbari Lal Foundation Directory
                  </p>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                    {[
                      {
                        label: "Group Home",
                        to: "/",
                        Icon: Home,
                      },
                      {
                        label: "Thinking School",
                        to: "/thinking-school",
                        Icon: BookMarked,
                      },
                      {
                        label: "Vision & Mission",
                        to: "/vision-mission",
                        Icon: Compass,
                      },
                      {
                        label: "Our Pedagogy",
                        to: "/pedagogy",
                        Icon: GraduationCap,
                      },
                      {
                        label: "Our Management",
                        to: "/management",
                        Icon: Users,
                      },
                      {
                        label: "Parents as Partners",
                        to: "/parent-partners",
                        Icon: Handshake,
                      },
                      {
                        label: "School Awards",
                        to: "/awards",
                        Icon: Award,
                      },
                      {
                        label: "Sports Arena",
                        to: "/sports-arena",
                        Icon: Trophy,
                      },
                      {
                        label: "DLF in the News",
                        to: "/news",
                        Icon: Newspaper,
                      },
                      {
                        label: "Alumni Network",
                        to: "/alumni",
                        Icon: Handshake,
                      },
                      {
                        label: "Contact Us",
                        to: schoolId
                          ? `/school/${schoolId}/contact`
                          : "/contact",
                        Icon: PhoneCall,
                      },
                    ].map(
                      ({ label, to, Icon: NavIcon }) => (
                        <Link
                          key={to}
                          to={to}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-white/10 group/link transition-colors duration-200"
                        >
                          <NavIcon className="w-3.5 h-3.5 text-white/60 group-hover/link:text-white transition-colors shrink-0" />
                          <span className="text-[11.5px] font-semibold text-white/90 group-hover/link:text-white transition-colors">
                            {label}
                          </span>
                          <ArrowRight className="w-3 h-3 text-white/40 group-hover/link:text-white group-hover/link:translate-x-0.5 transition-all ml-auto" />
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end animation wrapper */}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Scroll Progress Bar — fixed at very top of viewport */}
      <div className="fixed top-0 left-0 w-full z-[9999] h-[3px] bg-transparent pointer-events-none">
        <div
          className="h-full transition-[width] duration-75 ease-out"
          style={{
            width: `${scrollProgress}%`,
            background: schoolId
              ? `linear-gradient(90deg, ${theme.primary === "brand-greenDeep" ? "#1a5c3a" : "#4a1a6e"}, ${theme.primary === "brand-greenDeep" ? "#2d8a57" : "#7b3db5"})`
              : "linear-gradient(90deg, #C59B27, #e8c060)",
          }}
        />
      </div>

      {/* TOP UTILITY STRIP */}
      <div
        className={`${!schoolId ? "bg-brand-greenDeep" : `bg-${theme.primary}`} text-brand-bg text-[11px] font-inter tracking-wider py-2 relative z-50 overflow-hidden border-b border-white/10`}
      >
        <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 flex justify-between items-center">
          {/* Left Contact Info */}
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar whitespace-nowrap w-full lg:w-auto">
            <Link
              to="/alumni"
              className="flex items-center gap-1.5 shrink-0 text-white hover:text-brand-gold transition-colors duration-300"
            >
              <Users className="w-3.5 h-3.5 text-brand-gold" />
              Alumni
            </Link>
          </div>

          {/* Right Portal Anchors */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0 font-semibold uppercase tracking-widest text-[10px] text-white">
            <Link
              to={schoolId ? `/school/${schoolId}/counselling` : "/counselling"}
              className="hover:text-brand-gold transition-colors duration-300"
            >
              Counselling &amp; Wellness
            </Link>
            <span className="text-white/20">|</span>
            <Link
              to="/news"
              className="hover:text-brand-gold transition-colors duration-300 font-bold text-brand-gold"
            >
              School in News
            </Link>

            {schoolId && (
              <>
                <span className="text-white/20">|</span>
                <a
                  href={
                    schoolId === "dlf-greater-noida"
                      ? "https://forms.edunexttechnologies.com/forms/dlws/recruitment/"
                      : "https://forms.edunexttechnologies.com/forms/dlps/recruitment/"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors duration-300 flex items-center gap-1"
                >
                  Careers ↗
                </a>
                <span className="text-white/20">|</span>
                <a
                  href={
                    schoolId === "dlf-greater-noida"
                      ? "https://www.dlws.edu.in/useful-links"
                      : "https://www.dlps.co.in/useful-links"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors duration-300 flex items-center gap-1"
                >
                  Useful Links ↗
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION BAR */}
      <header
        id="main-header"
        className={`fixed left-0 w-full z-40 transition-all duration-500 py-3 px-4 md:px-12 ${
          isHeaderScrolled ? "top-0" : "top-9"
        }`}
        style={{
          transform: isHeaderHidden
            ? "translateY(-100%)"
            : "translateY(0)",
        }}
      >
        <div
          id="header-inner"
          className={`w-[96%] max-w-[1600px] mx-auto rounded-2xl border px-4 md:px-6 py-2.5 flex items-center justify-between transition-all duration-300 relative ${
            !schoolId
              ? isHeaderScrolled
                ? "bg-brand-greenDeep border-white/10 text-white shadow-lg"
                : "bg-brand-greenDeep/90 backdrop-blur-lg border-white/15 text-white/90 shadow-md"
              : isHeaderScrolled
                ? "bg-white/95 shadow-md border-brand-greenDeep/10 text-brand-charcoal"
                : "bg-brand-bg/90 backdrop-blur-md border-white/20 shadow-sm text-brand-charcoal"
          }`}
        >
          {/* Brand Crest Logo & Text */}
          <Link
            to={schoolId ? `/school/${schoolId}` : "/"}
            className="flex items-center gap-2.5 sm:gap-3 group"
          >
            {!schoolId ? (
              <div className="flex items-center gap-2.5 sm:gap-3">
                {/* Old DLF Crest logo */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-500 overflow-hidden shrink-0 border border-gray-100">
                  <img
                    src="/images/dlf-crest.png"
                    alt="DLF Crest"
                    className="w-full h-full object-contain p-0.5"
                  />
                </div>
                {/* Name in the picture logo */}
                <div className="h-8 sm:h-10 flex items-center justify-center">
                  <img
                    src="/name_in _the_picture.png"
                    alt="Darbari Lal Foundation"
                    className="h-full w-auto object-contain max-h-8 rounded-lg"
                  />
                </div>
              </div>
            ) : (
              <>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-500 overflow-hidden shrink-0 border border-gray-100">
                  <img
                    src="/images/dlf-crest.png"
                    alt="DLF Crest"
                    className="w-full h-full object-contain p-0.5"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] leading-none text-brand-gold">
                    DLF SCHOOL
                  </span>
                  <h1
                    className={`font-serif text-${theme.primary} text-sm sm:text-base md:text-lg font-black uppercase tracking-tight leading-tight mt-1`}
                  >
                    {currentSchool
                      ? currentSchool.name
                      : "DARBARI LAL FOUNDATION"}
                  </h1>
                  <p className="text-[8px] sm:text-[8.5px] text-brand-muted font-inter uppercase tracking-widest font-semibold mt-0.5">
                    {currentSchool
                      ? `${currentSchool.shortLocation} · ${currentSchool.cbseInfo}`
                      : ""}
                  </p>
                </div>
              </>
            )}
          </Link>

          {/* Desktop Nav Menu */}
          <nav
            className={`hidden lg:flex items-center ${schoolId ? "gap-4 xl:gap-5 text-[11.5px]" : "gap-6 xl:gap-8 text-[13px]"} font-semibold ${!schoolId ? "text-white/95" : "text-brand-charcoal/95"}`}
          >
            {/* Menu 1: Group / Portal Level Info */}
            {!schoolId && (
              <div className="relative group py-2 flex flex-col items-center justify-center">
                <button
                  className={`flex items-center gap-1 hover:text-brand-gold transition-colors duration-300 cursor-pointer font-semibold ${isAboutUsActive ? "text-brand-gold font-bold" : ""}`}
                >
                  About Us{" "}
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-${theme.accent}`}
                  />
                </button>
                {isAboutUsActive && (
                  <span className="absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                )}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-brand-greenDeep text-white rounded-xl shadow-xl border border-white/10 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="space-y-2 text-xs">
                    <Link
                      to="/thinking-school"
                      className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-gold transition-colors font-semibold"
                    >
                      A Thinking School with a Soul
                    </Link>
                    <Link
                      to="/vision-mission"
                      className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-gold transition-colors font-semibold"
                    >
                      Vision & Mission
                    </Link>
                    <Link
                      to="/management"
                      className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-gold transition-colors font-semibold"
                    >
                      Our Management
                    </Link>
                    <Link
                      to="/parent-partners"
                      className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-gold transition-colors font-semibold"
                    >
                      Parents as Partners
                    </Link>
                    <Link
                      to="/awards"
                      className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-gold transition-colors font-semibold"
                    >
                      School Awards
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Menu 1b: Our Pedagogy Dropdown */}
            {!schoolId && (
              <div className="relative group py-2 flex flex-col items-center justify-center">
                <button
                  className={`flex items-center gap-1 hover:text-brand-gold transition-colors duration-300 cursor-pointer font-semibold ${isPedagogyActive ? "text-brand-gold font-bold" : ""}`}
                >
                  Our Pedagogy{" "}
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-${theme.accent}`}
                  />
                </button>
                {isPedagogyActive && (
                  <span className="absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                )}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-brand-greenDeep text-white rounded-xl shadow-xl border border-white/10 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="space-y-2 text-xs">
                    <Link
                      to="/pedagogy/early-years"
                      className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-gold transition-colors font-semibold"
                    >
                      Early Years
                    </Link>
                    <Link
                      to="/pedagogy/primary-years"
                      className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-gold transition-colors font-semibold"
                    >
                      Primary Years
                    </Link>
                    <Link
                      to="/pedagogy/middle-years"
                      className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-gold transition-colors font-semibold"
                    >
                      Middle Years
                    </Link>
                    <Link
                      to="/pedagogy/senior-years"
                      className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-gold transition-colors font-semibold"
                    >
                      Senior Years
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Menu 2: Our Schools (only on master) */}
            {!schoolId && renderOurSchoolsMenu()}

            {schoolId ? (
              <>
                {/* 0. School Mega Menu Trigger */}
                <div className="group py-1 flex items-center justify-center">
                  <Link
                    to={`/school/${schoolId}`}
                    className={`flex items-center gap-1 text-${theme.primary} font-serif font-black text-sm sm:text-base hover:opacity-85 transition-opacity cursor-pointer`}
                  >
                    <span>DLF</span>
                    <ChevronDown
                      className={`w-4 h-4 text-${theme.primary} transition-transform duration-300 group-hover:rotate-180`}
                    />
                  </Link>

                  {/* ── SCHOOL SITE: full mega menu on hover ── */}
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-left pointer-events-none group-hover:pointer-events-auto"
                    style={{ width: "960px", maxWidth: "94vw", zIndex: 200 }}
                  >
                    <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300 relative">
                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex">
                        {/* ── PART 1: Switch Campus (Left Panel) ── */}
                        <div className="w-[33.33%] p-5 bg-gray-50 border-r border-gray-100 flex flex-col gap-3">
                          <p className="text-[9px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">
                            Switch Campus
                          </p>
                          {/* DLF Public School card */}
                          <Link
                            to="/school/dlf-sahibabad"
                            className={`group/card flex flex-col rounded-xl border bg-white hover:shadow-md transition-all duration-300 overflow-hidden relative ${
                              schoolId === "dlf-sahibabad"
                                ? "border-brand-greenDeep/50 ring-1 ring-brand-greenDeep/10"
                                : "border-gray-100 hover:border-brand-greenDeep/30"
                            }`}
                          >
                            <div className="h-20 w-full overflow-hidden relative bg-brand-greenDeep">
                              <img
                                src="/images/home-hero.jpg"
                                alt="DLF Public School Sahibabad Campus"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                              />
                              <div className="absolute inset-0 bg-brand-greenDeep/10"></div>
                              {schoolId ===
                                "dlf-sahibabad" && (
                                <div className="absolute top-2 right-2 bg-brand-greenDeep text-white text-[7px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full shadow-sm">
                                  Currently Browsing
                                </div>
                              )}
                            </div>
                            <div className="p-3.5 space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-brand-greenVibrant shrink-0" />
                                <span className="text-[11px] font-extrabold text-brand-greenDeep uppercase tracking-wide leading-tight">
                                  DLF Public School
                                </span>
                              </div>
                              <p className="text-[9.5px] text-gray-500 pl-4">
                                Sahibabad, Ghaziabad · CBSE
                                Aff. 2130384
                              </p>
                            </div>
                          </Link>
                          {/* DLF World School card */}
                          <Link
                            to="/school/dlf-greater-noida"
                            className={`group/card flex flex-col rounded-xl border bg-white hover:shadow-md transition-all duration-300 overflow-hidden relative ${
                              schoolId ===
                              "dlf-greater-noida"
                                ? "border-brand-purpleDeep/50 ring-1 ring-brand-purpleDeep/10"
                                : "border-gray-100 hover:border-brand-purpleDeep/30"
                            }`}
                          >
                            <div className="h-20 w-full overflow-hidden relative bg-brand-purpleDeep">
                              <img
                                src="/dlws.jpeg"
                                alt="DLF World School Greater Noida Campus"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                              />
                              <div className="absolute inset-0 bg-brand-purpleDeep/10"></div>
                              {schoolId ===
                                "dlf-greater-noida" && (
                                <div className="absolute top-2 right-2 bg-brand-purpleDeep text-white text-[7px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full shadow-sm">
                                  Currently Browsing
                                </div>
                              )}
                            </div>
                            <div className="p-3.5 space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-brand-purpleVibrant shrink-0" />
                                <span className="text-[11px] font-extrabold text-brand-purpleDeep uppercase tracking-wide leading-tight">
                                  DLF World School
                                </span>
                              </div>
                              <p className="text-[9.5px] text-gray-500 pl-4">
                                Greater Noida · CBSE Aff.
                                2131920
                              </p>
                            </div>
                          </Link>
                        </div>
                        {/* ── PART 2: Combined Master Links (Right Panel) ── */}
                        <div
                          className={`w-[66.67%] p-6 ${!schoolId ? "bg-brand-greenDeep" : `bg-${theme.primary}`} text-white flex flex-col justify-between`}
                        >
                          <div>
                            <p className="text-[9px] font-extrabold uppercase tracking-widest text-brand-gold mb-4">
                              Darbari Lal Foundation
                              Directory
                            </p>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                              {[
                                {
                                  label: "Group Home",
                                  to: "/",
                                  Icon: Home,
                                },
                                {
                                  label: "Thinking School",
                                  to: "/thinking-school",
                                  Icon: BookMarked,
                                },
                                {
                                  label: "Vision & Mission",
                                  to: "/vision-mission",
                                  Icon: Compass,
                                },
                                {
                                  label: "Our Pedagogy",
                                  to: "/pedagogy",
                                  Icon: GraduationCap,
                                },
                                {
                                  label: "Our Management",
                                  to: "/management",
                                  Icon: Users,
                                },
                                {
                                  label:
                                    "Parents as Partners",
                                  to: "/parent-partners",
                                  Icon: Handshake,
                                },
                                {
                                  label: "School Awards",
                                  to: "/awards",
                                  Icon: Award,
                                },
                                {
                                  label: "Sports Arena",
                                  to: "/sports-arena",
                                  Icon: Trophy,
                                },
                                {
                                  label: "DLF in the News",
                                  to: "/news",
                                  Icon: Newspaper,
                                },
                                {
                                  label: "Alumni Network",
                                  to: "/alumni",
                                  Icon: Handshake,
                                },
                                {
                                  label: "Contact Us",
                                  to: schoolId
                                    ? `/school/${schoolId}/contact`
                                    : "/contact",
                                  Icon: PhoneCall,
                                },
                              ].map(
                                ({
                                  label,
                                  to,
                                  Icon: NavIcon,
                                }) => (
                                  <Link
                                    key={to}
                                    to={to}
                                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-white/10 group/link transition-colors duration-200"
                                  >
                                    <NavIcon className="w-3.5 h-3.5 text-white/60 group-hover/link:text-white transition-colors shrink-0" />
                                    <span className="text-[11.5px] font-semibold text-white/90 group-hover/link:text-white transition-colors">
                                      {label}
                                    </span>
                                    <ArrowRight className="w-3 h-3 text-white/40 group-hover/link:text-white group-hover/link:translate-x-0.5 transition-all ml-auto" />
                                  </Link>
                                ),
                              )}
                            </div>
                            {/* end grid */}
                          </div>
                          {/* end inner div */}
                        </div>
                        {/* end right panel */}
                      </div>
                      {/* end bg-white flex */}
                    </div>
                    {/* end animation wrapper */}
                  </div>
                  {/* end fixed outer */}
                </div>
                {/* end breadcrumb trigger */}

                {/* 1. Our Campus */}
                <div className="relative py-2 flex flex-col items-center justify-center">
                  <Link
                    to={`/school/${schoolId}/campus`}
                    className={`hover:text-${theme.vibrant} transition-colors duration-300 font-semibold ${isCampusActive ? `text-${theme.vibrant} font-bold` : ""}`}
                  >
                    Our Campus
                  </Link>
                  {isCampusActive && (
                    <span
                      className={`absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-${theme.vibrant}`}
                    ></span>
                  )}
                </div>

                {/* 2. Leadership (No dropdown) */}
                <div className="relative py-2 flex flex-col items-center justify-center">
                  <Link
                    to={`/school/${schoolId}/principal-desk`}
                    className={`hover:text-${theme.vibrant} transition-colors duration-300 font-semibold ${isLeadershipActive ? `text-${theme.vibrant} font-bold` : ""}`}
                  >
                    Leadership
                  </Link>
                  {isLeadershipActive && (
                    <span
                      className={`absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-${theme.vibrant}`}
                    ></span>
                  )}
                </div>

                {/* 3. Admissions Dropdown */}
                <div className="relative group py-2 flex flex-col items-center justify-center">
                  <button
                    className={`flex items-center gap-1 hover:text-${theme.vibrant} transition-colors duration-300 cursor-pointer font-semibold ${isAdmissionsActive ? `text-${theme.vibrant} font-bold` : ""}`}
                  >
                    Admissions{" "}
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-${theme.accent}`}
                    />
                  </button>
                  {isAdmissionsActive && (
                    <span
                      className={`absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-${theme.vibrant}`}
                    ></span>
                  )}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white text-brand-charcoal rounded-xl shadow-xl border border-gray-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="space-y-1 text-xs">
                      <Link
                        to={`/school/${schoolId}/admissions?tab=enquiry`}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-gray-50 hover:text-${theme.vibrant} transition-colors font-bold`}
                      >
                        <FileText className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                        Enquiry Form
                      </Link>
                      <Link
                        to={`/school/${schoolId}/admissions?tab=fee-structure`}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-gray-50 hover:text-${theme.vibrant} transition-colors font-bold`}
                      >
                        <IndianRupee className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                        Fee Structure
                      </Link>
                      <Link
                        to={`/school/${schoolId}/admissions?tab=procedure`}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-gray-50 hover:text-${theme.vibrant} transition-colors font-bold`}
                      >
                        <ClipboardList className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                        Admissions Process
                      </Link>
                      <Link
                        to={`/school/${schoolId}/admissions?tab=scholarships`}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-gray-50 hover:text-${theme.vibrant} transition-colors font-bold`}
                      >
                        <Award className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                        Scholarships
                      </Link>
                    </div>
                  </div>
                </div>

                {/* 4. Curriculum Dropdown */}
                <div className="relative group py-2 flex flex-col items-center justify-center">
                  <button
                    className={`flex items-center gap-1 hover:text-${theme.vibrant} transition-colors duration-300 cursor-pointer font-semibold ${isCurriculumActive ? `text-${theme.vibrant} font-bold` : ""}`}
                  >
                    Curriculum{" "}
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-${theme.accent}`}
                    />
                  </button>
                  {isCurriculumActive && (
                    <span
                      className={`absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-${theme.vibrant}`}
                    ></span>
                  )}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white text-brand-charcoal rounded-xl shadow-xl border border-gray-100 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="space-y-1 text-xs">
                      <Link
                        to={`/school/${schoolId}/curriculum/cbse`}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-${theme.vibrant} transition-colors font-bold ${location.pathname.endsWith("/cbse") || location.pathname.endsWith("/curriculum") ? `text-${theme.vibrant}` : ""}`}
                      >
                        <BookOpen className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                        CBSE Pathway
                      </Link>
                      {schoolId !== "dlf-greater-noida" && (
                        <Link
                          to={`/school/${schoolId}/curriculum/cambridge`}
                          className={`flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-${theme.vibrant} transition-colors font-bold ${location.pathname.endsWith("/cambridge") ? `text-${theme.vibrant}` : ""}`}
                        >
                          <Globe className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                          Cambridge Pathway
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* 5. Holistic Learning Dropdown */}
                <div className="relative group py-2 flex flex-col items-center justify-center">
                  <button
                    className={`flex items-center gap-1 hover:text-${theme.vibrant} transition-colors duration-300 cursor-pointer font-semibold ${isHolisticActive ? `text-${theme.vibrant} font-bold` : ""}`}
                  >
                    Holistic Learning{" "}
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-${theme.accent}`}
                    />
                  </button>
                  {isHolisticActive && (
                    <span
                      className={`absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-${theme.vibrant}`}
                    ></span>
                  )}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white text-brand-charcoal rounded-xl shadow-xl border border-gray-100 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="space-y-1 text-xs">
                      <Link
                        to={`/school/${schoolId}/holistic-learning/performing-arts`}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-${theme.vibrant} transition-colors font-bold ${location.pathname.endsWith("/performing-arts") ? `text-${theme.vibrant}` : ""}`}
                      >
                        <Music className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                        Performing Arts
                      </Link>
                      <Link
                        to={`/school/${schoolId}/holistic-learning/sports-development`}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-${theme.vibrant} transition-colors font-bold ${location.pathname.endsWith("/sports-development") ? `text-${theme.vibrant}` : ""}`}
                      >
                        <Trophy className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                        Sports Development
                      </Link>
                      <Link
                        to={`/school/${schoolId}/holistic-learning/visual-arts`}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-${theme.vibrant} transition-colors font-bold ${location.pathname.endsWith("/visual-arts") ? `text-${theme.vibrant}` : ""}`}
                      >
                        <Palette className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                        Visual Arts
                      </Link>
                      <Link
                        to={`/school/${schoolId}/holistic-learning/scholastic`}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-${theme.vibrant} transition-colors font-bold ${location.pathname.endsWith("/scholastic") ? `text-${theme.vibrant}` : ""}`}
                      >
                        <BookOpen className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                        Scholastic
                      </Link>
                      <Link
                        to={`/school/${schoolId}/holistic-learning/school-excursions`}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-${theme.vibrant} transition-colors font-bold ${location.pathname.endsWith("/school-excursions") ? `text-${theme.vibrant}` : ""}`}
                      >
                        <Compass className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                        School Excursions
                      </Link>
                      <Link
                        to={`/school/${schoolId}/holistic-learning/student-achievements`}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-${theme.vibrant} transition-colors font-bold ${location.pathname.endsWith("/student-achievements") ? `text-${theme.vibrant}` : ""}`}
                      >
                        <Award className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                        Student Achievements
                      </Link>
                      <Link
                        to={`/school/${schoolId}/holistic-learning/student-life`}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-${theme.vibrant} transition-colors font-bold ${location.pathname.endsWith("/student-life") ? `text-${theme.vibrant}` : ""}`}
                      >
                        <Users className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                        Student Life &amp; Guild
                      </Link>
                    </div>
                  </div>
                </div>

                {/* 6. Virtual Tour */}
                <div className="relative py-2 flex flex-col items-center justify-center">
                  <a
                    href="#virtual-tour"
                    onClick={(e) => handleHashClick(e, "#virtual-tour")}
                    className={`hover:text-${theme.vibrant} transition-colors duration-300 font-semibold flex items-center gap-1`}
                  >
                    <span>Virtual Tour</span>
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="relative py-2 flex flex-col items-center justify-center">
                  <Link
                    to="/what-sets-us-apart"
                    className={`hover:text-brand-gold transition-colors duration-300 font-semibold ${isWhatSetsUsApartActive ? "text-brand-gold font-bold" : ""}`}
                  >
                    What Sets Us Apart
                  </Link>
                  {isWhatSetsUsApartActive && (
                    <span className="absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                  )}
                </div>
                <div className="relative py-2 flex flex-col items-center justify-center">
                  <Link
                    to="/contact"
                    className={`hover:text-brand-gold transition-colors duration-300 font-semibold ${isContactActive ? "text-brand-gold font-bold" : ""}`}
                  >
                    Contact Us
                  </Link>
                  {isContactActive && (
                    <span className="absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                  )}
                </div>
              </>
            )}
          </nav>

          {/* Navigation Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {schoolId ? (
              <>
                <Link
                  to={`/school/${schoolId}/admissions`}
                  className={`bg-${theme.primary} text-white hover:bg-${theme.vibrant} px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-2 relative overflow-hidden group`}
                >
                  <span className="relative z-10">
                    Admissions Open
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 relative z-10 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </>
            ) : (
              <Link
                to="/admission-enquiry"
                className={`bg-brand-gold text-${theme.primary} hover:bg-brand-goldlight px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-2 relative overflow-hidden group`}
              >
                <span className="relative z-10">
                  Admissions Open
                </span>
                <ArrowRight className="w-3.5 h-3.5 relative z-10 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>

          {/* Hamburger Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
            className={`lg:hidden p-3 ${!schoolId ? "text-white hover:bg-white/10" : `text-${theme.primary} hover:bg-${theme.primary}/5`} rounded-xl transition-colors duration-300`}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* MOBILE NAVIGATION DRAWER */}
      <div
        id="mobile-nav-drawer"
        className={`fixed inset-0 bg-brand-charcoal/95 backdrop-blur-md z-50 transform transition-transform duration-500 ease-out flex justify-end ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div
          className={`w-full max-w-sm ${!schoolId ? "bg-brand-greenDeep text-white" : "bg-brand-bg text-brand-charcoal"} h-full p-6 shadow-2xl relative flex flex-col justify-between overflow-y-auto`}
        >
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close Navigation Menu"
            className={`absolute top-6 right-6 p-3 ${!schoolId ? "text-white hover:bg-white/10" : `text-${theme.primary} hover:bg-${theme.primary}/10`} rounded-full transition-colors`}
          >
            <X className="w-6 h-6" />
          </button>

          <div className="space-y-8 mt-12">
            <div
              className={`border-b border-${theme.primary}/10 pb-4`}
            >
              <div className="flex flex-col">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] leading-none text-brand-gold">
                  {schoolId ? "DLF SCHOOL" : ""}
                </span>
                <p
                  className={`font-serif ${!schoolId ? "text-white" : `text-${theme.primary}`} text-xl sm:text-2xl font-black uppercase tracking-tight leading-tight mt-1.5`}
                >
                  {currentSchool
                    ? currentSchool.name
                    : "DARBARI LAL FOUNDATION"}
                </p>
              </div>
              <p
                className={`text-[9.5px] ${!schoolId ? "text-white/70" : "text-brand-muted"} uppercase tracking-widest font-semibold mt-1`}
              >
                {currentSchool
                  ? `${currentSchool.shortLocation} · ${currentSchool.cbseInfo}`
                  : "CBSE AFFILIATED"}
              </p>
            </div>
            <nav
              className={`space-y-3 flex flex-col font-semibold text-base ${!schoolId ? "text-white/90" : "text-brand-charcoal"}`}
            >
              {schoolId && (
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`hover:text-${theme.vibrant} py-1.5 border-b border-${theme.primary}/10 text-xs uppercase tracking-widest font-extrabold flex items-center gap-1.5`}
                >
                  &larr; Back to Group Website
                </Link>
              )}
              {!schoolId && (
                <>
                  <Link
                    to="/"
                    onClick={() =>
                      setIsMobileMenuOpen(false)
                    }
                    className="hover:text-brand-gold py-1 border-b border-white/10"
                  >
                    Darbari Lal Foundation
                  </Link>
                  <Link
                    to="/thinking-school"
                    onClick={() =>
                      setIsMobileMenuOpen(false)
                    }
                    className="hover:text-brand-gold py-1"
                  >
                    A Thinking School with a Soul
                  </Link>
                  <Link
                    to="/vision-mission"
                    onClick={() =>
                      setIsMobileMenuOpen(false)
                    }
                    className="hover:text-brand-gold py-1"
                  >
                    Vision & Mission
                  </Link>
                  <Link
                    to="/management"
                    onClick={() =>
                      setIsMobileMenuOpen(false)
                    }
                    className="hover:text-brand-gold py-1"
                  >
                    Our Management
                  </Link>
                  <Link
                    to="/parent-partners"
                    onClick={() =>
                      setIsMobileMenuOpen(false)
                    }
                    className="hover:text-brand-gold py-1"
                  >
                    Parents as Partners
                  </Link>
                  <Link
                    to="/awards"
                    onClick={() =>
                      setIsMobileMenuOpen(false)
                    }
                    className="hover:text-brand-gold py-1"
                  >
                    School Awards
                  </Link>

                  <div className="border-t border-white/10 my-2 pt-2">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-brand-gold mb-1.5">
                      Our Pedagogy
                    </p>
                    <Link
                      to="/pedagogy"
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                      className="hover:text-brand-gold block py-1 pl-3 text-xs"
                    >
                      Our Pedagogy (Overview)
                    </Link>
                    <Link
                      to="/pedagogy/early-years"
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                      className="hover:text-brand-gold block py-1 pl-3 text-xs"
                    >
                      Early Years
                    </Link>
                    <Link
                      to="/pedagogy/primary-years"
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                      className="hover:text-brand-gold block py-1 pl-3 text-xs"
                    >
                      Primary Years
                    </Link>
                    <Link
                      to="/pedagogy/middle-years"
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                      className="hover:text-brand-gold block py-1 pl-3 text-xs"
                    >
                      Middle Years
                    </Link>
                    <Link
                      to="/pedagogy/senior-years"
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                      className="hover:text-brand-gold block py-1 pl-3 text-xs"
                    >
                      Senior Years
                    </Link>
                  </div>

                  <a
                    href={
                      schoolId === "dlf-greater-noida"
                        ? "https://www.dlws.edu.in/useful-links"
                        : "https://www.dlps.co.in/useful-links"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      setIsMobileMenuOpen(false)
                    }
                    className="hover:text-brand-gold py-1 flex items-center gap-1"
                  >
                    Useful Links ↗
                  </a>
                  <Link
                    to="/alumni"
                    onClick={() =>
                      setIsMobileMenuOpen(false)
                    }
                    className="hover:text-brand-gold py-1"
                  >
                    Alumni Network
                  </Link>
                  <a
                    href={
                      schoolId === "dlf-greater-noida"
                        ? "https://forms.edunexttechnologies.com/forms/dlws/recruitment/"
                        : "https://forms.edunexttechnologies.com/forms/dlps/recruitment/"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      setIsMobileMenuOpen(false)
                    }
                    className="hover:text-brand-gold py-1 flex items-center gap-1"
                  >
                    Careers ↗
                  </a>
                </>
              )}

              <div
                className={`border-t border-${theme.primary}/10 my-2 pt-2`}
              >
                <p className="text-[10px] uppercase font-bold tracking-wider text-brand-muted mb-2">
                  Our School Portals
                </p>
                <Link
                  to="/school/dlf-sahibabad"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-brand-greenVibrant flex items-center gap-2 py-1.5 font-bold"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-greenVibrant"></span>{" "}
                  DLF Public School, Sahibabad
                </Link>
                <Link
                  to="/school/dlf-greater-noida"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-brand-purpleVibrant flex items-center gap-2 py-1.5 font-bold"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-purpleVibrant"></span>{" "}
                  DLF World School, G. Noida
                </Link>
                <div
                  className={`border-t border-${theme.primary}/10 my-1`}
                ></div>
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`hover:text-${!schoolId ? "brand-gold" : theme.vibrant} flex items-center gap-2 py-1.5 font-bold`}
                >
                  <span className="w-2 h-2 rounded-full bg-brand-gold"></span>{" "}
                  Darbari Lal Foundation
                </Link>
              </div>

              {schoolId && (
                <div
                  className={`border-t border-${theme.primary}/10 my-2 pt-2 space-y-1`}
                >
                  <p className="text-[10px] uppercase font-bold tracking-wider text-brand-muted mb-2">
                    {currentSchool.name} Links
                  </p>
                  <Link
                    to={`/school/${schoolId}/campus`}
                    onClick={() =>
                      setIsMobileMenuOpen(false)
                    }
                    className={`hover:text-${theme.vibrant} block py-1`}
                  >
                    Our Campus
                  </Link>
                  <Link
                    to={`/school/${schoolId}/principal-desk`}
                    onClick={() =>
                      setIsMobileMenuOpen(false)
                    }
                    className={`hover:text-${theme.vibrant} block py-1`}
                  >
                    Leadership
                  </Link>
                  {/* Admissions sub-links */}
                  <div
                    className={`border-t border-${theme.primary}/10 my-1 pt-2`}
                  >
                    <p className="text-[10px] uppercase font-bold tracking-wider text-brand-muted mb-1.5">
                      Admissions
                    </p>
                    <Link
                      to={`/school/${schoolId}/admissions?tab=procedure`}
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                      className={`hover:text-${theme.vibrant} block py-1 pl-3 text-xs`}
                    >
                      Procedure & Guidelines
                    </Link>
                    <Link
                      to={`/school/${schoolId}/admissions?tab=fee-structure`}
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                      className={`hover:text-${theme.vibrant} block py-1 pl-3 text-xs`}
                    >
                      Fee Structure
                    </Link>
                    <Link
                      to={`/school/${schoolId}/admissions?tab=scholarships`}
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                      className={`hover:text-${theme.vibrant} block py-1 pl-3 text-xs`}
                    >
                      Scholarships
                    </Link>
                  </div>
                  {/* Curriculum sub-links */}
                  <div
                    className={`border-t border-${theme.primary}/10 my-1 pt-2`}
                  >
                    <p className="text-[10px] uppercase font-bold tracking-wider text-brand-muted mb-1.5">
                      Curriculum
                    </p>
                    <Link
                      to={`/school/${schoolId}/curriculum/cbse`}
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                      className={`hover:text-${theme.vibrant} block py-1 pl-3 text-xs`}
                    >
                      CBSE Pathway
                    </Link>
                    <Link
                      to={`/school/${schoolId}/curriculum/cambridge`}
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                      className={`hover:text-${theme.vibrant} block py-1 pl-3 text-xs`}
                    >
                      Cambridge Pathway
                    </Link>
                  </div>
                  {/* Holistic Learning sub-links */}
                  <div
                    className={`border-t border-${theme.primary}/10 my-1 pt-2`}
                  >
                    <p className="text-[10px] uppercase font-bold tracking-wider text-brand-muted mb-1.5">
                      Holistic Learning
                    </p>
                    <Link
                      to={`/school/${schoolId}/holistic-learning/performing-arts`}
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                      className={`hover:text-${theme.vibrant} block py-1 pl-3 text-xs`}
                    >
                      Performing Arts
                    </Link>
                    <Link
                      to={`/school/${schoolId}/holistic-learning/sports-development`}
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                      className={`hover:text-${theme.vibrant} block py-1 pl-3 text-xs`}
                    >
                      Sports Development
                    </Link>
                    <Link
                      to={`/school/${schoolId}/holistic-learning/visual-arts`}
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                      className={`hover:text-${theme.vibrant} block py-1 pl-3 text-xs`}
                    >
                      Visual Arts
                    </Link>
                    <Link
                      to={`/school/${schoolId}/holistic-learning/scholastic`}
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                      className={`hover:text-${theme.vibrant} block py-1 pl-3 text-xs`}
                    >
                      Scholastic
                    </Link>
                    <Link
                      to={`/school/${schoolId}/holistic-learning/school-excursions`}
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                      className={`hover:text-${theme.vibrant} block py-1 pl-3 text-xs`}
                    >
                      School Excursions
                    </Link>
                    <Link
                      to={`/school/${schoolId}/holistic-learning/student-achievements`}
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                      className={`hover:text-${theme.vibrant} block py-1 pl-3 text-xs`}
                    >
                      Student Achievements
                    </Link>
                    <Link
                      to={`/school/${schoolId}/holistic-learning/student-life`}
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                      className={`hover:text-${theme.vibrant} block py-1 pl-3 text-xs`}
                    >
                      Student Life &amp; Guild
                    </Link>
                  </div>
                  <Link
                    to="/counselling"
                    onClick={() =>
                      setIsMobileMenuOpen(false)
                    }
                    className={`hover:text-${theme.vibrant} block py-1`}
                  >
                    Counselling, Career &amp; Wellness
                  </Link>

                  <Link
                    to={`/school/${schoolId}/disclosures`}
                    onClick={() =>
                      setIsMobileMenuOpen(false)
                    }
                    className={`hover:text-${theme.vibrant} block py-1`}
                  >
                    Mandatory CBSE Disclosures
                  </Link>
                  <Link
                    to={`/school/${schoolId}/contact`}
                    onClick={() =>
                      setIsMobileMenuOpen(false)
                    }
                    className={`hover:text-${theme.vibrant} block py-1`}
                  >
                    Contact School
                  </Link>
                </div>
              )}
            </nav>
          </div>

          {/* Footer CTAs inside mobile drawer */}
          <div
            className={`space-y-3 pt-6 border-t border-${theme.primary}/10`}
          >
            {schoolId ? (
              <>
                <Link
                  to={`/school/${schoolId}/admissions`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full bg-${theme.primary} text-white text-center py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs`}
                >
                  Apply Now
                </Link>
              </>
            ) : (
              <Link
                to="/admission-enquiry"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full bg-brand-gold text-${theme.primary} text-center py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-brand-goldlight transition-colors`}
              >
                Admissions Open
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
