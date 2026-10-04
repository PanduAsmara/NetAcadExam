// Bank Soal CCNA 1 v7 Modules 4 - 7: Ethernet Concepts
// Database Lengkap 70 Soal Asli NetAcad dengan Analisis Pilihan A, B, C, D yang Mendalam & Jawaban Acak

const QUESTIONS_DATA = [
  {
    "id": 1,
    "num": 1,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.1.1",
    "type": "single",
    "titleEn": "What is the purpose of the OSI physical layer?",
    "titleId": "Apa tujuan dari OSI physical layer (lapisan fisik)?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "controlling access to media",
        "isCorrect": false,
        "why": "SALAH: Mengontrol akses ke media fisik adalah tanggung jawab sublayer MAC pada Data Link Layer (Layer 2), bukan Physical Layer."
      },
      {
        "key": "B",
        "text": "transmitting bits across the local media",
        "isCorrect": true,
        "why": "BENAR: Fungsi utama Physical Layer adalah mengkodekan dan mentransmisikan bit biner (1 dan 0) melalui media transmisi fisik menggunakan electrical signals (kabel tembaga), light pulses (kabel fiber-optic), atau gelombang radio/RF (wireless)."
      },
      {
        "key": "C",
        "text": "performing error detection on received frames",
        "isCorrect": false,
        "why": "SALAH: Pengecekan kesalahan (error detection) pada frame dilakukan di Data Link Layer menggunakan CRC dalam field Frame Check Sequence (FCS)."
      },
      {
        "key": "D",
        "text": "exchanging frames between nodes over physical network media",
        "isCorrect": false,
        "why": "SALAH: Pertukaran frame antar node adalah fungsi Data Link Layer (Layer 2). Physical layer tidak mengenali struktur frame, hanya bit dan sinyal."
      }
    ],
    "explanationId": "OSI Physical Layer (Lapisan 1) bertanggung jawab untuk mengubah frame digital dari Data Link Layer menjadi representasi sinyal (listrik, optik/cahaya, atau gelombang radio) dan mentransmisikan bit-bit tersebut melintasi media fisik lokal ke perangkat tujuan.",
    "keyTakeaway": "Physical Layer = Transmisi bit sinyal pada media fisik lokal (kabel tembaga, fiber, nirkabel)."
  },
  {
    "id": 2,
    "num": 2,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.5.4",
    "type": "single",
    "titleEn": "Why are two strands of fiber used for a single fiber optic connection?",
    "titleId": "Mengapa dua untai serat (two strands of fiber) digunakan untuk satu koneksi serat optik?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "The two strands allow the data to travel for longer distances without degrading.",
        "isCorrect": false,
        "why": "SALAH: Jarak tempuh serat optik ditentukan oleh tipe kabel (Single-mode vs Multimode) dan kualitas redaman kaca/laser, bukan karena memakai dua untai."
      },
      {
        "key": "B",
        "text": "They prevent crosstalk from causing interference on the connection.",
        "isCorrect": false,
        "why": "SALAH: Kabel serat optik menggunakan foton (cahaya) bukan arus listrik, sehingga secara alami 100% kebal terhadap crosstalk dan induksi elektromagnetik."
      },
      {
        "key": "C",
        "text": "They increase the speed at which the data can travel.",
        "isCorrect": false,
        "why": "SALAH: Kecepatan rambat cahaya di dalam inti kaca bersifat konstan fisik, dua untai tidak melipatgandakan kecepatan rambat."
      },
      {
        "key": "D",
        "text": "They allow for full-duplex connectivity.",
        "isCorrect": true,
        "why": "BENAR: Satu untai kaca mentransmisikan data searah (Tx), dan untai lainnya menerima data dari arah berlawanan (Rx). Kombinasi keduanya memungkinkan komunikasi dua arah simultan (Full-Duplex)."
      }
    ],
    "explanationId": "Cahaya hanya dapat merambat dalam satu arah melalui satu untai serat optik. Oleh karena itu, koneksi serat optik standar memerlukan dua untai serat: satu untai khusus untuk Transmit (Tx) dan satu untai untuk Receive (Rx), sehingga memungkinkan komunikasi Full-Duplex secara simultan tanpa tabrakan sinyal.",
    "keyTakeaway": "1 untai = Tx (Kirim), 1 untai = Rx (Terima) -> Memungkinkan Full-Duplex."
  },
  {
    "id": 3,
    "num": 3,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.3.1",
    "type": "single",
    "titleEn": "Which characteristic describes crosstalk?",
    "titleId": "Karakteristik manakah yang mendeskripsikan crosstalk?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "the distortion of the network signal from fluorescent lighting",
        "isCorrect": false,
        "why": "SALAH: Gangguan dari lampu neon atau motor listrik disebut Electromagnetic Interference (EMI), bukan crosstalk."
      },
      {
        "key": "B",
        "text": "the distortion of the transmitted messages from signals carried in adjacent wires",
        "isCorrect": true,
        "why": "BENAR: Definisi resmi crosstalk adalah distorsi sinyal data yang disebabkan oleh induksi medan elektromagnetik dari sinyal pada kabel/untaian kawat yang berada tepat di sebelahnya."
      },
      {
        "key": "C",
        "text": "the weakening of the network signal over long cable lengths",
        "isCorrect": false,
        "why": "SALAH: Melemahnya kekuatan sinyal saat menempuh jarak kabel yang panjang disebut Atenuasi (Attenuation)."
      },
      {
        "key": "D",
        "text": "the loss of wireless signal over excessive distance from the access point",
        "isCorrect": false,
        "why": "SALAH: Penurunan sinyal nirkabel karena jarak dari Access Point disebut Path Loss / Wireless Attenuation."
      }
    ],
    "explanationId": "Crosstalk adalah fenomena gangguan/derau (noise) di mana medan magnet atau listrik yang dihasilkan oleh sinyal pada satu kawat tembaga bocor dan mendistorsi sinyal pada kawat lain yang bersebelahan dalam kabel yang sama.",
    "keyTakeaway": "Crosstalk = Gangguan sinyal dari kabel/kawat tetangga yang bersebelahan (NEXT/FEXT)."
  },
  {
    "id": 4,
    "num": 4,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.3.1",
    "type": "single",
    "titleEn": "Which procedure is used to reduce the effect of crosstalk in copper cables?",
    "titleId": "Prosedur manakah yang digunakan untuk mengurangi efek crosstalk pada kabel tembaga?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "requiring proper grounding connections",
        "isCorrect": false,
        "why": "SALAH: Grounding digunakan untuk membuang lonjakan tegangan statis pada kabel berpelindung (STP), bukan cara utama meniadakan crosstalk."
      },
      {
        "key": "B",
        "text": "twisting opposing circuit wire pairs together",
        "isCorrect": true,
        "why": "BENAR: Melilitkan pasangan kawat yang berlawanan menghasilkan efek 'cancellation', yang merupakan metode utama pencegahan crosstalk pada kabel UTP."
      },
      {
        "key": "C",
        "text": "wrapping the bundle of wires with metallic shielding",
        "isCorrect": false,
        "why": "SALAH: Pelindung logam pada kabel STP dirancang untuk melindungi dari EMI/RFI luar, sedangkan crosstalk internal antar-kawat diatasi oleh pilinan (twisting)."
      },
      {
        "key": "D",
        "text": "designing a cable infrastructure to avoid crosstalk interference",
        "isCorrect": false,
        "why": "SALAH: Desain tata letak ruangan mengurangi interferensi dari sumber eksternal, bukan crosstalk internal kabel."
      },
      {
        "key": "E",
        "text": "avoiding sharp bends during installation",
        "isCorrect": false,
        "why": "SALAH: Menghindari tekukan tajam menjaga agar kawat tidak rusak, bukan teknik primer peniadaan crosstalk."
      }
    ],
    "explanationId": "Pada kabel UTP/STP, pasangan kawat sengaja dipilin (twisted). Saat arus listrik mengalir bolak-balik pada pasangan sirkuit yang berlawanan, medan magnet yang dihasilkan saling meniadakan (cancellation effect). Memilin pasangan kawat dengan kerapatan lilitan berbeda pada tiap pasang secara drastis meminimalkan crosstalk.",
    "keyTakeaway": "Teknik Pembatalan (Cancellation) dengan cara melilitkan pasangan kawat berlawanan (Twisting wire pairs)."
  },
  {
    "id": 5,
    "num": 5,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.3.3",
    "type": "matching",
    "titleEn": "Match the situation with the appropriate use of network media.",
    "titleId": "Cocokkan situasi berikut dengan penggunaan media jaringan yang sesuai.",
    "image": "images/q5_media.jpg",
    "options": [
      {
        "key": "A",
        "text": "Copper Cables: horizontal cabling structure & desktop PCs in offices in an enterprise",
        "isCorrect": true,
        "why": "BENAR: Kabel tembaga (UTP) adalah standar industri untuk kabel horizontal dan koneksi PC desktop kantor."
      },
      {
        "key": "B",
        "text": "Fiber optic: backbone cabling in an enterprise & long-haul networks",
        "isCorrect": true,
        "why": "BENAR: Fiber optik sangat tahan interferensi dan mendukung kecepatan puluhan Gbps hingga puluhan kilometer, cocok untuk backbone dan jaringan antar-gedung/kota."
      },
      {
        "key": "C",
        "text": "Wireless: guest access in a coffee shop & waiting rooms in a hospital",
        "isCorrect": true,
        "why": "BENAR: Nirkabel memberikan fleksibilitas akses tanpa kabel untuk perangkat mobile di area publik seperti kedai kopi dan ruang tunggu."
      }
    ],
    "explanationId": "Kabel Tembaga (Copper) ideal untuk instalasi horizontal dan PC desktop karena fleksibel dan murah. Kabel Serat Optik (Fiber) ideal untuk backbone antar-gedung dan jaringan jarak jauh (long-haul) karena bandwidth raksasa dan jangkauan kilometer tanpa terpengaruh EMI. Nirkabel (Wireless) ideal untuk mobilitas pengguna seperti tamu cafe atau ruang tunggu rumah sakit.",
    "keyTakeaway": "Copper = Desktop & Horizontal; Fiber = Backbone & Long-haul; Wireless = Mobilitas tamu/ruang tunggu."
  },
  {
    "id": 6,
    "num": 6,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.2.6",
    "type": "multiple",
    "titleEn": "A network administrator is measuring the transfer of bits across the company backbone for a mission critical financial application. The administrator notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? (Choose three.)",
    "titleId": "Seorang administrator jaringan mengukur transfer bit pada backbone perusahaan untuk aplikasi keuangan krusial. Administrator melihat throughput jaringan lebih rendah dari bandwidth yang diharapkan. Tiga faktor manakah yang mempengaruhi perbedaan throughput tersebut? (Pilih tiga.)",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "the amount of traffic that is currently crossing the network",
        "isCorrect": true,
        "why": "BENAR: Jika jaringan sedang padat dengan banyak pengguna, kapasitas link terbagi sehingga throughput per aplikasi menurun drastis."
      },
      {
        "key": "B",
        "text": "the sophistication of the encapsulation method applied to the data",
        "isCorrect": false,
        "why": "SALAH: Metode enkapsulasi data telah terstandarisasi dan tidak menyebabkan variasi fluktuasi throughput yang terukur."
      },
      {
        "key": "C",
        "text": "the type of traffic that is crossing the network",
        "isCorrect": true,
        "why": "BENAR: Tipe traffic (misal data interaktif transaksi vs streaming video besar vs paket kecil VoIP) mempengaruhi antrean buffer dan throughput aplikasi."
      },
      {
        "key": "D",
        "text": "the latency that is created by the number of network devices that the data is crossing",
        "isCorrect": true,
        "why": "BENAR: Semakin banyak switch dan router yang dilewati data, semakin tinggi total latensi, yang memperlambat throughput efektif TCP."
      },
      {
        "key": "E",
        "text": "the bandwidth of the WAN connection to the Internet",
        "isCorrect": false,
        "why": "SALAH: Pertanyaan secara eksplisit menyatakan administrator sedang mengukur backbone internal perusahaan, bukan link WAN ke Internet."
      },
      {
        "key": "F",
        "text": "the reliability of the gigabit Ethernet infrastructure of the backbone",
        "isCorrect": false,
        "why": "SALAH: Keandalan infrastruktur adalah kualitas ketersediaan link (uptime), bukan faktor penghitung variasi throughput pada link aktif."
      }
    ],
    "explanationId": "Bandwidth adalah kapasitas teoritis maksimal. Throughput adalah ukuran nyata transfer bit aktual yang berhasil melintasi media pada waktu tertentu. Throughput dipengaruhi oleh: 1) Jumlah traffic saat itu, 2) Tipe traffic yang lewat, dan 3) Latensi dari banyaknya perangkat jaringan (hop router/switch) yang harus dilalui.",
    "keyTakeaway": "Faktor penentu throughput: Jumlah traffic, Tipe traffic, dan Latensi perangkat perantara."
  },
  {
    "id": 7,
    "num": 7,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.5.1",
    "type": "multiple",
    "titleEn": "What are two characteristics of fiber-optic cable? (Choose two.)",
    "titleId": "Apa dua karakteristik dari kabel serat optik (fiber-optic cable)? (Pilih dua.)",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "It is not affected by EMI or RFI.",
        "isCorrect": true,
        "why": "BENAR: Sinyal cahaya (light pulses) di dalam serat optik sama sekali tidak terpengaruh oleh gelombang elektromagnetik eksternal (100% EMI-immune)."
      },
      {
        "key": "B",
        "text": "Each pair of cables is wrapped in metallic foil.",
        "isCorrect": false,
        "why": "SALAH: Ini adalah ciri kabel STP (Shielded Twisted-Pair) tembaga, bukan serat optik."
      },
      {
        "key": "C",
        "text": "It combines the technique of cancellation, shielding, and twisting to protect data.",
        "isCorrect": false,
        "why": "SALAH: Teknik cancellation dan twisting hanya berlaku pada kabel tembaga UTP/STP."
      },
      {
        "key": "D",
        "text": "It typically contains 4 pairs of fiber-optic wires.",
        "isCorrect": false,
        "why": "SALAH: Kabel fiber-optic terdiri dari untaian kaca (strands), bukan 4 pasang kawat tembaga berpilin."
      },
      {
        "key": "E",
        "text": "It is more expensive than UTP cabling is.",
        "isCorrect": true,
        "why": "BENAR: Serat optik membutuhkan kaca silika murni, transceiver laser/LED, dan peralatan terminasi presisi berbiaya lebih tinggi dibanding UTP."
      }
    ],
    "explanationId": "Kabel fiber-optic mentransmisikan data menggunakan pulsa cahaya (optical signals) melalui inti serat kaca silika. Karena berbasis cahaya dan bukan arus listrik, kabel fiber 100% kebal terhadap Electromagnetic Interference (EMI) dan Radio Frequency Interference (RFI). Namun, biaya kabel, transceiver optik, dan peralatannya relatif lebih tinggi dibanding kabel tembaga UTP.",
    "keyTakeaway": "Fiber Optic: Kebal EMI/RFI & Biaya lebih mahal daripada UTP."
  },
  {
    "id": 8,
    "num": 8,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.1.2",
    "type": "single",
    "titleEn": "What is a primary role of the Physical layer in transmitting data on the network?",
    "titleId": "Apa peran utama Lapisan Fisik (Physical Layer) dalam mentransmisikan data di jaringan?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "create the signals that represent the bits in each frame on to the media",
        "isCorrect": true,
        "why": "BENAR: Lapisan fisik bertanggung jawab mengonversi representasi bit digital menjadi sinyal fisik pada media transmisi."
      },
      {
        "key": "B",
        "text": "provide physical addressing to the devices",
        "isCorrect": false,
        "why": "SALAH: Pengalamatan fisik (MAC address) berada di sublayer MAC pada Data Link Layer (Layer 2)."
      },
      {
        "key": "C",
        "text": "determine the path packets take through the network",
        "isCorrect": false,
        "why": "SALAH: Menentukan jalur terbaik pengiriman paket (routing) adalah fungsi Network Layer (Layer 3)."
      },
      {
        "key": "D",
        "text": "control data access to the media",
        "isCorrect": false,
        "why": "SALAH: Kontrol akses media (CSMA/CD atau CSMA/CA) dikelola oleh sublayer MAC pada Data Link Layer (Layer 2)."
      }
    ],
    "explanationId": "Physical Layer menerima frame lengkap dari Data Link Layer, lalu mengubah deretan bit 0 dan 1 tersebut menjadi sinyal fisik (tegangan listrik pada tembaga, kedipan cahaya pada fiber, atau gelombang radio pada nirkabel) untuk dikirimkan melalui media lokal.",
    "keyTakeaway": "Physical Layer = Membuat sinyal representasi bit pada media transmisi."
  },
  {
    "id": 9,
    "num": 9,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.3.1",
    "type": "single",
    "titleEn": "With the use of unshielded twisted-pair copper wire in a network, what causes crosstalk within the cable pairs?",
    "titleId": "Dengan penggunaan kabel tembaga unshielded twisted-pair (UTP) di jaringan, apa yang menyebabkan crosstalk di dalam pasangan kabel?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "the magnetic field around the adjacent pairs of wire",
        "isCorrect": true,
        "why": "BENAR: Aliran sinyal listrik menciptakan medan magnet di sekitar kawat. Medan magnet ini berinteraksi dengan kawat di sebelahnya dan menimbulkan sinyal pengganggu (crosstalk)."
      },
      {
        "key": "B",
        "text": "the use of braided wire to shield the adjacent wire pairs",
        "isCorrect": false,
        "why": "SALAH: Kawat serabut berpelindung (braided wire) justru digunakan untuk mencegah gangguan pada kabel koaksial/STP, bukan penyebab crosstalk."
      },
      {
        "key": "C",
        "text": "the reflection of the electrical wave back from the far end of the cable",
        "isCorrect": false,
        "why": "SALAH: Pantulan gelombang listrik akibat ketidaksesuaian impedansi disebut Return Loss, bukan crosstalk."
      },
      {
        "key": "D",
        "text": "the collision caused by two nodes trying to use the media simultaneously",
        "isCorrect": false,
        "why": "SALAH: Tabrakan transmisi dua node pada media half-duplex disebut collision, yang merupakan isu Layer 2 CSMA/CD, bukan penyebab biologis medan crosstalk."
      }
    ],
    "explanationId": "Ketika arus listrik mengalir melalui kawat tembaga, hukum elektromagnetisme menyatakan bahwa medan magnet akan terbentuk di sekeliling kawat tersebut. Medan magnet ini dapat menginduksi arus listrik liar pada pasangan kawat tetangga di dalam kabel yang sama, menghasilkan interferensi yang disebut crosstalk.",
    "keyTakeaway": "Crosstalk pada UTP dipicu oleh medan magnet yang melingkari pasangan kawat bersebelahan."
  },
  {
    "id": 10,
    "num": 10,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.5.1",
    "type": "single",
    "titleEn": "Refer to the graphic. What type of cabling is shown?",
    "titleId": "Lihat gambar grafik. Jenis kabel apakah yang ditampilkan pada gambar?",
    "image": "images/q10_cable.jpg",
    "options": [
      {
        "key": "A",
        "text": "STP",
        "isCorrect": false,
        "why": "SALAH: STP berisi 4 pasang kawat tembaga yang dibungkus foil logam pelindung."
      },
      {
        "key": "B",
        "text": "UTP",
        "isCorrect": false,
        "why": "SALAH: UTP berisi 4 pasang kawat tembaga berwarna tanpa lapisan pelindung foil."
      },
      {
        "key": "C",
        "text": "coax",
        "isCorrect": false,
        "why": "SALAH: Coaxial cable memiliki satu copper conductor pejal di tengah, isolator dielektrik, metallic shield, dan outer jacket pelindung luar."
      },
      {
        "key": "D",
        "text": "fiber",
        "isCorrect": true,
        "why": "BENAR: Gambar memperlihatkan untaian kaca transparan tipis yang dikelilingi lapisan cladding dan pelindung fleksibel, yang merupakan anatomi kabel fiber-optic."
      }
    ],
    "explanationId": "Gambar menampilkan kabel serat optik (fiber optic) yang memperlihatkan struktur: Core (inti kaca/silika), Cladding (lapisan pemantul cahaya dengan indeks bias lebih rendah), Buffer coating (pelindung fleksibel), Aramid yarn (serat penguat Kevlar), dan Outer Jacket plastik.",
    "keyTakeaway": "Kabel dengan Inti Kaca (Core) dan Cladding pemantul cahaya adalah Serat Optik (Fiber)."
  },
  {
    "id": 11,
    "num": 11,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.3.1",
    "type": "multiple",
    "titleEn": "In addition to the cable length, what two factors could interfere with the communication carried over UTP cables? (Choose two.)",
    "titleId": "In addition to the cable length, what two factors could interfere with the communication carried over UTP cables? (Choose two.)",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "crosstalk",
        "isCorrect": true,
        "why": "BENAR: Pilihan ini sesuai dengan konsep resmi Cisco NetAcad. Pernyataan ini secara tepat menjelaskan spesifikasi dan perilaku teknis yang ditanyakan."
      },
      {
        "key": "B",
        "text": "bandwidth",
        "isCorrect": false,
        "why": "SALAH: Bandwidth adalah kapasitas kapasitas teoritis media, bukan sumber interferensi sinyal atau ukuran waktu tunda."
      },
      {
        "key": "C",
        "text": "size of the network",
        "isCorrect": false,
        "why": "SALAH: Skala keseluruhan jaringan tidak mempengaruhi integritas sinyal elektrik (electrical signals) pada satu bentangan kabel UTP lokal."
      },
      {
        "key": "D",
        "text": "signal modulation technique",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "E",
        "text": "electromagnetic interference",
        "isCorrect": true,
        "why": "BENAR: Pilihan ini sesuai dengan konsep resmi Cisco NetAcad. Pernyataan ini secara tepat menjelaskan spesifikasi dan perilaku teknis yang ditanyakan."
      }
    ],
    "explanationId": "Explanation: Topic 4.3.1 Copper media is widely used in network communications. However, copper media is limited by distance and signal interference. Data is transmitted on copper cables as electrical pulses. The electrical pulses are susceptible to interference from two sources: Electromagnetic interference (EMI) or radio frequency interference (RFI) - EMI and RFI signals can distort and corrupt the data signals being carried by copper media. Crosstalk - Crosstalk is a disturbance caused by the electric or magnetic fields of a signal on one wire interfering with the signal in an adjacent wire.",
    "keyTakeaway": "Tips Ujian CCNA Topic 4.3.1: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 12,
    "num": 12,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.3.3",
    "type": "single",
    "titleEn": "Refer to the graphic. What type of cabling is shown?",
    "titleId": "Refer to the graphic. What type of cabling is shown?",
    "image": "images/q12_cable.jpg",
    "options": [
      {
        "key": "A",
        "text": "STP",
        "isCorrect": false,
        "why": "SALAH: Kabel STP (Shielded Twisted-Pair) memiliki lapisan pelindung foil logam pembungkus pasangan kawat."
      },
      {
        "key": "B",
        "text": "UTP",
        "isCorrect": true,
        "why": "BENAR: Gambar menampilkan 4 pasang kawat tembaga berwarna yang saling dipilin di dalam selubung luar tanpa lapisan logam (Unshielded Twisted-Pair)."
      },
      {
        "key": "C",
        "text": "coax",
        "isCorrect": false,
        "why": "SALAH: Kabel koaksial memiliki satu inti konduktor tembaga pejal di bagian tengah yang dikelilingi isolasi silinder dan anyaman kawat."
      },
      {
        "key": "D",
        "text": "fiber",
        "isCorrect": false,
        "why": "SALAH: Fiber-optic terbuat dari serat kaca silika untuk transmisi sinyal cahaya (optical signals), bukan 4 pasang kawat tembaga berpilin (twisted-pair)."
      }
    ],
    "explanationId": "Explanation: Topic 4.3.3 Network cabling include different types of cables: UTP cable consists of four pairs of color-coded wires that have been twisted together and then encased in a flexible plastic sheath. STP cable uses four pairs of wires, each wrapped in a foil shield, which are then wrapped in an overall metallic braid or foil. Coaxial cable uses a copper conductor and a layer of flexible plastic insulation surrounds the copper conductor. Fiber cable is a flexible, extremely thin, transparent strand of glass surrounded by plastic insulation",
    "keyTakeaway": "Tips Ujian CCNA Topic 4.3.3: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 13,
    "num": 13,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.6.1",
    "type": "multiple",
    "titleEn": "Which two devices commonly affect wireless networks? (Choose two.)",
    "titleId": "Which two devices commonly affect wireless networks? (Choose two.)",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "Blu-ray players",
        "isCorrect": false,
        "why": "SALAH: Perangkat ini tidak memancarkan radiasi gelombang frekuensi radio berdaya tinggi pada spektrum Wi-Fi 2.4 GHz."
      },
      {
        "key": "B",
        "text": "home theaters",
        "isCorrect": false,
        "why": "SALAH: Perangkat ini tidak memancarkan radiasi gelombang frekuensi radio berdaya tinggi pada spektrum Wi-Fi 2.4 GHz."
      },
      {
        "key": "C",
        "text": "cordless phones",
        "isCorrect": true,
        "why": "BENAR: Perangkat ini memancarkan radiasi frekuensi radio yang kuat pada spektrum 2.4 GHz tanpa lisensi, memicu interferensi langsung (RFI) pada Wi-Fi."
      },
      {
        "key": "D",
        "text": "microwaves",
        "isCorrect": true,
        "why": "BENAR: Perangkat ini memancarkan radiasi frekuensi radio yang kuat pada spektrum 2.4 GHz tanpa lisensi, memicu interferensi langsung (RFI) pada Wi-Fi."
      },
      {
        "key": "E",
        "text": "incandescent light bulbs",
        "isCorrect": false,
        "why": "SALAH: Perangkat ini tidak memancarkan radiasi gelombang frekuensi radio berdaya tinggi pada spektrum Wi-Fi 2.4 GHz."
      },
      {
        "key": "F",
        "text": "external hard drives",
        "isCorrect": false,
        "why": "SALAH: Perangkat ini tidak memancarkan radiasi gelombang frekuensi radio berdaya tinggi pada spektrum Wi-Fi 2.4 GHz."
      }
    ],
    "explanationId": "Explanation: Topic 4.6.1 Radio Frequency Interference (RFI) is the interference that is caused by radio transmitters and other devices that are transmitting in the same frequency.",
    "keyTakeaway": "Tips Ujian CCNA Topic 4.6.1: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 14,
    "num": 14,
    "moduleId": 6,
    "moduleName": "Modul 6: Data Link Layer",
    "color": "emerald",
    "topic": "Topic 6.1.1",
    "type": "multiple",
    "titleEn": "Which two statements describe the services provided by the data link layer? (Choose two.)",
    "titleId": "Which two statements describe the services provided by the data link layer? (Choose two.)",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "It defines the end-to-end delivery addressing scheme.",
        "isCorrect": false,
        "why": "SALAH: Pengalamatan pengiriman ujung-ke-ujung (end-to-end) adalah tugas pengalamatan logis IP pada Network Layer (Layer 3)."
      },
      {
        "key": "B",
        "text": "It maintains the path between the source and destination devices during the data transmission.",
        "isCorrect": false,
        "why": "SALAH: Pemilihan dan pemeliharaan jalur (routing) adalah tugas router di Network Layer (Layer 3)."
      },
      {
        "key": "C",
        "text": "It manages the access of frames to the network media.",
        "isCorrect": true,
        "why": "BENAR: Sublayer MAC pada Data Link Layer mengatur bagaimana dan kapan frame data diakses ke media transmisi fisik."
      },
      {
        "key": "D",
        "text": "It provides reliable delivery through link establishment and flow control.",
        "isCorrect": false,
        "why": "SALAH: Pengiriman andal berbasis koneksi (reliable delivery) dan flow control ujung-ke-ujung dikelola oleh TCP di Transport Layer (Layer 4)."
      },
      {
        "key": "E",
        "text": "It ensures that application data will be transmitted according to the prioritization.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "F",
        "text": "It packages various Layer 3 PDUs into a frame format that is compatible with the network interface.",
        "isCorrect": true,
        "why": "BENAR: Sublayer LLC menerima paket Layer 3 (IPv4/IPv6 PDU) dan mengemasnya ke dalam frame yang sesuai dengan media."
      }
    ],
    "explanationId": "Explanation: Topic 6.1.1 The data link layer is divided into two sub layers, namely Logical Link Control (LLC) and Media Access Control (MAC). LLC forms a frame from the network layer PDU into a format that conforms to the requirements of the network interface and media. A network layer PDU might be for IPv4 or IPv6. The MAC sub layer defines the media access processes performed by the hardware. It manages the frame access to the network media according to the physical signaling requirements (copper cable, fiber optic, wireless, etc.)",
    "keyTakeaway": "Tips Ujian CCNA Topic 6.1.1: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 15,
    "num": 15,
    "moduleId": 6,
    "moduleName": "Modul 6: Data Link Layer",
    "color": "emerald",
    "topic": "Topic 6.3.2",
    "type": "single",
    "titleEn": "What is the function of the CRC value that is found in the FCS field of a frame?",
    "titleId": "What is the function of the CRC value that is found in the FCS field of a frame?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "to verify the integrity of the received frame",
        "isCorrect": true,
        "why": "BENAR: Nilai CRC pada FCS dibandingkan oleh perangkat penerima untuk mendeteksi apakah frame mengalami kerusakan bit selama transmisi."
      },
      {
        "key": "B",
        "text": "to verify the physical address in the frame",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "C",
        "text": "to verify the logical address in the frame",
        "isCorrect": false,
        "why": "SALAH: Alamat logis (IP address) dikelola oleh Network Layer (Layer 3), bukan oleh field FCS atau trailer Layer 2."
      },
      {
        "key": "D",
        "text": "to compute the checksum header for the data field in the frame",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 6.3.2 The CRC value in the FCS field of the received frame is compared to the computed CRC value of that frame, in order to verify the integrity of the frame. If the two values do not match, then the frame is discarded.",
    "keyTakeaway": "Tips Ujian CCNA Topic 6.3.2: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 16,
    "num": 16,
    "moduleId": 6,
    "moduleName": "Modul 6: Data Link Layer",
    "color": "emerald",
    "topic": "Topic 6.3.2",
    "type": "single",
    "titleEn": "What is contained in the trailer of a data-link frame?",
    "titleId": "What is contained in the trailer of a data-link frame?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "logical address",
        "isCorrect": false,
        "why": "SALAH: Alamat logis (IP address) dikelola oleh Network Layer (Layer 3), bukan oleh field FCS atau trailer Layer 2."
      },
      {
        "key": "B",
        "text": "physical address",
        "isCorrect": false,
        "why": "SALAH: Alamat fisik (MAC address) terletak di bagian Header frame, bukan pada trailer."
      },
      {
        "key": "C",
        "text": "data",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "error detection",
        "isCorrect": true,
        "why": "BENAR: Bagian trailer pada frame Data Link khusus menyimpan mekanisme deteksi kesalahan (field FCS / CRC)."
      }
    ],
    "explanationId": "Explanation: Topic 6.3.2 The trailer in a data-link frame contains error detection information that is pertinent to the frame included in the FCS field. The header contains control information, such as the addressing, while the area that is indicated by the word \"data\" includes the data, transport layer PDU, and the IP header.",
    "keyTakeaway": "Tips Ujian CCNA Topic 6.3.2: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 17,
    "num": 17,
    "moduleId": 6,
    "moduleName": "Modul 6: Data Link Layer",
    "color": "emerald",
    "topic": "Topic 6.3.2",
    "type": "single",
    "titleEn": "Which statement describes a characteristic of the frame header fields of the data link layer?",
    "titleId": "Which statement describes a characteristic of the frame header fields of the data link layer?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "They all include the flow control and logical connection fields.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "B",
        "text": "Ethernet frame header fields contain Layer 3 source and destination addresses.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "C",
        "text": "They vary depending on protocols.",
        "isCorrect": true,
        "why": "BENAR: Format header frame Data Link disesuaikan dengan kebutuhan protokol spesifik media yang digunakan (misal Ethernet berbeda dengan Wi-Fi atau PPP)."
      },
      {
        "key": "D",
        "text": "They include information on user applications.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 6.3.2 All data link layer protocols encapsulate the Layer 3 PDU within the data field of the frame. However, the structure of the frame and the fields that are contained in the header vary according to the protocol. Different data link layer protocols may use different fields, like priority/quality of service, logical connection control, physical link control, flow control, and congestion control.",
    "keyTakeaway": "Tips Ujian CCNA Topic 6.3.2: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 18,
    "num": 18,
    "moduleId": 6,
    "moduleName": "Modul 6: Data Link Layer",
    "color": "emerald",
    "topic": "Topic 6.2.2",
    "type": "single",
    "titleEn": "A network team is comparing physical WAN topologies for connecting remote sites to a headquarters building. Which topology provides high availability and connects some, but not all, remote sites?",
    "titleId": "A network team is comparing physical WAN topologies for connecting remote sites to a headquarters building. Which topology provides high availability and connects some, but not all, remote sites?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "mesh",
        "isCorrect": false,
        "why": "SALAH: Topologi Full Mesh menghubungkan SETIAP situs ke SEMUA situs lainnya secara penuh, bukan hanya menghubungkan sebagian/beberapa situs."
      },
      {
        "key": "B",
        "text": "partial mesh",
        "isCorrect": true,
        "why": "BENAR: Partial Mesh memberikan redundansi dan ketersediaan tinggi dengan menghubungkan beberapa lokasi strategis satu sama lain, tanpa harus menghubungkan seluruh cabang secara penuh."
      },
      {
        "key": "C",
        "text": "hub and spoke",
        "isCorrect": false,
        "why": "SALAH: Topologi Hub and Spoke menghubungkan semua cabang hanya ke satu pusat tanpa ada jalur redundan antar cabang."
      },
      {
        "key": "D",
        "text": "point-to-point",
        "isCorrect": false,
        "why": "SALAH: Point-to-point hanya menghubungkan dua perangkat secara langsung, tidak membentuk interkoneksi banyak cabang."
      }
    ],
    "explanationId": "Explanation: Topic 6.2.2 Partial mesh topologies provide high availability by interconnecting multiple remote sites, but do not require a connection between all remote sites. A mesh topology requires point-to-point links with every system being connected to every other system. A point-to-point topology is where each device is connected to one other device. A hub and spoke uses a central device in a star topology that connects to other point-to-point devices.",
    "keyTakeaway": "Tips Ujian CCNA Topic 6.2.2: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 19,
    "num": 19,
    "moduleId": 7,
    "moduleName": "Modul 7: Ethernet Switching",
    "color": "purple",
    "topic": "Topic 7.1.4",
    "type": "multiple",
    "titleEn": "Which two fields or features does Ethernet examine to determine if a received frame is passed to the data link layer or discarded by the NIC? (Choose two.)",
    "titleId": "Which two fields or features does Ethernet examine to determine if a received frame is passed to the data link layer or discarded by the NIC? (Choose two.)",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "auto-MDIX",
        "isCorrect": false,
        "why": "SALAH: Auto-MDIX adalah fitur Layer 1 untuk mendeteksi tipe kabel straight/crossover, bukan penentu apakah frame diterima atau dibuang oleh NIC."
      },
      {
        "key": "B",
        "text": "CEF",
        "isCorrect": false,
        "why": "SALAH: Cisco Express Forwarding (CEF) adalah teknologi switching Layer 3 pada router Cisco, tidak berkaitan dengan filter frame di NIC."
      },
      {
        "key": "C",
        "text": "Frame Check Sequence",
        "isCorrect": true,
        "why": "BENAR: NIC Ethernet mewajibkan ukuran frame minimal 64 byte (bukan runt) dan perhitungan CRC pada FCS harus cocok, jika tidak frame langsung dibuang."
      },
      {
        "key": "D",
        "text": "minimum frame size",
        "isCorrect": true,
        "why": "BENAR: NIC Ethernet mewajibkan ukuran frame minimal 64 byte (bukan runt) dan perhitungan CRC pada FCS harus cocok, jika tidak frame langsung dibuang."
      },
      {
        "key": "E",
        "text": "source MAC address",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 7.1.4 An Ethernet frame is not processed and is discarded if it is smaller than the minimum (64 bytes) or if the calculated frame check sequence (FCS) value does not match the received FCS value. Auto-MDIX (automatic medium-dependent interface crossover) is Layer 1 technology that detects cable straight-through or crossover types. The source MAC address is not used to determine how the frame is received. CEF (Cisco Express Forwarding) is a technology used to expedite Layer 3 switching.",
    "keyTakeaway": "Tips Ujian CCNA Topic 7.1.4: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 20,
    "num": 20,
    "moduleId": 6,
    "moduleName": "Modul 6: Data Link Layer",
    "color": "emerald",
    "topic": "Topic 6.2.5",
    "type": "single",
    "titleEn": "Which media communication type does not require media arbitration in the data link layer?",
    "titleId": "Which media communication type does not require media arbitration in the data link layer?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "deterministic",
        "isCorrect": false,
        "why": "SALAH: Akses deterministik (seperti Token Ring) adalah metode arbitrase giliran token ketat, bukan bebas dari arbitrase."
      },
      {
        "key": "B",
        "text": "half-duplex",
        "isCorrect": false,
        "why": "SALAH: Mode half-duplex rentan tabrakan dan mutlak membutuhkan mekanisme arbitrase media (CSMA/CD)."
      },
      {
        "key": "C",
        "text": "full-duplex",
        "isCorrect": true,
        "why": "BENAR: Satu untai kaca mentransmisikan data searah (Tx), dan untai lainnya menerima data dari arah berlawanan (Rx), sehingga memungkinkan koneksi dua arah simultan (Full-Duplex)."
      },
      {
        "key": "D",
        "text": "controlled access",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 6.2.5 Half-duplex communication occurs when both devices can both transmit and receive on the medium but cannot do so simultaneously. Full-duplex communication occurs when both devices can transmit and receive on the medium at the same time and therefore does not require media arbitration. Half-duplex communication is typically contention-based, whereas controlled (deterministic) access is applied in technologies where devices take turns to access the medium.",
    "keyTakeaway": "Tips Ujian CCNA Topic 6.2.5: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 21,
    "num": 21,
    "moduleId": 6,
    "moduleName": "Modul 6: Data Link Layer",
    "color": "emerald",
    "topic": "Topic 6.2.4",
    "type": "single",
    "titleEn": "Which statement describes an extended star topology?",
    "titleId": "Which statement describes an extended star topology?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "End devices connect to a central intermediate device, which in turn connects to other central intermediate devices.",
        "isCorrect": true,
        "why": "BENAR: Pilihan ini sesuai dengan konsep resmi Cisco NetAcad. Pernyataan ini secara tepat menjelaskan spesifikasi dan perilaku teknis yang ditanyakan."
      },
      {
        "key": "B",
        "text": "End devices are connected together by a bus and each bus connects to a central intermediate device.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "C",
        "text": "Each end system is connected to its respective neighbor via an intermediate device.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "All end and intermediate devices are connected in a chain to each other.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 6.2.4 In an extended star topology, central intermediate devices interconnect other star topologies.",
    "keyTakeaway": "Tips Ujian CCNA Topic 6.2.4: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 22,
    "num": 22,
    "moduleId": 6,
    "moduleName": "Modul 6: Data Link Layer",
    "color": "emerald",
    "topic": "Topic 6.1.2",
    "type": "single",
    "titleEn": "What is a characteristic of the LLC sublayer?",
    "titleId": "What is a characteristic of the LLC sublayer?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "It provides the logical addressing required that identifies the device.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "B",
        "text": "It provides delimitation of data according to the physical signaling requirements of the medium.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "C",
        "text": "It places information in the frame allowing multiple Layer 3 protocols to use the same network interface and media.",
        "isCorrect": true,
        "why": "BENAR: Pilihan ini sesuai dengan konsep resmi Cisco NetAcad. Pernyataan ini secara tepat menjelaskan spesifikasi dan perilaku teknis yang ditanyakan."
      },
      {
        "key": "D",
        "text": "It defines software processes that provide services to the physical layer.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 6.1.2 The Logical Link Control (LLC) defines the software processes that provide services to the network layer protocols. The information is placed by LLC in the frame and identifies which network layer protocol is being used for the frame. This information allows multiple Layer 3 protocols, such as IPv4 and IPv6, to utilize the same network interface and media.",
    "keyTakeaway": "Tips Ujian CCNA Topic 6.1.2: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 23,
    "num": 23,
    "moduleId": 6,
    "moduleName": "Modul 6: Data Link Layer",
    "color": "emerald",
    "topic": "Topic 6.2.7",
    "type": "multiple",
    "titleEn": "What are three ways that media access control is used in networking? (Choose three.)",
    "titleId": "What are three ways that media access control is used in networking? (Choose three.)",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "Ethernet utilizes CSMA/CD.",
        "isCorrect": true,
        "why": "BENAR: Pilihan ini sesuai dengan konsep resmi Cisco NetAcad. Pernyataan ini secara tepat menjelaskan spesifikasi dan perilaku teknis yang ditanyakan."
      },
      {
        "key": "B",
        "text": "Media access control provides placement of data frames onto the media.",
        "isCorrect": true,
        "why": "BENAR: Pilihan ini sesuai dengan konsep resmi Cisco NetAcad. Pernyataan ini secara tepat menjelaskan spesifikasi dan perilaku teknis yang ditanyakan."
      },
      {
        "key": "C",
        "text": "Contention-based access is also known as deterministic.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "802.11 utilizes CSMA/CD.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "E",
        "text": "Data link layer protocols define the rules for access to different media.",
        "isCorrect": true,
        "why": "BENAR: Pilihan ini sesuai dengan konsep resmi Cisco NetAcad. Pernyataan ini secara tepat menjelaskan spesifikasi dan perilaku teknis yang ditanyakan."
      },
      {
        "key": "F",
        "text": "Networks with controlled access have reduced performance due to data collisions.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 6.2.7 Wired Ethernet networks use CSMA/CD for media access control. IEEE 802.11 wireless networks use CSMA/CA, a similar method. Media access control defines the way data frames get placed on the media. The controlled access method is deterministic, not a contention-based access to networks. Because each device has its own time to use the medium, controlled access networks such as legacy Token Ring do not have collisions.",
    "keyTakeaway": "Tips Ujian CCNA Topic 6.2.7: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 24,
    "num": 24,
    "moduleId": 6,
    "moduleName": "Modul 6: Data Link Layer",
    "color": "emerald",
    "topic": "Topic 6.3.3",
    "type": "single",
    "titleEn": "During the encapsulation process, what occurs at the data link layer for a PC connected to an Ethernet network?",
    "titleId": "During the encapsulation process, what occurs at the data link layer for a PC connected to an Ethernet network?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "An IP address is added.",
        "isCorrect": false,
        "why": "SALAH: Alamat IP ditambahkan saat enkapsulasi di Network Layer (Layer 3), bukan di Data Link Layer."
      },
      {
        "key": "B",
        "text": "The logical address is added.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "C",
        "text": "The physical address is added.",
        "isCorrect": true,
        "why": "BENAR: Pilihan ini sesuai dengan konsep resmi Cisco NetAcad. Pernyataan ini secara tepat menjelaskan spesifikasi dan perilaku teknis yang ditanyakan."
      },
      {
        "key": "D",
        "text": "The process port number is added.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 6.3.3 The Ethernet frame includes the source and destination physical address. The trailer includes a CRC value in the Frame Check Sequence field to allow the receiving device to determine if the frame has been changed (has errors) during the transmission.",
    "keyTakeaway": "Tips Ujian CCNA Topic 6.3.3: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 25,
    "num": 25,
    "moduleId": 6,
    "moduleName": "Modul 6: Data Link Layer",
    "color": "emerald",
    "topic": "Topic 6.3.2",
    "type": "multiple",
    "titleEn": "What three items are contained in an Ethernet header and trailer? (Choose three.)",
    "titleId": "What three items are contained in an Ethernet header and trailer? (Choose three.)",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "source IP address",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "B",
        "text": "source MAC address",
        "isCorrect": true,
        "why": "BENAR: Pilihan ini sesuai dengan konsep resmi Cisco NetAcad. Pernyataan ini secara tepat menjelaskan spesifikasi dan perilaku teknis yang ditanyakan."
      },
      {
        "key": "C",
        "text": "destination IP address",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "destination MAC address",
        "isCorrect": true,
        "why": "BENAR: Pilihan ini sesuai dengan konsep resmi Cisco NetAcad. Pernyataan ini secara tepat menjelaskan spesifikasi dan perilaku teknis yang ditanyakan."
      },
      {
        "key": "E",
        "text": "error-checking information",
        "isCorrect": true,
        "why": "BENAR: Pilihan ini sesuai dengan konsep resmi Cisco NetAcad. Pernyataan ini secara tepat menjelaskan spesifikasi dan perilaku teknis yang ditanyakan."
      }
    ],
    "explanationId": "Explanation: Topic 6.3.2 Layer 2 headers contain the following: Frame start and stop indicator flags at the beginning and end of a frame Addressing - for Ethernet networks this part of the header contains source and destination MAC addresses Type field to indicate what Layer 3 protocol is being used Error detection to determine if the frame arrived without error",
    "keyTakeaway": "Tips Ujian CCNA Topic 6.3.2: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 26,
    "num": 26,
    "moduleId": 6,
    "moduleName": "Modul 6: Data Link Layer",
    "color": "emerald",
    "topic": "Topic 6.2.6",
    "type": "single",
    "titleEn": "What type of communication rule would best describe CSMA/CD?",
    "titleId": "What type of communication rule would best describe CSMA/CD?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "access method",
        "isCorrect": true,
        "why": "BENAR: Pilihan ini sesuai dengan konsep resmi Cisco NetAcad. Pernyataan ini secara tepat menjelaskan spesifikasi dan perilaku teknis yang ditanyakan."
      },
      {
        "key": "B",
        "text": "flow control",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "C",
        "text": "message encapsulation",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "message encoding",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 6.2.6 Carrier sense multiple access collision detection (CSMA/CD) is the access method used with Ethernet. The access method rule of communication dictates how a network device is able to place a signal on the carrier. CSMA/CD dictates those rules on an Ethernet network and CSMA/CA dictates those rules on an 802.11 wireless LAN.",
    "keyTakeaway": "Tips Ujian CCNA Topic 6.2.6: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 27,
    "num": 27,
    "moduleId": 6,
    "moduleName": "Modul 6: Data Link Layer",
    "color": "emerald",
    "topic": "Topic 6.3.1",
    "type": "multiple",
    "titleEn": "Which three basic parts are common to all frame types supported by the data link layer? (Choose three.)",
    "titleId": "Which three basic parts are common to all frame types supported by the data link layer? (Choose three.)",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "header",
        "isCorrect": true,
        "why": "BENAR: Pilihan ini sesuai dengan konsep resmi Cisco NetAcad. Pernyataan ini secara tepat menjelaskan spesifikasi dan perilaku teknis yang ditanyakan."
      },
      {
        "key": "B",
        "text": "type field",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "C",
        "text": "MTU size",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "data",
        "isCorrect": true,
        "why": "BENAR: Pilihan ini sesuai dengan konsep resmi Cisco NetAcad. Pernyataan ini secara tepat menjelaskan spesifikasi dan perilaku teknis yang ditanyakan."
      },
      {
        "key": "E",
        "text": "trailer",
        "isCorrect": true,
        "why": "BENAR: Pilihan ini sesuai dengan konsep resmi Cisco NetAcad. Pernyataan ini secara tepat menjelaskan spesifikasi dan perilaku teknis yang ditanyakan."
      },
      {
        "key": "F",
        "text": "CRC value",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 6.3.1 The data link protocol is responsible for NIC-to-NIC communications within the same network. Although there are many different data link layer protocols that describe data link layer frames, each frame type has three basic parts: Header Data Trailer",
    "keyTakeaway": "Tips Ujian CCNA Topic 6.3.1: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 28,
    "num": 28,
    "moduleId": 6,
    "moduleName": "Modul 6: Data Link Layer",
    "color": "emerald",
    "topic": "Topic 6.2.7",
    "type": "single",
    "titleEn": "Which statement is true about the CSMA/CD access method that is used in Ethernet?",
    "titleId": "Which statement is true about the CSMA/CD access method that is used in Ethernet?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "When a device hears a carrier signal and transmits, a collision cannot occur.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "B",
        "text": "A jamming signal causes only devices that caused the collision to execute a backoff algorithm.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "C",
        "text": "All network devices must listen before transmitting.",
        "isCorrect": true,
        "why": "BENAR: Prinsip dasar CSMA/CD adalah mendengarkan kabel terlebih dahulu (Carrier Sense) untuk memastikan kabel sepi sebelum mengirim data."
      },
      {
        "key": "D",
        "text": "Devices involved in a collision get priority to transmit after the backoff period.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 6.2.7 Legacy bus-topology Ethernet LAN uses CSMA/CD as network media access control protocol. It works by detecting a collision in the medium and backing off (after transmitting a jam signal) as necessary. When one host wants to transmit a frame, it listens on the medium to check if the medium is busy. After it senses that no one else is transmitting, the host starts transmitting the frame, it also monitors the current level to detect a collision. If it detects a collision, it transmits a special jam signal so that all other hosts can know there was a collision. The other host will receive this jam signal and stop transmitting. After this, both hosts enter an exponential backoff phase and retry transmission.",
    "keyTakeaway": "Tips Ujian CCNA Topic 6.2.7: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 29,
    "num": 29,
    "moduleId": 7,
    "moduleName": "Modul 7: Ethernet Switching",
    "color": "purple",
    "topic": "Topic 7.4.5",
    "type": "single",
    "titleEn": "What is the auto-MDIX feature on a switch?",
    "titleId": "What is the auto-MDIX feature on a switch?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "the automatic configuration of an interface for 10/100/1000 Mb/s operation",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "B",
        "text": "the automatic configuration of an interface for a straight-through or a crossover Ethernet cable connection",
        "isCorrect": true,
        "why": "BENAR: Auto-MDIX secara otomatis mendeteksi sambungan kabel straight atau crossover dan menyesuaikan pin internal switch secara dinamis."
      },
      {
        "key": "C",
        "text": "the automatic configuration of full-duplex operation over a single Ethernet copper or optical cable",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "the ability to turn a switch interface on or off accordingly if an active connection is detected",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 7.4.5 The auto-MDIX enables a switch to use a crossover or a straight-through Ethernet cable to connect to a device regardless of the device on the other end of the connection.",
    "keyTakeaway": "Tips Ujian CCNA Topic 7.4.5: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 30,
    "num": 30,
    "moduleId": 7,
    "moduleName": "Modul 7: Ethernet Switching",
    "color": "purple",
    "topic": "Topic 7.3.5",
    "type": "single",
    "titleEn": "Refer to the exhibit. What is the destination MAC address of the Ethernet frame as it leaves the web server if the final destination is PC1?",
    "titleId": "Refer to the exhibit. What is the destination MAC address of the Ethernet frame as it leaves the web server if the final destination is PC1?",
    "image": "images/q30_mac.png",
    "options": [
      {
        "key": "A",
        "text": "00-60-2F-3A-07-AA",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "B",
        "text": "00-60-2F-3A-07-BB",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "C",
        "text": "00-60-2F-3A-07-CC",
        "isCorrect": true,
        "why": "BENAR: Karena PC1 berada di subnet yang berbeda, frame dari web server harus dikirimkan ke alamat MAC milik Default Gateway lokalnya (antarmuka router)."
      },
      {
        "key": "D",
        "text": "00-60-2F-3A-07-DD",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 7.3.5 The destination MAC address is used for local delivery of Ethernet frames. The MAC (Layer 2) address changes at each network segment along the path. As the frame leaves the web server, it will be delivered by using the MAC address of the default gateway.",
    "keyTakeaway": "Tips Ujian CCNA Topic 7.3.5: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 31,
    "num": 31,
    "moduleId": 7,
    "moduleName": "Modul 7: Ethernet Switching",
    "color": "purple",
    "topic": "Topic 7.4.3",
    "type": "single",
    "titleEn": "A Layer 2 switch is used to switch incoming frames from a 1000BASE-T port to a port connected to a 100Base-T network. Which method of memory buffering would work best for this task?",
    "titleId": "A Layer 2 switch is used to switch incoming frames from a 1000BASE-T port to a port connected to a 100Base-T network. Which method of memory buffering would work best for this task?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "port-based buffering",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "B",
        "text": "level 1 cache buffering",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "C",
        "text": "shared memory buffering",
        "isCorrect": true,
        "why": "BENAR: Shared Memory menyediakan kolam buffer terpusat yang fleksibel untuk menampung frame dari port berkecepatan tinggi (1 Gbps) ke port lambat (100 Mbps) tanpa terjadi frame drop."
      },
      {
        "key": "D",
        "text": "fixed configuration buffering",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 7.4.3 With shared memory buffering, the number of frames stored in the buffer is restricted only by the of the entire memory buffer and not limited to a single port buffer. This permits larger frames to be transmitted with fewer dropped frames. This is important to asymmetric switching, which applies to this scenario, where frames are being exchanged between ports of different rates. With port-based memory buffering, frames are stored in queues that are linked to specific incoming and outgoing ports making it possible for a single frame to delay the transmission of all the frames in memory because of a busy destination port. Level 1 cache is memory used in a CPU. Fixed configuration refers to the port arrangement in switch hardware.",
    "keyTakeaway": "Tips Ujian CCNA Topic 7.4.3: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 32,
    "num": 32,
    "moduleId": 7,
    "moduleName": "Modul 7: Ethernet Switching",
    "color": "purple",
    "topic": "Topic 7.4.2",
    "type": "multiple",
    "titleEn": "What are two examples of the cut-through switching method? (Choose two.)",
    "titleId": "What are two examples of the cut-through switching method? (Choose two.)",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "store-and-forward switching",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "B",
        "text": "fast-forward switching",
        "isCorrect": true,
        "why": "BENAR: Keduanya adalah variasi dari metode Cut-Through switching yang mulai meneruskan frame sebelum seluruh frame diterima utuh."
      },
      {
        "key": "C",
        "text": "CRC switching",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "fragment-free switching",
        "isCorrect": true,
        "why": "BENAR: Keduanya adalah variasi dari metode Cut-Through switching yang mulai meneruskan frame sebelum seluruh frame diterima utuh."
      },
      {
        "key": "E",
        "text": "QOS switching",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 7.4.2 Store-and forward switching accepts the entire frame and performs error checking using CRC before forwarding the frame. Store-and-forward is often required for QOS analysis. Fast-forward and fragment-free are both variations of the cut-through switching method where only part of the frame is received before the switch begins to forward it.",
    "keyTakeaway": "Tips Ujian CCNA Topic 7.4.2: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 33,
    "num": 33,
    "moduleId": 7,
    "moduleName": "Modul 7: Ethernet Switching",
    "color": "purple",
    "topic": "Topic 7.4.1",
    "type": "single",
    "titleEn": "Which frame forwarding method receives the entire frame and performs a CRC check to detect errors before forwarding the frame?",
    "titleId": "Which frame forwarding method receives the entire frame and performs a CRC check to detect errors before forwarding the frame?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "cut-through switching",
        "isCorrect": false,
        "why": "SALAH: Cut-through mulai meneruskan frame sebelum seluruh frame diterima, sehingga tidak melakukan pengecekan CRC lengkap."
      },
      {
        "key": "B",
        "text": "store-and-forward switching",
        "isCorrect": true,
        "why": "BENAR: Metode Store-and-Forward menerima seluruh frame ke buffer dan memvalidasi CRC sebelum meneruskan, menjamin frame bebas error."
      },
      {
        "key": "C",
        "text": "fragment-free switching",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "fast-forward switching",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 7.4.1 Fast-forward and fragment-free switching are variations of cut-through switching, which begins to forward the frame before the entire frame is received.",
    "keyTakeaway": "Tips Ujian CCNA Topic 7.4.1: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 34,
    "num": 34,
    "moduleId": 7,
    "moduleName": "Modul 7: Ethernet Switching",
    "color": "purple",
    "topic": "Topic 7.1.4",
    "type": "single",
    "titleEn": "What is the purpose of the FCS field in a frame?",
    "titleId": "What is the purpose of the FCS field in a frame?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "to obtain the MAC address of the sending node",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "B",
        "text": "to verify the logical address of the sending node",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "C",
        "text": "to compute the CRC header for the data field",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "to determine if errors occurred in the transmission and reception",
        "isCorrect": true,
        "why": "BENAR: Pilihan ini sesuai dengan konsep resmi Cisco NetAcad. Pernyataan ini secara tepat menjelaskan spesifikasi dan perilaku teknis yang ditanyakan."
      }
    ],
    "explanationId": "Explanation: Topic 7.1.4 The FCS field in a frame is used to detect any errors in the transmission and receipt of a frame. This is done by comparing the CRC value within the frame against a computed CRC value of the frame. If the two values do not match, then the frame is discarded.",
    "keyTakeaway": "Tips Ujian CCNA Topic 7.1.4: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 35,
    "num": 35,
    "moduleId": 7,
    "moduleName": "Modul 7: Ethernet Switching",
    "color": "purple",
    "topic": "Topic 7.4.2",
    "type": "single",
    "titleEn": "Which switching method has the lowest level of latency?",
    "titleId": "Which switching method has the lowest level of latency?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "cut-through",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "B",
        "text": "store-and-forward",
        "isCorrect": false,
        "why": "SALAH: Store-and-forward membaca seluruh frame terlebih dahulu sehingga memiliki latensi tertinggi di antara metode switching."
      },
      {
        "key": "C",
        "text": "fragment-free",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "fast-forward",
        "isCorrect": true,
        "why": "BENAR: Fast-Forward langsung meneruskan frame begitu 6 byte MAC tujuan terbaca, menghasilkan tingkat latensi terendah yang sangat cocok untuk aplikasi komputasi performa tinggi (HPC)."
      }
    ],
    "explanationId": "Explanation: Topic 7.4.2 Fast-forward switching begins to forward a frame after reading the destination MAC address, resulting in the lowest latency. Fragment-free reads the first 64 bytes before forwarding. Store-and-forward has the highest latency because it reads the entire frame before beginning to forward it. Both fragment-free and fast-forward are types of cut-through switching.",
    "keyTakeaway": "Tips Ujian CCNA Topic 7.4.2: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 36,
    "num": 36,
    "moduleId": 7,
    "moduleName": "Modul 7: Ethernet Switching",
    "color": "purple",
    "topic": "Topic 7.4.4",
    "type": "multiple",
    "titleEn": "A network administrator is connecting two modern switches using a straight-through cable. The switches are new and have never been configured. Which three statements are correct about the final result of the connection? (Choose three.)",
    "titleId": "A network administrator is connecting two modern switches using a straight-through cable. The switches are new and have never been configured. Which three statements are correct about the final result of the connection? (Choose three.)",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "The link between the switches will work at the fastest speed that is supported by both switches.",
        "isCorrect": true,
        "why": "BENAR: Pilihan ini sesuai dengan konsep resmi Cisco NetAcad. Pernyataan ini secara tepat menjelaskan spesifikasi dan perilaku teknis yang ditanyakan."
      },
      {
        "key": "B",
        "text": "The link between switches will work as full-duplex.",
        "isCorrect": true,
        "why": "BENAR: Satu untai kaca mentransmisikan data searah (Tx), dan untai lainnya menerima data dari arah berlawanan (Rx), sehingga memungkinkan koneksi dua arah simultan (Full-Duplex)."
      },
      {
        "key": "C",
        "text": "If both switches support different speeds, they will each work at their own fastest speed.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "The auto-MDIX feature will configure the interfaces eliminating the need for a crossover cable.",
        "isCorrect": true,
        "why": "BENAR: Auto-MDIX secara otomatis mendeteksi sambungan kabel straight atau crossover dan menyesuaikan pin internal switch secara dinamis."
      },
      {
        "key": "E",
        "text": "The connection will not be possible unless the administrator changes the cable to a crossover cable.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "F",
        "text": "The duplex capability has to be manually configured because it cannot be negotiated.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 7.4.4 Modern switches can negotiate to work in full-duplex mode if both switches are capable. They will negotiate to work using the fastest possible speed and the auto-MDIX feature is enabled by default, so a cable change is not needed.",
    "keyTakeaway": "Tips Ujian CCNA Topic 7.4.4: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 37,
    "num": 37,
    "moduleId": 7,
    "moduleName": "Modul 7: Ethernet Switching",
    "color": "purple",
    "topic": "Topic 7.4.1",
    "type": "single",
    "titleEn": "Which advantage does the store-and-forward switching method have compared with the cut-through switching method?",
    "titleId": "Which advantage does the store-and-forward switching method have compared with the cut-through switching method?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "collision detecting",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "B",
        "text": "frame error checking",
        "isCorrect": true,
        "why": "BENAR: Pilihan ini sesuai dengan konsep resmi Cisco NetAcad. Pernyataan ini secara tepat menjelaskan spesifikasi dan perilaku teknis yang ditanyakan."
      },
      {
        "key": "C",
        "text": "faster frame forwarding",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "frame forwarding using IPv4 Layer 3 and 4 information",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 7.4.1 A switch using the store-and-forward switching method performs an error check on an incoming frame by comparing the FCS value against its own FCS calculations after the entire frame is received. In comparison, a switch using the cut-through switching method makes quick forwarding decisions and starts the forwarding process without waiting for the entire frame to be received. Thus a switch using cut-through switching may send invalid frames to the network. The performance of store-and-forward switching is slower compared to cut-through switching performance. Collision detection is monitored by the sending device. Store-and-forward switching does not use IPv4 Layer 3 and 4 information for its forwarding decisions.",
    "keyTakeaway": "Tips Ujian CCNA Topic 7.4.1: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 38,
    "num": 38,
    "moduleId": 7,
    "moduleName": "Modul 7: Ethernet Switching",
    "color": "purple",
    "topic": "Topic 7.4.1",
    "type": "single",
    "titleEn": "When the store-and-forward method of switching is in use, what part of the Ethernet frame is used to perform an error check?",
    "titleId": "When the store-and-forward method of switching is in use, what part of the Ethernet frame is used to perform an error check?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "CRC in the trailer",
        "isCorrect": true,
        "why": "BENAR: Pilihan ini sesuai dengan konsep resmi Cisco NetAcad. Pernyataan ini secara tepat menjelaskan spesifikasi dan perilaku teknis yang ditanyakan."
      },
      {
        "key": "B",
        "text": "source MAC address in the header",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "C",
        "text": "destination MAC address in the header",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "protocol type in the header",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 7.4.1 The cyclic redundancy check (CRC) part of the trailer is used to determine if the frame has been modified during transit.​ If the integrity of the frame is verified, the frame is forwarded. If the integrity of the frame cannot be verified, then the frame is dropped.",
    "keyTakeaway": "Tips Ujian CCNA Topic 7.4.1: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 39,
    "num": 39,
    "moduleId": 7,
    "moduleName": "Modul 7: Ethernet Switching",
    "color": "purple",
    "topic": "Topic 7.4.1",
    "type": "single",
    "titleEn": "Which switching method uses the CRC value in a frame?",
    "titleId": "Which switching method uses the CRC value in a frame?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "cut-through",
        "isCorrect": false,
        "why": "SALAH: Cut-through mulai meneruskan frame sebelum seluruh frame diterima, sehingga tidak melakukan pengecekan CRC lengkap."
      },
      {
        "key": "B",
        "text": "fast-forward",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "C",
        "text": "fragment-free",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "store-and-forward",
        "isCorrect": true,
        "why": "BENAR: Metode Store-and-Forward menerima seluruh frame ke buffer dan memvalidasi CRC sebelum meneruskan, menjamin frame bebas error."
      }
    ],
    "explanationId": "Explanation: Topic 7.4.1 When the store-and-forward switching method is used, the switch receives the complete frame before forwarding it on to the destination. The cyclic redundancy check (CRC) part of the trailer is used to determine if the frame has been modified during transit.​​ In contrast, a cut-through switch forwards the frame once the destination Layer 2 address is read. Two types of cut-through switching methods are fast-forward and fragment-free.",
    "keyTakeaway": "Tips Ujian CCNA Topic 7.4.1: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 40,
    "num": 40,
    "moduleId": 7,
    "moduleName": "Modul 7: Ethernet Switching",
    "color": "purple",
    "topic": "Topic 7.3.2",
    "type": "multiple",
    "titleEn": "What are two actions performed by a Cisco switch? (Choose two.)",
    "titleId": "What are two actions performed by a Cisco switch? (Choose two.)",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "building a routing table that is based on the first IP address in the frame header",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "B",
        "text": "using the source MAC addresses of frames to build and maintain a MAC address table",
        "isCorrect": true,
        "why": "BENAR: Pilihan ini sesuai dengan konsep resmi Cisco NetAcad. Pernyataan ini secara tepat menjelaskan spesifikasi dan perilaku teknis yang ditanyakan."
      },
      {
        "key": "C",
        "text": "forwarding frames with unknown destination IP addresses to the default gateway",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "utilizing the MAC address table to forward frames via the destination MAC address",
        "isCorrect": true,
        "why": "BENAR: Pilihan ini sesuai dengan konsep resmi Cisco NetAcad. Pernyataan ini secara tepat menjelaskan spesifikasi dan perilaku teknis yang ditanyakan."
      },
      {
        "key": "E",
        "text": "examining the destination MAC address to add new entries to the MAC address table",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 7.3.2 Important actions that a switch performs are as follows: When a frame comes in, the switch examines the Layer 2 source address to build and maintain the Layer 2 MAC address table. It examines the Layer 2 destination address to determine how to forward the frame. When the destination address is in the MAC address table, then the frame is sent out a particular port. When the address is unknown, the frame is sent to all ports that have devices connected to that network.",
    "keyTakeaway": "Tips Ujian CCNA Topic 7.3.2: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 41,
    "num": 41,
    "moduleId": 6,
    "moduleName": "Modul 6: Data Link Layer",
    "color": "emerald",
    "topic": "Topic 7.1.2",
    "type": "multiple",
    "titleEn": "Which two statements describe features or functions of the logical link control sublayer in Ethernet standards? (Choose two.)",
    "titleId": "Which two statements describe features or functions of the logical link control sublayer in Ethernet standards? (Choose two.)",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "Logical link control is implemented in software.",
        "isCorrect": true,
        "why": "BENAR: Pilihan ini sesuai dengan konsep resmi Cisco NetAcad. Pernyataan ini secara tepat menjelaskan spesifikasi dan perilaku teknis yang ditanyakan."
      },
      {
        "key": "B",
        "text": "Logical link control is specified in the IEEE 802.3 standard.",
        "isCorrect": false,
        "why": "SALAH: IEEE dan EIA/TIA adalah organisasi standardisasi industri internasional, bukan istilah proses modulasi atau kapasitas media fisik."
      },
      {
        "key": "C",
        "text": "The LLC sublayer adds a header and a trailer to the data.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "The data link layer uses LLC to communicate with the upper layers of the protocol suite.",
        "isCorrect": true,
        "why": "BENAR: Pilihan ini sesuai dengan konsep resmi Cisco NetAcad. Pernyataan ini secara tepat menjelaskan spesifikasi dan perilaku teknis yang ditanyakan."
      },
      {
        "key": "E",
        "text": "The LLC sublayer is responsible for the placement and retrieval of frames on and off the media.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 7.1.2 Logical link control is implemented in software and enables the data link layer to communicate with the upper layers of the protocol suite. Logical link control is specified in the IEEE 802.2 standard. IEEE 802.3 is a suite of standards that define the different Ethernet types. The MAC (Media Access Control) sublayer is responsible for the placement and retrieval of frames on and off the media. The MAC sublayer is also responsible for adding a header and a trailer to the network layer protocol data unit (PDU).",
    "keyTakeaway": "Tips Ujian CCNA Topic 7.1.2: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 42,
    "num": 42,
    "moduleId": 7,
    "moduleName": "Modul 7: Ethernet Switching",
    "color": "purple",
    "topic": "Topic 7.4.5",
    "type": "single",
    "titleEn": "What is the auto-MDIX feature?",
    "titleId": "What is the auto-MDIX feature?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "It enables a device to automatically configure an interface to use a straight-through or a crossover cable.",
        "isCorrect": true,
        "why": "BENAR: Pilihan ini sesuai dengan konsep resmi Cisco NetAcad. Pernyataan ini secara tepat menjelaskan spesifikasi dan perilaku teknis yang ditanyakan."
      },
      {
        "key": "B",
        "text": "It enables a device to automatically configure the duplex settings of a segment.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "C",
        "text": "It enables a device to automatically configure the speed of its interface.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "It enables a switch to dynamically select the forwarding method.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 7.4.5 The auto-MDIX feature allows the device to configure its network port according to the cable type that is used (straight-through or crossover) and the type of device that is connected to that port. When a port of a switch is configured with auto-MDIX, this switch can be connected to another switch by the use of either a straight-through cable or a crossover cable.",
    "keyTakeaway": "Tips Ujian CCNA Topic 7.4.5: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 43,
    "num": 43,
    "moduleId": 7,
    "moduleName": "Modul 7: Ethernet Switching",
    "color": "purple",
    "topic": "Topic 7.4.2",
    "type": "single",
    "titleEn": "What is one advantage of using the cut-through switching method instead of the store-and-forward switching method?",
    "titleId": "What is one advantage of using the cut-through switching method instead of the store-and-forward switching method?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "has a positive impact on bandwidth by dropping most of the invalid frames",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "B",
        "text": "makes a fast forwarding decision based on the source MAC address of the frame",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "C",
        "text": "has a lower latency appropriate for high-performance computing applications​",
        "isCorrect": true,
        "why": "BENAR: Pilihan ini sesuai dengan konsep resmi Cisco NetAcad. Pernyataan ini secara tepat menjelaskan spesifikasi dan perilaku teknis yang ditanyakan."
      },
      {
        "key": "D",
        "text": "provides the flexibility to support any mix of Ethernet speeds",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 7.4.2 Cut-through switching provides lower latency switching for high-performance computing (HPC) applications. Cut-through switching allows more invalid frames to cross the network than store-and-forward switching. The cut-through switching method can make a forwarding decision as soon as it looks up the destination MAC address of the frame.",
    "keyTakeaway": "Tips Ujian CCNA Topic 7.4.2: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 44,
    "num": 44,
    "moduleId": 7,
    "moduleName": "Modul 7: Ethernet Switching",
    "color": "purple",
    "topic": "Topic 7.2.6",
    "type": "single",
    "titleEn": "Which is a multicast MAC address?",
    "titleId": "Which is a multicast MAC address?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "FF-FF-FF-FF-FF-FF",
        "isCorrect": false,
        "why": "SALAH: FF-FF-FF-FF-FF-FF adalah alamat MAC Broadcast (semua host lokal), bukan Multicast."
      },
      {
        "key": "B",
        "text": "5C-26-0A-4B-19-3E",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "C",
        "text": "01-00-5E-00-00-03",
        "isCorrect": true,
        "why": "BENAR: Alamat MAC Multicast IPv4 selalu diawali dengan 24-bit heksadesimal khusus bernilai 01-00-5E."
      },
      {
        "key": "D",
        "text": "00-26-0F-4B-00-3E",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 7.2.6 Multicast MAC addresses begin with the special value of 01-00-5E.",
    "keyTakeaway": "Tips Ujian CCNA Topic 7.2.6: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 45,
    "num": 45,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.4.2",
    "type": "single",
    "titleEn": "Refer to the exhibit. What is wrong with the displayed termination?",
    "titleId": "Refer to the exhibit. What is wrong with the displayed termination?",
    "image": "images/q45_terminal.png",
    "options": [
      {
        "key": "A",
        "text": "The woven copper braid should not have been removed.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "B",
        "text": "The wrong type of connector is being used.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "C",
        "text": "The untwisted length of each wire is too long.",
        "isCorrect": true,
        "why": "BENAR: Pada terminasi konektor RJ-45 yang benar, kawat yang tidak terpuntir tidak boleh terlalu panjang dan selubung luar plastik kabel wajib terjepit di dalam konektor."
      },
      {
        "key": "D",
        "text": "The wires are too thick for the connector that is used.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 4.4.2 When a cable to an RJ-45 connector is terminated, it is important to ensure that the untwisted wires are not too long and that the flexible plastic sheath surrounding the wires is crimped down and not the bare wires. None of the colored wires should be visible from the bottom of the jack.",
    "keyTakeaway": "Tips Ujian CCNA Topic 4.4.2: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 46,
    "num": 46,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.4.3",
    "type": "single",
    "titleEn": "Refer to the exhibit. The PC is connected to the console port of the switch. All the other connections are made through FastEthernet links. Which types of UTP cables can be used to connect the devices?​",
    "titleId": "Refer to the exhibit. The PC is connected to the console port of the switch. All the other connections are made through FastEthernet links. Which types of UTP cables can be used to connect the devices?​",
    "image": "images/q46_cables.png",
    "options": [
      {
        "key": "A",
        "text": "1 - rollover, 2 - crossover, 3 - straight-through",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "B",
        "text": "1 - rollover, 2 - straight-through, 3 - crossover",
        "isCorrect": true,
        "why": "BENAR: PC ke Console switch menggunakan kabel Rollover, Switch ke Router menggunakan Straight-Through, dan Switch ke Switch menggunakan Crossover."
      },
      {
        "key": "C",
        "text": "1 - crossover, 2 - rollover, 3 - straight-through",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "1 - crossover, 2 - straight-through, 3 - rollover",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 4.4.3 A straight-through cable is commonly used to interconnect a host to a switch and a switch to a router. A crossover cable is used to interconnect similar devices together like switch to a switch, a host to a host, or a router to a router. If a switch has the MDIX capability, a crossover could be used to connect the switch to the router; however, that option is not available. A rollover cable is used to connect to a router or switch console port.",
    "keyTakeaway": "Tips Ujian CCNA Topic 4.4.3: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 47,
    "num": 47,
    "moduleId": 7,
    "moduleName": "Modul 7: Ethernet Switching",
    "color": "purple",
    "topic": "Topic 7.3.2",
    "type": "single",
    "titleEn": "Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.",
    "titleId": "Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.",
    "image": "images/q47_topology.jpg",
    "options": [
      {
        "key": "A",
        "text": "Fa0/1",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "B",
        "text": "Fa0/5",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "C",
        "text": "Fa0/9",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "Fa0/11",
        "isCorrect": true,
        "why": "BENAR: Berdasarkan tabel MAC switch, port Fa0/11 adalah port yang memetakan alamat MAC dari host dengan IP 10.1.1.5."
      }
    ],
    "explanationId": "Explanation: Topic 7.3.2 Issuing the command ipconfig /all from the PC0 command prompt displays the IPv4 address and MAC address. When the IPv4 address 10.1.1.5 is pinged from PC0, the switch stores the source MAC address (from PC0) along with the port to which PC0 is connected. When the destination reply is received, the switch takes the destination MAC address and compares to MAC addresses stored in the MAC address table. Issuing the show mac-address-table on the PC0 Terminal application displays two dynamic MAC address entries. The MAC address and port entry that does not belong to PC0 must be the MAC address and port of the destination with the IPv4 address 10.1.1.5.",
    "keyTakeaway": "Tips Ujian CCNA Topic 7.3.2: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 48,
    "num": 48,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.3.1",
    "type": "single",
    "titleEn": "What does the term “attenuation” mean in data communication?",
    "titleId": "What does the term “attenuation” mean in data communication?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "loss of signal strength as distance increases",
        "isCorrect": true,
        "why": "BENAR: Definisi dari atenuasi (attenuation) adalah melemahnya kekuatan sinyal seiring bertambahnya jarak tempuh melintasi media kabel."
      },
      {
        "key": "B",
        "text": "time for a signal to reach its destination",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "C",
        "text": "leakage of signals from one cable pair to another",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "strengthening of a signal by a networking device",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 4.3.1 Data is transmitted on copper cables as electrical pulses. A detector in the network interface of a destination device must receive a signal that can be successfully decoded to match the signal sent. However, the farther the signal travels, the more it deteriorates. This is referred to as signal attenuation.",
    "keyTakeaway": "Tips Ujian CCNA Topic 4.3.1: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 49,
    "num": 49,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.5.1",
    "type": "multiple",
    "titleEn": "What makes fiber preferable to copper cabling for interconnecting buildings? (Choose three.)",
    "titleId": "What makes fiber preferable to copper cabling for interconnecting buildings? (Choose three.)",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "greater distances per cable run",
        "isCorrect": true,
        "why": "BENAR: Serat optik memiliki jangkauan jarak jauh puluhan kilometer, kebal total terhadap EMI/RFI, dan potensi kapasitas bandwidth yang sangat masif dibanding tembaga."
      },
      {
        "key": "B",
        "text": "lower installation cost",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "C",
        "text": "limited susceptibility to EMI/RFI",
        "isCorrect": true,
        "why": "BENAR: Serat optik memiliki jangkauan jarak jauh puluhan kilometer, kebal total terhadap EMI/RFI, dan potensi kapasitas bandwidth yang sangat masif dibanding tembaga."
      },
      {
        "key": "D",
        "text": "durable connections",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "E",
        "text": "greater bandwidth potential",
        "isCorrect": true,
        "why": "BENAR: Serat optik memiliki jangkauan jarak jauh puluhan kilometer, kebal total terhadap EMI/RFI, dan potensi kapasitas bandwidth yang sangat masif dibanding tembaga."
      },
      {
        "key": "F",
        "text": "easily terminated",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 4.5.1 Optical fiber cable transmits data over longer distances and at higher bandwidths than any other networking media. Unlike copper wires, fiber-optic cable can transmit signals with less attenuation and is completely immune to EMI and RFI.",
    "keyTakeaway": "Tips Ujian CCNA Topic 4.5.1: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 50,
    "num": 50,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.2.4",
    "type": "single",
    "titleEn": "What OSI physical layer term describes the process by which one wave modifies another wave?",
    "titleId": "What OSI physical layer term describes the process by which one wave modifies another wave?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "modulation",
        "isCorrect": true,
        "why": "BENAR: Modulasi adalah proses di mana satu karakteristik gelombang pembawa (carrier wave) diubah oleh gelombang sinyal data untuk transmisi melalui media."
      },
      {
        "key": "B",
        "text": "IEEE",
        "isCorrect": false,
        "why": "SALAH: IEEE dan EIA/TIA adalah organisasi standardisasi industri internasional, bukan istilah proses modulasi atau kapasitas media fisik."
      },
      {
        "key": "C",
        "text": "EIA/TIA",
        "isCorrect": false,
        "why": "SALAH: IEEE dan EIA/TIA adalah organisasi standardisasi industri internasional, bukan istilah proses modulasi atau kapasitas media fisik."
      },
      {
        "key": "D",
        "text": "air",
        "isCorrect": false,
        "why": "SALAH: Udara (air) adalah media transmisi gelombang radio nirkabel, bukan ukuran kapasitas, kecepatan, atau durasi tunda."
      }
    ],
    "explanationId": "Explanation: Topic 4.2.4 Modulation is the physical layer process where a data signal modifies one or more characteristics (amplitude, frequency, or phase) of another higher-frequency wave (the carrier wave). This technique allows digital binary data to be successfully transmitted over analog mediums, such as wireless airwaves.",
    "keyTakeaway": "Tips Ujian CCNA Topic 4.2.4: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 51,
    "num": 51,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.2.5",
    "type": "single",
    "titleEn": "What OSI physical layer term describes the capacity at which a medium can carry data?",
    "titleId": "What OSI physical layer term describes the capacity at which a medium can carry data?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "bandwidth",
        "isCorrect": true,
        "why": "BENAR: Bandwidth adalah kapasitas teoritis maksimum suatu media dalam membawa data dalam satuan waktu (misal Mbps atau Gbps)."
      },
      {
        "key": "B",
        "text": "IEEE",
        "isCorrect": false,
        "why": "SALAH: IEEE dan EIA/TIA adalah organisasi standardisasi industri internasional, bukan istilah proses modulasi atau kapasitas media fisik."
      },
      {
        "key": "C",
        "text": "EIA/TIA",
        "isCorrect": false,
        "why": "SALAH: IEEE dan EIA/TIA adalah organisasi standardisasi industri internasional, bukan istilah proses modulasi atau kapasitas media fisik."
      },
      {
        "key": "D",
        "text": "air",
        "isCorrect": false,
        "why": "SALAH: Udara (air) adalah media transmisi gelombang radio nirkabel, bukan ukuran kapasitas, kecepatan, atau durasi tunda."
      }
    ],
    "explanationId": "Explanation: Topic 4.2.5 Bandwidth is the physical layer term that describes the maximum theoretical capacity of a medium (such as copper or fiber-optic cabling) to carry data over a given period of time. It is typically measured in bits per second (bps), Mbps, or Gbps. It should not be confused with throughput , which represents the actual, real-world measure of data successfully traversing the media under practical conditions (often lower due to latency and network overhead).",
    "keyTakeaway": "Tips Ujian CCNA Topic 4.2.5: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 52,
    "num": 53,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.2.6",
    "type": "single",
    "titleEn": "What OSI physical layer term describes the measure of the transfer of bits across a medium over a given period of time?",
    "titleId": "What OSI physical layer term describes the measure of the transfer of bits across a medium over a given period of time?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "throughput",
        "isCorrect": true,
        "why": "BENAR: Throughput adalah ukuran nyata transfer bit aktual yang berhasil melintasi media dalam kurun waktu tertentu."
      },
      {
        "key": "B",
        "text": "bandwidth",
        "isCorrect": false,
        "why": "SALAH: Bandwidth adalah kapasitas kapasitas teoritis media, bukan sumber interferensi sinyal atau ukuran waktu tunda."
      },
      {
        "key": "C",
        "text": "latency",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "goodput",
        "isCorrect": false,
        "why": "SALAH: Goodput adalah ukuran muatan data aplikasi bersih, bukan kapasitas teoritis atau media transmisi kabel."
      }
    ],
    "explanationId": "Explanation: Topic 4.2.6 Throughput is the physical layer term that describes the actual measure of bits transferred across a network medium over a given period of time. It is highly common to confuse this with Bandwidth , but there is a fundamental distinction: bandwidth represents the maximum theoretical capacity a medium can handle under perfect conditions, whereas throughput is the real-world, practical measure of data that successfully traverses the link. Throughput is almost always lower than bandwidth due to factors such as network traffic congestion, processing latency, and the overhead introduced by network protocols.",
    "keyTakeaway": "Tips Ujian CCNA Topic 4.2.6: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 53,
    "num": 54,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.2.6",
    "type": "single",
    "titleEn": "What OSI physical layer term describes the amount of time, including delays, for data to travel from one point to another?",
    "titleId": "What OSI physical layer term describes the amount of time, including delays, for data to travel from one point to another?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "latency",
        "isCorrect": true,
        "why": "BENAR: Latency adalah jumlah waktu total, termasuk keterlambatan tunda antrean dan propagasi, yang dibutuhkan data untuk berpindah dari satu titik ke titik lain."
      },
      {
        "key": "B",
        "text": "bandwidth",
        "isCorrect": false,
        "why": "SALAH: Bandwidth adalah kapasitas kapasitas teoritis media, bukan sumber interferensi sinyal atau ukuran waktu tunda."
      },
      {
        "key": "C",
        "text": "throughput",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "goodput",
        "isCorrect": false,
        "why": "SALAH: Goodput adalah ukuran muatan data aplikasi bersih, bukan kapasitas teoritis atau media transmisi kabel."
      }
    ],
    "explanationId": "Explanation: Topic 4.2.6 Latency is the physical layer term that describes the total amount of time, including various delays, required for data to travel from one specific point to another across a network. This time measurement encompasses the actual propagation delay (the time bits take to physically traverse the copper, fiber, or wireless media) as well as intermediary processing delays, queuing delays within routing or switching devices, and serialization delays. High latency directly impacts network performance, particularly for real-time traffic such as VoIP or online streaming.",
    "keyTakeaway": "Tips Ujian CCNA Topic 4.2.6: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 54,
    "num": 55,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.2.6",
    "type": "single",
    "titleEn": "What OSI physical layer term describes the amount of time, including delays, for data to travel from one point to another?",
    "titleId": "What OSI physical layer term describes the amount of time, including delays, for data to travel from one point to another?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "latency",
        "isCorrect": true,
        "why": "BENAR: Latency adalah jumlah waktu total, termasuk keterlambatan tunda antrean dan propagasi, yang dibutuhkan data untuk berpindah dari satu titik ke titik lain."
      },
      {
        "key": "B",
        "text": "fiber-optic cable",
        "isCorrect": false,
        "why": "SALAH: Fiber-optic cable adalah media transmisi berbasis sinyal cahaya (optical), bukan istilah untuk total durasi tunda waktu (latency)."
      },
      {
        "key": "C",
        "text": "air",
        "isCorrect": false,
        "why": "SALAH: Udara (air) adalah media transmisi gelombang radio nirkabel (wireless), bukan istilah durasi waktu tunda."
      },
      {
        "key": "D",
        "text": "copper cable",
        "isCorrect": false,
        "why": "SALAH: Copper cable adalah media kabel tembaga (sinyal elektrik), bukan ukuran tunda waktu (latency)."
      }
    ],
    "explanationId": "Explanation: Topic 4.2.6 Latency is the physical layer term that describes the total amount of time, including various delays, required for data to travel from one specific point to another across a network. This time measurement encompasses the actual propagation delay (the time bits take to physically traverse the copper, fiber, or wireless media) as well as intermediary processing delays, queuing delays within routing or switching devices, and serialization delays. High latency directly impacts network performance, particularly for real-time traffic such as VoIP or online streaming.",
    "keyTakeaway": "Tips Ujian CCNA Topic 4.2.6: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 55,
    "num": 56,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.2.6",
    "type": "single",
    "titleEn": "What OSI physical layer term describes the measure of usable data transferred over a given period of time?",
    "titleId": "What OSI physical layer term describes the measure of usable data transferred over a given period of time?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "goodput",
        "isCorrect": true,
        "why": "BENAR: Goodput adalah ukuran data aplikasi yang benar-benar berguna yang berhasil diterima pengguna, setelah membuang seluruh overhead protokol dan paket error."
      },
      {
        "key": "B",
        "text": "fiber-optic cable",
        "isCorrect": false,
        "why": "SALAH: Fiber-optic cable adalah media fisik berbasis cahaya (optical), bukan satuan ukuran data aplikasi bersih (goodput)."
      },
      {
        "key": "C",
        "text": "air",
        "isCorrect": false,
        "why": "SALAH: Udara (air) adalah media transmisi nirkabel, bukan ukuran throughput atau goodput data."
      },
      {
        "key": "D",
        "text": "copper cable",
        "isCorrect": false,
        "why": "SALAH: Copper cable adalah media kabel tembaga, bukan istilah untuk volume data aplikasi."
      }
    ],
    "explanationId": "Explanation: Topic 4.2.6 Goodput is the physical layer term that measures the actual amount of usable application data transferred over the network during a specific period of time. Unlike throughput , which accounts for all bits traveling across the media (including protocol overhead, headers, control packets, and retransmitted data due to errors), goodput filters out this technical overhead. It represents only the useful payload delivered to the end-user application. Consequently, goodput is always lower than throughput, which in turn is lower than bandwidth.",
    "keyTakeaway": "Tips Ujian CCNA Topic 4.2.6: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 56,
    "num": 57,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.3.1",
    "type": "single",
    "titleEn": "What OSI physical layer term describes the physical medium which uses electrical pulses?",
    "titleId": "What OSI physical layer term describes the physical medium which uses electrical pulses?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "copper cable",
        "isCorrect": true,
        "why": "BENAR: Copper cable (kabel tembaga seperti UTP dan STP) menggunakan sinyal elektrik (electrical pulses / voltase) untuk mentransmisikan bit data biner pada Physical Layer."
      },
      {
        "key": "B",
        "text": "fiber-optic cable",
        "isCorrect": false,
        "why": "SALAH: Fiber-optic cable menggunakan sinyal pulsa cahaya (optical / light pulses), bukan sinyal elektrik."
      },
      {
        "key": "C",
        "text": "air",
        "isCorrect": false,
        "why": "SALAH: Udara (air) adalah media transmisi gelombang radio nirkabel, bukan ukuran kapasitas, kecepatan, atau durasi tunda."
      },
      {
        "key": "D",
        "text": "goodput",
        "isCorrect": false,
        "why": "SALAH: Goodput adalah ukuran muatan data aplikasi bersih, bukan kapasitas teoritis atau media transmisi kabel."
      }
    ],
    "explanationId": "Explanation: Topic 4.3.1 Copper cable is the Layer 1 (Physical) medium that relies on electrical pulses to transmit binary data across a network. In local area networks, the most widely used types are Unshielded Twisted-Pair (UTP) and Shielded Twisted-Pair (STP). The transmitting network interface card (NIC) modifies voltage levels to represent bits, which are then decoded by the receiving device. Its primary limitations compared to fiber-optic cables are that electrical signals attenuate (lose strength) over shorter distances and are highly susceptible to electromagnetic interference (EMI) and crosstalk.",
    "keyTakeaway": "Tips Ujian CCNA Topic 4.3.1: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 57,
    "num": 58,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.2.4",
    "type": "single",
    "titleEn": "What OSI physical layer term describes the physical medium that uses the propagation of light?",
    "titleId": "What OSI physical layer term describes the physical medium that uses the propagation of light?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "fiber-optic cable",
        "isCorrect": true,
        "why": "BENAR: Kabel serat optik menggunakan perambatan gelombang cahaya (foton) di dalam inti kaca untuk mentransmisikan data."
      },
      {
        "key": "B",
        "text": "goodput",
        "isCorrect": false,
        "why": "SALAH: Goodput adalah ukuran muatan data aplikasi bersih, bukan kapasitas teoritis atau media transmisi kabel."
      },
      {
        "key": "C",
        "text": "latency",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "throughput",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 4.2.4 The fiber-optic cable is the Layer 1 (Physical) medium that relies on the propagation of light (using modulated light pulses) to transmit binary data. Constructed from thin, flexible strands of high-quality glass or plastic, this medium is capable of carrying network data over immense distances at ultra-high bandwidth capacities. Additionally, because it uses light instead of electrical currents, it is completely immune to electromagnetic interference (EMI) and radio frequency interference (RFI).",
    "keyTakeaway": "Tips Ujian CCNA Topic 4.2.4: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 58,
    "num": 59,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.2.4",
    "type": "single",
    "titleEn": "What OSI physical layer term describes the physical medium for microwave transmissions?",
    "titleId": "What OSI physical layer term describes the physical medium for microwave transmissions?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "air",
        "isCorrect": true,
        "why": "BENAR: Udara (ruang terbuka) adalah media fisik tanpa pandu (unguided media) yang digunakan untuk merambatkan gelombang mikro dan frekuensi radio nirkabel."
      },
      {
        "key": "B",
        "text": "goodput",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "C",
        "text": "latency",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "throughput",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 4.2.4 Air is the physical medium used by the OSI physical layer (Layer 1) to carry radio frequency and microwave signals in wireless communications. Unlike guided media such as copper cabling (which relies on electrical pulses) or fiber-optic cabling (which relies on light pulses), wireless technologies transmit electromagnetic signals directly through unguided space. In this context, the air serves as the actual transmission channel through which modulated waves travel between antennas.",
    "keyTakeaway": "Tips Ujian CCNA Topic 4.2.4: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 59,
    "num": 60,
    "moduleId": 6,
    "moduleName": "Modul 6: Data Link Layer",
    "color": "emerald",
    "topic": "Topic 6.1.2",
    "type": "multiple",
    "titleEn": "Which two functions are performed at the MAC sublayer of the OSI data link layer? (Choose two.)",
    "titleId": "Which two functions are performed at the MAC sublayer of the OSI data link layer? (Choose two.)",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "Adds Layer 2 control information to network protocol data.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "B",
        "text": "Places information in the frame that identifies which network layer protocol is being used for the frame.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "C",
        "text": "Controls the NIC responsible for sending and receiving data on the physical medium.",
        "isCorrect": true,
        "why": "BENAR: Ini adalah fungsi sublayer MAC di hardware: mengontrol NIC transmisi dan menyisipkan trailer FCS untuk deteksi error CRC."
      },
      {
        "key": "D",
        "text": "Implements a trailer to detect transmission errors.",
        "isCorrect": true,
        "why": "BENAR: Ini adalah fungsi sublayer MAC di hardware: mengontrol NIC transmisi dan menyisipkan trailer FCS untuk deteksi error CRC."
      },
      {
        "key": "E",
        "text": "Enables IPv4 and IPv6 to utilize the same network interface and media.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 6.1.2 The MAC sublayer (Media Access Control) constitutes the lower portion of the OSI Data Link Layer (Layer 2) and interfaces directly with the hardware and physical layer signaling. Its key assignments include: Synchronization: It embeds preamble and delimiter flags into the frame, which provides synchronization between source and destination nodes so they can detect precisely where a transmission begins and ends. Error Detection: It computes the Cyclic Redundancy Check (CRC) value and implements a trailer (FCS field) at the end of the frame, allowing the receiving NIC to check for data corruption. Media Access: It dictates the physical rules for placing data frames onto the transmission medium depending on the topology (e.g., CSMA/CD). The alternative choices (identifying network protocols or enabling IPv4 and IPv6 to share the same physical interface) are software functions belonging entirely to the upper LLC sublayer .",
    "keyTakeaway": "Tips Ujian CCNA Topic 6.1.2: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 60,
    "num": 61,
    "moduleId": 6,
    "moduleName": "Modul 6: Data Link Layer",
    "color": "emerald",
    "topic": "Topic 6.1.2",
    "type": "multiple",
    "titleEn": "Which two functions are performed at the LLC sublayer of the OSI data link layer? (Choose two.)",
    "titleId": "Which two functions are performed at the LLC sublayer of the OSI data link layer? (Choose two.)",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "Enables IPv4 and IPv6 to utilize the same network interface and media.",
        "isCorrect": true,
        "why": "BENAR: Ini adalah fungsi sublayer LLC di software: menambahkan informasi kontrol pengenal protokol Layer 3 sehingga IPv4 dan IPv6 dapat berbagi antarmuka jaringan yang sama."
      },
      {
        "key": "B",
        "text": "Places information in the frame that identifies which network layer protocol is being used for the frame.",
        "isCorrect": true,
        "why": "BENAR: Ini adalah fungsi sublayer LLC di software: menambahkan informasi kontrol pengenal protokol Layer 3 sehingga IPv4 dan IPv6 dapat berbagi antarmuka jaringan yang sama."
      },
      {
        "key": "C",
        "text": "Integrates various physical technologies.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "Implements a process to delimit fields within a Layer 2 frame.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "E",
        "text": "Controls the NIC responsible for sending and receiving data on the physical medium.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 6.1.2 The OSI data link layer is divided into two distinct sublayers: LLC (Logical Link Control) and MAC (Media Access Control) . The LLC sublayer is defined by the IEEE 802.2 standard and is implemented entirely in software. The primary functions performed at the LLC sublayer include: Interfacing with upper layers: It acts as an intermediary between network software (Layer 3 protocols) and the underlying hardware. By inserting control information into the frame that identifies which network layer protocol is being used, it enables multiple protocols, such as IPv4 and IPv6, to utilize the same network interface and media . Initial control encapsulation: It is responsible for adding Layer 2 control information to the network protocol data units (PDUs) before handing them down to the MAC sublayer. The other choices describe functions belonging to the MAC sublayer or the Physical layer (such as integrating physical technologies, node synchronization, or implementing the FCS trailer with a CRC value for transmission error detection).",
    "keyTakeaway": "Tips Ujian CCNA Topic 6.1.2: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 61,
    "num": 64,
    "moduleId": 6,
    "moduleName": "Modul 6: Data Link Layer",
    "color": "emerald",
    "topic": "Topic 6.1.2",
    "type": "multiple",
    "titleEn": "Which two functions are performed at the LLC sublayer of the OSI data link layer? (Choose two.)",
    "titleId": "Which two functions are performed at the LLC sublayer of the OSI data link layer? (Choose two.)",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "Adds Layer 2 control information to network protocol data.",
        "isCorrect": true,
        "why": "BENAR: Ini adalah fungsi sublayer LLC di software: menambahkan informasi kontrol pengenal protokol Layer 3 sehingga IPv4 dan IPv6 dapat berbagi antarmuka jaringan yang sama."
      },
      {
        "key": "B",
        "text": "Places information in the frame that identifies which network layer protocol is being used for the frame.",
        "isCorrect": true,
        "why": "BENAR: Ini adalah fungsi sublayer LLC di software: menambahkan informasi kontrol pengenal protokol Layer 3 sehingga IPv4 dan IPv6 dapat berbagi antarmuka jaringan yang sama."
      },
      {
        "key": "C",
        "text": "Performs data encapsulation.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "Controls the NIC responsible for sending and receiving data on the physical medium.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "E",
        "text": "Integrates various physical technologies.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 6.1.2 The OSI data link layer is divided into two distinct sublayers: LLC (Logical Link Control) and MAC (Media Access Control) . The LLC sublayer is defined by the IEEE 802.2 standard and is implemented entirely in software. The primary functions performed at the LLC sublayer include: Interfacing with upper layers: It acts as an intermediary between network software (Layer 3 protocols) and the underlying hardware. By inserting control information into the frame that identifies which network layer protocol is being used, it enables multiple protocols, such as IPv4 and IPv6, to utilize the same network interface and media . Initial control encapsulation: It is responsible for adding Layer 2 control information to the network protocol data units (PDUs) before handing them down to the MAC sublayer. The other choices describe functions belonging to the MAC sublayer or the Physical layer (such as integrating physical technologies, node synchronization, or implementing the FCS trailer with a CRC value for transmission error detection).",
    "keyTakeaway": "Tips Ujian CCNA Topic 6.1.2: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 62,
    "num": 66,
    "moduleId": 6,
    "moduleName": "Modul 6: Data Link Layer",
    "color": "emerald",
    "topic": "Topic 6.1.2",
    "type": "multiple",
    "titleEn": "Which two functions are performed at the LLC sublayer of the OSI data link layer? (Choose two.)",
    "titleId": "Which two functions are performed at the LLC sublayer of the OSI data link layer? (Choose two.)",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "Adds Layer 2 control information to network protocol data.",
        "isCorrect": true,
        "why": "BENAR: Ini adalah fungsi sublayer LLC di software: menambahkan informasi kontrol pengenal protokol Layer 3 sehingga IPv4 dan IPv6 dapat berbagi antarmuka jaringan yang sama."
      },
      {
        "key": "B",
        "text": "Enables IPv4 and IPv6 to utilize the same network interface and media.",
        "isCorrect": true,
        "why": "BENAR: Ini adalah fungsi sublayer LLC di software: menambahkan informasi kontrol pengenal protokol Layer 3 sehingga IPv4 dan IPv6 dapat berbagi antarmuka jaringan yang sama."
      },
      {
        "key": "C",
        "text": "Provides data link layer addressing.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "Implements a trailer to detect transmission errors.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "E",
        "text": "Provides synchronization between source and target nodes.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 6.1.2 The OSI data link layer is divided into two distinct sublayers: LLC (Logical Link Control) and MAC (Media Access Control) . The LLC sublayer is defined by the IEEE 802.2 standard and is implemented entirely in software. The primary functions performed at the LLC sublayer include: Interfacing with upper layers: It acts as an intermediary between network software (Layer 3 protocols) and the underlying hardware. By inserting control information into the frame that identifies which network layer protocol is being used, it enables multiple protocols, such as IPv4 and IPv6, to utilize the same network interface and media . Initial control encapsulation: It is responsible for adding Layer 2 control information to the network protocol data units (PDUs) before handing them down to the MAC sublayer. The other choices describe functions belonging to the MAC sublayer or the Physical layer (such as integrating physical technologies, node synchronization, or implementing the FCS trailer with a CRC value for transmission error detection).",
    "keyTakeaway": "Tips Ujian CCNA Topic 6.1.2: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 63,
    "num": 68,
    "moduleId": 6,
    "moduleName": "Modul 6: Data Link Layer",
    "color": "emerald",
    "topic": "Topic 6.1.2",
    "type": "multiple",
    "titleEn": "Which two functions are performed at the LLC sublayer of the OSI data link layer? (Choose two.)",
    "titleId": "Which two functions are performed at the LLC sublayer of the OSI data link layer? (Choose two.)",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "Enables IPv4 and IPv6 to utilize the same network interface and media.",
        "isCorrect": true,
        "why": "BENAR: Ini adalah fungsi sublayer LLC di software: menambahkan informasi kontrol pengenal protokol Layer 3 sehingga IPv4 dan IPv6 dapat berbagi antarmuka jaringan yang sama."
      },
      {
        "key": "B",
        "text": "Adds Layer 2 control information to network protocol data.",
        "isCorrect": true,
        "why": "BENAR: Ini adalah fungsi sublayer LLC di software: menambahkan informasi kontrol pengenal protokol Layer 3 sehingga IPv4 dan IPv6 dapat berbagi antarmuka jaringan yang sama."
      },
      {
        "key": "C",
        "text": "Integrates various physical technologies.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "Implements a trailer to detect transmission errors.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "E",
        "text": "Provides synchronization between source and target nodes.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 6.1.2 The OSI data link layer is divided into two distinct sublayers: LLC (Logical Link Control) and MAC (Media Access Control) . The LLC sublayer is defined by the IEEE 802.2 standard and is implemented entirely in software. The primary functions performed at the LLC sublayer include: Interfacing with upper layers: It acts as an intermediary between network software (Layer 3 protocols) and the underlying hardware. By inserting control information into the frame that identifies which network layer protocol is being used, it enables multiple protocols, such as IPv4 and IPv6, to utilize the same network interface and media . Initial control encapsulation: It is responsible for adding Layer 2 control information to the network protocol data units (PDUs) before handing them down to the MAC sublayer. The other choices describe functions belonging to the MAC sublayer or the Physical layer (such as integrating physical technologies, node synchronization, or implementing the FCS trailer with a CRC value for transmission error detection).",
    "keyTakeaway": "Tips Ujian CCNA Topic 6.1.2: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 64,
    "num": 71,
    "moduleId": 7,
    "moduleName": "Modul 7: Ethernet Switching",
    "color": "purple",
    "topic": "Topic 7.2.5",
    "type": "single",
    "titleEn": "What action will occur if a switch receives a frame with the destination MAC address FF:FF:FF:FF:FF:FF?",
    "titleId": "What action will occur if a switch receives a frame with the destination MAC address FF:FF:FF:FF:FF:FF?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "The switch forwards it out all ports except the ingress port.",
        "isCorrect": true,
        "why": "BENAR: Karena alamat tujuan adalah Broadcast (FF-FF-FF-FF-FF-FF) atau Multicast, switch wajib membanjirkannya (flood) ke seluruh port aktif dalam VLAN kecuali port tempat frame tersebut masuk."
      },
      {
        "key": "B",
        "text": "The switch refreshes the timer on that entry.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "C",
        "text": "The switch does not forward the frame.",
        "isCorrect": false,
        "why": "SALAH: Switch tidak boleh menjatuhkan frame broadcast atau multicast; switch wajib membanjirkannya (flood) ke seluruh port aktif dalam VLAN yang sama."
      },
      {
        "key": "D",
        "text": "The switch sends the frame to a connected router because the destination MAC address is not local.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 7.2.5 The MAC address FF:FF:FF:FF:FF:FF is a Layer 2 broadcast address. When an Ethernet switch receives a broadcast frame, it does not look up a specific destination port in its CAM/MAC address table. Instead, the switch is designed to flood the frame out of all active ports within the same broadcast domain (VLAN), excluding the original port where the frame was received (the ingress port). This behavior ensures that the broadcast message successfully reaches every end device connected to the local network.",
    "keyTakeaway": "Tips Ujian CCNA Topic 7.2.5: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 65,
    "num": 73,
    "moduleId": 7,
    "moduleName": "Modul 7: Ethernet Switching",
    "color": "purple",
    "topic": "Topic 7.2.6",
    "type": "single",
    "titleEn": "What action will occur if a switch receives a frame with the destination MAC address 01:00:5E:00:00:D9?",
    "titleId": "What action will occur if a switch receives a frame with the destination MAC address 01:00:5E:00:00:D9?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "The switch forwards it out all ports except the ingress port.",
        "isCorrect": true,
        "why": "BENAR: Karena alamat tujuan adalah Broadcast (FF-FF-FF-FF-FF-FF) atau Multicast, switch wajib membanjirkannya (flood) ke seluruh port aktif dalam VLAN kecuali port tempat frame tersebut masuk."
      },
      {
        "key": "B",
        "text": "The switch does not forward the frame.",
        "isCorrect": false,
        "why": "SALAH: Switch tidak boleh menjatuhkan frame broadcast atau multicast; switch wajib membanjirkannya (flood) ke seluruh port aktif dalam VLAN yang sama."
      },
      {
        "key": "C",
        "text": "The switch sends the frame to a connected router because the destination MAC address is not local.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "The switch shares the MAC address table entry with any connected switches.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 7.2.6",
    "keyTakeaway": "Tips Ujian CCNA Topic 7.2.6: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 66,
    "num": 74,
    "moduleId": 7,
    "moduleName": "Modul 7: Ethernet Switching",
    "color": "purple",
    "topic": "Topic 7.2.5",
    "type": "single",
    "titleEn": "What action will occur if a host receives a frame with a destination MAC address of FF:FF:FF:FF:FF:FF?",
    "titleId": "What action will occur if a host receives a frame with a destination MAC address of FF:FF:FF:FF:FF:FF?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "The host will process the frame.",
        "isCorrect": true,
        "why": "BENAR: Alamat tujuan Broadcast (FF-FF-FF-FF-FF-FF) ditujukan untuk semua perangkat, sehingga NIC host akan menerima dan memproses isi frame tersebut ke lapisan atas."
      },
      {
        "key": "B",
        "text": "The host forwards the frame to the router.",
        "isCorrect": false,
        "why": "SALAH: Meneruskan (forwarding / flooding) frame ke semua port adalah tugas Switch, bukan tugas perangkat akhir (Host)."
      },
      {
        "key": "C",
        "text": "The host sends the frame to the switch to update the MAC address table.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "The host forwards the frame to all other hosts.",
        "isCorrect": false,
        "why": "SALAH: Meneruskan (forwarding / flooding) frame ke semua port adalah tugas Switch, bukan tugas perangkat akhir (Host)."
      }
    ],
    "explanationId": "Explanation: Topic 7.2.5 The MAC address FF:FF:FF:FF:FF:FF represents a Layer 2 broadcast address. When a host's network interface card (NIC) receives a frame containing this specific destination address, it instantly recognizes that the message is intended for every single device within the local network segment. As a result, instead of dropping it, the NIC accepts the data and hands it up the protocol stack so that the host will process the frame . End hosts do not forward broadcast frames to other devices or routers; that flooding action is strictly a switch behavior.",
    "keyTakeaway": "Tips Ujian CCNA Topic 7.2.5: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 67,
    "num": 75,
    "moduleId": 7,
    "moduleName": "Modul 7: Ethernet Switching",
    "color": "purple",
    "topic": "Topic 7.3.2",
    "type": "single",
    "titleEn": "What action will occur if a switch receives a frame and does have the source MAC address in the MAC table?",
    "titleId": "What action will occur if a switch receives a frame and does have the source MAC address in the MAC table?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "The switch refreshes the timer on that entry.",
        "isCorrect": true,
        "why": "BENAR: Jika Source MAC sudah ada di tabel MAC pada port yang sama, switch tidak membuat entri baru, melainkan me-refresh timer penuaan (aging timer) agar entri tidak kedaluwarsa."
      },
      {
        "key": "B",
        "text": "The switch adds it to its MAC address table associated with the port number.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "C",
        "text": "The switch forwards the frame to the associated port.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      },
      {
        "key": "D",
        "text": "The switch sends the frame to a connected router because the destination MAC address is not local.",
        "isCorrect": false,
        "why": "SALAH: Pilihan ini keliru karena tidak sesuai dengan standar arsitektur dan perilaku perangkat jaringan Cisco NetAcad untuk pertanyaan ini."
      }
    ],
    "explanationId": "Explanation: Topic 7.3.2 When an Ethernet switch receives a frame, it performs two main lookups: it examines the source MAC address (to learn and maintain its address mapping table) and the destination MAC address (to decide which output port to forward the frame to). To build and maintain its MAC address table, the switch inspects the source address. If this specific source MAC address is already present in the table for the incoming port, the switch recognizes that the device is still active and connected to that interface. Instead of creating a duplicate entry, the switch simply refreshes the aging timer for that specific entry . This action resets the countdown clock, preventing the valid entry from expiring and being prematurely deleted from the switch's CAM memory.",
    "keyTakeaway": "Tips Ujian CCNA Topic 7.3.2: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 68,
    "num": 76,
    "moduleId": 7,
    "moduleName": "Modul 7: Ethernet Switching",
    "color": "purple",
    "topic": "Topic 7.2.5",
    "type": "single",
    "titleEn": "What action will occur if a host receives a frame with a destination MAC address of FF:FF:FF:FF:FF:FF?",
    "titleId": "What action will occur if a host receives a frame with a destination MAC address of FF:FF:FF:FF:FF:FF?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "The host will process the frame.",
        "isCorrect": true,
        "why": "BENAR: Alamat tujuan Broadcast (FF-FF-FF-FF-FF-FF) ditujukan untuk semua perangkat, sehingga NIC host akan menerima dan memproses isi frame tersebut ke lapisan atas."
      },
      {
        "key": "B",
        "text": "The host returns the frame to the switch.",
        "isCorrect": false,
        "why": "SALAH: Host tidak mengembalikan frame yang tidak cocok ke switch; host hanya memeriksa alamat MAC tujuan dan membuangnya jika tidak sesuai."
      },
      {
        "key": "C",
        "text": "The host replies to the switch with its own IP address.",
        "isCorrect": false,
        "why": "SALAH: Host tidak mengembalikan frame yang tidak cocok ke switch; host hanya memeriksa alamat MAC tujuan dan membuangnya jika tidak sesuai."
      },
      {
        "key": "D",
        "text": "The host forwards the frame to all other hosts.",
        "isCorrect": false,
        "why": "SALAH: Meneruskan (forwarding / flooding) frame ke semua port adalah tugas Switch, bukan tugas perangkat akhir (Host)."
      }
    ],
    "explanationId": "Explanation: Topic 7.2.5 The MAC address FF:FF:FF:FF:FF:FF represents a Layer 2 broadcast address. When a host's network interface card (NIC) receives a frame containing this specific destination address, it instantly recognizes that the message is intended for every single device within the local network segment. As a result, instead of dropping it, the NIC accepts the data and hands it up the protocol stack so that the host will process the frame . End hosts do not forward broadcast frames to other devices or routers; that flooding action is strictly a switch behavior.",
    "keyTakeaway": "Tips Ujian CCNA Topic 7.2.5: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 69,
    "num": 78,
    "moduleId": 7,
    "moduleName": "Modul 7: Ethernet Switching",
    "color": "purple",
    "topic": "Topic 7.2.3",
    "type": "single",
    "titleEn": "What action will occur if a host receives a frame with a destination MAC address it does not recognize?",
    "titleId": "What action will occur if a host receives a frame with a destination MAC address it does not recognize?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "The host will discard the frame.",
        "isCorrect": true,
        "why": "BENAR: Jika alamat MAC tujuan adalah unicast dan bukan milik host tersebut, NIC host menyadari data bukan untuknya dan segera membuang frame tersebut tanpa membebani CPU."
      },
      {
        "key": "B",
        "text": "The host replies to the switch with its own IP address.",
        "isCorrect": false,
        "why": "SALAH: Host tidak mengembalikan frame yang tidak cocok ke switch; host hanya memeriksa alamat MAC tujuan dan membuangnya jika tidak sesuai."
      },
      {
        "key": "C",
        "text": "The host forwards the frame to all other hosts.",
        "isCorrect": false,
        "why": "SALAH: Meneruskan (forwarding / flooding) frame ke semua port adalah tugas Switch, bukan tugas perangkat akhir (Host)."
      },
      {
        "key": "D",
        "text": "The host returns the frame to the switch.",
        "isCorrect": false,
        "why": "SALAH: Host tidak mengembalikan frame yang tidak cocok ke switch; host hanya memeriksa alamat MAC tujuan dan membuangnya jika tidak sesuai."
      }
    ],
    "explanationId": "Explanation: Topic 7.2.3 When a host's network interface card (NIC) receives an Ethernet frame, the very first action it takes is to examine the destination MAC address located within the Layer 2 header. The host will only accept and pass the frame up the protocol stack for processing if the destination MAC address matches: Its own unique physical MAC address. A broadcast MAC address (FF-FF-FF-FF-FF-FF). A multicast MAC address that the host is actively subscribed to. If the destination MAC address does not match any of these criteria (meaning it is a unicast address that it does not recognize as its own), the NIC determines that the data was not intended for this device and immediately drops the frame . End hosts do not forward unassigned frames or flood the network; that behavior is strictly handled by network switches.",
    "keyTakeaway": "Tips Ujian CCNA Topic 7.2.3: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  },
  {
    "id": 70,
    "num": 79,
    "moduleId": 4,
    "moduleName": "Modul 4: Physical Layer",
    "color": "blue",
    "topic": "Topic 4.4.3",
    "type": "single",
    "titleEn": "Which type of UTP cable is used to connect a PC to a switch port?",
    "titleId": "Which type of UTP cable is used to connect a PC to a switch port?",
    "image": null,
    "options": [
      {
        "key": "A",
        "text": "console",
        "isCorrect": false,
        "why": "SALAH: Kabel konsol digunakan untuk manajemen out-of-band ke port console, bukan untuk mentransfer traffic data ke switchport biasa."
      },
      {
        "key": "B",
        "text": "rollover",
        "isCorrect": false,
        "why": "SALAH: Kabel Rollover (kabel konsol) khusus digunakan untuk konfigurasi terminal konsol ke port RJ-45 Console router/switch Cisco."
      },
      {
        "key": "C",
        "text": "crossover",
        "isCorrect": false,
        "why": "SALAH: Kabel Crossover digunakan untuk menghubungkan dua perangkat sejenis (Switch ke Switch, PC ke PC, atau Router ke PC)."
      },
      {
        "key": "D",
        "text": "straight-through",
        "isCorrect": true,
        "why": "BENAR: Kabel UTP straight-through adalah kabel standar untuk menghubungkan dua perangkat dengan fungsi berbeda, seperti dari komputer (host) ke port switch."
      }
    ],
    "explanationId": "Explanation: Topic 4.4.3 A rollover cable is a Cisco proprietary cable used to connect to a router or switch console port. A straight-through (also called patch) cable is usually used to interconnect a host to a switch and a switch to a router. A crossover cable is used to interconnect similar devices together, for example, between two switches, two routers, and two hosts.",
    "keyTakeaway": "Tips Ujian CCNA Topic 4.4.3: Pelajari perbedaan fungsi layer dan cara kerja protokol hardware."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTIONS_DATA };
}
