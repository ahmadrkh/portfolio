/**
 * ─────────────────────────────────────────────────────────────
 *  Academic profile content
 *  Drives the /academic page: thesis, research projects,
 *  interests, and publications. Edit freely.
 *  NOTE: a few fields (advisor names, exact dates) are best-guess
 *  from your repos/thesis — tweak them to match your records.
 * ─────────────────────────────────────────────────────────────
 */

export interface ResearchInterest {
  title: string;
  description: string;
}

export interface Publication {
  title: string;
  venue: string;
  year: string;
  authors: string;
  href?: string;
}

export interface AcademicLink {
  label: string;
  href: string;
  kind: "source" | "live" | "paper";
}

export interface AcademicProject {
  title: string;
  context: string; // course / supervisor line
  year: string;
  collaborators?: string;
  summary: string;
  highlights: string[];
  topics: string[];
  links: AcademicLink[];
  glyph: string;
  accent: string;
}

export interface Thesis {
  title: string;
  degree: string;
  institution: string;
  advisor?: string;
  year: string;
  summary: string[];
  contributions: string[];
  stack: string[];
  links: AcademicLink[];
}

const thesis: Thesis = {
  title: "Persian Text-to-Speech with Voice Cloning",
  degree: "B.Sc. Thesis · Computer Engineering",
  institution: "Sharif University of Technology",
  // advisor: "—",  // add your supervisor's name
  year: "2025",
  summary: [
    "My bachelor's thesis tackles a stubborn, practical problem in Persian speech synthesis: producing natural, radio-quality narration in a target speaker's voice — reliably enough to actually ship.",
    "I surveyed nine TTS approaches (VITS, XTTS, Matcha-TTS, OpenVoice, Edge-TTS, Piper, and more) and chose Chatterbox for its voice quality and prosody. Like most autoregressive models, though, it occasionally hallucinated — dropping or repeating words. I diagnosed this as sampling drift and fixed it with a Best-of-N method: generate several candidates, transcribe each with Whisper, and automatically keep the one whose transcription best matches the input by character error rate. That drove the error on previously-failing sentences to near zero.",
    "I then built and deployed a real, multi-method service — a FastAPI backend with a web UI running on an RTX 3090 — that lets users synthesize speech through several selectable engines and clone a reference voice, evaluated with a reproducible, category-based CER protocol.",
  ],
  contributions: [
    "A Best-of-N + Whisper-CER selection method that eliminates hallucinations in autoregressive TTS",
    "A comparative survey and evaluation of nine Persian TTS approaches",
    "A reproducible CER-based evaluation protocol with a usability threshold and Persian text normalization",
    "A deployed multi-method TTS service (FastAPI + web UI) with reference-voice cloning",
    "Persian-specific text processing: grapheme-to-phoneme, ezafe handling, and normalization",
  ],
  stack: ["Python", "PyTorch", "Chatterbox", "Whisper", "FastAPI", "sherpa-onnx", "Matcha-TTS"],
  links: [],
};

const projects: AcademicProject[] = [
  {
    title: "Autonomous-Vehicle Surroundings Mapping",
    context: "3D Computer Vision · Sharif University (Prof. Shohreh Kasaei)",
    year: "2024",
    collaborators: "with Ramtin Moslemi & Amirhossein Haji Mohammad Rezaie",
    summary:
      "A 360° environmental-perception pipeline for autonomous driving: stitch rear, left, and right camera views into a single panorama, then estimate a depth map — aimed at reducing blind spots and preventing collisions.",
    highlights: [
      "Panoramic stitching via SIFT feature matching and RANSAC homography",
      "Iterative, drift-corrected homography updates for video sequences",
      "Monocular depth estimation (Monodepth2 / PanoDepth) on the stitched view",
      "Validated on nuScenes, Oxford RobotCar, and CARLA-simulated data",
    ],
    topics: ["Python", "OpenCV", "PyTorch", "Monodepth2", "CARLA"],
    links: [{ label: "Source", href: "https://github.com/ahmadrkh/FCV-project", kind: "source" }],
    glyph: "▦",
    accent: "#22d3ee",
  },
  {
    title: "Stereo Vision: A Survey of Disparity Estimation",
    context: "Computer Vision report · Sharif University (Dr. Sabzi)",
    year: "2024",
    collaborators: "with Leili Motahari",
    summary:
      "A structured survey of stereo depth estimation — from the correspondence problem and classical block matching to modern deep networks — covering the math, evaluation metrics, and trade-offs of each method.",
    highlights: [
      "Classical methods: SAD/SSD block matching, Semi-Global Matching, PatchMatch Stereo",
      "Deep methods: MC-CNN, DispNet, GC-Net, RAFT-Stereo, LEAStereo",
      "Evaluation metrics: disparity error, RMSE, and percentage of bad matching pixels",
      "Applications spanning robotics, autonomous driving, and agriculture",
    ],
    topics: ["Stereo Matching", "SGM", "RAFT-Stereo", "Disparity", "Depth"],
    links: [{ label: "Source", href: "https://github.com/ahmadrkh/Stereo-Vision", kind: "source" }],
    glyph: "◫",
    accent: "#a78bfa",
  },
];

const interests: ResearchInterest[] = [
  {
    title: "Speech Synthesis & Audio",
    description:
      "Text-to-speech, voice cloning, and reliable generation with autoregressive and flow-matching models.",
  },
  {
    title: "Computer Vision & 3D",
    description:
      "Stereo and monocular depth, image stitching, and perception for autonomous systems.",
  },
  {
    title: "Applied Deep Learning",
    description:
      "Taking research models from paper to a deployed, evaluated, and genuinely usable service.",
  },
];

// Add your papers, preprints, and posters here when you have them.
const publications: Publication[] = [];

export const academic = {
  headline: "Research & Academic Work",
  intro:
    "Alongside front-end engineering, I work in machine learning and computer vision — from my bachelor's thesis on reliable Persian speech synthesis to perception systems for autonomous driving.",
  thesis,
  projects,
  interests,
  publications,
};
