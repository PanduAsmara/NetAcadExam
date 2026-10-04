// Materi Lengkap, Super Mendalam & Mudah Dipahami CCNA 1 v7 Modules 4 - 7
// Ditulis dengan terminologi standar Cisco CCNA, penjelasan lugas dalam bahasa Indonesia, analogi nyata, dan tips ujian
// Tema: High-Contrast MIXD Editorial Typography (100% Crisp & Legible)

const MATERI_DATA = {
  modul4: {
    id: 4,
    title: "Modul 4: OSI Physical Layer (Layer 1)",
    icon: "🔌",
    badge: "OSI Layer 1",
    summary: "Fondasi komunikasi data: bagaimana bit biner dikonversi menjadi sinyal fisik (electrical, optical, wireless/RF), karakteristik media kabel tembaga (UTP/STP/Coaxial), fiber-optic (SMF/MMF), serta mitigasi fenomena atenuasi dan crosstalk.",
    sections: [
      {
        id: "m4-intro",
        title: "4.1 Peran & Fungsi OSI Physical Layer",
        content: `
          <div class="space-y-4">
            <p class="text-base text-slate-900 leading-relaxed font-semibold">
              <strong>OSI Physical Layer (Layer 1)</strong> adalah lapisan paling dasar yang menghubungkan sistem data digital (bit biner 0 dan 1) dengan media transmisi fisik di dunia nyata. Lapisan ini <em>tidak membaca alamat IP, MAC address, maupun struktur frame</em>. Peran utamanya sangat spesifik: <strong>mengkodekan (encoding) bit digital menjadi sinyal fisik</strong> (electrical signals pada tembaga, light pulses pada fiber optic, atau gelombang radio/RF pada wireless) dan mentransmisikannya melintasi kabel atau udara ke perangkat tujuan.
            </p>

            <!-- Analogi Jalan Raya -->
            <div class="p-4 bg-amber-100 border-l-4 border-amber-600 rounded-r-xl text-sm">
              <strong class="font-extrabold text-amber-950 text-base">💡 Analogi Mudah Dipahami:</strong>
              <p class="text-slate-900 mt-1 font-semibold leading-relaxed">
                Jika Data Link Layer adalah petugas pos yang mengemas surat ke dalam amplop bersegel rapi, maka <strong>Physical Layer adalah aspal jalan raya, rel kereta, atau kabel fisik</strong> tempat kendaraan melaju mengantarkan muatan tersebut. Physical Layer fokus sepenuhnya pada bagaimana sinyal fisik bergerak dari titik A ke titik B.
              </p>
            </div>

            <!-- Tiga Jenis Sinyal Fisik -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
              <div class="p-5 bg-white border-2 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <div class="font-extrabold text-black text-base mb-1">⚡ Electrical Signals</div>
                <div class="text-xs font-bold text-blue-800 mb-2">Media: Copper Cabling (UTP / STP / Coaxial)</div>
                <p class="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  Bit 1 dan 0 direpresentasikan melalui variasi tegangan voltase listrik. Merupakan pilihan paling ekonomis dan umum digunakan pada LAN, namun dibatasi jarak maksimal 100 meter dan rentan terhadap interferensi elektromagnetik (EMI).
                </p>
              </div>

              <div class="p-5 bg-white border-2 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <div class="font-extrabold text-black text-base mb-1">💡 Optical Signals (Light Pulses)</div>
                <div class="text-xs font-bold text-emerald-800 mb-2">Media: Fiber-Optic Cable (SMF / MMF)</div>
                <p class="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  Bit direpresentasikan melalui transmisi sinyal cahaya optik (light pulses) di dalam serat kaca silika murni. <strong>100% kebal terhadap gangguan gelombang listrik/EMI</strong>, mampu mentransmisikan data berkecepatan puluhan Gbps hingga puluhan kilometer.
                </p>
              </div>

              <div class="p-5 bg-white border-2 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <div class="font-extrabold text-black text-base mb-1">📶 Wireless / RF Signals</div>
                <div class="text-xs font-bold text-purple-800 mb-2">Media: Radio Frequency (Wi-Fi, Bluetooth, Cellular)</div>
                <p class="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  Bit ditransmisikan melalui modulasi gelombang elektromagnetik Radio Frequency (RF) melalui udara bebas. Memberikan fleksibilitas dan mobilitas tinggi bagi end-user tanpa ketergantungan kabel fisik.
                </p>
              </div>
            </div>

            <div class="p-3.5 bg-slate-100 border-2 border-black/20 rounded-xl text-xs sm:text-sm text-slate-900 font-semibold">
              <strong>Standar Resmi:</strong> Protokol layer atas (IP, TCP) distandarisasi oleh <strong>IETF</strong> (via RFC). Sebaliknya, Physical Layer diatur oleh badan standar rekayasa perangkat keras dan telekomunikasi: <strong>ISO, IEEE (802.3 Ethernet, 802.11 Wi-Fi), TIA/EIA (standar kabel T568A/B), dan ITU-T</strong>.
            </div>
          </div>
        `
      },
      {
        id: "m4-bandwidth-deep",
        title: "4.2 Bandwidth vs Throughput vs Goodput vs Latency",
        content: `
          <div class="space-y-4">
            <p class="text-sm text-slate-900 leading-relaxed font-semibold">
              Empat metrik performa ini adalah materi yang paling sering diuji dalam ujian NetAcad. Berikut perbandingannya:
            </p>

            <div class="overflow-x-auto my-3">
              <table class="w-full text-left text-xs sm:text-sm border-2 border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <thead class="bg-black text-white font-extrabold uppercase text-xs">
                  <tr>
                    <th class="p-3">Istilah</th>
                    <th class="p-3">Definisi Teknis Cisco</th>
                    <th class="p-3">Analogi Jalan Tol</th>
                    <th class="p-3">Karakteristik & Satuan</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-black/20 bg-white font-semibold text-slate-900">
                  <tr>
                    <td class="p-3 font-extrabold text-blue-700">Bandwidth</td>
                    <td class="p-3">Kapasitas teoritis maksimal suatu media membawa data dalam rentang waktu tertentu.</td>
                    <td class="p-3">Lebar fisik jalan tol (misal 4 lajur penuh).</td>
                    <td class="p-3 font-mono text-xs">Satuan: bps, Kbps, Mbps, Gbps. Bersifat nilai teoritis tetap.</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-extrabold text-emerald-700">Throughput</td>
                    <td class="p-3">Volume transfer bit nyata yang berhasil melintasi media pada saat tertentu.</td>
                    <td class="p-3">Jumlah mobil nyata yang melintas per menit (termasuk mobil patroli jalan tol).</td>
                    <td class="p-3 font-mono text-xs">Selalu &le; Bandwidth (terpotong oleh kepadatan traffic & antrean).</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-extrabold text-purple-700">Goodput</td>
                    <td class="p-3">Volume data aplikasi yang <em>benar-benar bermanfaat</em> yang diterima pengguna akhir.</td>
                    <td class="p-3">Jumlah penumpang orang yang tiba ke tujuan (tanpa bobot bodi mobilnya).</td>
                    <td class="p-3 font-mono text-xs"><strong>Goodput = Throughput &minus; Protocol Overhead (Header L2, L3, L4 & Retransmisi).</strong></td>
                  </tr>
                  <tr>
                    <td class="p-3 font-extrabold text-rose-700">Latency</td>
                    <td class="p-3">Jumlah waktu tunda (delay) yang dibutuhkan data dari host asal ke host tujuan.</td>
                    <td class="p-3">Waktu tempuh dari gerbang masuk tol hingga tiba di pintu keluar.</td>
                    <td class="p-3 font-mono text-xs">Diukur dalam milidetik (ms). Dipicu oleh propagation delay dan antrean switch/router.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="p-3.5 bg-rose-50 border-2 border-rose-300 rounded-xl text-xs sm:text-sm text-rose-950 font-bold">
              <strong>⚠️ Poin Penting Ujian NetAcad:</strong> Mengapa throughput hampir selalu lebih rendah dari bandwidth? 
              <br>Jawaban: Karena 3 faktor: <strong>1) Volume traffic saat transmisi</strong>, <strong>2) Tipe traffic yang lewat</strong>, dan <strong>3) Latensi dari banyaknya perangkat perantara (switch/router) yang dilintasi</strong>.
            </div>
          </div>
        `
      },
      {
        id: "m4-copper-deep",
        title: "4.3 Copper Cabling: UTP, STP, Coaxial & Mitigasi Crosstalk",
        content: `
          <div class="space-y-4">
            <p class="text-sm text-slate-900 leading-relaxed font-semibold">
              Kabel tembaga (copper cabling) merupakan media kabel yang paling dominan pada instalasi LAN. Ada 3 jenis utama:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="p-4 bg-white border-2 border-black rounded-xl shadow-[2px_2px_0px_#000]">
                <h4 class="font-extrabold text-black text-sm mb-1">1. UTP (Unshielded Twisted-Pair)</h4>
                <p class="text-xs text-slate-700 font-bold mb-2">Paling populer di perkantoran & jaringan lokal.</p>
                <ul class="text-xs text-slate-900 space-y-1 font-medium">
                  <li>• Memiliki 4 pasang kawat tembaga berisolasi warna (color-coded).</li>
                  <li>• <strong>Unshielded</strong> (tanpa lapisan pelindung foil logam).</li>
                  <li>• Menggunakan konektor standar <strong>RJ-45</strong>.</li>
                  <li>• Batas panjang bentangan maksimal: <strong>100 meter</strong>.</li>
                </ul>
              </div>

              <div class="p-4 bg-white border-2 border-black rounded-xl shadow-[2px_2px_0px_#000]">
                <h4 class="font-extrabold text-black text-sm mb-1">2. STP (Shielded Twisted-Pair)</h4>
                <p class="text-xs text-slate-700 font-bold mb-2">Untuk lingkungan berderau industri tinggi.</p>
                <ul class="text-xs text-slate-900 space-y-1 font-medium">
                  <li>• 4 pasang kawat tembaga dipilin.</li>
                  <li>• Dilengkapi <strong>metallic foil shield</strong> dan anyaman kawat serabut.</li>
                  <li>• Menghalau gangguan EMI/RFI eksternal secara kuat.</li>
                  <li>• Lebih kaku, lebih mahal, dan wajib di-grounding.</li>
                </ul>
              </div>

              <div class="p-4 bg-white border-2 border-black rounded-xl shadow-[2px_2px_0px_#000]">
                <h4 class="font-extrabold text-black text-sm mb-1">3. Coaxial Cable</h4>
                <p class="text-xs text-slate-700 font-bold mb-2">Untuk TV kabel, antena satelit & cable modem.</p>
                <ul class="text-xs text-slate-900 space-y-1 font-medium">
                  <li>• 1 konduktor tembaga pejal di tengah (copper conductor).</li>
                  <li>• Dikelilingi isolasi dielektrik tebal dan pelindung logam anyam.</li>
                  <li>• Menggunakan konektor <strong>BNC atau F-type</strong>.</li>
                </ul>
              </div>
            </div>

            <!-- Crosstalk & Twisting -->
            <div class="p-5 bg-white border-2 border-black rounded-xl">
              <h4 class="font-extrabold text-black text-sm mb-2">Mitigasi Crosstalk: Teknik Twisting & Cancellation Effect</h4>
              <p class="text-xs sm:text-sm text-slate-900 leading-relaxed font-semibold mb-3">
                Mengapa kawat pada kabel UTP sengaja dipilin (twisted)? Saat dua kawat pada satu sirkuit dialiri sinyal bolak-balik dengan polaritas berlawanan, medan magnet yang timbul di kedua kawat saling berlawanan arah. <strong>Medan magnet ini saling meniadakan (Cancellation Effect)</strong> sehingga tidak menginduksi interferensi sinyal ke pasangan kawat di sebelahnya (crosstalk). Selain itu, tiap pasang kawat diberi kerapatan lilitan (twist rate) yang berbeda-beda.
              </p>
              <div class="p-3 bg-amber-100 border-l-4 border-amber-600 rounded-r-xl text-xs sm:text-sm text-amber-950 font-bold">
                ⚠️ <strong>Jebakan Terminasi RJ-45:</strong> Saat melakukan crimping konektor RJ-45, panjang kawat yang terurai tanpa pilinan tidak boleh terlalu panjang (<span class="font-mono">untwisted wire length too long</span>). Selubung luar kabel wajib dijepit masuk ke dalam konektor. Jika pilinan terurai terlalu panjang di pangkal konektor, crosstalk akan langsung muncul dan merusak transmisi gigabit!
              </div>
            </div>

            <!-- Tipe Pengkabelan UTP -->
            <div class="p-5 bg-white border-2 border-black rounded-xl">
              <h4 class="font-extrabold text-black text-sm mb-3">3 Jenis Pengkabelan UTP (Cable Pinouts):</h4>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div class="p-3.5 bg-blue-50 border-2 border-blue-400 rounded-lg">
                  <div class="font-black text-blue-900 mb-1 text-sm">1. Straight-Through Cable</div>
                  <p class="text-slate-900 font-medium">Kedua ujung menggunakan standar yang sama (T568B ke T568B). Digunakan untuk <strong>menghubungkan perangkat berbeda jenis</strong>:</p>
                  <ul class="list-disc ml-4 mt-2 font-mono font-bold text-slate-900">
                    <li>Host (PC) &rarr; Switch</li>
                    <li>Router &rarr; Switch</li>
                  </ul>
                </div>

                <div class="p-3.5 bg-emerald-50 border-2 border-emerald-400 rounded-lg">
                  <div class="font-black text-emerald-900 mb-1 text-sm">2. Crossover Cable</div>
                  <p class="text-slate-900 font-medium">Satu ujung T568A, ujung lainnya T568B. Digunakan untuk <strong>menghubungkan perangkat sejenis</strong> (meski switch modern kini memiliki Auto-MDIX):</p>
                  <ul class="list-disc ml-4 mt-2 font-mono font-bold text-slate-900">
                    <li>Switch &rarr; Switch</li>
                    <li>Router &rarr; Router</li>
                    <li>Host (PC) &rarr; Host (PC)</li>
                  </ul>
                </div>

                <div class="p-3.5 bg-purple-50 border-2 border-purple-400 rounded-lg">
                  <div class="font-black text-purple-900 mb-1 text-sm">3. Rollover / Console Cable</div>
                  <p class="text-slate-900 font-medium">Susunan pin dibalik total (Pin 1 terhubung ke Pin 8). Merupakan kabel khusus Cisco untuk:</p>
                  <ul class="list-disc ml-4 mt-2 font-mono font-bold text-slate-900">
                    <li>PC COM Port / USB &rarr; Console Port Switch/Router (Konfigurasi awal CLI)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "m4-fiber-deep",
        title: "4.4 Fiber-Optic Cabling: Single-Mode (SMF) vs Multi-Mode (MMF)",
        content: `
          <div class="space-y-4">
            <p class="text-sm text-slate-900 leading-relaxed font-semibold">
              Kabel fiber-optic mentransmisikan data menggunakan berkas cahaya optik (light pulses). Berikut perbandingan dua tipe serat optik utama:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-5 bg-white border-2 border-black rounded-xl shadow-[3px_3px_0px_#000]">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="font-black text-black text-base">Single-Mode Fiber (SMF)</h4>
                  <span class="px-2.5 py-0.5 rounded text-xs font-black bg-amber-300 text-black border border-black">Yellow Jacket (Selubung Kuning)</span>
                </div>
                <ul class="text-xs sm:text-sm text-slate-900 space-y-2 font-medium">
                  <li>• <strong>Outer Jacket:</strong> Berwarna kuning (Yellow Jacket) sesuai standar industri TIA-598 untuk identifikasi kabel Single-Mode.</li>
                  <li>• <strong>Inti Kaca (Core):</strong> Sangat kecil (~9 mikron diameter).</li>
                  <li>• <strong>Light Source:</strong> Laser semikonduktor (sinar lurus terfokus).</li>
                  <li>• Menghasilkan satu berkas jalur cahaya lurus tanpa dispersi modal pantulan.</li>
                  <li>• <strong>Jarak Jangkauan:</strong> Sangat jauh (hingga puluhan/ratusan kilometer untuk backbone, kampus, dan kabel bawah laut).</li>
                </ul>
              </div>

              <div class="p-5 bg-white border-2 border-black rounded-xl shadow-[3px_3px_0px_#000]">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="font-black text-black text-base">Multi-Mode Fiber (MMF)</h4>
                  <span class="px-2.5 py-0.5 rounded text-xs font-black bg-cyan-300 text-black border border-black">Orange / Aqua Jacket</span>
                </div>
                <ul class="text-xs sm:text-sm text-slate-900 space-y-2 font-medium">
                  <li>• <strong>Outer Jacket:</strong> Berwarna oranye (standar OM1/OM2) atau aqua (standar OM3/OM4 10 Gbps) sesuai standar TIA-598.</li>
                  <li>• <strong>Inti Kaca (Core):</strong> Lebih besar (50 atau 62.5 mikron diameter).</li>
                  <li>• <strong>Light Source:</strong> Lampu LED (biaya transceiver lebih terjangkau).</li>
                  <li>• Cahaya masuk dengan berbagai sudut sehingga terjadi pemantulan (modal dispersion).</li>
                  <li>• <strong>Jarak Jangkauan:</strong> Menengah (efektif hingga ~550 meter untuk interkoneksi server data center dan LAN enterprise).</li>
                </ul>
              </div>
            </div>

            <div class="p-4 bg-emerald-50 border-2 border-emerald-500 rounded-xl text-xs sm:text-sm text-emerald-950 font-semibold">
              <strong class="font-black text-base text-emerald-900">Mengapa koneksi Fiber-Optic umumnya menggunakan Two Strands (Duplex)?</strong>
              <p class="mt-1 leading-relaxed">
                Karena sinyal cahaya dalam satu untai serat kaca hanya dapat merambat ke satu arah (simplex). Agar perangkat jaringan dapat mengirim dan menerima data secara serentak (Full-Duplex), digunakan sepasang kabel optik: satu untai difungsikan sebagai <strong>Transmit (Tx)</strong> dan satu untai lainnya sebagai <strong>Receive (Rx)</strong>.
              </p>
            </div>
          </div>
        `
      }
    ]
  },
  modul5: {
    id: 5,
    title: "Modul 5: Number Systems (Binary & Hexadecimal)",
    icon: "🔢",
    badge: "Binary & Hex",
    summary: "Memahami logika konversi Binary (Base 2), Decimal (Base 10), dan Hexadecimal (Base 16) yang menjadi dasar pengalamatan IPv4, IPv6, dan MAC Address di Cisco.",
    sections: [
      {
        id: "m5-binary-math",
        title: "5.1 Konversi Decimal ke Binary (Positional Values 8-Bit)",
        content: `
          <div class="space-y-4">
            <p class="text-sm text-slate-900 leading-relaxed font-semibold">
              Setiap oktet pada alamat IPv4 terdiri dari 8 bit. Setiap posisi bit memiliki bobot nilai pangkat dua ($2^7$ sampai $2^0$):
            </p>

            <div class="overflow-x-auto my-3 font-mono">
              <table class="w-full text-center text-xs border-2 border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <thead class="bg-black text-white font-extrabold">
                  <tr>
                    <th class="p-2.5">Posisi</th>
                    <th class="p-2.5">Bit 7</th>
                    <th class="p-2.5">Bit 6</th>
                    <th class="p-2.5">Bit 5</th>
                    <th class="p-2.5">Bit 4</th>
                    <th class="p-2.5">Bit 3</th>
                    <th class="p-2.5">Bit 2</th>
                    <th class="p-2.5">Bit 1</th>
                    <th class="p-2.5">Bit 0</th>
                    <th class="p-2.5">Hasil Desimal</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-black/20 bg-white font-black text-slate-900">
                  <tr>
                    <td class="p-2.5 text-black font-sans font-extrabold bg-slate-100">Positional Value</td>
                    <td class="p-2.5 text-blue-700">128</td>
                    <td class="p-2.5 text-blue-700">64</td>
                    <td class="p-2.5 text-blue-700">32</td>
                    <td class="p-2.5 text-blue-700">16</td>
                    <td class="p-2.5 text-blue-700">8</td>
                    <td class="p-2.5 text-blue-700">4</td>
                    <td class="p-2.5 text-blue-700">2</td>
                    <td class="p-2.5 text-blue-700">1</td>
                    <td class="p-2.5 text-emerald-700 font-sans font-extrabold">Max: 255</td>
                  </tr>
                  <tr class="bg-blue-50">
                    <td class="p-2.5 text-black font-sans font-bold">Decimal 192</td>
                    <td class="p-2.5 text-emerald-700 font-black text-sm">1</td>
                    <td class="p-2.5 text-emerald-700 font-black text-sm">1</td>
                    <td class="p-2.5 text-slate-400">0</td>
                    <td class="p-2.5 text-slate-400">0</td>
                    <td class="p-2.5 text-slate-400">0</td>
                    <td class="p-2.5 text-slate-400">0</td>
                    <td class="p-2.5 text-slate-400">0</td>
                    <td class="p-2.5 text-slate-400">0</td>
                    <td class="p-2.5 text-blue-900 font-sans font-bold">128 + 64 = 192</td>
                  </tr>
                  <tr>
                    <td class="p-2.5 text-black font-sans font-bold">Decimal 168</td>
                    <td class="p-2.5 text-emerald-700 font-black text-sm">1</td>
                    <td class="p-2.5 text-slate-400">0</td>
                    <td class="p-2.5 text-emerald-700 font-black text-sm">1</td>
                    <td class="p-2.5 text-slate-400">0</td>
                    <td class="p-2.5 text-emerald-700 font-black text-sm">1</td>
                    <td class="p-2.5 text-slate-400">0</td>
                    <td class="p-2.5 text-slate-400">0</td>
                    <td class="p-2.5 text-slate-400">0</td>
                    <td class="p-2.5 text-blue-900 font-sans font-bold">128 + 32 + 8 = 168</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="p-3.5 bg-slate-100 border-2 border-black/20 rounded-xl text-xs sm:text-sm text-slate-900 font-bold">
              <strong>Cara Konversi Cepat Decimal ke Binary:</strong> Bandingkan angka desimal dengan bobot nilai dari kiri (128). Jika angka &ge; bobot, tulis bit <code>1</code> dan kurangkan nilainya. Jika kurang, tulis bit <code>0</code>. Lanjutkan berurutan hingga bobot terakhir (1).
            </div>
          </div>
        `
      },
      {
        id: "m5-hex-math",
        title: "5.2 Hexadecimal (Base 16) & Implementasi pada MAC Address",
        content: `
          <div class="space-y-4">
            <p class="text-sm text-slate-900 leading-relaxed font-semibold">
              Hexadecimal menggunakan 16 simbol: angka <strong>0 sampai 9</strong>, lalu huruf <strong>A (10), B (11), C (12), D (13), E (14), F (15)</strong>.
            </p>

            <div class="p-4 bg-black text-white rounded-xl font-mono text-xs space-y-1.5 border-2 border-black">
              <div class="text-[#FED000] font-black text-sm uppercase">Aturan Konversi:</div>
              <div class="text-white font-medium">• 1 digit Hexadecimal = Tepat 4 bit Binary (disebut 1 nibble).</div>
              <div class="text-white font-medium">• 2 digit Hexadecimal = 8 bit Binary (disebut 1 byte / 1 octet).</div>
              <div class="text-white font-medium">• Contoh: Hex <strong>0xFA</strong> = 1111 (F) 1010 (A) binary = 250 decimal.</div>
            </div>

            <div class="p-5 bg-white border-2 border-black rounded-xl text-xs sm:text-sm text-slate-900 space-y-2 font-medium">
              <div class="font-extrabold text-base text-black mb-1">Implementasi Hexadecimal pada Perangkat Cisco:</div>
              <p>• <strong>MAC Address (48-bit):</strong> Direpresentasikan dalam 12 digit hexadecimal. Format notasi Cisco: <code>0060.2f3a.07cc</code> (tiga kelompok 4 digit dipisah titik). Format standar IEEE: <code>00-60-2F-3A-07-CC</code>.</p>
              <p>• <strong>IPv6 Address (128-bit):</strong> Direpresentasikan dalam 32 digit hexadecimal yang dibagi menjadi 8 grup 4 digit (hextet), dipisahkan tanda titik dua (contoh: <code>2001:0DB8:85A3::8A2E:0370:7334</code>).</p>
            </div>
          </div>
        `
      }
    ]
  },
  modul6: {
    id: 6,
    title: "Modul 6: OSI Data Link Layer (Layer 2)",
    icon: "🔗",
    badge: "OSI Layer 2",
    summary: "Dua sublayer IEEE 802 (LLC & MAC), format framing lengkap (Header, Payload, Trailer FCS/CRC), topologi jaringan fisik vs logis, dan metode akses media (CSMA/CD & Full-Duplex Ethernet).",
    sections: [
      {
        id: "m6-sublayers-deep",
        title: "6.1 Dua Sublayer IEEE 802: LLC dan MAC",
        content: `
          <div class="space-y-4">
            <p class="text-sm text-slate-900 leading-relaxed font-semibold">
              Data Link Layer (Layer 2) pada standar IEEE 802 dibagi menjadi dua sublayer independen:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-5 bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="font-black text-black text-base">LLC Sublayer (Logical Link Control)</h4>
                  <span class="px-2.5 py-0.5 bg-blue-100 text-blue-900 text-xs font-black rounded border border-blue-300">IEEE 802.2</span>
                </div>
                <div class="text-xs font-black text-blue-700 mb-2">Diimplementasikan via SOFTWARE (Driver NIC)</div>
                <ul class="text-xs sm:text-sm text-slate-900 space-y-2 leading-relaxed font-medium">
                  <li>• Bertindak sebagai perantara antara software Network Layer (Layer 3) dengan hardware lapisan bawah.</li>
                  <li>• Menempatkan informasi kontrol pada frame untuk <strong>mengidentifikasi protokol Layer 3 yang dibungkus</strong> (IPv4 atau IPv6).</li>
                  <li>• <strong>Fungsi Utama:</strong> Memungkinkan beberapa protokol Layer 3 (misalnya IPv4 dan IPv6 secara dual-stack) untuk <strong>menggunakan satu interface kartu jaringan (NIC) dan kabel fisik yang sama</strong> secara harmonis.</li>
                </ul>
              </div>

              <div class="p-5 bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="font-black text-black text-base">MAC Sublayer (Media Access Control)</h4>
                  <span class="px-2.5 py-0.5 bg-emerald-100 text-emerald-900 text-xs font-black rounded border border-emerald-300">IEEE 802.3 / 802.11</span>
                </div>
                <div class="text-xs font-black text-emerald-700 mb-2">Diimplementasikan via HARDWARE (Chipset NIC)</div>
                <ul class="text-xs sm:text-sm text-slate-900 space-y-2 leading-relaxed font-medium">
                  <li>• Bertanggung jawab melakukan <strong>Data Encapsulation</strong>: menyematkan frame header (MAC Address) dan trailer (FCS/CRC).</li>
                  <li>• Mengontrol kartu jaringan (NIC) dalam proses penempatan dan pengambilan frame ke/dari media fisik (<strong>Media Access Control</strong>).</li>
                  <li>• Menentukan batasan awal dan akhir frame (frame delimiting) serta sinkronisasi bit pengirim dan penerima.</li>
                </ul>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "m6-framing-deep",
        title: "6.2 Anatomi Layer 2 Frame: Header, Payload, & Trailer",
        content: `
          <div class="space-y-4">
            <p class="text-sm text-slate-900 leading-relaxed font-semibold">
              Seluruh protokol Data Link Layer membungkus data ke dalam format frame dengan 3 komponen struktural:
            </p>

            <!-- Diagram Frame -->
            <div class="p-4 bg-black text-white rounded-xl font-mono text-xs overflow-x-auto shadow-md border-2 border-black">
              <div class="flex items-center text-center gap-1.5 min-w-[620px]">
                <div class="bg-blue-600 p-3 rounded-lg flex-1 text-white">
                  <div class="font-black text-sm">HEADER</div>
                  <div class="text-[10px] text-blue-100 mt-1 font-semibold">Preamble, SFD, Destination MAC, Source MAC, EtherType</div>
                </div>
                <div class="bg-emerald-600 p-3 rounded-lg flex-[2] text-white">
                  <div class="font-black text-sm">DATA (PAYLOAD)</div>
                  <div class="text-[10px] text-emerald-100 mt-1 font-semibold">Packet Layer 3 (IP Header + TCP/UDP Segment + Data Aplikasi)</div>
                </div>
                <div class="bg-rose-600 p-3 rounded-lg flex-1 text-white">
                  <div class="font-black text-sm">TRAILER</div>
                  <div class="text-[10px] text-rose-100 mt-1 font-semibold">FCS (Frame Check Sequence / Nilai CRC 32-bit)</div>
                </div>
              </div>
            </div>

            <div class="p-4 bg-rose-50 border-2 border-rose-300 rounded-xl text-xs sm:text-sm text-rose-950 leading-relaxed font-semibold">
              <strong class="font-black text-base text-rose-900">Fungsi Field Trailer: FCS (Frame Check Sequence) & Algoritma CRC:</strong><br>
              Sebelum mengirim, perangkat pengirim menghitung algoritma CRC (Cyclic Redundancy Check) 32-bit dari seluruh bit frame dan menyimpannya di field FCS. Ketika frame tiba di penerima, hardware NIC menghitung ulang rumus CRC. Jika hasil perhitungan cocok, frame dinyatakan utuh dan valid. <strong>Jika hasil CRC berbeda (terjadi bit error), frame seketika di-drop (dibuang) secara hardware oleh NIC</strong> tanpa membebani CPU maupun sistem operasi host penerima!
            </div>
          </div>
        `
      },
      {
        id: "m6-csmacd-deep",
        title: "6.3 Media Access Control: CSMA/CD, CSMA/CA, & Full-Duplex Ethernet",
        content: `
          <div class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-5 bg-white border-2 border-black rounded-xl">
                <h4 class="font-black text-black text-base mb-2">CSMA/CD (Legacy Shared-Media Ethernet)</h4>
                <p class="text-xs text-slate-700 font-bold mb-2">Digunakan pada jaringan Half-Duplex (Hub / Coaxial bus).</p>
                <ol class="list-decimal ml-4 text-xs sm:text-sm text-slate-900 space-y-1.5 font-medium">
                  <li><strong>Carrier Sense:</strong> Host mendengarkan kabel untuk memastikan tidak ada perangkat lain yang sedang transmit.</li>
                  <li>Jika kabel idle, host mulai mengirim frame sambil terus memonitor voltase sinyal.</li>
                  <li><strong>Collision Detection:</strong> Jika dua host mengirim bersamaan, terjadi tabrakan sinyal (collision). Host mendeteksi lonjakan sinyal dan memancarkan <em>Jamming Signal</em> agar seluruh host berhenti mengirim.</li>
                  <li>Semua host menunggu periode waktu acak (<strong>Exponential Backoff</strong>) sebelum mencoba mengirim ulang.</li>
                </ol>
              </div>

              <div class="p-5 bg-white border-2 border-black rounded-xl">
                <h4 class="font-black text-black text-base mb-2">Full-Duplex Ethernet Modern (Collision-Free)</h4>
                <p class="text-xs text-slate-700 font-bold mb-2">Standar Ethernet Switch modern saat ini.</p>
                <ul class="text-xs sm:text-sm text-slate-900 space-y-2 font-medium">
                  <li>• Setiap port switch membentuk <strong>dedicated point-to-point connection</strong> ke masing-masing host.</li>
                  <li>• Jalur transmit (Tx) dan receive (Rx) terpisah secara fisik pada kabel tembaga atau fiber.</li>
                  <li>• Perangkat dapat mengirim dan menerima data secara simultan.</li>
                  <li>• <strong>Bebas Tabrakan (Collision-Free)</strong>: collision domain terisolasi per port switch.</li>
                  <li>• Karena itu, mekanisme arbitrase <strong>CSMA/CD dinonaktifkan (disabled)</strong> pada Full-Duplex.</li>
                </ul>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  modul7: {
    id: 7,
    title: "Modul 7: Ethernet Switching & Switch Operation",
    icon: "🔀",
    badge: "Switching L2",
    summary: "Cara kerja switch cerdas: proses pembelajaran MAC Address, mekanisme forwarding vs flooding, perbandingan Store-and-Forward vs Cut-Through, dan fitur Auto-MDIX.",
    sections: [
      {
        id: "m7-frame-mac-deep",
        title: "7.1 Ethernet Frame Size & Struktur MAC Address (48-Bit)",
        content: `
          <div class="space-y-4">
            <!-- Ukuran Frame -->
            <div class="p-5 bg-white border-2 border-black rounded-xl">
              <h4 class="font-black text-black text-base mb-2">Standar Batasan Ukuran Frame Ethernet II:</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div class="p-3.5 bg-red-50 border-2 border-red-300 rounded-lg">
                  <span class="font-black text-red-900 text-sm">Ukuran Minimum: 64 Bytes</span>
                  <p class="text-slate-900 mt-1 font-medium">Frame di bawah 64 bytes disebut <strong>Runt Frame</strong> (biasanya merupakan collision fragment hasil tabrakan) dan otomatis di-drop oleh switch/NIC.</p>
                </div>
                <div class="p-3.5 bg-amber-50 border-2 border-amber-300 rounded-lg">
                  <span class="font-black text-amber-900 text-sm">Ukuran Maksimum: 1518 Bytes</span>
                  <p class="text-slate-900 mt-1 font-medium">Frame di atas 1518 bytes tanpa konfigurasi Jumbo Frame disebut <strong>Giant Frame</strong> dan otomatis di-drop.</p>
                </div>
              </div>
            </div>

            <!-- Struktur MAC Address -->
            <div class="p-5 bg-white border-2 border-black rounded-xl">
              <h4 class="font-black text-black text-base mb-2">Struktur Alamat Fisik MAC Address (48-Bit / 6 Bytes / 12 Hex Digits):</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div class="p-3.5 bg-blue-50 border-2 border-blue-300 rounded-lg">
                  <span class="font-black text-blue-900 text-sm">24 Bit Pertama (6 Hex Digits) = OUI</span>
                  <p class="text-slate-900 mt-1 font-medium"><strong>Organizationally Unique Identifier</strong>. Kode identitas unik vendor pabrikan hardware yang ditetapkan secara resmi oleh IEEE.</p>
                </div>
                <div class="p-3.5 bg-purple-50 border-2 border-purple-300 rounded-lg">
                  <span class="font-black text-purple-900 text-sm">24 Bit Terakhir (6 Hex Digits) = Vendor Assigned</span>
                  <p class="text-slate-900 mt-1 font-medium">Nomor seri unik yang dibakar (burned-in) ke chip ROM NIC oleh pabrikan untuk menjamin keunikan global.</p>
                </div>
              </div>
            </div>

            <!-- 3 Jenis Alamat MAC Tujuan -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
              <div class="p-4 bg-slate-50 border-2 border-black rounded-lg">
                <span class="font-black text-blue-700 text-sm block mb-1">1. Unicast MAC</span>
                <p class="text-slate-900 font-medium">Ditujukan spesifik ke 1 interface NIC tujuan. Jika host lain menerima unicast frame yang bukan miliknya, frame langsung di-discard.</p>
              </div>
              <div class="p-4 bg-slate-50 border-2 border-black rounded-lg">
                <span class="font-black text-rose-700 text-sm block mb-1">2. Broadcast MAC</span>
                <p class="text-slate-900 font-medium"><code>FF-FF-FF-FF-FF-FF</code>. Switch membanjiri (flood) frame ke seluruh port dalam VLAN yang sama. Semua host wajib memproses broadcast ini.</p>
              </div>
              <div class="p-4 bg-slate-50 border-2 border-black rounded-lg">
                <span class="font-black text-emerald-700 text-sm block mb-1">3. Multicast MAC</span>
                <p class="text-slate-900 font-medium">Diawali dengan prefix khusus <code>01-00-5E</code> untuk IPv4. Ditujukan kepada grup host tertentu yang bergabung dalam multicast group.</p>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "m7-switch-logic-deep",
        title: "7.2 Logika Pemrosesan Switch: MAC Address Table (CAM Table)",
        content: `
          <div class="space-y-4">
            <p class="text-sm text-slate-900 leading-relaxed font-semibold">
              Switch Layer 2 mengambil keputusan forwarding berdasarkan <strong>MAC Address Table (CAM Table)</strong> melalui 2 tahapan pasti saat menerima frame:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-5 bg-amber-50 border-2 border-amber-500 rounded-xl">
                <h4 class="font-black text-amber-950 text-base mb-2">Tahap 1: LEARN (Membaca Source MAC Address)</h4>
                <p class="text-xs sm:text-sm text-slate-900 leading-relaxed font-semibold">
                  Switch selalu memeriksa <strong>Source MAC Address</strong> dari frame yang masuk pada ingress port:
                </p>
                <ul class="list-disc ml-4 mt-2 text-xs sm:text-sm text-slate-900 space-y-1.5 font-medium">
                  <li>Jika Source MAC <strong>belum ada</strong> di MAC table, switch mencatat entry baru: <code>[Source MAC &rarr; Ingress Port]</code>.</li>
                  <li>Jika Source MAC <strong>sudah terdaftar</strong>, switch me-refresh <strong>aging timer</strong> (agar entry tidak kedaluwarsa).</li>
                  <li><em>Switch TIDAK PERNAH mempelajari port dari Destination MAC!</em></li>
                </ul>
              </div>

              <div class="p-5 bg-cyan-50 border-2 border-cyan-500 rounded-xl">
                <h4 class="font-black text-cyan-950 text-base mb-2">Tahap 2: FORWARD (Membaca Destination MAC Address)</h4>
                <p class="text-xs sm:text-sm text-slate-900 leading-relaxed font-semibold">
                  Switch membaca <strong>Destination MAC Address</strong> untuk menentukan egress port tujuan:
                </p>
                <ul class="list-disc ml-4 mt-2 text-xs sm:text-sm text-slate-900 space-y-1.5 font-medium">
                  <li><strong>Known Unicast:</strong> Jika Destination MAC terdaftar di tabel, frame diteruskan tepat hanya ke satu port keluar tersebut.</li>
                  <li><strong>Unknown Unicast:</strong> Jika Destination MAC belum ada di tabel, switch melakukan <strong>flooding</strong> ke seluruh port aktif dalam VLAN kecuali ingress port.</li>
                  <li><strong>Broadcast / Multicast:</strong> Otomatis di-flood ke seluruh port aktif kecuali ingress port.</li>
                </ul>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "m7-switching-methods-deep",
        title: "7.3 Metode Forwarding Switch: Store-and-Forward vs Cut-Through",
        content: `
          <div class="space-y-4">
            <div class="overflow-x-auto my-2">
              <table class="w-full text-left text-xs sm:text-sm border-2 border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <thead class="bg-black text-white font-extrabold uppercase text-xs">
                  <tr>
                    <th class="p-3">Karakteristik</th>
                    <th class="p-3 bg-blue-900 text-white">Store-and-Forward</th>
                    <th class="p-3 bg-purple-900 text-white">Cut-Through: Fast-Forward</th>
                    <th class="p-3 bg-indigo-900 text-white">Cut-Through: Fragment-Free</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-black/20 bg-white font-semibold text-slate-900">
                  <tr>
                    <td class="p-3 font-extrabold text-black">Waktu Mulai Forwarding</td>
                    <td class="p-3">Menunggu hingga <strong>seluruh frame diterima 100%</strong> ke dalam buffer.</td>
                    <td class="p-3">Seketika setelah membaca <strong>6 byte Destination MAC</strong> pertama.</td>
                    <td class="p-3">Setelah membaca <strong>64 byte pertama</strong> frame.</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-extrabold text-black">Validasi Error CRC</td>
                    <td class="p-3 text-emerald-700 font-extrabold">Lengkap 100%. Frame korup langsung di-drop.</td>
                    <td class="p-3 text-rose-700 font-extrabold">Tidak ada. Frame rusak tetap diteruskan.</td>
                    <td class="p-3 text-amber-700 font-extrabold">Menyaring fragment tabrakan (&lt;64 byte), namun tidak validasi CRC penuh.</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-extrabold text-black">Tingkat Latensi</td>
                    <td class="p-3 text-rose-700 font-extrabold">Lebih tinggi (harus menunggu seluruh frame).</td>
                    <td class="p-3 text-emerald-700 font-extrabold">Paling Rendah / Ultra-Low Latency.</td>
                    <td class="p-3 text-blue-700 font-extrabold">Menengah (kompromi kecepatan dan error filter).</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-extrabold text-black">Asymmetric Switching</td>
                    <td class="p-3 text-emerald-700 font-extrabold">Didukung penuh (wajib jika port masuk & keluar beda speed, misal 1 Gbps ke 100 Mbps).</td>
                    <td class="p-3 text-rose-700 font-extrabold">Tidak mendukung beda kecepatan port.</td>
                    <td class="p-3 text-rose-700 font-extrabold">Tidak mendukung beda kecepatan port.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MATERI_DATA };
}
