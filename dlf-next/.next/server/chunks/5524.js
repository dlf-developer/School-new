"use strict";
((exports.id = 5524),
  (exports.ids = [5524]),
  (exports.modules = {
    41737: (a, b, c) => {
      c.d(b, { A: () => d });
      let d = (0, c(3080).A)("circle-check", [
        [
          "circle",
          { cx: "12", cy: "12", r: "10", key: "1mglay" },
        ],
        [
          "path",
          { d: "m16 9-5.5 5.5L8 12", key: "xofnsj" },
        ],
      ]);
    },
    44006: (a, b, c) => {
      c.d(b, { A: () => d });
      let d = (0, c(3080).A)("heart", [
        [
          "path",
          {
            d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
            key: "mvr1a0",
          },
        ],
      ]);
    },
    85524: (a, b, c) => {
      c.d(b, { A: () => v });
      var d = c(21124),
        e = c(38301),
        f = c(88750),
        g = c(26506),
        h = c(92123),
        i = c(24200),
        j = c(68439),
        k = c(54826),
        l = c(2842),
        m = c(22029),
        n = c(87993),
        o = c(99691),
        p = c(41737),
        q = c(44006);
      let r = {
          performingArts: h.A,
          sports: i.A,
          visualArts: j.A,
          scholastic: k.A,
          schoolExcursions: l.A,
          studentAchievements: m.A,
        },
        s = {
          performingArts:
            "Performing Arts (Dance, Music, Theatre & Stagecraft)",
          sports:
            "Sports Development & Athletic Facilities",
          visualArts:
            "Visual Arts, Clay Modeling & Design Studio",
          scholastic:
            "Scholastic Learning Spaces, Labs & Library",
          schoolExcursions:
            "School Excursions & Experiential Learning Journeys",
          studentAchievements:
            "Student Achievements & Delfite Trailblazers",
        },
        t = {
          performingArts: "/achievements/Nrityanjali.jpeg",
          sports:
            "/achievements/Shreeja Singh at UP State Championship.jpg",
          visualArts:
            "/achievements/Unique Hospital Bed.jpg",
          scholastic: "/achievements/Pendulum Pump.png",
          schoolExcursions: "/achievements/ramjas (1).jpg",
          studentAchievements:
            "/achievements/Aadya Singh.jpg",
        },
        u = {
          "performing-arts": "performingArts",
          performingArts: "performingArts",
          "sports-development": "sports",
          sports: "sports",
          "visual-arts": "visualArts",
          visualArts: "visualArts",
          scholastic: "scholastic",
          "skill-enrichment": "scholastic",
          skillEnrichment: "scholastic",
          "school-excursions": "schoolExcursions",
          schoolExcursions: "schoolExcursions",
          "student-achievements": "studentAchievements",
          studentAchievements: "studentAchievements",
        };
      function v() {
        let { schoolId: a, sectionId: b } = (0, f.g)(),
          [c] = (0, f.ok)(),
          { schools: h } = (0, g.r)(),
          i = a && h[a] ? a : "dlf-sahibabad",
          j = h[i],
          k = j?.theme || {
            primary: "brand-greenDeep",
            vibrant: "brand-greenVibrant",
            accent: "brand-gold",
            accentHex: "#C59B27",
          },
          l = b || c.get("section"),
          m = l && u[l] ? u[l] : "performingArts",
          [v, w] = (0, e.useState)(m),
          x =
            "dlf-greater-noida" === i
              ? {
                  performingArts: [
                    {
                      src: "/images/dlws/dlws-hollistic-learning-educational-excursions-1.jpg",
                      caption:
                        "Stage performance & cultural presentations at DLF World School",
                    },
                    {
                      src: "/images/dlws/dlws-hollistic-learning-educational-excursions-2.jpg",
                      caption:
                        "Student music & theatrical ensemble rehearsal",
                    },
                    {
                      src: "/images/dlws/dlws-hollistic-learning-educational-excursions-3.jpg",
                      caption:
                        "Creative movement & dance showcase",
                    },
                  ],
                  sports: [
                    {
                      src: "/images/dlws/dlws-hollistic-learning-educational-excursions-8.jpg",
                      caption:
                        "UP State Swimming Champions — Amaris Patel (Class 7) winning Gold & Silver Medals",
                    },
                    {
                      src: "/images/dlws/dlws-hollistic-learning-educational-excursions-9.jpg",
                      caption:
                        "District Skating Champions — Gayatri Ganjoo & Jayditya Sharma at YMCA Rink",
                    },
                    {
                      src: "/images/dlws/dlws-hollistic-learning-educational-excursions-10.jpg",
                      caption:
                        "State Level E-Sports Championship Winners at Greater Noida",
                    },
                  ],
                  visualArts: [
                    {
                      src: "/images/dlws/dlws-holistic-learning-1.jpg",
                      caption:
                        "Art & Design Studio — Visual arts, clay modeling, and creative exhibits",
                    },
                    {
                      src: "/images/dlws/dlws-curriculum-3.jpg",
                      caption:
                        "Canvas painting & design workstations",
                    },
                  ],
                  scholastic: [
                    {
                      src: "/images/dlws/dlws-curriculum-1.jpg",
                      caption:
                        "THOTS & Mindspark Lab — Cognitive thinking & adaptive math sessions",
                    },
                    {
                      src: "/images/dlws/dlws-curriculum-2.jpg",
                      caption:
                        "Digital ICT & STEAM Research Lab",
                    },
                    {
                      src: "/images/dlws/dlws-curriculum-4.jpg",
                      caption:
                        "Air-conditioned Smart Classroom with interactive displays",
                    },
                  ],
                  schoolExcursions: [
                    {
                      src: "/images/dlws/dlws-hollistic-learning-educational-excursions-4.jpg",
                      caption:
                        "World Skill Challenge National Champions in Drone X Big",
                    },
                    {
                      src: "/images/dlws/dlws-hollistic-learning-educational-excursions-5.jpg",
                      caption:
                        "World Skill Challenge Mystery Makers National Winners",
                    },
                    {
                      src: "/images/dlws/dlws-hollistic-learning-educational-excursions-6.jpg",
                      caption:
                        "Manak Inspire Award Innovation Projects",
                    },
                    {
                      src: "/images/dlws/dlws-hollistic-learning-educational-excursions-7.jpg",
                      caption:
                        "SOARFEST 2025 Aero-modelling competition at Sikarpur Airport, Udaipur",
                    },
                  ],
                  studentAchievements: [
                    {
                      src: "/images/dlws/dlws-school-achievements-dlws-1.jpg",
                      caption:
                        "Kalamanjusha Overall Rolling Trophy Winners — DLF World School (36 Medalists)",
                    },
                    {
                      src: "/images/dlws/dlws-hollistic-learning-educational-excursions-1.jpg",
                      caption:
                        "Sustainability Superstar Award (2024 & 2025) by Go Sharpener",
                    },
                    {
                      src: "/images/dlws/dlws-hollistic-learning-educational-excursions-4.jpg",
                      caption:
                        "World Skill Challenge Drone X Big National Overall Champions",
                    },
                  ],
                }
              : {
                  performingArts: [
                    {
                      src: "/achievements/Nrityanjali.jpeg",
                      caption:
                        "Classical dance performance at Nrityanjali Inter-School Competition",
                    },
                    {
                      placeholder: !0,
                      title: "Annual Dance & Music Fest",
                      caption:
                        "Stage performance during Annual Cultural Extravaganza (Photos coming soon)",
                    },
                    {
                      placeholder: !0,
                      title: "Instrumental & Vocal Studio",
                      caption:
                        "Student choir & band rehearsal session (Photos coming soon)",
                    },
                  ],
                  sports: [
                    {
                      src: "/achievements/Nandini Kansal.jpg",
                      caption:
                        "Nandini Kansal — Represented India at ITF Nepal & Africa, AITA #21 (UP)",
                    },
                    {
                      src: "/achievements/Shreeja Singh at UP State Championship.jpg",
                      caption:
                        "Shreeja Singh — 5 Golds & 5 State Records, Best Swimmer at UP State Championship",
                    },
                    {
                      placeholder: !0,
                      title:
                        "Synthetic Football Turf Arena",
                      caption:
                        "High-intensity match action on professional turf (Photos coming soon)",
                    },
                    {
                      placeholder: !0,
                      title:
                        "Olympic-Size Skating Rink & Pickleball",
                      caption:
                        "Skating drills & pickleball coaching sessions (Photos coming soon)",
                    },
                  ],
                  visualArts: [
                    {
                      src: "/achievements/Unique Hospital Bed.jpg",
                      caption:
                        "Design & sculpture models created by students at the Design Studio",
                    },
                    {
                      placeholder: !0,
                      title:
                        "Annual Art & Sculpture Exhibition",
                      caption:
                        "Canvas paintings & clay models on display (Photos coming soon)",
                    },
                    {
                      placeholder: !0,
                      title:
                        "Craft & Digital Design Studio",
                      caption:
                        "Students crafting mixed-media artworks (Photos coming soon)",
                    },
                  ],
                  scholastic: [
                    {
                      src: "/achievements/Pendulum Pump.png",
                      caption:
                        "Mechanical Pendulum Pump — Top 3 at CBSE National Science Exhibition",
                    },
                    {
                      placeholder: !0,
                      title: "Thots Lab & Innovation Hub",
                      caption:
                        "Hands-on robotics and thinking process session (Photos coming soon)",
                    },
                    {
                      placeholder: !0,
                      title:
                        "Central Library & Seminar Hall",
                      caption:
                        "DEAR reading period and academic lectures (Photos coming soon)",
                    },
                  ],
                  schoolExcursions: [
                    {
                      src: "/achievements/ramjas (1).jpg",
                      caption:
                        "Students participating in inter-school outreach and educational camps",
                    },
                    {
                      placeholder: !0,
                      title:
                        "Outstation Leadership Camp (Chakrata/Dharamshala)",
                      caption:
                        "Adventure camping & trekking expedition (Photos coming soon)",
                    },
                    {
                      placeholder: !0,
                      title:
                        "International Exchange Tour (Russia/Malaysia)",
                      caption:
                        "Global student immersion and cultural exchange (Photos coming soon)",
                    },
                  ],
                  studentAchievements: [
                    {
                      src: "/achievements/Aadya Singh.jpg",
                      caption:
                        "Arsalan Alam & Aadya Singh — SPARC Scholars & VC Grant Innovators",
                    },
                    {
                      src: "/achievements/Shreeja Singh at UP State Championship.jpg",
                      caption:
                        "Shreeja Singh — Best Swimmer UP State Championship",
                    },
                    {
                      src: "/achievements/Ishika Singh cricket.jpg",
                      caption:
                        "Ishika Singh — Delhi Premier League All-Rounder",
                    },
                  ],
                },
          y =
            "dlf-greater-noida" === i
              ? {
                  performingArts:
                    "/images/dlws/dlws-hollistic-learning-educational-excursions-1.jpg",
                  sports:
                    "/images/dlws/dlws-hollistic-learning-educational-excursions-8.jpg",
                  visualArts:
                    "/images/dlws/dlws-holistic-learning-1.jpg",
                  scholastic:
                    "/images/dlws/dlws-curriculum-1.jpg",
                  schoolExcursions:
                    "/images/dlws/dlws-hollistic-learning-educational-excursions-4.jpg",
                  studentAchievements:
                    "/images/dlws/dlws-school-achievements-dlws-1.jpg",
                }
              : t,
          z = r[v];
        return (0, d.jsx)("div", {
          className:
            "pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30",
          children: (0, d.jsxs)("div", {
            className:
              "w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-12",
            children: [
              (0, d.jsxs)("div", {
                className:
                  "flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6",
                children: [
                  (0, d.jsxs)("div", {
                    children: [
                      (0, d.jsx)("span", {
                        className: `text-xs uppercase tracking-widest font-extrabold text-${k.vibrant}`,
                        children: "School Life & Wings",
                      }),
                      (0, d.jsx)("h2", {
                        className: `font-serif text-3xl sm:text-4xl font-bold text-${k.primary}`,
                        children: "Holistic Learning",
                      }),
                      (0, d.jsx)("p", {
                        className:
                          "text-xs sm:text-sm text-brand-muted mt-1 font-inter font-medium",
                        children:
                          "At DLF Schools, physical stamina, scholastic inquiry, and artistic expression are sculpted equally to nurture well-rounded global citizens.",
                      }),
                    ],
                  }),
                  (0, d.jsxs)(f.N_, {
                    to: `/school/${i}`,
                    className: `flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-${k.primary} hover:opacity-80 transition-opacity shrink-0`,
                    children: [
                      (0, d.jsx)(n.A, {
                        className: "w-4 h-4",
                      }),
                      " Back to School Home",
                    ],
                  }),
                ],
              }),
              (0, d.jsxs)("div", {
                className:
                  "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
                children: [
                  (0, d.jsxs)("div", {
                    className:
                      "lg:col-span-4 lg:sticky lg:top-32 z-10 bg-white rounded-3xl border border-gray-150 shadow-md p-5 space-y-3",
                    children: [
                      (0, d.jsx)("span", {
                        className:
                          "text-[10px] font-extrabold uppercase tracking-widest text-gray-400 block px-2 mb-1",
                        children: "Holistic Learning Wings",
                      }),
                      [
                        "performingArts",
                        "sports",
                        "visualArts",
                        "scholastic",
                        "schoolExcursions",
                        "studentAchievements",
                      ].map((a) => {
                        let b = r[a],
                          c = v === a,
                          e =
                            "performingArts" === a
                              ? "Performing Arts"
                              : "sports" === a
                                ? "Sports Development"
                                : "visualArts" === a
                                  ? "Visual Arts"
                                  : "scholastic" === a
                                    ? "Scholastic"
                                    : "schoolExcursions" ===
                                        a
                                      ? "School Excursions"
                                      : "Student Achievements";
                        return (0, d.jsxs)(
                          f.N_,
                          {
                            to: `/school/${i}/holistic-learning/${{ performingArts: "performing-arts", sports: "sports-development", visualArts: "visual-arts", scholastic: "scholastic", schoolExcursions: "school-excursions", studentAchievements: "student-achievements" }[a]}`,
                            onClick: () => w(a),
                            className: `w-full text-left flex items-center gap-3.5 p-3 rounded-2xl transition-all border cursor-pointer ${c ? `bg-${k.primary} text-white shadow-md border-transparent` : "bg-white hover:bg-gray-50 text-brand-charcoal border-gray-100"}`,
                            children: [
                              (0, d.jsxs)("div", {
                                className:
                                  "w-14 h-12 rounded-xl overflow-hidden shrink-0 relative bg-gray-100 shadow-inner flex items-center justify-center",
                                children: [
                                  (0, d.jsx)("img", {
                                    src: y[a],
                                    alt: "",
                                    className:
                                      "w-full h-full object-cover",
                                  }),
                                  (0, d.jsx)("div", {
                                    className:
                                      "absolute inset-0 bg-black/40 flex items-center justify-center text-white",
                                    children: (0, d.jsx)(
                                      b,
                                      {
                                        className:
                                          "w-4 h-4",
                                      },
                                    ),
                                  }),
                                ],
                              }),
                              (0, d.jsx)("span", {
                                className:
                                  "font-bold text-xs uppercase tracking-wider leading-snug",
                                children: e,
                              }),
                            ],
                          },
                          a,
                        );
                      }),
                    ],
                  }),
                  (0, d.jsxs)("div", {
                    className:
                      "lg:col-span-8 bg-white rounded-3xl border border-gray-150 shadow-xl overflow-hidden min-h-[450px] flex flex-col justify-between",
                    children: [
                      (0, d.jsxs)("div", {
                        className: "p-6 sm:p-8 space-y-6",
                        children: [
                          (0, d.jsxs)("div", {
                            className:
                              "w-full h-48 sm:h-60 rounded-2xl overflow-hidden relative shadow-md",
                            children: [
                              (0, d.jsx)("img", {
                                src: y[v],
                                alt: s[v],
                                className:
                                  "w-full h-full object-cover",
                              }),
                              (0, d.jsx)("div", {
                                className:
                                  "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent",
                              }),
                              (0, d.jsxs)("div", {
                                className:
                                  "absolute bottom-4 left-6 right-6 text-white flex items-center gap-3",
                                children: [
                                  (0, d.jsx)("div", {
                                    className:
                                      "w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center shrink-0 border border-white/20",
                                    children: (0, d.jsx)(
                                      z,
                                      {
                                        className:
                                          "w-5 h-5 text-white",
                                      },
                                    ),
                                  }),
                                  (0, d.jsxs)("div", {
                                    children: [
                                      (0, d.jsx)("h3", {
                                        className:
                                          "font-serif text-lg sm:text-xl font-bold leading-tight drop-shadow-md",
                                        children: s[v],
                                      }),
                                      (0, d.jsx)("span", {
                                        className:
                                          "text-[9px] uppercase font-bold text-brand-gold tracking-widest drop-shadow-sm",
                                        children:
                                          "Holistic Learning Pillar",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, d.jsx)("p", {
                            className:
                              "text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium bg-gray-50/50 p-6 rounded-2xl border border-gray-100/50",
                            children: {
                              performingArts:
                                "Performing Arts bring learning to life through movement, music, and expression. Whether it is dance, theatre, or vocal and instrumental music, students are encouraged to explore rhythm, storytelling, and stagecraft. Performances are thoughtfully woven into the school culture—be it daily assemblies, Annual Day functions, national celebrations, or thematic presentations during Scholastic Months—giving every child a platform to showcase talent, overcome stage fear, and build self-assurance.",
                              sports:
                                "Our sports infrastructure reflects both scale and ambition—designed to offer students diverse, high-quality training environments across Olympic and global sports. The campus features a newly developed synthetic football turf providing professional-grade conditions. Alongside this, students have access to dedicated volleyball and lawn tennis courts, encouraging both team spirit and individual stamina. The standout Olympic-size skating rink provides a unique platform to develop balance and speed. The school houses two well-maintained swimming pools, indoor basketball and badminton courts, and the only pickleball court in the vicinity.",
                              visualArts:
                                "Visual Arts at DLF Schools go far beyond conventional drawing and painting. Students engage with a wide range of creative mediums—sketching, canvas painting, clay modeling, sculpture, mixed media, and digital design—allowing them to experiment, take creative risks, and discover their own artistic voice. The focus is on observation, interpretation, and original expression. Art becomes a mode of critical thinking and emotional articulation, enhanced by our art-integrated academic approach where visual arts intersect with core subjects.",
                              scholastic:
                                "Our scholastic foundation is anchored in state-of-the-art tinkering labs, digital hubs, and rich library resources. The THOTS Lab and Innovation Hub are dedicated spaces where analytical reasoning and scientific inquiry are nurtured. Our scholastic learning environments include Physics, Chemistry, Biology, and ICT Labs, alongside the FIM Lab. These are complemented by a central library housing over 20,000 books, class libraries (Nursery-XII), the DEAR (Drop Everything And Read) period, and modern presentation spaces including an Auditorium, Assembly Hall, Seminar Halls, and Conference Rooms.",
                              schoolExcursions:
                                "Educational excursions are not a break from learning—they are learning in motion. Delfites participate in a rich variety of journeys: historical heritage walks, industry visits, science explorations, biodiversity parks, village immersions, museums, and outdoor leadership camps. Visits to prestigious institutions such as the President's Estate, National Physical Laboratory, Parliament Museum, and university research centres enable students to witness knowledge in action. Outdoor camps in Lohagarh Farms, Dharamshala, and Chakrata build resilience. Our students also participate in international exchange tours to countries like Russia, Malaysia, and beyond.",
                              studentAchievements:
                                "Every Delfite is encouraged to pursue multi-dimensional excellence—mastering academics, sports, and arts. Student Achievements showcase the remarkable triumphs of our Delfite Trailblazers across international sports championships, national science exhibitions, venture capital grants, and state records.",
                            }[v],
                          }),
                          (0, d.jsxs)("div", {
                            className: "space-y-4 pt-2",
                            children: [
                              (0, d.jsxs)("h4", {
                                className: `text-xs uppercase tracking-widest font-extrabold text-${k.vibrant} font-inter flex items-center gap-1.5`,
                                children: [
                                  (0, d.jsx)(o.A, {
                                    className:
                                      "w-3.5 h-3.5",
                                  }),
                                  " Key Highlights & Offerings",
                                ],
                              }),
                              (0, d.jsx)("div", {
                                className:
                                  "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                children:
                                  ("dlf-greater-noida" === i
                                    ? {
                                        performingArts: [
                                          "Dance & Movement Studio (Integrating Indian classical, contemporary, and folk stagecraft).",
                                          "Vocal Music Training (Hindustani classical, light vocal, and choir practice sessions).",
                                          "Instrumental Music Suite (Keyboards, drums, guitar, harmonium, and tabla).",
                                          "Stagecraft & Public Speaking (Assembly presentations, annual day performances, and theatrical hosting).",
                                        ],
                                        sports: [
                                          "Synthetic Football Turf (Professional-grade arena for competitive training and friendly matches).",
                                          "Olympic-Size Skating Rink (Developing balance, speed, precision, and state-level competitive edge).",
                                          "Exclusive Pickleball Court (State-of-the-art court introducing fast-paced modern racket sports).",
                                          "Lawn Tennis Court & Outdoor Arena (Fostering tactical agility, endurance, and sportsmanship).",
                                          "Discovery Den Indoor Play Zone (Sensory kinetic play equipment for kindergarten learners).",
                                        ],
                                        visualArts: [
                                          "Art & Design Studio (Sketching, pencil shading, canvas painting, and color harmony).",
                                          "Clay Modeling & Sculpting (Tactile 3D pottery, relief modeling, and ceramics).",
                                          "Mixed Media & Craft Studio (Upcycled art installations, block printing, and paper-m\xe2ch\xe9).",
                                          "Digital Graphic Design (Exploring visual storytelling, creative software, and poster art).",
                                        ],
                                        scholastic: [
                                          "THOTS & Mindspark Labs (Structured cognitive thinking processes and adaptive math learning).",
                                          "STEAM & Science Laboratories (Advanced Physics, Chemistry, and Biology research spaces).",
                                          "ICT & Computer Labs (High-speed digital labs equipped with smart coding platforms).",
                                          "3000+ Book Central Library (Curated literature, class reading corners, and DEAR periods).",
                                        ],
                                        schoolExcursions: [
                                          "Historical & Heritage Tours (Exploring national monuments, museums, and heritage walks).",
                                          "Institutional Expeditions (Visits to scientific centers, planetariums, and biodiversity parks).",
                                          "Adventure & Camping Expeditions (Outstation camps fostering resilience and team bonding).",
                                          "Environmental Outreach (Project S.O.R.T. waste segregation drives & eco-sustainability walks).",
                                        ],
                                        studentAchievements:
                                          [
                                            "Kalamanjusha Overall Rolling Trophy — 36 medalists winning 15 out of 17 events at KC International.",
                                            "Sustainability Superstar Award (2024 & 2025) — Conferred by Go Sharpener for 2 consecutive years.",
                                            "First in Math Annual Global Ranking 2025–26 — Global recognition for mathematical problem solving.",
                                            "World Skill Challenge National Champions — Overall Winner Titles in Drone X Big & Mystery Makers.",
                                            "Manak Inspire Awardees — 1st Position & ₹10,000 Cash Prize for Smart Ambulance & Fake Plate Buster.",
                                          ],
                                      }
                                    : {
                                        performingArts: [
                                          "Dance (Classical, Contemporary, and Folk movement integrated with stage performances).",
                                          "Vocal Music (Hindustani Classical, Light Vocal, and Choir performance training).",
                                          "Instrumental Music (Keyboards, Drums, Guitar, Harmonium, and Tabla practice sessions).",
                                          "Theatre & Drama (Scriptwriting, monologues, characterization, and theatrical expression).",
                                          "Stagecraft & Performance Art (Public speaking, stage presence, light/sound coordination, and hosting).",
                                        ],
                                        sports: [
                                          "Synthetic Football Turf (Professional-grade conditions for competitive training and matches).",
                                          "Olympic-Size Skating Rink (Developing balance, speed, precision, and competitive edge).",
                                          "Two Swimming Pools (Dedicated pools catering to different age groups and skill levels).",
                                          "Exclusive Pickleball Court (Introducing students to emerging fast-paced global racket sports).",
                                          "Indoor Basketball & Badminton Courts (Year-round practice and inter-school tournament hosting).",
                                          "Lawn Tennis Courts & Volleyball Arena (Developing endurance, tactical agility, and sportsmanship).",
                                        ],
                                        visualArts: [
                                          "Sketching & Pencil Shading (Mastering proportion, perspective, light, and shadow).",
                                          "Canvas Painting & Watercolors (Exploring color harmony, impressionism, and thematic expression).",
                                          "Clay Modeling & Pottery (Tactile 3D sculpting, form development, and ceramics).",
                                          "Sculpture & Mixed Media (Upcycled art installations, paper-m\xe2ch\xe9, and relief work).",
                                          "Digital Design & Graphic Art (Creative software illustration and visual storytelling).",
                                          "Craft & Design Studio (Hands-on block printing, tie-and-dye, and artisanal craft techniques).",
                                        ],
                                        scholastic: [
                                          "Thots Lab (Structured thinking process and cognitive skill building).",
                                          "Innovation Hub & FIM Lab (Robotics, AI coding, financial literacy, and tinkering projects).",
                                          "Science Labs (Advanced Physics, Chemistry, and Biology research laboratories).",
                                          "ICT & Computer Labs (High-speed digital labs for programming, web design, and data science).",
                                          "Central School Library (20,000+ books, digital archives, and class libraries for Nursery-XII).",
                                          "Auditorium, Assembly Hall, Seminar Halls & Conference Rooms (State-of-the-art event & lecture spaces).",
                                          "DEAR (Drop Everything And Read) Scheduled Period (Cultivating daily reading habits).",
                                        ],
                                        schoolExcursions: [
                                          "Historical & Heritage Walks (Exploring heritage monuments, museums, and cultural sites).",
                                          "Institutional Visits (President's Estate, National Physical Laboratory, Parliament Museum).",
                                          "Ecological Expeditions (Biodiversity parks, city forests, and rural village immersions).",
                                          "Adventure & Leadership Camps (Outstation camps at Lohagarh Farms, Dharamshala, and Chakrata).",
                                          "Global Educational Tours (International student exchange journeys to Russia, Malaysia, and more).",
                                        ],
                                        studentAchievements:
                                          [
                                            "Arsalan Alam — SPARC Internship Scholar & $10,000 International Venture Capital Grant Winner.",
                                            "Shreeja Singh — 5 Gold Medals & 5 State Records at UP State Swimming Championship (Best Swimmer).",
                                            "Ishika Singh — Prime All-Rounder in Delhi Premier League (DPL) Cricket for South Delhi Superstarz.",
                                            "Nandini Kansal — ITF International Tennis Representative in Nepal & Africa (AITA #21 UP Rank).",
                                            "Uday Kaul — ITF Kazakhstan Tennis Representative (AITA Men's All India Ranking 262).",
                                          ],
                                      })[v].map((a, b) => {
                                    let c =
                                        a.match(
                                          /^([^(—–]+)(.*)$/,
                                        ),
                                      e = c
                                        ? c[1].trim()
                                        : a,
                                      f = c
                                        ? c[2].trim()
                                        : "";
                                    return (0, d.jsxs)(
                                      "div",
                                      {
                                        className:
                                          "bg-white rounded-2xl border border-gray-150 p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between gap-3 group",
                                        children: [
                                          (0, d.jsxs)(
                                            "div",
                                            {
                                              className:
                                                "w-full h-32 rounded-xl overflow-hidden bg-gray-100 relative border border-gray-100 flex items-center justify-center",
                                              children: [
                                                (0, d.jsx)(
                                                  "img",
                                                  {
                                                    src:
                                                      x[
                                                        v
                                                      ]?.[
                                                        b %
                                                          (x[
                                                            v
                                                          ]
                                                            ?.length ||
                                                            1)
                                                      ]
                                                        ?.src ||
                                                      y[v],
                                                    alt: e,
                                                    className:
                                                      "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                                  },
                                                ),
                                                (0, d.jsx)(
                                                  "div",
                                                  {
                                                    className:
                                                      "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent",
                                                  },
                                                ),
                                                (0, d.jsx)(
                                                  "div",
                                                  {
                                                    className:
                                                      "absolute bottom-2 left-3 right-3 text-white",
                                                    children:
                                                      (0,
                                                      d.jsx)(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-[10px] font-extrabold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/30",
                                                          children:
                                                            v,
                                                        },
                                                      ),
                                                  },
                                                ),
                                              ],
                                            },
                                          ),
                                          (0, d.jsxs)(
                                            "div",
                                            {
                                              className:
                                                "space-y-1",
                                              children: [
                                                (0, d.jsxs)(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex items-start gap-2",
                                                    children:
                                                      [
                                                        (0,
                                                        d.jsx)(
                                                          p.A,
                                                          {
                                                            className: `w-4 h-4 text-${k.accent} shrink-0 mt-0.5`,
                                                          },
                                                        ),
                                                        (0,
                                                        d.jsx)(
                                                          "h5",
                                                          {
                                                            className: `font-bold text-xs text-${k.primary} font-serif leading-tight`,
                                                            children:
                                                              e,
                                                          },
                                                        ),
                                                      ],
                                                  },
                                                ),
                                                f &&
                                                  (0,
                                                  d.jsx)(
                                                    "p",
                                                    {
                                                      className:
                                                        "text-[11px] text-brand-muted font-inter leading-relaxed pl-6",
                                                      children:
                                                        f,
                                                    },
                                                  ),
                                              ],
                                            },
                                          ),
                                        ],
                                      },
                                      b,
                                    );
                                  }),
                              }),
                            ],
                          }),
                          "studentAchievements" === v &&
                            (0, d.jsxs)("div", {
                              className:
                                "space-y-6 border-t border-gray-100 pt-6",
                              children: [
                                (0, d.jsxs)("div", {
                                  className: "space-y-1",
                                  children: [
                                    (0, d.jsx)("span", {
                                      className: `text-xs uppercase tracking-widest font-extrabold text-${k.vibrant}`,
                                      children:
                                        "Delfite Trailblazers",
                                    }),
                                    (0, d.jsx)("h4", {
                                      className: `font-serif text-xl font-bold text-${k.primary}`,
                                      children:
                                        "Hall of Fame & Multi-Dimensional Achievers",
                                    }),
                                  ],
                                }),
                                (0, d.jsx)("div", {
                                  className:
                                    "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                  children:
                                    ("dlf-greater-noida" ===
                                    i
                                      ? [
                                          {
                                            name: "DLWS Kalamanjusha Team",
                                            achievement:
                                              "Overall Rolling Trophy Winners",
                                            desc: "36 students won Gold, Silver & Bronze medals across 15 out of 17 events at KC International School.",
                                            img: "/images/dlws/dlws-school-achievements-dlws-1.jpg",
                                          },
                                          {
                                            name: "Drone X Big Team",
                                            achievement:
                                              "WSC National Champions (2026)",
                                            desc: "National Overall Winner title & ₹16,000 cash prize at World Skill Challenge Faridabad Nationals.",
                                            img: "/images/dlws/dlws-hollistic-learning-educational-excursions-4.jpg",
                                          },
                                          {
                                            name: "Amaris Patel (Class VII)",
                                            achievement:
                                              "UP State Swimming Medalist",
                                            desc: "Won 2 Gold Medals and 1 Silver Medal in 100m, 200m & 50m Butterfly events at UP State Swimming Championship.",
                                            img: "/images/dlws/dlws-hollistic-learning-educational-excursions-8.jpg",
                                          },
                                          {
                                            name: "Gayatri Ganjoo & Jayditya Sharma",
                                            achievement:
                                              "District Skating Champions",
                                            desc: "1st & 2nd positions at Krida Bharti District Skating Championship at YMCA Greater Noida.",
                                            img: "/images/dlws/dlws-hollistic-learning-educational-excursions-9.jpg",
                                          },
                                          {
                                            name: "Manak Inspire Innovators",
                                            achievement:
                                              "National STEM Innovators",
                                            desc: "1st Position & ₹10,000 grant for Smart Ambulance, Fake Plate Buster & Smart Dustbin innovations.",
                                            img: "/images/dlws/dlws-hollistic-learning-educational-excursions-6.jpg",
                                          },
                                        ]
                                      : [
                                          {
                                            name: "Arsalan Alam",
                                            achievement:
                                              "Research Scholar & Innovator",
                                            desc: "Accepted at SPARC for a summer internship program amongst North American scholars. Received a $10,000 grant from VC firms.",
                                            img: "/achievements/Aadya Singh.jpg",
                                          },
                                          {
                                            name: "Shreeja Singh",
                                            achievement:
                                              "Champion Swimmer (Class IX)",
                                            desc: "Won 5 Gold Medals & broke 5 state records at UP State Championship, earning 'Best Swimmer' title.",
                                            img: "/achievements/Shreeja Singh at UP State Championship.jpg",
                                          },
                                          {
                                            name: "Ishika Singh",
                                            achievement:
                                              "DPL Cricket All-Rounder",
                                            desc: "Selected for Delhi Premier League (DPL) playing for South Delhi Superstarz.",
                                            img: "/achievements/Ishika Singh cricket.jpg",
                                          },
                                          {
                                            name: "Nandini Kansal",
                                            achievement:
                                              "ITF Tennis Player",
                                            desc: "Represented India at ITF tournaments in Nepal & Africa. Ranked #21 AITA UP.",
                                            img: "/achievements/Nandini Kansal.jpg",
                                          },
                                          {
                                            name: "Uday Kaul",
                                            achievement:
                                              "ITF Tennis Representative",
                                            desc: "Represented India at ITF Kazakhstan. Holds AITA Men's Ranking of 262.",
                                            img: "/achievements/Uday Kaul.jpg",
                                          },
                                        ]
                                    ).map((a, b) =>
                                      (0, d.jsxs)(
                                        "div",
                                        {
                                          className:
                                            "bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex gap-3 items-center",
                                          children: [
                                            (0, d.jsx)(
                                              "img",
                                              {
                                                src: a.img,
                                                alt: a.name,
                                                className:
                                                  "w-14 h-14 rounded-xl object-cover shrink-0 border border-gray-150",
                                              },
                                            ),
                                            (0, d.jsxs)(
                                              "div",
                                              {
                                                className:
                                                  "space-y-0.5",
                                                children: [
                                                  (0,
                                                  d.jsx)(
                                                    "span",
                                                    {
                                                      className: `text-[8px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded bg-${k.primary}/10 text-${k.primary}`,
                                                      children:
                                                        a.achievement,
                                                    },
                                                  ),
                                                  (0,
                                                  d.jsx)(
                                                    "h5",
                                                    {
                                                      className:
                                                        "font-serif text-sm font-bold text-brand-charcoal pt-0.5",
                                                      children:
                                                        a.name,
                                                    },
                                                  ),
                                                  (0,
                                                  d.jsx)(
                                                    "p",
                                                    {
                                                      className:
                                                        "text-[10px] text-brand-muted leading-tight line-clamp-2",
                                                      children:
                                                        a.desc,
                                                    },
                                                  ),
                                                ],
                                              },
                                            ),
                                          ],
                                        },
                                        b,
                                      ),
                                    ),
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, d.jsxs)("div", {
                        className: `bg-${k.primary}/5 border-t border-gray-100 p-5 flex items-center gap-3`,
                        children: [
                          (0, d.jsx)(q.A, {
                            className: `w-4 h-4 text-${k.accent} shrink-0`,
                          }),
                          (0, d.jsx)("p", {
                            className:
                              "text-[10px] sm:text-xs font-inter font-bold text-brand-muted",
                            children:
                              "At DLF Schools, physical stamina, scholastic inquiry, and artistic expression are sculpted equally to nurture well-rounded global citizens.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    87993: (a, b, c) => {
      c.d(b, { A: () => d });
      let d = (0, c(3080).A)("arrow-left", [
        ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
        ["path", { d: "M19 12H5", key: "x3x0zl" }],
      ]);
    },
    99691: (a, b, c) => {
      c.d(b, { A: () => d });
      let d = (0, c(3080).A)("sparkles", [
        [
          "path",
          {
            d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
            key: "1s2grr",
          },
        ],
        ["path", { d: "M20 2v4", key: "1rf3ol" }],
        ["path", { d: "M22 4h-4", key: "gwowj6" }],
        [
          "circle",
          { cx: "4", cy: "20", r: "2", key: "6kqj1y" },
        ],
      ]);
    },
  }));
