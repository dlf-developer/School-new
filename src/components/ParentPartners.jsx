import React, { useRef, useState, useEffect } from "react";
import {
  Heart,
  Play,
  Pause,
  ChevronRight,
  Calendar,
  HeartHandshake,
  BookOpen,
  Users,
  Compass,
  Award,
  Video,
  Info,
} from "lucide-react";
import ImageWithLoader from "./ImageWithLoader";
import { useSiteData } from "../hooks/useSiteData";

const ICON_MAP = {
  Calendar,
  Heart,
  Users,
  Compass,
  Award,
  HeartHandshake,
};

export default function ParentPartners() {
  const videoRef = useRef(null);
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { global } = useSiteData();
  const pp = global.parentPartners || {};

  const playlist = pp.playlist || [];
  const initiatives = (pp.initiatives || []).map((i) => ({
    ...i,
    icon: ICON_MAP[i.icon] || Calendar,
  }));

  const handleVideoSelect = (idx) => {
    setCurrentVideoIdx(idx);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.load();
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Load new video when index changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      setIsPlaying(false);
    }
  }, [currentVideoIdx]);

  return (
    <div className="pt-24 bg-transparent min-h-screen text-brand-charcoal selection:bg-brand-gold/30 relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-20 left-1/4 w-[400px] h-[400px] ambient-glow-1 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] ambient-glow-2 rounded-full blur-3xl pointer-events-none"></div>

      {/* 1. Philosophical Intro Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-greenDeep/5 border border-brand-greenDeep/10 text-brand-greenDeep text-[11px] font-bold uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Parents as Partners</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-greenDeep leading-[1.1] tracking-tight">
              A Shared Journey <br />
              <span className="italic text-brand-gold font-normal">
                Of Learning & Growth.
              </span>
            </h1>
            <div className="space-y-4 text-brand-muted text-base leading-relaxed font-sans max-w-2xl">
              <p>
                At DLF, we view parents as the first
                teachers of every child. A child’s growth is
                never shaped by school alone—it is the sum
                total of the environment at home and at
                school. When both work together in harmony,
                learning becomes deeper, values become
                stronger, and children grow into confident,
                compassionate individuals.
              </p>
              <p>
                Education, therefore, is not a one-way
                journey. It is a collaborative experience
                where parents are valued as equal
                stakeholders and active partners in the
                educational process. We believe that when
                school and home work in synergy, every child
                thrives with confidence, clarity, and
                purpose.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-brand-greenDeep/5 rounded-3xl p-8 shadow-sm space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl"></div>
            <h3 className="font-serif text-2xl font-bold text-brand-greenDeep">
              Shared Responsibility
            </h3>
            <p className="text-brand-muted text-sm leading-relaxed font-sans">
              The Parent Partnership Programme at DLF is a
              celebration of this shared responsibility. By
              contributing their time, expertise,
              experiences, and presence, parents enrich
              classroom learning, support school
              initiatives, and strengthen the larger
              learning community. Whether mentoring
              students, participating in events, or sharing
              professional insights, their involvement
              brings authentic real-world perspectives into
              everyday learning.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Custom Multi-Video Playlist Showcase */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 pb-20 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-greenDeep leading-tight">
            Parent Partnership in Action
          </h2>
          <p className="text-brand-muted text-sm font-sans">
            Browse through the recording of our parent
            sessions, celebrations, and events.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Active Video Player Screen */}
          <div className="lg:col-span-8 bg-white border border-brand-greenDeep/5 rounded-3xl p-6 shadow-md flex flex-col justify-between">
            <div className="mb-4">
              <h3 className="font-serif text-2xl font-bold text-brand-greenDeep">
                {playlist[currentVideoIdx].title}
              </h3>
              <p className="text-brand-muted text-xs font-medium font-sans mt-1">
                {playlist[currentVideoIdx].desc}
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-brand-charcoal group aspect-video shadow-inner">
              <video
                ref={videoRef}
                key={playlist[currentVideoIdx].filename}
                className="w-full h-full object-cover"
                src={playlist[currentVideoIdx].filename}
                playsInline
                controls
                onClick={(e) => {
                  e.preventDefault();
                  togglePlay();
                }}
              />

              {!isPlaying && (
                <div className="absolute inset-0 bg-brand-charcoal/30 flex items-center justify-center pointer-events-none transition-opacity duration-300">
                  <button
                    className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm text-brand-greenDeep flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 pointer-events-auto"
                    onClick={togglePlay}
                  >
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </button>
                </div>
              )}
            </div>

            <div className="mt-4 text-xs text-brand-muted flex justify-between items-center border-t border-brand-greenDeep/5 pt-3">
              <p className="flex items-center gap-1.5 font-semibold">
                <Info className="w-3.5 h-3.5 text-brand-gold" />
                Select any track from the library playlist
                on the right.
              </p>
            </div>
          </div>

          {/* Playlist Panel */}
          <div className="lg:col-span-4 bg-brand-greenDeep text-white rounded-3xl p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold">
                Parent Partnership Activities
              </h3>
              <p className="text-white/70 text-xs leading-relaxed font-sans">
                Select a video file to play it directly in
                the player window:
              </p>
            </div>

            <div className="space-y-2.5 mt-6 overflow-y-auto max-h-[350px] pr-1">
              {playlist.map((video, idx) => (
                <button
                  key={idx}
                  onClick={() => handleVideoSelect(idx)}
                  className={`w-full flex justify-between items-center p-3.5 rounded-2xl text-left border transition-all text-xs font-semibold group ${
                    currentVideoIdx === idx
                      ? "bg-white text-brand-greenDeep border-brand-gold shadow-md scale-[1.01]"
                      : "bg-white/5 border-white/10 hover:bg-white/10 text-white"
                  }`}
                >
                  <div className="space-y-0.5 max-w-[85%]">
                    <p className="truncate font-bold">
                      {video.title}
                    </p>
                    <p
                      className={`text-[10px] truncate ${currentVideoIdx === idx ? "text-brand-muted" : "text-white/60"}`}
                    >
                      {video.desc}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      currentVideoIdx === idx
                        ? "text-brand-gold translate-x-0.5"
                        : "text-white/40 group-hover:translate-x-0.5"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Timeline & Folder 4 Images Showcase */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 py-20 border-t border-brand-greenDeep/5 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] tracking-widest uppercase font-bold text-brand-gold">
            Active Channels
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-greenDeep leading-tight">
            How Do Parents Stay Connected?
          </h2>
          <p className="text-brand-muted text-sm sm:text-base font-sans">
            Explore the various events that help us stay
            connected with our Parent Partners
          </p>
        </div>

        <div className="space-y-24">
          {initiatives.map((item, idx) => {
            const Icon = item.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}
              >
                {/* Text Content */}
                <div
                  className={`lg:col-span-6 space-y-6 ${!isEven ? "lg:order-last" : ""}`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-greenDeep/5 flex items-center justify-center text-brand-greenDeep">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-brand-greenDeep">
                    {item.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed font-sans">
                    {item.desc}
                  </p>
                  <div className="bg-brand-gold/10 border-l-4 border-brand-gold p-4 rounded-r-xl">
                    <p className="text-xs text-brand-greenDeep font-semibold font-sans italic">
                      {item.caption}
                    </p>
                  </div>
                </div>

                {/* Actual Folder Image */}
                <div className="lg:col-span-6">
                  <div className="overflow-hidden rounded-3xl border border-brand-greenDeep/10 group shadow-md bg-white p-4 space-y-4 max-w-xl mx-auto">
                    <div className="overflow-hidden rounded-2xl aspect-[16/11]">
                      <ImageWithLoader
                        src={item.img}
                        alt={item.title}
                        imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                        loading="lazy"
                      />
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Concluding Quote Block */}
      <section className="bg-brand-greenDeep text-white py-20 relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-12 text-center space-y-8 relative z-10">
          <Heart className="w-12 h-12 text-brand-gold mx-auto fill-brand-gold animate-bounce" />
          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium italic leading-relaxed text-brand-bg">
            "At every milestone, parents are not merely
            spectators—they are co-creators of their child’s
            journey. Together, we nurture confident,
            compassionate, and future-ready individuals,
            because when parents and educators walk hand in
            hand, every child’s potential finds its fullest
            expression."
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-10 h-0.5 bg-brand-gold"></div>
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold">
              Darbari Lal Foundation Team
            </span>
            <div className="w-10 h-0.5 bg-brand-gold"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
