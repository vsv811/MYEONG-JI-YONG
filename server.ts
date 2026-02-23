import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("portfolio.db");

// Initialize Database
db.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title_kr TEXT,
    title_en TEXT,
    description_kr TEXT,
    description_en TEXT,
    category TEXT,
    image_url TEXT,
    video_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS media (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title_kr TEXT,
    title_en TEXT,
    summary_kr TEXT,
    summary_en TEXT,
    image_url TEXT,
    date TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT
  );
`);

// Seed initial data if empty
const projectCount = db.prepare("SELECT COUNT(*) as count FROM projects").get() as { count: number };
if (projectCount.count === 0) {
  const insertProject = db.prepare(`
    INSERT INTO projects (title_kr, title_en, description_kr, description_en, category, image_url)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  insertProject.run("기업 공연", "Artistic Collaboration", "한 편의 극처럼 흐르는 서사적 연출.\n음악, 조명, 오브제가 완벽한 조화를 이루며\n관객을 몰입시키는 종합 예술 퍼포먼스입니다.", "A cinematic narrative performance.\nA comprehensive art performance where music, lighting, and objects harmonize perfectly to immerse the audience.", "Artistic Collaboration", "https://postfiles.pstatic.net/MjAyNjAyMjNfMjA3/MDAxNzcxODQyMTYzMzI2.PrN6ed76QylvuyxdKM3soJVCDy5Odi71n0xZeSCdIo4g.dqQOR3qoNbPPZSFxqR25izqXqknzZefNHT2XBpsu3Rcg.JPEG/KakaoTalk_20260213_055943885_02.jpg?type=w773");
  insertProject.run("VIP 프라이빗 시어터 쇼", "VIP Private Theater Show", "격식 있는 공간의 무드를 완성하는 세련된 퍼포먼스.\n프라이빗 파티나 갈라 디너의 품격에 맞는\n절제된 화려함을 선사합니다.", "A sophisticated performance that completes the mood of a formal space.\nIt delivers a restrained splendor suitable for the dignity of private parties or gala dinners.", "Curated for VIP", "https://postfiles.pstatic.net/MjAyNjAyMjNfMjYx/MDAxNzcxODQ0NjU0NzY5.325r1-r-hgg8Q1nz_Or0vkuH7AGA2hZVt-uwga8umEgg.11oLa6fg0w87qBlb8RDa3_Av8HPMZkM7kl5o8ngqizog.JPEG/KakaoTalk_20260213_055943885.jpg?type=w773");
  insertProject.run("글로벌 스테이지", "Global Stage", "세계 마술 챔피언쉽 FISM ACM 한국 대표 출전.\n독창적인 아이디어와 예술적 가치로 세계 무대에서 인정받았습니다.\n\n단순한 기술의 나열이 아닌, 마술을 하나의 예술적 매체로 활용하여\n서사와 미학을 구축하는 독자적인 작품을 통해 관객에게 깊이 있는 울림을 전달합니다.\n이는 명지용이 추구하는 마술의 핵심이자, 그가 증명해온 예술적 성취입니다.", "Represented Korea at the World Magic Championship FISM ACM.\nRecognized on the world stage for original ideas and artistic value.\n\nThrough independent works that use magic as an artistic medium to build narrative and aesthetics rather than a simple list of techniques, it delivers a deep resonance to the audience.\nThis is the core of magic pursued by Myeong Ji-yong and the artistic achievement he has proven.", "International", "https://postfiles.pstatic.net/MjAyNjAyMjNfNDAg/MDAxNzcxODQ0NzA4NjQ1.ghbFFH-NbnQkmyof1bmWx6yHNU6MYmesBrCbur2BQ9gg.vk6eQUTFviQCRcSW25ejxFx_yo-rO1fESBLtXsaPkZog.JPEG/KakaoTalk_20260213_061828595.jpg?type=w773");
}

// Update existing records to match new requirements
db.prepare(`
  UPDATE projects 
  SET title_kr = 'VIP 프라이빗 시어터 쇼', 
      title_en = 'VIP Private Theater Show', 
      description_kr = '격식 있는 공간의 무드를 완성하는 세련된 퍼포먼스.\n프라이빗 파티나 갈라 디너의 품격에 맞는\n절제된 화려함을 선사합니다.', 
      description_en = 'A sophisticated performance that completes the mood of a formal space.\nIt delivers a restrained splendor suitable for the dignity of private parties or gala dinners.',
      image_url = 'https://postfiles.pstatic.net/MjAyNjAyMjNfMjYx/MDAxNzcxODQ0NjU0NzY5.325r1-r-hgg8Q1nz_Or0vkuH7AGA2hZVt-uwga8umEgg.11oLa6fg0w87qBlb8RDa3_Av8HPMZkM7kl5o8ngqizog.JPEG/KakaoTalk_20260213_055943885.jpg?type=w773'
  WHERE category = 'Curated for VIP'
`).run();

db.prepare(`
  UPDATE projects 
  SET description_kr = '한 편의 극처럼 흐르는 서사적 연출.\n음악, 조명, 오브제가 완벽한 조화를 이루며\n관객을 몰입시키는 종합 예술 퍼포먼스입니다.',
      description_en = 'A cinematic narrative performance.\nA comprehensive art performance where music, lighting, and objects harmonize perfectly to immerse the audience.',
      image_url = 'https://postfiles.pstatic.net/MjAyNjAyMjNfMjA3/MDAxNzcxODQyMTYzMzI2.PrN6ed76QylvuyxdKM3soJVCDy5Odi71n0xZeSCdIo4g.dqQOR3qoNbPPZSFxqR25izqXqknzZefNHT2XBpsu3Rcg.JPEG/KakaoTalk_20260213_055943885_02.jpg?type=w773'
  WHERE category = 'Artistic Collaboration'
`).run();

// Ensure International project exists or is updated
const internationalProject = db.prepare("SELECT id FROM projects WHERE category = 'International'").get();
if (internationalProject) {
  db.prepare(`
    UPDATE projects 
    SET title_kr = '글로벌 스테이지', 
        title_en = 'Global Stage', 
        description_kr = '세계 마술 챔피언쉽 FISM ACM 한국 대표 출전.\n독창적인 아이디어와 예술적 가치로 세계 무대에서 인정받았습니다.\n\n단순한 기술의 나열이 아닌, 마술을 하나의 예술적 매체로 활용하여\n서사와 미학을 구축하는 독자적인 작품을 통해 관객에게 깊이 있는 울림을 전달합니다.\n이는 명지용이 추구하는 마술의 핵심이자, 그가 증명해온 예술적 성취입니다.', 
        description_en = 'Represented Korea at the World Magic Championship FISM ACM.\nRecognized on the world stage for original ideas and artistic value.\n\nThrough independent works that use magic as an artistic medium to build narrative and aesthetics rather than a simple list of techniques, it delivers a deep resonance to the audience.\nThis is the core of magic pursued by Myeong Ji-yong and the artistic achievement he has proven.',
        image_url = 'https://postfiles.pstatic.net/MjAyNjAyMjNfNDAg/MDAxNzcxODQ0NzA4NjQ1.ghbFFH-NbnQkmyof1bmWx6yHNU6MYmesBrCbur2BQ9gg.vk6eQUTFviQCRcSW25ejxFx_yo-rO1fESBLtXsaPkZog.JPEG/KakaoTalk_20260213_061828595.jpg?type=w773'
    WHERE category = 'International'
  `).run();
} else {
  db.prepare(`
    INSERT INTO projects (title_kr, title_en, description_kr, description_en, category, image_url)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run("글로벌 스테이지", "Global Stage", "세계 마술 챔피언쉽 FISM ACM 한국 대표 출전.\n독창적인 아이디어와 예술적 가치로 세계 무대에서 인정받았습니다.\n\n단순한 기술의 나열이 아닌, 마술을 하나의 예술적 매체로 활용하여\n서사와 미학을 구축하는 독자적인 작품을 통해 관객에게 깊이 있는 울림을 전달합니다.\n이는 명지용이 추구하는 마술의 핵심이자, 그가 증명해온 예술적 성취입니다.", "Represented Korea at the World Magic Championship FISM ACM.\nRecognized on the world stage for original ideas and artistic value.\n\nThrough independent works that use magic as an artistic medium to build narrative and aesthetics rather than a simple list of techniques, it delivers a deep resonance to the audience.\nThis is the core of magic pursued by Myeong Ji-yong and the artistic achievement he has proven.", "International", "https://postfiles.pstatic.net/MjAyNjAyMjNfNDAg/MDAxNzcxODQ0NzA4NjQ1.ghbFFH-NbnQkmyof1bmWx6yHNU6MYmesBrCbur2BQ9gg.vk6eQUTFviQCRcSW25ejxFx_yo-rO1fESBLtXsaPkZog.JPEG/KakaoTalk_20260213_061828595.jpg?type=w773");
}

// Update existing categories if they exist
db.prepare("UPDATE projects SET category = 'Artistic Collaboration' WHERE category = 'Corporate'").run();
db.prepare("UPDATE projects SET category = 'Curated for VIP' WHERE category = 'Theater'").run();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/projects", (req, res) => {
    const projects = db.prepare("SELECT * FROM projects ORDER BY created_at DESC").all();
    res.json(projects);
  });

  app.get("/api/media", (req, res) => {
    const media = db.prepare("SELECT * FROM media ORDER BY created_at DESC").all();
    res.json(media);
  });

  app.post("/api/contact", (req, res) => {
    console.log("Contact form submission:", req.body);
    res.json({ success: true, message: "Message received" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
