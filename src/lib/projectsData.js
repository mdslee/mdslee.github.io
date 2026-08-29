const maximizeVolumeCard = new URL(
  "../assets/images/ME102/proj1/card1.png",
  import.meta.url
).href;

const scanToPrintCard = new URL(
  "../assets/images/Research/titleImage.png",
  import.meta.url
).href;

const linerSlideModules = import.meta.glob("../assets/images/Research/liner-slides/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});
const linerSlides = Object.keys(linerSlideModules)
  .sort()
  .map((key) => linerSlideModules[key]);

const linerPoster = new URL(
  "../assets/images/Research/2026-poster.png",
  import.meta.url
).href;

const treadleFlywheelCard = new URL(
  "../assets/images/ME102/proj2/cover.png",
  import.meta.url
).href;

const musicBoxTitle = new URL(
  "../assets/images/ME103/TitleImage.png",
  import.meta.url
).href;

const ballLauncherTitle = new URL(
  "../assets/images/ME102/proj3/TitleImage.png",
  import.meta.url
).href;

const treadleFlywheelTitle = new URL(
  "../assets/images/ME102/proj2/TitleImage.JPG",
  import.meta.url
).href;

const maximizeVolumeTitle = new URL(
  "../assets/images/ME102/proj1/TitleImage.png",
  import.meta.url
).href;

const failureAnalysisTitle = new URL(
  "../assets/images/ME104/Project 1/TitleImage.png",
  import.meta.url
).href;

const maximizeImpulseTitle = new URL(
  "../assets/images/ME104/Project 3/titleImage.png",
  import.meta.url
).href;

const maximizeImpulsePrize = new URL(
  "../assets/images/ME104/Project 3/prize.jpeg",
  import.meta.url
).href;

const bowCurveTitle = new URL(
  "../assets/images/me80Proj/TitleImage.png",
  import.meta.url
).href;

const musicBoxSlideModules = import.meta.glob("../assets/images/ME103/slides/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});
const musicBoxSlides = Object.keys(musicBoxSlideModules)
  .sort()
  .map((key) => musicBoxSlideModules[key]);

const ballLauncherSlideModules = import.meta.glob("../assets/images/ME102/proj3/slides/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});
const ballLauncherSlides = Object.keys(ballLauncherSlideModules)
  .sort()
  .map((key) => ballLauncherSlideModules[key]);

const ballLauncherVideo = new URL(
  "../assets/images/ME102/proj3/IMG_5721.mov",
  import.meta.url
).href;

const treadleSlideModules = import.meta.glob("../assets/images/ME102/proj2/slides/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});
const treadleSlides = Object.keys(treadleSlideModules)
  .sort()
  .map((key) => treadleSlideModules[key]);

const treadleVideo3 = new URL(
  "../assets/images/ME102/proj2/IMG_4548 3.mov",
  import.meta.url
).href;

const treadleExplodedView = new URL(
  "../assets/images/ME102/proj2/Exploded view.JPG",
  import.meta.url
).href;

const maximizeVolumeSlideModules = import.meta.glob("../assets/images/ME102/proj1/slides/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});
const maximizeVolumeSlides = Object.keys(maximizeVolumeSlideModules)
  .sort()
  .map((key) => maximizeVolumeSlideModules[key]);

const failureAnalysisSlideModules = import.meta.glob("../assets/images/ME104/Project 1/slides/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});
const failureAnalysisSlides = Object.keys(failureAnalysisSlideModules)
  .sort()
  .map((key) => failureAnalysisSlideModules[key]);

const maximizeImpulseSlideModules = import.meta.glob("../assets/images/ME104/Project 3/slides/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});
const maximizeImpulseSlides = Object.keys(maximizeImpulseSlideModules)
  .sort()
  .map((key) => maximizeImpulseSlideModules[key]);

const bowCurvePresentationSlideModules = import.meta.glob("../assets/images/me80Proj/presentation-slides/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});
const bowCurveReportSlideModules = import.meta.glob("../assets/images/me80Proj/report-slides/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});
const bowCurvePresentationSlides = Object.keys(bowCurvePresentationSlideModules)
  .sort()
  .map((key) => bowCurvePresentationSlideModules[key]);

const bowCurveReportSlides = Object.keys(bowCurveReportSlideModules)
  .sort()
  .map((key) => bowCurveReportSlideModules[key]);

export const projects = [
  {
    id: 1,
    title: "(Modern) Music Box",
    category: "Ideation, Machining, Finishing",
    path: "/portfolio/project-1",
    image: musicBoxTitle,
    imageAlt:
      "Wind turbine blade in manufacturing facility showing composite material engineering and large-scale fabrication process",
    description:
      "A finished-to-perfection machined music box made from scratch using brass, steel, and sheet metal",
    details: {
      year: "2024",
      duration: "14 months",
      role: "Research Engineer",
      tools: "Ideation, Quick Prototyping, CAD, 3D Printing, Turning, Milling, Assembly, Finishing",
      overview:
        "Wind turbine blades represent one of the most demanding applications for composite materials, requiring extreme fatigue resistance over millions of load cycles. Our research focused on optimizing fiber orientation patterns using bio-inspired algorithms derived from natural load-bearing structures. The resulting layup sequences distribute stress more uniformly, eliminating the concentrated failure initiation points common in traditional designs.",
      ideationPlanning:
        "Validating fatigue performance required accelerated testing protocols that accurately represent 20+ years of service in compressed timescales. We developed a novel multi-axial fatigue testing methodology that better represents real-world loading conditions.",
      prototyping:
        "Coupon-level layups and DIC-informed iterations narrowed the design space before full blade-section tests.",
      finalResults:
        "The new composite formulation has been licensed by a major wind energy manufacturer and is projected to reduce blade replacement frequency by 60%, significantly lowering the lifecycle cost of wind energy installations.",
    },
    slides: musicBoxSlides,
  },
  {
    id: 2,
    title: "Ball Launcher",
    category: "Ideation, Fabrication, Testing",
    path: "/portfolio/project-2",
    image: ballLauncherTitle,
    imageAlt:
      "Concrete architectural void showcasing structural analysis of load-bearing elements in a brutalist building interior",
    description:
      "Goal: Create a spring-actuated device that launches ping pong balls into a specific target board from a distance of at least 8 feet. Within 2 minutes, try to launch as many balls as you can into the hole.",
    details: {
      year: "2024",
      duration: "8 months",
      role: "Lead Structural Engineer",
      tools: "Ideation, Quick Prototyping, CAD, 3D Printing, Assembly",
      overview:
        "This project addressed the critical need for real-time structural health monitoring in aging infrastructure. By combining finite element analysis with machine learning algorithms, we created a predictive framework capable of identifying potential failure points before they become critical. The system was deployed across three major bridge structures, reducing inspection costs by 40% while improving detection accuracy.",
      ideationPlanning:
        "The primary challenge was integrating heterogeneous sensor data streams into a unified analytical model. We developed a custom data fusion algorithm that weighs sensor reliability dynamically based on environmental conditions and sensor degradation patterns.",
      prototyping:
        "Iterative bench tests and scaled mockups validated sensing assumptions before full deployment. Hardware-in-the-loop runs helped tune filtering and fusion parameters under noisy field-like conditions.",
      finalResults:
        "The framework successfully predicted two structural anomalies that traditional inspection methods had missed, preventing potential safety incidents. The system is now being considered for adoption by the regional transportation authority.",
    },
    slides: [{ type: "video", src: ballLauncherVideo }, ...ballLauncherSlides],
  },
  {
    id: 3,
    title: "Treadle Flywheel Mechanism",
    category: "Ideation, Fabrication",
    path: "/portfolio/project-3",
    image: treadleFlywheelCard,
    detailImage: treadleFlywheelTitle,
    imageAlt:
      "Close-up of precision CNC machined aluminum components showing tool marks and engineering tolerances",
    description:
      "Goal: Given the general motion of a mechanism, determine how it works and create a working version of the given mechanism",
    details: {
      year: "2023",
      duration: "12 months",
      role: "Systems Engineer",
      tools: "Ideation, Quick Prototyping, CAD, 3D Printing, Laser Cutting, Assembly",
      overview:
        "This manufacturing system represents a paradigm shift in how aerospace components are produced. By integrating real-time dimensional feedback directly into the CNC control loop, we eliminated the traditional inspect-then-adjust workflow. Components are continuously measured during machining, and tool paths are dynamically adjusted to compensate for tool wear, thermal expansion, and material inconsistencies.",
      ideationPlanning:
        "Achieving sub-micron accuracy in a production environment required solving complex vibration isolation problems and developing novel thermal compensation algorithms that account for both machine and workpiece thermal states.",
      prototyping:
        "Iterative mechanism builds and load checks refined geometry and bearing preload before committing to final materials and finishing.",
      finalResults:
        "Production yield increased from 87% to 99.2%, and cycle time was reduced by 30%. The system has been adopted by two major aerospace suppliers.",
    },
    slides: [...treadleSlides, treadleExplodedView, { type: "video", src: treadleVideo3 }],
    slidesGap: "gap-0",
  },
  {
    id: 4,
    title: "Maximize the Impulse!",
    category: "Ideation, Fabrication, Analysis",
    path: "/portfolio/project-4",
    image: maximizeImpulseTitle,
    imageAlt:
      "CAD renderings of the maximize the impulse mechanism showing the motor, gear, and housing assembly",
    description:
      "Design a mass-efficient mechanism that maximizes impulse delivered to a target.",
    details: {
      tools: "CAD, 3D Printing, Static Analysis, Buckling Analysis, Design for Mass Efficiency (DFME)",
      overview:
        "Designed and analyzed a mass-efficient impulse-delivering mechanism, balancing structural strength against weight to maximize the impulse transferred to a target within strict geometric constraints.",
      ideationPlanning:
        "Worked through the motor, gear, and housing layout in CAD, sizing the rack, web, and supporting frame around the required load path.",
      prototyping:
        "Ran static and buckling analysis on the frame members to size each part for mass efficiency, then 3D-printed components to validate fit and assembly before finalizing fasteners.",
      finalResults:
        "Delivered a working mechanism that met the impulse target while minimizing mass, validated against the hand-calculated failure and buckling limits.",
    },
    slides: [maximizeImpulsePrize, ...maximizeImpulseSlides],
    slidesGap: "gap-2",
  },
  {
    id: 5,
    title: "Maximize the Volume! Challenge",
    category: "Ideation, Fabrication",
    path: "/portfolio/project-5",
    image: maximizeVolumeCard,
    detailImage: maximizeVolumeTitle,
    imageAlt:
      "Macro view of circuit board traces and electronic components showing embedded control system PCB design",
    description:
      "Create a shape that is capable of holding the most volume.",
    details: {
      year: "2023",
      duration: "10 months",
      role: "Embedded Systems Engineer",
      tools: "Design, Laser Cutting, CAD",
      overview:
        "This control system enables industrial robots to perform delicate assembly operations that were previously only possible by human hands. The custom FPGA implementation provides deterministic timing guarantees that standard microcontrollers cannot achieve, enabling force-sensitive operations at production speeds.",
      ideationPlanning:
        "Achieving reliable force feedback at the required bandwidth demanded novel approaches to signal conditioning and noise rejection. We developed a custom analog front-end that provides 16-bit resolution at 100kHz sampling rates in an electrically noisy industrial environment.",
      prototyping:
        "Breadboard signal chains and FPGA bring-up boards de-risked timing and isolation before integrating with the robot arm and production harnesses.",
      finalResults:
        "The system enables robots to handle components as delicate as glass optical elements, achieving a damage rate of less than 0.01%. Three production lines have been converted to use this system.",
    },
    slides: maximizeVolumeSlides,
  },
  {
    id: 6,
    title: "Scan-to-Print: Creating custom prosthetic liners",
    category: "Ideation, Fabrication",
    path: "/portfolio/project-6",
    image: scanToPrintCard,
    imageAlt:
      "Wind turbine blade in manufacturing facility showing composite material engineering and large-scale fabrication process",
    description:
      "Personalized prosthetic hands for amputees who are unable to afford a fully mechanized prosthesis. Partnered with a local hand therapist to use the hands in a therapeutic way.",
    details: {
      year: "2024",
      duration: "14 months",
      role: "Research Engineer",
      tools: "Blender, CAD, 3D Printing, Prototyping",
      overview:
        "Wind turbine blades represent one of the most demanding applications for composite materials, requiring extreme fatigue resistance over millions of load cycles. Our research focused on optimizing fiber orientation patterns using bio-inspired algorithms derived from natural load-bearing structures. The resulting layup sequences distribute stress more uniformly, eliminating the concentrated failure initiation points common in traditional designs.",
      ideationPlanning:
        "Validating fatigue performance required accelerated testing protocols that accurately represent 20+ years of service in compressed timescales. We developed a novel multi-axial fatigue testing methodology that better represents real-world loading conditions.",
      prototyping:
        "Coupon-level layups and DIC-informed iterations narrowed the design space before full blade-section tests.",
      finalResults:
        "The new composite formulation has been licensed by a major wind energy manufacturer and is projected to reduce blade replacement frequency by 60%, significantly lowering the lifecycle cost of wind energy installations.",
    },
    slides: linerSlides,
    posterImage: linerPoster,
  },
  {
    id: 7,
    title: "200N Failure Analysis",
    category: "Ideation, Fabrication, Analysis, FEA Testing",
    path: "/portfolio/project-7",
    image: failureAnalysisTitle,
    imageAlt:
      "Close-up of precision CNC machined aluminum components showing tool marks and engineering tolerances",
    description:
      "Goal: Design and manufacture a mass-efficient structural component that can sustain a specific static load. The final design must resist a vertical reaction force of at least 200 N within a 0.010 m deflection limit while adhering to strict geometric constraints between a pin coupling and a plate.",
    details: {
      year: "2023",
      duration: "12 months",
      role: "Systems Engineer",
      tools: "CAD, 3D Printing, Static Analysis, Buckling Analysis, Design for Mass Efficiency (DFME)",
      overview:
        "This manufacturing system represents a paradigm shift in how aerospace components are produced. By integrating real-time dimensional feedback directly into the CNC control loop, we eliminated the traditional inspect-then-adjust workflow. Components are continuously measured during machining, and tool paths are dynamically adjusted to compensate for tool wear, thermal expansion, and material inconsistencies.",
      ideationPlanning:
        "Achieving sub-micron accuracy in a production environment required solving complex vibration isolation problems and developing novel thermal compensation algorithms that account for both machine and workpiece thermal states.",
      prototyping:
        "Pilot cells combined in-process probes with adaptive toolpaths. Early runs surfaced thermal drift and spindle harmonics; fixes were folded into the control loop before scaling to full production.",
      finalResults:
        "Production yield increased from 87% to 99.2%, and cycle time was reduced by 30%. The system has been adopted by two major aerospace suppliers.",
    },
    slides: failureAnalysisSlides,
  },
  {
    id: 8,
    title: "Bow Curve Analysis",
    category: "FEA Analysis, Stress Analysis, Quick Prototyping",
    path: "/portfolio/project-8",
    image: bowCurveTitle,
    imageAlt:
      "Aerial view of suspension bridge cables in geometric pattern demonstrating engineering load distribution design",
    description:
      "Why do bows look like that? Determine the more ideal shape and curvature of the standard bow and determine which material would be the best for such a design.",
    details: {
      year: "2024",
      duration: "18 months",
      role: "Project Engineer",
      tools: "CAD, 3D Printing, Static Analysis, Buckling Analysis",
      overview:
        "The original bridge, constructed in 1968, required significant retrofitting to meet modern seismic codes and increased vehicular loads. Our redesign preserved the architectural heritage while introducing a novel cable configuration that distributes dynamic loads more efficiently. Wind tunnel testing confirmed a 35% improvement in aerodynamic stability.",
      ideationPlanning:
        "Maintaining traffic flow during construction phases required innovative staging strategies. We developed a phased replacement protocol that kept two lanes operational at all times while replacing critical structural members.",
      prototyping:
        "Scaled cable-deck segments and wind-tunnel models validated aerodynamic assumptions and construction sequencing before full retrofit drawings were released.",
      finalResults:
        "The redesigned bridge meets current seismic zone IV requirements and has a projected service life extension of 50 years. The cable configuration has been published as a reference design for similar retrofit projects.",
    },
    slides: bowCurvePresentationSlides,
    reportSlides: bowCurveReportSlides,
    reportLabel: "Detailed Report",
  },
];
