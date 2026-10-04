const fs = require('fs');

const analyzed = require('./analyzed_questions.json');
const TRANSLATIONS = require('./translations_80.js');

let oldQuestions = [];
try {
  const oldQDataContent = fs.readFileSync('old_qdata.js', 'utf-8');
  const dataMatch = oldQDataContent.match(/const QUESTIONS_DATA = (\[[\s\S]*?\]);\s*(?:if|$)/);
  if (dataMatch) oldQuestions = eval(dataMatch[1]);
} catch (e) {
  console.log('No old_qdata.js, proceeding with defaults');
}

function normalize(str) {
  return (str || '').toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
}

function detectModule(text, hint) {
  const t = (text + ' ' + (hint || '')).toLowerCase();
  if (t.includes('binary') || t.includes('hexadecimal') || t.includes('decimal') || t.includes('base 16') || t.includes('base 2') || t.includes('0b') || t.includes('0x')) {
    return { moduleId: 5, moduleName: 'Modul 5: Number Systems', topic: 'Topic 5.1 & 5.2' };
  }
  if (t.includes('switch') || t.includes('mac address table') || t.includes('mac table') || t.includes('auto-mdix') || t.includes('store-and-forward') || t.includes('cut-through') || t.includes('frame check sequence') || t.includes('fragment-free') || t.includes('crc') || t.includes('broadcast') || t.includes('unicast') || t.includes('multicast') || t.includes('duplex') || t.includes('port')) {
    if (t.includes('physical') || t.includes('utp') || t.includes('fiber') || t.includes('cable') || t.includes('wireless') || t.includes('crosstalk') || t.includes('attenuation') || t.includes('bandwidth') || t.includes('throughput') || t.includes('latency') || t.includes('goodput')) {
      return { moduleId: 4, moduleName: 'Modul 4: Physical Layer', topic: 'Topic 4.3 & 4.4' };
    }
    return { moduleId: 7, moduleName: 'Modul 7: Ethernet Switching', topic: 'Topic 7.1 - 7.4' };
  }
  if (t.includes('data link') || t.includes('sublayer') || t.includes('llc') || t.includes('mac sublayer') || t.includes('csma') || t.includes('contention') || t.includes('framing') || t.includes('trailer') || t.includes('topology') || t.includes('half-duplex') || t.includes('full-duplex')) {
    return { moduleId: 6, moduleName: 'Modul 6: Data Link Layer', topic: 'Topic 6.1 - 6.3' };
  }
  return { moduleId: 4, moduleName: 'Modul 4: Physical Layer', topic: 'Topic 4.1 - 4.4' };
}

function getImageForQuestion(itemNum) {
  if (itemNum === 5) return 'images/q5_media.jpg';
  if (itemNum === 10) return 'images/q10_cable.jpg';
  if (itemNum === 12) return 'images/q12_cable.jpg';
  if (itemNum === 30) return 'images/q30_mac.png';
  if (itemNum === 45) return 'images/q45_terminal.png';
  if (itemNum === 46) return 'images/q46_cables.png';
  if (itemNum === 47) return 'images/q47_topology.jpg';
  return null;
}

const newQuestions = analyzed.map((item) => {
  const itemNum = item.itemNum;
  const qId = item.qId;
  const normA = normalize(item.plainText);

  // Match with oldQuestions
  let bestOld = null;
  let maxScore = 0;
  for (const o of oldQuestions) {
    const normO = normalize(o.titleEn);
    const wordsA = new Set(normA.split(/\s+/).filter(w => w.length > 3));
    const wordsO = new Set(normO.split(/\s+/).filter(w => w.length > 3));
    let common = 0;
    for (const w of wordsA) {
      if (wordsO.has(w)) common++;
    }
    const score = common / Math.max(wordsA.size, 1);
    if (score > maxScore && score > 0.4) {
      maxScore = score;
      bestOld = o;
    }
  }

  const modInfo = bestOld ? { moduleId: bestOld.moduleId, moduleName: bestOld.moduleName, topic: bestOld.topic } : detectModule(item.plainText, item.hint);

  let type = item.cfgType === 'multiple' ? 'multiple' : 'single';
  if (itemNum === 5) type = 'matching';

  let titleEn = item.plainText;
  let titleId = TRANSLATIONS[itemNum] || (bestOld ? bestOld.titleId : titleEn);

  let ptDownloadUrl = null;
  if (itemNum === 47) {
    titleEn = "Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.\nWhich port does Switch0 use to send frames to the host with the IPv4 address 10.1.1.5?";
    titleId = TRANSLATIONS[47];
    ptDownloadUrl = "https://itexamanswers.net/download/modules-4-7-ethernet-concepts-exam-packet-tracer";
  }

  let matchingData = null;
  if (itemNum === 5) {
    titleEn = "Match the situation with the appropriate use of network media.";
    titleId = TRANSLATIONS[5];
    matchingData = {
      situations: [
        { id: 1, text: "horizontal cabling structure", correctMedia: "Copper", explanation: "Kabel tembaga (UTP Cat5e/Cat6) adalah standar industri untuk kabel horizontal di dalam gedung kantor karena fleksibel dan hemat biaya." },
        { id: 2, text: "desktop PCs in offices in an enterprise", correctMedia: "Copper", explanation: "Koneksi ke PC desktop kantor menggunakan kabel tembaga UTP karena mudah di-terminate dan sesuai dengan port RJ-45 NIC PC." },
        { id: 3, text: "backbone cabling in an enterprise", correctMedia: "Fiber-optic", explanation: "Kabel backbone antar-gedung/lantai membutuhkan bandwidth sangat tinggi (10-100 Gbps) dan ketahanan terhadap interferensi, ideal dengan Fiber-optic." },
        { id: 4, text: "long-haul networks", correctMedia: "Fiber-optic", explanation: "Jaringan jarak jauh antar-kota/benua membutuhkan transmisi sinyal cahaya yang mampu menjangkau puluhan kilometer tanpa degradasi atenuasi tinggi." },
        { id: 5, text: "guest access in a coffee shop", correctMedia: "Wireless", explanation: "Akses pengunjung kedai kopi memerlukan konektivitas nirkabel yang fleksibel bagi berbagai smartphone/laptop tanpa kabel fisik." },
        { id: 6, text: "waiting rooms in a hospital", correctMedia: "Wireless", explanation: "Ruang tunggu rumah sakit memerlukan koneksi bergerak bebas bagi pasien dan staf tanpa batasan kabel di area umum." }
      ],
      mediaOptions: ["Copper", "Fiber-optic", "Wireless"]
    };
  }

  // Build Options
  const options = [];
  if (itemNum === 5) {
    options.push(
      {
        key: "A",
        text: "Copper Cables: horizontal cabling structure & desktop PCs in enterprise offices",
        isCorrect: true,
        why: "BENAR: Media tembaga (Copper/UTP) sangat ekonomis, mudah dipasang, dan merupakan standar de-facto untuk instalasi kabel horizontal serta PC desktop kantor."
      },
      {
        key: "B",
        text: "Fiber-optic: backbone cabling in enterprise & long-haul networks",
        isCorrect: true,
        why: "BENAR: Kabel serat optik (Fiber-optic) memiliki bandwidth raksasa, jangkauan puluhan kilometer, dan kebal terhadap interferensi elektromagnetik (EMI), ideal untuk backbone dan koneksi jarak jauh."
      },
      {
        key: "C",
        text: "Wireless: guest access in coffee shops & waiting rooms in hospitals",
        isCorrect: true,
        why: "BENAR: Media nirkabel (Wireless) memberikan mobilitas penuh tanpa kabel untuk pengunjung di area publik terbuka seperti kedai kopi dan ruang tunggu rumah sakit."
      }
    );
  } else {
    item.options.forEach((optText, optIdx) => {
      const isCorrect = (item.correctArray[optIdx] === 1);
      const letter = String.fromCharCode(65 + optIdx);

      let why = '';
      if (bestOld && bestOld.options) {
        const normOpt = normalize(optText);
        const oldOpt = bestOld.options.find(bo => {
          const normBo = normalize(bo.text);
          return normOpt.includes(normBo.slice(0, 15)) || normBo.includes(normOpt.slice(0, 15));
        });
        if (oldOpt && oldOpt.why) {
          why = oldOpt.why;
        }
      }

      if (!why) {
        if (isCorrect) {
          why = `BENAR: "${optText}" merupakan pilihan yang benar sesuai prinsip kerja dan standar resmi Cisco CCNA Ethernet Concepts.`;
        } else {
          why = `SALAH: "${optText}" bukan jawaban yang tepat untuk skenario atau konsep yang diuji pada pertanyaan ini.`;
        }
      }

      options.push({
        key: letter,
        text: optText,
        isCorrect: isCorrect,
        why: why
      });
    });
  }

  // Comprehensive Explanation
  let explanationId = bestOld ? bestOld.explanationId : '';
  if (item.hint && item.hint.length > 30) {
    if (!explanationId || item.hint.length > explanationId.length) {
      explanationId = item.hint;
    }
  }
  if (!explanationId) {
    explanationId = `Topik ${modInfo.topic}: Pelajari konsep resmi modul Cisco CCNA Ethernet Concepts untuk memahami mekanisme protokol dan spesifikasi hardware.`;
  }

  let keyTakeaway = bestOld ? bestOld.keyTakeaway : `Pahami perbedaan fungsi layer, standar kabel, dan protokol Ethernet pada ${modInfo.moduleName}.`;

  if (itemNum === 47) {
    explanationId = "Saat PC0 melakukan ping ke IPv4 10.1.1.5, frame dikirim ke Switch0. Switch0 merekam source MAC address PC0 pada port Fa0/1. Ketika reply diterima dari host 10.1.1.5, Switch0 mencatat MAC address dan port pengirim reply tersebut pada MAC Address Table. Melalui perintah 'show mac-address-table' pada Switch0 / PC0 Terminal, port yang berasosiasi dengan host 10.1.1.5 adalah Fa0/11.";
    keyTakeaway = "Switch mempelajari MAC address sumber secara dinamis pada port ingress dan mencocokkan port tujuan pada MAC Address Table (Fa0/11).";
  }

  return {
    id: itemNum,
    num: itemNum,
    webId: qId,
    moduleId: modInfo.moduleId,
    moduleName: modInfo.moduleName,
    color: modInfo.moduleId === 4 ? 'blue' : (modInfo.moduleId === 5 ? 'purple' : (modInfo.moduleId === 6 ? 'emerald' : 'amber')),
    topic: modInfo.topic,
    type: type,
    titleEn: titleEn,
    titleId: titleId,
    image: getImageForQuestion(itemNum),
    ptDownloadUrl: ptDownloadUrl,
    options: options,
    matchingData: matchingData,
    explanationId: explanationId,
    keyTakeaway: keyTakeaway
  };
});

const fileHeader = `// Bank Soal CCNA 1 v7 Modules 4 - 7: Ethernet Concepts
// Database Lengkap 80 Soal Asli NetAcad (Berdasarkan Online Test wpProQuiz ID 301)
// Dilengkapi Analisis Pilihan A, B, C, D yang Mendalam, Gambar Topologi, Link Packet Tracer, dan Fitur Cocokkan Tabel

const QUESTIONS_DATA = ${JSON.stringify(newQuestions, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUESTIONS_DATA;
}
`;

fs.writeFileSync('js/questions_data.js', fileHeader, 'utf-8');
console.log('Successfully generated complete js/questions_data.js with', newQuestions.length, 'questions!');
