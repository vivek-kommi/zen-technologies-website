/* ==========================================================================
   ZEN TECHNOLOGIES — Product Catalog (single source of truth)
   Every category page + the home page spotlight render from this file,
   so no product from the real portfolio gets silently dropped.
   ========================================================================== */

window.ZEN_DATA = {
  categories: [
    {
      id: "live-ranges",
      name: "Live Ranges",
      short: "Live Ranges",
      page: "products/live-ranges.html",
      tagline: "Real steel. Real range. Real feedback.",
      description: "Instrumented live-fire infrastructure — from full containerised ranges to smart electronic targets — that turns every round fired into scored, actionable data.",
      products: [
        {
          name: "Containerised Indoor Shooting Range",
          slug: "cisr", specs: [["Small Arms Calibre", "Up to .50 calibre"], ["CCTV Monitoring", "360° from control room"], ["Ventilation", "Sophisticated ventilation/air-conditioning system"], ["Modular Expansion", "Length, width and storeys can expand laterally or vertically"]], longDescription: "Zen CISR is a self-contained, transportable, live-fire shooting facility that can include a target retrieval system and firearm judgmental training video simulator, or serve as a forensic ballistic test facility. Acoustic and ricochet-resistant materials line the range for a clean, safe and discreet training environment. The mains- or generator-powered facility contains sophisticated ventilation, a variety of soft bullet catchers, and supports a Target Retrieval System and Video Targetry Simulator with 360° CCTV monitoring from the control room.",
          code: "CISR",
          img: "assets/img/products/cisr.webp",
          tagline: "Transportable live-fire facility, up to .50 cal",
          description: "A fully self-contained, transportable indoor range built into standard containers, deployable anywhere a unit needs to train.",
          bullets: [
            "Rated for small arms up to .50 calibre",
            "Acoustic dampening for base/urban deployment",
            "Modular design allows expansion lane by lane"
          ]
        },
        {
          name: "Shoot House",
          slug: "shoot-house", specs: [["Live Firing Calibers", "5.56mm and 7.62mm small arms"], ["Firing Coverage", "360° internal live firing"], ["Power", "Generator with emergency lighting"], ["Recoil Simulation", "CO2 gas-filled magazine for laser-emitter weapons"]], longDescription: "Zen Shoot House is a safe indoor facility built for security personnel to practice eliminating threats in a closed built-up-area environment. It is a concrete and brick/masonry structure with ballistic protection, ballistic doors and windows, a wooden staircase, elevator shaft, trap-door, rubber furniture and fire-retardant materials, ensuring complete safety during live-fire room-intervention drills. Two-sided tactical training with simulated fire is enabled via the Zen Indoor Tracking System with laser fire and multi-functional targets, while video cameras record every drill for After Action Review.",
          code: "Live & Simulated Indoor Tactical Training",
          img: "assets/img/products/shoot-house.webp",
          tagline: "CQB and room-clearing under real conditions",
          description: "A ballistically protected indoor facility purpose-built for close-quarter-battle and room-clearing drills.",
          bullets: [
            "Movable walls for reconfigurable floor plans",
            "Real-time activity tracking of trainees",
            "Supports both live-fire and simulated munitions"
          ]
        },
        {
          name: "Smart Target System",
          slug: "lomah", video: "yz6Zba41nc8", specs: [["Power", "230V AC 50Hz or DC battery"], ["Operating Temperature", "0-50°C"], ["Projectile Detection", "Residual velocity of 450 m/sec or more"], ["Target Exposure Time", "Adjustable, 2 to 6 seconds"], ["Configuration", "Wired and wireless available"]], longDescription: "Zen Smart Target System (LOMAH) is an electro-mechanical, software-driven acoustical projectile detection and reporting system for outdoor live small-arms firing ranges. It pairs a Pop-up Target with acoustic sensors and Firing Point Equipment for instant hit-location display per lane, with a central Master Control Station monitoring and recording results across every firing lane. It records shot location, miss location, group size, mean point of impact, score and rating, storing and printing all training data for later review.",
          code: "LOMAH™",
          img: "assets/img/products/lomah.jpg",
          tagline: "Acoustic hit-location on live ranges",
          description: "Location Of Miss And Hit technology uses acoustic sensors to detect projectiles in flight and display exact shot location and grouping in real time.",
          bullets: [
            "Millisecond acoustic triangulation of each round",
            "Live grouping/scoring feedback to the firer",
            "Deploys on standard outdoor rifle ranges"
          ]
        },
        {
          name: "Master Control Station",
          slug: "mcs", longDescription: "Zen Master Control Station is a Live Firing Range Control System enabling display and control of every target in a range, including infantry targets (MFTS, LOMAH, rail moving targets) and tank targets (static, pop-up, rail). It supports programmed target behaviour per exercise, allocation of targets to trainee lanes with real-time performance updates, tough-pad-based handheld range control stations for instructors, and instant scoring and collation of hits up to squad, sub-unit and unit level.",
          code: "MCS",
          img: "assets/img/products/mcs.webp",
          tagline: "Command centre for the entire live range",
          description: "The central control system that programs target behaviour, allocates firing lanes, and scores marksmanship across an entire live range from one station.",
          bullets: [
            "Centralised lane allocation and scenario scripting",
            "Live scoring and range-wide safety control",
            "Interoperates with LOMAH and target arrays"
          ]
        },
        {
          name: "CornerShot Weapon System",
          slug: "trikaal-cornershot", specs: [["Swivel Angle", "65° left or right"], ["Engagement Range", "In excess of 50m"], ["Clear Viewing Range", "200m by day, 30m by night"], ["Compatible Pistols", "Glock 17, Glock 19, 9mm Browning"], ["Setup Time", "Under one minute"]], longDescription: "Zen CSWS TRIKAAL is an advanced CornerShot weapon system that facilitates shooting around corners, over walls, or over the top without exposing the firer, supporting standing, kneeling, hip or lying positions. It mounts a high-resolution low-light/IR camera, IR illuminator, red dot laser and tactical torch, with the pistol shoulder-fired and swiveled left or right, the video feed relaying to an adjustable display monitor. The system requires no modification to the original weapon and allows magazine changes without removing the pistol from its housing.",
          code: "Zen CSWS TRIKAAL",
          img: "assets/img/products/trikaal-cornershot.jpg",
          tagline: "Engage around corners, without exposure",
          description: "A pistol-mounted device that lets an operator aim and fire around corners or over walls using an onboard camera and IR sighting, keeping the shooter covered.",
          bullets: [
            "Live camera + IR sight feed to a hip-mounted display",
            "Engagement range up to 50m",
            "Fits standard sidearms for CQB units"
          ]
        },
        {
          name: "Tank Targets",
          slug: "tank-targets", specs: [["Target Size", "Up to 3×3m"], ["Base Height", "1.5m from finished ground level"], ["Exposure/Conceal Time", "5 to 10 seconds"], ["Operating Temperature", "-20°C to +60°C"], ["Power", "Battery-powered, wireless communication"]], longDescription: "Zen offers static and moving tank target systems — the pop-up Static Tank Target Mechanism (STTM) and rail-based Moving Tank Target Mechanism (MTTM) — built for range and tactical firing practice. The MTTM is a rail-based moving platform carrying the designated tank target, while the STTM is a stationary, battery-powered, wireless, weatherproof target with hit-sensing capability. Pop-up/down movement and hit monitoring are both controlled from the Control Station.",
          code: "MTTM / STTM",
          img: "assets/img/products/tank-targets.webp",
          tagline: "Moving & static armour targets for gunnery ranges",
          description: "Rail-based moving and static, battery-powered pop-up tank target mechanisms built for realistic armoured gunnery training.",
          bullets: [
            "Rail-guided moving target (MTTM) and static pop-up (STTM)",
            "Operates from -20°C to +60°C",
            "Battery-powered for range flexibility"
          ]
        },
        {
          name: "Air-to-Ground Firing Range Scoring System",
          slug: "air-to-ground-scoring", specs: [["Tracking Distance", "Up to 15km, single or formation approaches"], ["Components", "Target Sensors, Gunnery Sensor Units, Tracking Sensor Units, Ground Station, Debriefing Station"], ["Data Tracked", "Speed, distance to target, dive angle, height"]], longDescription: "Zen's Air-to-Ground Firing Range Scoring System offers real-time tracking and scoring with high accuracy, modular capacity for various ammunition types, and machine-learning algorithms tuned for demanding environments. Target Sensors built on a high-precision pan-tilt unit with thermal and infrared-optical sensors work alongside Gunnery Sensor Units for mobile deployment and Tracking Sensor Units capable of following single or formation approaches, day and night, out to 15km. A Debriefing Station then provides score cards and impact/approach video of the combat jets or helicopters involved.",
          code: "Gunnery run scoring",
          img: "assets/img/products/air-to-ground-scoring.webp",
          tagline: "Score every strafing or bombing run automatically",
          description: "A thermal and electro-optical tracking system that scores aircraft gunnery runs against ground targets in day or night conditions.",
          bullets: [
            "Thermal + EO tracking of impact points",
            "Day and night operation",
            "Automated scoring for air-to-ground qualification"
          ]
        },
        {
          name: "Tank Zeroing System",
          slug: "tank-zeroing-system", specs: [["Components", "Electronic Bore Sighting Unit, Gunner's Display Unit, Hit Detection & Analysis System"], ["Power", "Battery-operated"], ["Communication", "Extendable range via RF"], ["Functionality", "Zoom & pan, record/replay/print"]], longDescription: "Zen TZS is a precision system for bore-sighting and zeroing the main gun of tanks and other armoured fighting vehicles, built for a speedy, reliable process that saves manpower and ammunition. The Electronic Bore Sighting Unit captures and processes the bore-sighting target image, the Gunner's Display Unit displays it, and the Hit Detection and Analysis System zeroes the gun via live firing and generates correction inputs. The portable, battery-operated, all-weather system serves both zeroing and firing practice, with zoom/pan and record/replay/print capability.",
          code: "TZS",
          img: "assets/img/products/tank-zeroing-system.jpg",
          tagline: "Precision bore-sighting for main guns",
          description: "A bore-sighting and zeroing kit — electronic bore-sight unit, gunner display, and hit detection — for tank main armament.",
          bullets: [
            "Electronic bore-sight unit with gunner display",
            "Automated hit detection during zeroing",
            "Compatible with main battle tank platforms"
          ]
        },
        {
          name: "ShootEdge®",
          slug: "shootedge", specs: [["Swivel Angle", "65° left or right"], ["Safety Levels", "Three — trigger lock, fore-stock swivel lock, angle-restricted safety pin"], ["Sub-assemblies", "Four — rear stock, fore stock, sensor block, butt stock"], ["Sensors", "IR sensor, camera, laser pointer, LED torch"]], longDescription: "ShootEdge is a special-purpose adapter for handguns or under-barrel grenade launchers that aids in viewing and shooting around a corner, over a wall, or from under a low gap without exposing the user. The gun swivels 65° left or right via a sliding handle that locks automatically, with a day/night camera relaying video to an LCD screen alongside an LED torch, laser pointers and IR sensors for aiming. Its center of gravity sits at the geometric centre for balance, with three levels of safety built across four major sub-assemblies.",
          code: "Concealed-position shooting",
          img: "assets/img/products/shootedge.jpg",
          tagline: "Fire accurately from cover",
          description: "A tactical pistol adapter with a swivelling fore-stock and day/night camera enabling accurate shooting from concealment or around corners.",
          bullets: [
            "Swivelling fore-stock for off-axis engagement",
            "Integrated day/night camera sighting",
            "Lightweight add-on for standard sidearms"
          ]
        },
        {
          name: "Containerised Small Arms Firing Range",
          slug: "csafr", specs: [["Live Firing Range", "Up to 800m, 1200m with telescopic sight"], ["Structure", "Modular, portable, minimal outside noise signature"], ["Training Scenarios", "Mountains, plains, deserts, airport, urban landscapes"]], longDescription: "Zen CSAFR is a modular live-fire range for building combat shooting skills, delivering real-world battle situations with ballistic realism, zero danger area and rapid deployment. A Projected Target System enables realistic firing on moving targets in wind, with tactical and anti-terrorist video scenarios and AI-based opposing forces across varied terrain. It supports team training and automated scoring for individuals and teams, suited to military stations, regimental centres, battle schools and police/paramilitary training institutions.",
          code: "CSAFR",
          img: "assets/img/products/csafr.webp",
          tagline: "A full range, in a box, to 1200m",
          description: "A portable, modular range that simulates realistic terrain — mountains, urban, desert — with automated scoring out to long distance.",
          bullets: [
            "Configurable to 800m or 1200m engagement",
            "Simulated mountain, urban and desert terrain sets",
            "Automated scoring, no manual pit crew needed"
          ]
        },
        {
          name: "Multi-Functional Target System",
          slug: "mfts", video: "lal53kr4V_0", specs: [["Ingress Protection", "IP 65"], ["Power", "230V AC 50Hz or DC battery"], ["Operating Temperature", "0-50°C"], ["Features", "Embedded motion sensors, night illumination"]], longDescription: "Zen Multi-Functional Target System (MFTS) is an electro-mechanical system of versatile, firer-programmable targets for movement-based firing practice at outdoor and indoor ranges. It is portable, rugged, all-weather and IP65-rated, available in wired and wireless configurations. Key features include recording single-shot slow/rapid fire and fully automatic fire, instructor-set exposure time, embedded motion sensors for automatic exposure, and night-firing illumination.",
          code: "MFTS®",
          img: "assets/img/products/mfts.webp",
          tagline: "Programmable smart targets, indoors or out",
          description: "Programmable electro-mechanical range targets fitted with motion sensors, usable in both indoor and outdoor ranges.",
          bullets: [
            "Programmable exposure/motion sequences",
            "Motion-sensor hit detection",
            "Indoor and outdoor rated"
          ]
        }
      ]
    },
    {
      id: "live-simulation",
      name: "Live Simulation",
      short: "Live Simulation",
      page: "products/live-simulation.html",
      tagline: "Force-on-force, instrumented, and safe.",
      description: "Laser- and sensor-instrumented systems that turn full-scale field exercises into tracked, scored, after-action-ready engagements.",
      products: [
        {
          name: "Hand Grenade Simulator",
          slug: "he36s", video: "quX_h3Zr2T8", specs: [["Reusability", "80 to 100 times per unit"], ["Recommended Issue", "1 set of 100 grenades per company; 4-6 sets per battalion"], ["Components", "Shell, internal parts, pyro-tech cartridge"]], longDescription: "Zen HE36S is a patented, non-fragmenting, reusable hand grenade simulator matching the dimension, shape, weight, look and feel of the HE36 hand grenade used by security forces. It produces a mild blast, flash, smoke and sound to build mind-body coordination and safe handling habits, with only minor burn risk if mishandled. Its fixed time fuse supports reflex-action training so soldiers can react to a grenade thrown at them, and it can also be fired from a rifle for group training in confined spaces.",
          code: "HE36S®",
          img: "assets/img/products/he36s.webp",
          tagline: "Reusable grenade realism, zero fragmentation risk",
          description: "A patented, reusable grenade replica that reproduces blast, flash and sound for realistic practice without any fragmentation hazard.",
          bullets: [
            "Reusable across thousands of training throws",
            "Authentic blast, flash and sound signature",
            "No fragmentation — safe for close-range drills"
          ]
        },
        {
          name: "Armour Combat Training System",
          slug: "acts", specs: [["Detection Accuracy", "±30cm at 2km distance"], ["Laser", "Class 1 eye-safe, IEC 60825-1"], ["Modules", "Laser Unit, Sensor Unit, Exercise Control, Interface Unit, Base Station, Transparent Display Unit, Commander Display Unit, Umpire Gun"]], longDescription: "ZEN ACTS is built for the training needs of mechanised forces in field craft, battle drills and tactical/gunnery procedures, enabling force-on-force tactical training with simulated battle engagements. Retrofitted laser and sensor units integrate with exercise control, base station and display units — all modular, independently battery-powered and wirelessly connected without requiring tank modification. Real-time tank-vs-tank battle comes with automated objective assessment, audio-visual hit alarms indicating K-Kill/M-Kill status, and comprehensive After Action Review with 2D/3D manoeuvre playback.",
          code: "ZEN ACTS™",
          img: "assets/img/products/acts.webp",
          tagline: "Tank-vs-tank force-on-force, fully instrumented",
          description: "A laser- and sensor-instrumented system for full force-on-force tank-versus-tank live training with automated engagement assessment.",
          bullets: [
            "Laser engagement simulation between armoured vehicles",
            "Automated kill/hit assessment",
            "Built for brigade-scale armour exercises"
          ]
        },
        {
          name: "TacSim® Indoor Tracking System",
          slug: "tacsim-its", specs: [["Positional Accuracy", "30cm inside the room"]], longDescription: "Zen TacSim with Indoor Tracking System meets the training needs of forces combating threats operating from built-up areas, functioning where GPS does not. Cameras, sensors and transmitters mounted on walls and ceilings capture and transmit near-real-time 3D/2D images and live video to an Exercise Control Centre for realistic two-sided tactical engagement. The system records every event — presence, movement, fire-fights, injuries and kills — for on-the-spot critique or After Action Review, and supports multiple rooms or existing CCTV networks simultaneously.",
          code: "ITS",
          img: "assets/img/products/tacsim-its.webp",
          tagline: "GPS-denied positional tracking, 30cm accuracy",
          description: "Indoor positional tracking for trainees in GPS-denied environments, accurate to roughly 30cm, built for built-up-area and CQB exercise review.",
          bullets: [
            "30cm-class indoor position accuracy",
            "Works fully GPS-denied",
            "Feeds after-action review for CQB drills"
          ]
        },
        {
          name: "TacSim® Tactical Engagement Simulator",
          slug: "tacsim-tactical-engagement", specs: [["Coverage", "2km diameter effective; 5km with clear line of sight; extendable to 40×40km"], ["Capacity", "Up to 5000 entities per exercise"], ["Laser", "Class 1 eye-safe, point-blank rated"]], longDescription: "Zen TacSim trains soldiers using laser-based, real-time force-on-force simulation that assimilates lasers fired from personal weapons, battalion-support weapons and major combat systems, recording engagement results with optional simulated artillery fire and minefields. Harness sets integrated with GPS, control units and communication modules trigger alarms on hits and deactivate on a kill, with severity-based alarm sounds. Built for commando units, special operations groups, special task forces and police battalions, it supports scenarios like patrolling, ambush, roadblocks, house clearance and urban combat via a laptop-based Exercise Control Centre.",
          code: "Laser force-on-force",
          img: "assets/img/products/tacsim-tactical-engagement.webp",
          tagline: "Instrumented engagement across every weapon platform",
          description: "A laser-based force-on-force system that tracks live-fire-style engagements across multiple weapon platforms during field exercises.",
          bullets: [
            "Cross-platform laser engagement tracking",
            "Full-exercise engagement logging",
            "Scales from squad to large field exercises"
          ]
        },
        {
          name: "4 Barrel Rotary Machine Gun",
          slug: "rotary-mg-4barrel", specs: [["Caliber", "12.7×99mm, NATO-compatible"], ["Rate of Fire", "Up to 3,500 rounds/min, adjustable to 900"], ["Power", "24 VDC motor"], ["Length", "Approx. 1,300mm"], ["Weight", "50kg"]], longDescription: "The 12.7mm Rotary Machine Gun is purpose-built for anti-drone applications, using four barrels to deliver up to 3,500 rounds per minute for exceptional hit probability, area coverage and sustained firepower. It is electrically powered by a 24 VDC motor with a variable rate of fire reducible to 900 rounds per minute to optimise ammunition consumption for specific missions. At roughly 1,300mm long and 50kg, it offers a compact, lightweight solution compatible with standard 12.7×99mm NATO ammunition.",
          code: "12.7×99mm, anti-drone capable",
          tagline: "3,500 rounds/min against fast, small aerial threats",
          description: "An electrically-driven 4-barrel 12.7×99mm gun capable of up to 3,500 rounds per minute, developed with counter-drone engagement in mind.",
          bullets: [
            "Up to 3,500 rounds/min cyclic rate",
            "Electrically driven 4-barrel rotary action",
            "Purpose-built for anti-drone hard-kill"
          ]
        },
        {
          name: "Underbelly Turreted Cannon System",
          slug: "utcs", specs: [["Caliber", "20mm twin-barrel (20×102mm)"], ["Stabilization Accuracy", "Under 0.3 mRad"], ["Encoder", "19-bit rotary encoder"], ["Elevation Range", "-14.5° to 47°"], ["Traverse Range", "±105°"], ["Rate of Fire", "Up to 2,600 rounds/min, adjustable to 780"], ["Weight", "Under 225kg"]], longDescription: "The Underbelly Turreted Cannon System is a lightweight, compact 20mm twin-barrel autocannon designed for combat helicopters, offering precision and firepower in dynamic combat scenarios. It delivers stabilisation accuracy under 0.3 mRad via a 19-bit rotary encoder, wide elevation and traverse coverage, and a synchronised high rate of fire with automatic misfire recocking. Weighing under 225kg and compatible with standard 20×102mm ammunition, it is designed as a drop-in upgrade for existing single-barrel 20mm installations without compromising aircraft design or performance.",
          code: "UTCS",
          tagline: "20mm twin-barrel turret for combat helicopters",
          description: "A lightweight, twin-barrel 20mm autocannon turret designed for mounting under combat helicopters.",
          bullets: [
            "20mm twin-barrel autocannon",
            "Lightweight underbelly turret mount",
            "Built for rotary-wing combat platforms"
          ]
        }
      ]
    },
    {
      id: "virtual-simulation",
      name: "Virtual Simulation",
      short: "Virtual Simulation",
      page: "products/virtual-simulation.html",
      tagline: "Every crew position, every platform, indoors.",
      description: "A full family of indoor virtual trainers spanning infantry weapons, armour crews, artillery, air defence, aviation and driving — building muscle memory before a single live round is fired.",
      products: [
        { name: "Integrated Simulation Complex", slug: "integrated-simulation-complex", domain: "Naval", code: "Multi-Simulator Naval Training Ecosystem", tagline: "Bridge, combat, machinery and submarine simulators, unified", description: "A cutting-edge multi-simulator complex that integrates naval, air, land and subsurface force trainers into one unified ecosystem, with real-time data exchange, dynamic threat modelling and synchronized training across every simulator.", bullets: ["Primary & Secondary Warship Bridge and Combat Information Centre (CIC) simulators", "Submarine Operations and Deep Submergence Rescue Vehicle (DSRV) simulators", "Fast Attack Craft simulator with ECDIS, RADAR/ARPA and GMDSS communications rooms", "Warship Machinery simulators plus a Unified Simulation Control Centre and debriefing room", "Every session scores Readiness Points across accuracy, speed and coordination, feeding one Combat Readiness Score"] },
        { name: "81mm Mortar Integrated Simulator", slug: "81mm-mis", video: "ZqcvgK5vwjc", specs: [["Caliber", "81mm"], ["Mortars per Platoon", "4 or 6 to-scale mortars"], ["Configuration", "Instructor Station, Mortar Fire Controller Station, Mortar Position Controller Station"], ["Versions", "Battalion (4/6 mortars) and Mechanised"]], longDescription: "Zen 81mm MIS builds proficiency in operating and firing the 81mm mortar, supporting engagement by single or multiple mortar platoons. It renders 3D scenarios across all terrain types, varied targets, ammunition effects and environmental effects with realistic sound. It cuts ammunition, fuel, logistics, training time and effort while still meeting 100% of training objectives, including data analysis, zoom, look-around, recording, replay and individual performance evaluation.", domain: "Artillery", code: "81mm MIS", img: "assets/img/products/81mm-mortar-simulator.webp", tagline: "Indoor 3D mortar crew & platoon trainer", description: "An indoor 3D virtual trainer for 81mm mortar crews and platoons across varied terrain and ammunition effects.", bullets: ["3D terrain and weather variation", "Crew and platoon-level training modes", "Multiple ammunition-effect models"] },
        { name: "Anti-Aircraft Air Defence Simulator", slug: "3ads", longDescription: "Zen 3ADS trains operators on laying procedures in simulated and field conditions, including the psycho-physiological stress experienced at missile launch. Lightweight and modular, it provides missile-launch data, target movement details and hit-miss information for After Action Review. The system comprises three Field Simulator Sets and a Practice Launching Set, offering six training modes from synthesised 3D targets to training against real friendly targets and dynamically similar aircraft, plus dedicated psycho-physiological training with setback force, jerks, sound and flash effects.", domain: "Air Defence", code: "3ADS", img: "assets/img/products/3ads-anti-aircraft.webp", tagline: "Missile-launch procedure training", description: "A missile-launch procedure trainer with 3D synthesised targets and terrain, including psycho-physiological training modes.", bullets: ["3D synthesized aerial targets", "Full launch-procedure drills", "Psycho-physiological stress training modes"] },
        { name: "Anti-Tank Guided Missile Simulator", slug: "atgm-sim", video: "8_mci5o_Ab8", longDescription: "Zen ATGM Sim is an indoor simulator built to meet the training needs of missile pilots, honing skills of trained pilots and recruits while tracking trainee performance in real time. It integrates a Konkurs missile launcher with its sight, and computer-generated scenarios simulate battlefield conditions including target area and the speed and direction of moving targets. Its adaptable software integrates with any anti-tank guided missile in service — Milan, Konkurs, FAGOT and other advanced launchers — and the rugged unit can be taken to remote areas for field training.", domain: "Infantry", code: "ATGM® Sim", img: "assets/img/products/atgm-simulator.webp", tagline: "Real launcher controls, virtual engagement", description: "An indoor trainer built around real launcher controls for missile detection, tracking and engagement skills.", bullets: ["Uses authentic launcher controls", "Detect-track-engage skill progression", "Indoor, all-weather training"] },
        { name: "Artillery Forward Observers Simulator", slug: "artyfos", video: "pfVzZzpT7LQ", specs: [["Training Room Size", "20ft × 25ft"], ["Simultaneous Fire Units", "Up to nine"], ["Scale", "Single gun up to a full Brigade of Artillery"]], longDescription: "Zen ArtyFOS trains Observation Post Officers and Forward Observers of the artillery, plus other combat-arm officers who fire long-range indirect weapons like mortars, guns, howitzers, rockets and missiles. An Instructor Station and Observation Post Officer Trainee Station support a trainer-training module for standardised force-wide training, run year-round indoors in a 20ft × 25ft room. It recreates field firing ranges with dispersion zones, meteorological conditions, shell-to-shell variation and ballistic trajectories, cutting the heavy logistics normally required for artillery training.", domain: "Artillery", code: "ArtyFOS", tagline: "Indirect-fire observer training, realistic ballistics", description: "An indoor simulator (roughly 20x25ft) for indirect-fire observers covering mortars, howitzers and rockets with realistic ballistics.", bullets: ["Covers mortars, howitzers and rockets", "Realistic ballistic modelling", "Compact indoor footprint"] },
        { name: "Automatic Grenade Launcher Simulator", slug: "agl-sim", specs: [["Scalability", "Two-lane baseline system, up to eight lanes"]], longDescription: "Zen AGL Sim offers a complete training solution for an automatic grenade launcher crew, giving trainees a near-real environment of terrain, combat situation and weapon. It supports multi-profile static and moving target engagement in direct, indirect and anti-aircraft roles, including against hovering or slow-flying helicopters, with low- and high-angle firing up to prescribed engagement ranges. It ships pre-loaded with weapon characteristic data and range tables plus a scenario builder for custom tactical exercises, reducing wear on service weapons and ammunition costs.", domain: "Infantry", code: "AGL Sim", img: "assets/img/products/agl-simulator.webp", tagline: "Direct, indirect and anti-aircraft AGL modes", description: "A virtual crew trainer for automatic grenade launchers covering direct, indirect and anti-aircraft engagement modes.", bullets: ["Direct and indirect fire modes", "Anti-aircraft engagement training", "Crew-served weapon realism"] },
        { name: "Carrier Mortar Tracked Simulator", slug: "cmt-sim", specs: [["Caliber", "Trains crew on 81mm mortar"], ["Configuration", "Mounting Platform, Fire Controller Station, MPC Station, Instructor Station"]], longDescription: "Zen CMT Sim is a fully integrated indoor simulator designed for total realism in operational training of mechanised forces. It trains the 81mm mortar crew of a mechanised infantry battalion in efficient handling and effective firing under simulated range conditions with accurate weapon performance parameters. Its modular configuration allows flexible installation and use, ensuring uninterrupted training regardless of weather, logistics or ammunition and range availability.", domain: "Artillery", code: "CMT Sim", tagline: "Mechanised-infantry 81mm mortar crew trainer", description: "An indoor simulator for mechanised-infantry 81mm mortar crews with automated performance evaluation.", bullets: ["Built for tracked-carrier mortar crews", "Automated performance scoring", "Indoor, repeatable drills"] },
        { name: "Infantry Weapons Training Simulator", slug: "iwts", specs: [["Display Screen", "30ft × 8ft"], ["Weapons Supported", "Pistol, carbine, rifle, machine gun, sniper rifle, grenade launcher, rocket launcher"], ["Firing Positions", "Lying, kneeling, standing"]], longDescription: "Zen IWTS facilitates marksmanship training and weapon-handling drills from an individual up to a full section of recruits, across conventional and unconventional tactical scenarios. The modular, wireless system handles a wide range of in-service small arms via temporary modifications, delivering training through 3D visualisation modules covering marksmanship, moving target, reflex shooting, field firing, tactical engagement, judgmental training and annual range classification. An untethered recoil-generation system, AI characters, and cant-angle/trigger-pressure/breathing analysis round out the reporting.", domain: "Infantry", code: "IWTS®", img: "assets/img/products/iwts.webp", tagline: "Marksmanship to rocket launchers, one system", description: "A 3D marksmanship, moving-target and reflex-shooting trainer covering everything from pistols through rocket launchers.", bullets: ["Weapon range from pistol to rocket launcher", "Moving-target and reflex-shooting drills", "3D scenario library"] },
        { name: "UAV Mission Simulator", slug: "uav-sim", video: "SycQdETMis8", longDescription: "Zen UAV Sim trains external pilots, internal pilots, mission commanders, observers/special payload operators and image interpreters. It delivers basic, mission and operational handling training, exercising complete operational procedures across missions, profiles and payloads, in both stand-alone and integrated team modes. Trainees learn to handle fault and emergency conditions, bad weather and poor visibility, and to operate special payloads such as GMTI, SAR, MPR, ISAR, COMINT and ELINT, while the system assesses proficiency and replicates GCS/LRS/UAV flight and payload functions.", domain: "Aviation", code: "UAV Sim", img: "assets/img/products/uav-mission-simulator.webp", tagline: "Pilots, mission commanders, payload operators", description: "A trainer for external/internal UAV pilots, mission commanders and payload operators, including GMTI, SAR and COMINT payload training.", bullets: ["Covers external and internal pilot roles", "Mission-commander and payload-operator seats", "GMTI / SAR / COMINT payload simulation"] },
        { name: "Rotary Wing Simulator", slug: "rws", specs: [["Motion Configuration", "Fixed base or 6 DOF"], ["Housing", "Standard ISO container"], ["Fidelity Level", "Level-D full mission"]], longDescription: "Zen Technologies, in partnership with Rockwell Collins, developed a full-mission Rotary Wing Simulator configurable to the varying training needs of the Indian Armed Forces — ab initio, conversion, mission and high-fidelity Level-D training. The containerised simulator is transportable and self-contained within a standard ISO container, enabling training anywhere, anytime, including at forward bases. Depending on requirements it can be configured as a fixed-base or 6 DOF motion simulator with an out-the-window display or a wide-field-of-view dome, with real cockpit environment, pilot controls and flight-worthy hardware mixed with simulated instruments.", domain: "Aviation", code: "RWS", tagline: "Containerized helicopter simulator, basic to Level-D", description: "A containerized, deployable helicopter simulator developed with Rockwell Collins, spanning basic flight through Level-D full-mission training.", bullets: ["Deployable, containerized platform", "Developed with Rockwell Collins", "Scales from basic flight to Level-D full mission"] },
        { name: "Medium Machine Gun Simulator", slug: "mmg-sim", specs: [["Configuration", "2 lanes standard, upgradeable to 8"]], longDescription: "Zen MMG Sim is an interactive indoor training aid for Medium Machine Gun detachment crews covering engagement technique, fire control and tactical employment. The gunner operates a replica service MMG and engages targets projected on a video screen across varied terrain, lighting and environmental conditions. It supports Annual Range Course exercises and engagement drills — point, wide and traverse targets, depth variation, obscured targets and night firing.", domain: "Infantry", code: "MMG Sim", img: "assets/img/products/mmg-simulator.webp", tagline: "Screen-based MMG trainer, 2 to 8 lanes", description: "A video-screen based MMG trainer with a replica gun, expandable from 2 lanes up to 8.", bullets: ["Replica weapon with recoil feedback", "Starts at 2 lanes, expands to 8", "Video-based engagement scenarios"] },
        { name: "Integrated Air Defence Combat Simulator", slug: "iadcs", video: "UBWdMwse9wU", specs: [["Dome Traverse", "210°"], ["Dome Elevation", "-5° to +75°"], ["Audio System", "7.1 digital audio"], ["Instructor Station", "3 high-end workstations"], ["Guns Simulated", "L70 and ZU 23-2"]], longDescription: "Zen IADCS is a state-of-the-art virtual simulator for training L70 and ZU 23-2 anti-aircraft gun crews with enhanced realism in weapon handling and battle scenarios. The gun replica reproduces traverse, elevation, lay and fire functions with realistic recoil, while the dome structure presents seamless 3D terrain and battle scenarios via multiple high-resolution projectors. It generates a Combat Readiness Score with After Action Review, and is also available in outdoor and radar-linked variant configurations.", domain: "Air Defence", code: "Zen IADCS", tagline: "210° dome for L70 & ZU 23-2 gun crews", description: "A 210° dome-display simulator for L70 and ZU 23-2 air-defence gun crews, with realistic recoil replicas.", bullets: ["210° immersive dome display", "L70 and ZU 23-2 gun crew training", "Realistic recoil-replica weapons"] },
        { name: "Combat Weapons Training Simulator", slug: "cwts", longDescription: "Zen Combat Weapons Training Simulator is an indoor system that raises firing standards across every infantry section weapon — light machine guns, rocket launchers, rifles and carbines — training an entire section at once. It replicates ballistic performance (range, velocity, time of flight, trajectory), provides shot-group and score analysis, supports night firing with an eye-safe laser, and includes After Action Review with recorded, replayable exercises and computer-generated performance reports.", domain: "Infantry", code: "CWTS", tagline: "Rifles, LMG and rocket launchers with AAR", description: "An indoor infantry weapons trainer for rifles, LMGs and rocket launchers with ballistic realism and after-action review.", bullets: ["Rifle, LMG and rocket-launcher coverage", "Ballistically realistic engagement", "Built-in after-action review"] },
        { name: "Infantry Combat Vehicle Driving Simulator", slug: "bmp-ii-ds", specs: [["Motion Platform", "6 Degrees of Freedom"]], longDescription: "Zen BMP II DS trains recruits and special drivers to operate an Infantry Combat Vehicle or Armoured Personnel Carrier in operational and peacetime scenarios, replicating the driver cabin, controls, indicators, viewing devices and instrument panel. Comprehensive 3D CGI visuals and a 6-DoF motion platform synchronise with terrain and vehicle dynamics for realistic motion feel, covering loading and unloading on trailer, train and rolling stock and floatation exercises across basic, continuity and advanced training levels.", domain: "Armour", code: "BMP II DS", img: "assets/img/products/icv-bmp2-driving-simulator.jpg", tagline: "ICV / APC driver-cabin replica trainer", description: "A replica driver-cabin trainer for ICV/APC drivers covering operational and peacetime driving scenarios.", bullets: ["Full replica driver cabin", "Operational and peacetime scenario sets", "Built for ICV/APC driver qualification"] },
        { name: "Crew Gunnery Simulator, T-72 Tank", slug: "t72-cgs", specs: [["Gunner's Sight", "TPDK-1"], ["Commander Sight", "TKN 3B"], ["Ammunition Types", "APFSDS, HEAT, HE"], ["Motion Platform", "Electro-mechanical"]], longDescription: "Zen T-72 CGS trains both commanders and gunners of the T-72 tank, covering skill development from basic to advanced levels — controls familiarisation, gunnery drills across manual and stabilised modes, ammunition selection, laser rangefinder operation, and target acquisition and engagement. Containerised for easy transport and quick start-up, it includes an Instructor Station and a Gunner Station mock-up turret compartment with TPDK-1 and TKN 3B mock sights, plus an electro-mechanical motion platform providing realistic jerk and cant-angle firing feel.", domain: "Armour", code: "T-72 CGS", img: "assets/img/products/t72-crew-gunnery-simulator.jpg", tagline: "Commander + gunner, TPDK-1 / TKN 3B sights", description: "A combined commander/gunner trainer replicating the TPDK-1 gunner sight and TKN 3B commander sight of the T-72.", bullets: ["Replicates TPDK-1 gunner sight", "Replicates TKN 3B commander sight", "Combined crew training mode"] },
        { name: "Driving Simulator, T-72 Tank", slug: "t72-ds", specs: [["Motion Platform", "6 DoF electric"], ["Vertical Obstacle", "Under 1 metre height"]], longDescription: "Zen T-72 DS is a holistic driving simulator covering basic to advanced skills — controls familiarisation, starting drills (battery, air and combined start), day and night driving technique, obstacle negotiation (trench crossing, vertical obstacles, gradients, bridge crossing) and desert or built-up-area driving. Configured as a containerised or fixed-installation simulator with an Instructor Station, Driver Station mock-up and 6-DoF electric motion platform, it delivers realistic rotation and translation motion feel.", domain: "Armour", code: "T-72 DS", img: "assets/img/products/t72-tank-driving-simulator.jpg", tagline: "Start procedures through advanced driving", description: "A driver trainer covering T-72 starting procedures — battery, air and combined start — and driving technique.", bullets: ["Battery / air / combined start procedures", "Progressive driving-technique training", "Full T-72 driver-station replica"] },
        { name: "Gunnery Simulator, T-72 Tank", slug: "t72-gs", specs: [["Gunner's Sight", "TPDK-1"], ["Ammunition Types", "APFSDS, HEAT, HE"], ["Optional Generator", "30 KVA, 3-phase diesel"], ["Motion Platform", "Electric"]], longDescription: "Zen T-72 GS trains gunner recruits of the T-72 tank from basic to advanced skill levels, covering controls familiarisation, gunnery drills across manual and stabilised modes, manual and automatic loading, laser rangefinder operation, and target acquisition and engagement against instructor-designated targets. Containerised or fixed-installation, it includes an Instructor Station and a Gunner Station with TPDK-1 mock sight and out-the-window display, with an electric motion platform delivering realistic cant-angle and firing-jerk feel.", domain: "Armour", code: "T-72 GS", img: "assets/img/products/t72-tank-gunnery-simulator.jpg", tagline: "Gunner-only sight & instrumentation trainer", description: "A gunner-only trainer replicating T-72 sight and instrumentation.", bullets: ["Dedicated gunner-seat training", "Replicates T-72 sight instrumentation", "Standalone or paired with T-72 DS"] },
        { name: "Crew Gunnery Simulator, T-90 Tank", slug: "t90-cgs", specs: [["Gunner's Sight", "1G46"], ["Commander Sights", "TKN 4S, PZU 7, TI sight ESSA"], ["Ammunition Types", "APFSDS, HEAT, HE, Missile"], ["Motion Platform", "Electric"]], longDescription: "Zen T-90 CGS trains both commander and gunner crews of the T-90 tank from basic to advanced levels, covering controls familiarisation, gunnery drills across manual and stabilised modes with missile-inclusive ammunition selection, laser rangefinder operation, and target acquisition and engagement — including anti-aircraft gun firing by the commander. A Gunner Station mock-up turret features 1G46, TKN 4S and PZU 7 mock sights plus a thermal-imaging ESSA viewing device, alongside an electric motion platform.", domain: "Armour", code: "T-90 CGS", img: "assets/img/products/t90-crew-gunnery-simulator.jpg", tagline: "1G46 gunner sight, TKN 4S / PZU 7 commander", description: "A commander/gunner trainer for the T-90 with the 1G46 gunner sight and TKN 4S/PZU 7 commander sights.", bullets: ["Replicates 1G46 gunner sight", "TKN 4S and PZU 7 commander sights", "Combined crew training mode"] },
        { name: "Driving Simulator, T-90 Tank", slug: "t90-ds", specs: [["Motion Platform", "6 DoF electric"], ["Vertical Obstacle", "Under 1 metre height"], ["Optional Generator", "30 KVA, 3-phase diesel"]], longDescription: "Zen T-90 DS trains driver recruits of the T-90 tank from basic to advanced skill levels, covering controls familiarisation, starting drills, day and night driving technique, obstacle negotiation (trench crossing, vertical obstacles, gradients, bridge crossing), loading and unloading, and desert or built-up-area driving. It is a containerised or fixed-installation simulator with an Instructor Station, Driver Station mock-up and 6-DoF electric motion platform.", domain: "Armour", code: "T-90 DS", img: "assets/img/products/t90-tank-driving-simulator.jpg", tagline: "Basic through advanced driver skill levels", description: "A driver trainer for the T-90, progressing from basic through advanced skill levels.", bullets: ["Progressive skill-level curriculum", "Full T-90 driver-station replica", "Basic to advanced qualification"] },
        { name: "Gunnery Simulator, T-90 Tank", slug: "t90-gs", specs: [["Main Sight", "1G46"], ["Thermal Imaging Sight", "ESSA"], ["Ammunition Types", "APFSDS, HEAT, HE"], ["Optional Generator", "30 KVA, 3-phase diesel"], ["Motion Platform", "Electric"]], longDescription: "Zen T-90 GS is a gunnery trainer for T-90 gunner trainees, part of Zen's armoured vehicle simulator family, covering basic to advanced skill development — controls familiarisation, gunnery drills and target acquisition and engagement. Configured as a containerised or fixed-installation simulator with an Instructor Station and Gunner Station (1G46 main sight mock-up and out-the-window display) plus an electric motion platform, it is designed for quick integration with the T-90 Driving Simulator for combined gunner/driver combat training.", domain: "Armour", code: "T-90 GS", img: "assets/img/products/t90-tank-gunnery-simulator.jpg", tagline: "Gunner-only trainer for the T-90", description: "A gunner-only trainer for the T-90 tank.", bullets: ["Dedicated gunner-seat training", "T-90-specific sight replication", "Standalone or paired with T-90 DS"] },
        { name: "BMP II Integrated Missile Simulator", slug: "bmp-ii-ims", video: "EOmYgNW0iqU", longDescription: "Zen BMP II IMS trains gunners and commanders of the Infantry Combat Vehicle/Armoured Personnel Carrier in handling and firing weapon systems, replicating the ergonomics, controls, indicators and instrument panels of the actual BMP II cabins. Trainees detect, identify, acquire, track, range, select ammunition, aim and fire the anti-tank guided missile system, cannon, coaxial machine gun and smoke grenade discharger, with adjustable day, night, fog and rain conditions simulated to cut ammunition, fuel and logistics costs across basic, continuity and advanced training capsules.", domain: "Armour", code: "BMP II IMS", tagline: "Gunner/commander trainer, multiple weapon systems", description: "An ICV/APC gunner/commander trainer for handling and firing multiple onboard weapon systems.", bullets: ["Covers gunner and commander roles", "Multiple integrated weapon systems", "Built for BMP II crews"] },
        { name: "Advanced Weapons Simulator", slug: "awesim", video: "DIzn-2Nge9E", specs: [["Simultaneous Trainees", "Up to 10"], ["Weapons", "Small arms and shoulder-fired rocket launchers"], ["Firing Positions", "Standing, kneeling, lying"]], longDescription: "Zen AWeSim is an indoor firearms simulator recreating a small-arms range for recruits, special forces and commandos. Its Smart Authoring System lets instructors build scenarios at the point of need just by recording video on a phone camera, while a 3D CGI scenario builder lets users construct tactical exercises with vehicles, tanks and equipment on selectable terrain. It supports marksmanship, judgmental and reflex training with session record/playback, annual range classification tracking, and adaptive-learning analytics that personalise training to individual and unit strengths and weaknesses.", domain: "Infantry", code: "AWeSim®", img: "assets/img/products/awesim.webp", tagline: "Indoor small-arms range for up to 10 trainees", description: "An indoor small-arms range simulator supporting up to 10 trainees simultaneously with video/3D CGI scenarios.", bullets: ["Up to 10 simultaneous trainee lanes", "Video and 3D CGI scenario library", "Indoor small-arms qualification"] },
        { name: "Driver Aptitude Testing System", slug: "zen-dats", specs: [["Test Suite", "6 tests — Simple/Complex Reaction, Depth Perception, Night Vision, Glare Recovery, Side Vision"], ["Glare Recovery Test", "5-second headlight blind, then recognition test"]], longDescription: "ZEN DATS is a reflex-testing system evaluating a driver's alertness, depth perception, peripheral vision, night vision and glare-recovery ability, used to identify accident-prone individuals by exposing psycho-motor deficiencies. It runs six electronic tests — Simple Reaction, Complex Reaction, Depth Perception, Night Vision, Glare Recovery and Side Vision — for regular screening or yearly checks across drivers of any experience level.", domain: "Driving", code: "ZEN DATS", tagline: "Screening reflexes before a driver ever starts", description: "A reflex and psycho-motor test system assessing driver alertness, depth/peripheral/night vision and glare recovery.", bullets: ["Reflex and psycho-motor assessment", "Depth, peripheral and night vision testing", "Glare-recovery measurement"] },
        { name: "Driving Training Simulator", slug: "zen-dts", video: "JwrUhoSGBqI", specs: [["Configuration", "1 Instructor Station + 1 Driver Station, expandable to 10"], ["Terrain", "City, hills, cross-country, snow-bound"]], longDescription: "ZEN DTS is a versatile indoor training system for light, medium and heavy vehicle drivers, with a to-scale vehicle cabin and real indicators and controls, configurable for left- or right-hand drive. It simulates city, hill, cross-country and snow-bound driving in varying light and weather, progressing training from basic to professional level. A motion platform provides realistic driving feel, and the system logs errors like accelerator-to-brake reaction time, gear/speed mismatches, speeding and dangerous turns for performance analysis.", domain: "Driving", code: "ZEN DTS®", tagline: "To-scale cabin, light through heavy vehicles", description: "A to-scale cabin simulator for light, medium and heavy vehicles, configurable for left- or right-hand drive.", bullets: ["To-scale vehicle cabin replica", "Light, medium and heavy vehicle classes", "Left- or right-hand drive configurable"] },
        { name: "Automated Driving Simulator", slug: "zen-ads", video: "Tp5e7Ckjam8", specs: [["Configuration", "Standalone, no instructor station required"], ["Optional Add-on", "ZEN DATS 6-test psycho-motor suite"]], longDescription: "ZEN ADS is a standalone, indoor classroom driver-training simulator for light, medium and heavy vehicles, pre-loaded with programs so trainees can complete exercises without an instructor present; completed exercises are reviewed afterward by trainee and instructor. It offers a realistic mock-up cabin, intelligent traffic models, varied terrain and weather, and a progressive difficulty structure, with multiple units networkable together and record/playback for error detection.", domain: "Driving", code: "ZEN ADS", tagline: "Standalone classroom cabin mock-up", description: "A standalone classroom mock-up cabin simulator supporting various vehicle types.", bullets: ["Standalone classroom deployment", "Supports multiple vehicle types", "Low-footprint mock-up cabin"] },
        { name: "Driving Simulator", slug: "driving-sim-basic", video: "96yElyQGd3I", specs: [["Configuration", "1 Instructor Station + 1 Driver Station, expandable to 10"]], longDescription: "Zen DS is a versatile indoor, classroom driver-training simulator for light, medium and heavy vehicles, available in left- or right-hand drive, built for driving schools to reduce hours of on-road training. It features a real dashboard, controls, instrumentation and transmission, intelligent traffic models, varied terrain and adjustable weather, with modular difficulty progression, record/playback for error detection, and automated progress reporting.", domain: "Driving", code: "DS", tagline: "Up to 10 driver stations, multiple vehicle types", description: "An indoor, multi-vehicle-type classroom trainer supporting up to 10 driver stations.", bullets: ["Up to 10 simultaneous stations", "Multiple vehicle-type profiles", "Classroom-scale deployment"] },
        { name: "Bus Driving Simulator", slug: "bussim", video: "x5nPOTOFTl4", specs: [["Motion Platform", "6 Degrees of Freedom"], ["Projection", "180° front/side HD projection plus LCD rear view"], ["Capacity", "1 Instructor controls up to 10 Driver Stations"]], longDescription: "Zen BusSim is an indoor training system for bus drivers of varied skill levels, built around a to-scale bus cabin with all the gauges, controls, transmission and indicators of a real bus, mounted on a 6-DoF motion platform. Driving scenarios across terrain, weather and road conditions project on a 180° screen with LCD rear-view screens, and the system records and replays each trainee's performance with customisable reports, online fault injection and real-time graphs.", domain: "Driving", code: "BusSim", tagline: "To-scale bus cabin, authentic controls", description: "A to-scale bus cabin trainer with authentic gauges, controls and transmission behaviour.", bullets: ["To-scale bus cabin replica", "Authentic gauge and control layout", "Realistic transmission modelling"] },
        { name: "Tatra Driving Simulator", slug: "tds", specs: [["Motion Platform", "6 Degrees of Freedom"]], longDescription: "Zen TDS turns recruits into skilled drivers of the Tatra terrain vehicle through progressively complex exercises across every terrain, visibility and weather condition using 3D computer-generated visuals, with intelligent traffic models for realistic interaction. It replicates the Tatra driver cabin with original controls, indicators and instrument panels, paired with a 6-DoF motion platform, covering basic skills, defensive, highway, cross-country, adverse-condition, advanced and convoy driving exercises with full After Action Review reporting.", domain: "Driving", code: "TDS", tagline: "3D terrain & weather for heavy Tatra vehicles", description: "A 3D CG-based terrain and weather driving trainer built for Tatra heavy vehicles.", bullets: ["3D computer-generated terrain", "Dynamic weather modelling", "Built for Tatra heavy-vehicle fleets"] }
      ]
    },
    {
      id: "combat-training-centre",
      name: "Combat Training Centre",
      short: "CTC",
      page: "products/combat-training-centre.html",
      tagline: "Every training layer, one Combat Readiness Score.",
      description: "Zen's flagship system-of-systems: it integrates Live Ranges, Live Simulation, Virtual Simulation and constructive/AAR tooling into a single scalable environment — platoon to brigade — and outputs one measurable Combat Readiness Score per unit.",
      products: [
        {
          name: "Combat Training Centre",
          slug: "ctc", video: "ZRgWafYrGXw", longDescription: "Zen Combat Training Centre recreates real battle environments using a mix of live ranges, live instrumented, virtual and constructive simulation to develop combat-ready soldiers from platoon to brigade level, suited to conventional warfare and militarised operations in urban terrain. Zen calculates a proprietary Combat Readiness Score from training-session data, giving commanders an objective, trackable measure of training effectiveness over time. Facilities include smart live-fire ranges with reflex-shooting detection, TacSim force-on-force engagement, a Shoot House for room-clearing drills, weapon simulators, and a Central Control Room for monitoring and After Action Review.",
          code: "CTC — flagship integrator",
          img: "assets/img/products/ctc.webp",
          tagline: "Live + instrumented + virtual + constructive, unified",
          description: "An integrated live-range, live-instrumented, virtual and constructive simulation environment that gives units a single Combat Readiness Score, scalable from platoon to brigade.",
          bullets: [
            "Unifies Live Ranges, Live Simulation and Virtual Simulation under one environment",
            "Produces a single, comparable Combat Readiness Score per unit",
            "Scales from platoon-level exercises to full brigade-level manoeuvres",
            "Built-in after-action review and constructive simulation layer"
          ]
        }
      ]
    },
    {
      id: "anti-drone-system",
      name: "Anti Drone System",
      short: "Anti-Drone",
      page: "products/anti-drone-system.html",
      tagline: "Detect. Track. Identify. Defeat.",
      description: "A multi-layer, multi-sensor Counter-UAS (CUAS) that fuses RF detection, radar, and EO/IR tracking into one command picture — with both soft-kill and hard-kill response options.",
      products: [
        { name: "RF Based Drone Detector", slug: "rfdd", code: "RFDD", layer: "Detect", tagline: "Detection layer", description: "Detects drones by their RF emissions, giving early warning before a threat is visually acquired.", bullets: ["Passive RF-emission detection", "Early-warning layer of the CUAS stack"] },
        { name: "Video-based Drone Identification & Tracking", slug: "vdit", code: "VDIT", specs: [["Tracking Range", "Up to 3km"]], layer: "Identify", tagline: "Identification layer", description: "Day/night camera system that automatically tracks and identifies drones out to roughly 3km.", bullets: ["Automatic day/night camera tracking", "Identification range to ~3km"] },
        { name: "RADAR", slug: "radar-module", code: "X-band 3D radar", specs: [["Radar Type", "X-band 3D radar (azimuth + elevation data)"]], layer: "Detect", tagline: "Detection layer", description: "An X-band 3D radar for detecting non-emitting, fully autonomous drones that RF detection alone would miss.", bullets: ["X-band 3D radar coverage", "Catches non-emitting autonomous drones"] },
        { name: "Data Fusion and Command Center", slug: "dfcc", code: "DFCC", layer: "Track", tagline: "Command layer", description: "The unified operator display and threat-mapping console that fuses every sensor into one command picture.", bullets: ["Fuses RF, radar and EO/IR feeds", "Unified operator threat map"] },
        { name: "Drone RF Jammer", slug: "drfj", code: "DRFJ", layer: "Defeat", tagline: "Soft-kill layer", description: "Jams ISM, GNSS and mobile communication bands to break a drone's control or navigation link.", bullets: ["Jams ISM / GNSS / mobile bands", "Soft-kill response option"] },
        { name: "Hard-Kill Options", slug: "hard-kill", code: "Gun & net-capture", layer: "Defeat", tagline: "Defeat layer", description: "Physical neutralisation options including an auto-aligning gun and a net-capture mechanism for confirmed threats.", bullets: ["Auto-aligning gun engagement", "Net-capture for intact recovery"] }
      ]
    },
    {
      id: "rcws",
      name: "RCWS",
      short: "RCWS",
      page: "products/rcws.html",
      tagline: "Remote Controlled Weapon Systems.",
      description: "Stabilised, remotely operated weapon stations for land, armour and naval platforms — plus the optics and autonomous platforms built on the same sensor stack.",
      products: [
        {
          name: "RCWS — 7.62×51 MMG",
          slug: "parashu", specs: [["Weapon Calibers", "7.62mm machine gun, 5.56mm rifle"]], longDescription: "RCWS-Parashu is a versatile, lightweight remote-controlled weapon station built for varied operational scenarios, including drone-based threats, with a built-in thermal camera for reliable target acquisition in harsh weather. Its light weight suits mounting on a wide range of platforms, from ground vehicles to naval vessels, and auto-tracking capability lets it double as an anti-drone system for engaging moving aerial targets. It can be equipped with 7.62mm machine guns or 5.56mm rifles for mission flexibility.",
          code: "Parashu",
          img: "assets/img/products/parashu.jpg",
          tagline: "Lightweight, multi-platform, drone-capable",
          description: "A lightweight multi-platform remote weapon station with thermal imaging and auto-tracking, mounting a 7.62mm MG or 5.56mm rifle, with drone-threat engagement capability.",
          bullets: [
            "Mounts 7.62mm MG or 5.56mm rifle",
            "Thermal imaging with auto-tracking",
            "Capable against low-altitude drone threats"
          ]
        },
        {
          name: "Tank Mounted RCWS — 12.7×108 HMG",
          slug: "fanish", specs: [["Gun", "12.7mm NSV"], ["Weight", "Under 120kg"], ["Accuracy", "Under 3 mRad deviation"], ["Stabilization", "Fiber Optic Gyro (FOG)"]], longDescription: "RCWS-Fanish is a tank-mounted remote weapon station engineered for armoured vehicles requiring precise, reliable firepower, built around a 12.7mm NSV gun at under 120kg. A cooled thermal camera integrated with Fiber Optic Gyro stabilisation delivers under 3 mRad deviation, making it well suited to main battle tanks like the T-72 and T-90 and adaptable to other mechanised platforms.",
          code: "Fanish",
          img: "assets/img/products/fanish.jpg",
          tagline: "Under 120kg, fits T-72 / T-90",
          description: "A tank-mounted weapon station with a 12.7mm NSV gun, cooled thermal camera and fibre-optic-gyro stabilisation, weighing under 120kg and fitted to T-72/T-90 turrets.",
          bullets: [
            "12.7mm NSV heavy machine gun",
            "Cooled thermal camera + FOG stabilisation",
            "Under 120kg, fits T-72 and T-90"
          ]
        },
        {
          name: "Naval RCWS — 12.7×99 HMG",
          slug: "sharur", specs: [["Calibers", "12.7×99 HMG and 12.7×108 NSVT (.50 cal)"], ["Engagement Range", "Up to 2km"], ["Accuracy", "Under 3 mRad deviation"], ["Stabilization", "Fiber Optic Gyro (FOG)"]], longDescription: "RCWS-Sharur is a remote weapon station built specifically for naval defence, engineered to withstand harsh maritime conditions across naval platforms. It accommodates .50-caliber HMG and NSVT weapons, engaging surface and aerial targets out to 2km, with a cooled thermal camera and FOG-based stabilisation delivering under 3 mRad targeting deviation even in low visibility and rough seas.",
          code: "Sharur",
          img: "assets/img/products/sharur.jpg",
          tagline: "Maritime .50-cal station, ~2km engagement",
          description: "A maritime remote weapon station for .50-calibre weapons with roughly 2km engagement range, thermal imaging and fibre-optic-gyro stabilisation.",
          bullets: [
            ".50-cal weapon mount for naval platforms",
            "~2km effective engagement range",
            "Thermal imaging + FOG stabilisation for sea state"
          ]
        },
        {
          name: "Prahasta",
          slug: "prahasta", video: "V53RBl8WI-c", specs: [["Weapon Calibers", "9mm, 5.56mm, 7.62mm"]], longDescription: "Prahasta is an autonomous quadruped robot that uses LIDAR and reinforcement learning to build real-time 3D terrain mapping for mission planning, navigation and threat assessment. It can be armed with 9mm, 5.56mm or 7.62mm weapons and is intended as a first line of defence for commandos during counter-insurgency operations, helping save lives during close-quarters engagements.",
          code: "Autonomous quadruped UGV",
          img: "assets/img/products/prahasta.jpg",
          tagline: "LIDAR-mapping robot, weaponizable",
          description: "An autonomous quadruped robot using LIDAR and reinforcement learning for real-time 3D terrain mapping, which can be weaponized for counter-insurgency reconnaissance and defence.",
          bullets: [
            "LIDAR + reinforcement-learning navigation",
            "Real-time 3D terrain mapping",
            "Weaponizable for counter-insurgency roles"
          ]
        },
        {
          name: "Hawkeye",
          slug: "hawkeye", video: "JrvOXKC2lWo", specs: [["Model", "Hawkeye 640"], ["Detection Range", "Vehicle 35km, human 15km, UAV 4km"], ["Identification Range", "Vehicle 21km, human 9km, UAV 2.5km"], ["Thermal Sensor", "Cooled MCT, 640×512, 3-5μm"], ["Thermal Lens", "90-1100mm, 12x continuous + 8x digital zoom"], ["Visible Camera", "1/1.8\" CMOS, 2MP, 0.0002 lux"], ["Range Finder", "10km range, ±2m accuracy"], ["Pan/Tilt", "Pan 0-360°, tilt +90°/-90°"], ["Power", "AC90-305V input to DC48V, ≤500W max"], ["Working Temperature", "-40°C to +60°C"], ["Protection Rating", "IP66"], ["Weight", "105kg"]], longDescription: "Hawkeye is a long-range, multi-sensor optical anti-drone platform developed for critical surveillance sites like conference centres, prisons and military bases. It integrates day and night detection modules for all-weather drone tracking out to 15km and can link with radar and spectrum-detection equipment to form a complete automatic UAV defence system. MIL-grade and IP66-rated, it delivers ±0.5 mrad tracking accuracy, 0.01° positioning precision, and rapid pan/tilt manoeuvring with intelligent hot-spot alarms and radar linkage.",
          code: "Multi-sensor anti-drone optics",
          img: "assets/img/products/hawkeye.jpg",
          tagline: "Detect to 15km, track to 4km",
          description: "A multi-sensor optical anti-drone tracking platform combining a cooled thermal (640×512) camera with a 60x zoom EO camera.",
          bullets: [
            "Cooled thermal, 640×512 resolution",
            "60x zoom electro-optical camera",
            "Detection to ~15km, tracking to ~4km, ±0.5 mrad accuracy"
          ]
        },
        {
          name: "Artillery Rugged Camera",
          slug: "durgam", specs: [["Image Sensor", "640×512"], ["Shock Resistance", "6g vibration (5-50Hz); 20g multiple shock; 75g single shock"]], longDescription: "Durgam is a highly rugged camera system for demanding military and defence applications, with multi-spectral day and thermal imaging lenses for situational awareness across diverse operating environments. Its 640×512 image sensor delivers high-resolution imagery in daylight and low light, built to withstand extreme shock and vibration for integration into armoured vehicles and other heavy-duty platforms, with alarm and motion-detection intelligence and radar linkage.",
          code: "Durgam",
          img: "assets/img/products/durgam.jpg",
          tagline: "Shock-hardened multi-spectral optics",
          description: "A shock- and vibration-hardened multi-spectral camera (day + thermal, 640×512) built for armoured vehicles.",
          bullets: [
            "Day + thermal multi-spectral imaging",
            "640×512 thermal resolution",
            "Shock and vibration hardened for armour"
          ]
        }
      ]
    }
  ]
};
