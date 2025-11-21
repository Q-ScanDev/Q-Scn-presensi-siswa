
    let attendanceRecords = [];
    let isScanning = false;
    let videoStream = null;
    
    // Database Siswa XI-1, XI-2, XI-3, XI-4, XI-5
    const studentsDatabase = [
      // Kelas XI-1
      { nis: "8269", name: "AHMAD NURIL QOLBI", absen: 1, kelas: "XI-1" },
      { nis: "8270", name: "AHMAD RIJAL AL AFIF", absen: 2, kelas: "XI-1" },
      { nis: "8271", name: "AISYAH OCTAVIA AULIA", absen: 3, kelas: "XI-1" },
      { nis: "8276", name: "ALDINO PUTRA ADI NUGRAHA", absen: 4, kelas: "XI-1" },
      { nis: "8283", name: "ALMAGHVIRA RIZKY EFFENDY", absen: 5, kelas: "XI-1" },
      { nis: "8286", name: "ALYSIA DELLA MURFAHANIK FAIZ", absen: 6, kelas: "XI-1" },
      { nis: "8299", name: "AQILAH ATHALLAZAHRA ARDINE", absen: 7, kelas: "XI-1" },
      { nis: "8305", name: "ATHAILLAH AILSA JACINDA", absen: 8, kelas: "XI-1" },
      { nis: "8309", name: "AURA WULAN RAHMADANI", absen: 9, kelas: "XI-1" },
      { nis: "8323", name: "CADEREYN ARETA", absen: 10, kelas: "XI-1" },
      { nis: "8353", name: "ELISABETH SELLYNA", absen: 11, kelas: "XI-1" },
      { nis: "8360", name: "FAISHAL ALI REZA", absen: 12, kelas: "XI-1" },
      { nis: "8363", name: "FAREL ARDINATA MISLANDA PUTRA", absen: 13, kelas: "XI-1" },
      { nis: "8368", name: "FEYOLA VALENCIA UTOMO", absen: 14, kelas: "XI-1" },
      { nis: "8570", name: "IBRANI CALFIN MARBUN", absen: 15, kelas: "XI-1" },
      { nis: "8383", name: "JASMINE PUTRI ALMEERA", absen: 16, kelas: "XI-1" },
      { nis: "8389", name: "KAISYA MUAMMAR", absen: 17, kelas: "XI-1" },
      { nis: "8400", name: "LAILATUL MAGHFIROH HAYATI", absen: 18, kelas: "XI-1" },
      { nis: "8405", name: "LUNA ALMAURA", absen: 19, kelas: "XI-1" },
      { nis: "8413", name: "MALVINO CHOLVI JOVANTAMA", absen: 20, kelas: "XI-1" },
      { nis: "8414", name: "MANITA ARDHIANSYAH RAHMA", absen: 21, kelas: "XI-1" },
      { nis: "8415", name: "MARIA VIDYA KHANDIS", absen: 22, kelas: "XI-1" },
      { nis: "8416", name: "MARINDA AISYAH MAWLAAYA IRBAH", absen: 23, kelas: "XI-1" },
      { nis: "8421", name: "MEISYA NURUL ISNAINI", absen: 24, kelas: "XI-1" },
      { nis: "8431", name: "MOCHAMMAD RAJWA SURYA SASTRO SAPUTRA", absen: 25, kelas: "XI-1" },
      { nis: "8442", name: "MUHAMMAD ASHRAF PUTRA RAHMANI", absen: 26, kelas: "XI-1" },
      { nis: "8572", name: "MUHAMMAD MUJIB HABIBI", absen: 27, kelas: "XI-1" },
      { nis: "8460", name: "MUHAMMAD SULTON ARIF MAULANA", absen: 28, kelas: "XI-1" },
      { nis: "8469", name: "NADIN MAYSAM", absen: 29, kelas: "XI-1" },
      { nis: "8498", name: "PUTRI KUMALASARI", absen: 30, kelas: "XI-1" },
      { nis: "8499", name: "PUTRINADIAN ANDINISARI PURNAMA", absen: 31, kelas: "XI-1" },
      { nis: "8500", name: "QAIDA MAHESWARI ANINDYA HIDAYAT", absen: 32, kelas: "XI-1" },
      { nis: "8506", name: "RAHMANIA AHMAD SAFIRADEWI", absen: 33, kelas: "XI-1" },
      { nis: "8528", name: "SAFIRA ELINA PUTRI", absen: 34, kelas: "XI-1" },
      { nis: "8532", name: "SAMARA PUTRI ZULKIFLI", absen: 35, kelas: "XI-1" },
      { nis: "8556", name: "YASMIN AYU FAIRUNIZA", absen: 36, kelas: "XI-1" },
      
      // Kelas XI-2
      { nis: "8263", name: "ADINDA PUSPITA KARUNIASARI", absen: 1, kelas: "XI-2" },
      { nis: "8265", name: "AFDIAN RASYA NAUFAL", absen: 2, kelas: "XI-2" },
      { nis: "8272", name: "AISYAH SINTA DEWI SYAFITRI", absen: 3, kelas: "XI-2" },
      { nis: "8280", name: "ALFI AULYA SUA AGUSTIN", absen: 4, kelas: "XI-2" },
      { nis: "8303", name: "ARLYNE ANINDYA ANDIK", absen: 5, kelas: "XI-2" },
      { nis: "8310", name: "AURELIA CALLISTA ANGGRAINI", absen: 6, kelas: "XI-2" },
      { nis: "8316", name: "BAGAS PRAWIRA BIMANTARA", absen: 7, kelas: "XI-2" },
      { nis: "8331", name: "CINTYA ALIN PRAMUDITA", absen: 8, kelas: "XI-2" },
      { nis: "8336", name: "DAVIDA DWI PRATIWI", absen: 9, kelas: "XI-2" },
      { nis: "8340", name: "DESFITA CAHYA ARINI", absen: 10, kelas: "XI-2" },
      { nis: "8345", name: "DIO RASYA ADITYA", absen: 11, kelas: "XI-2" },
      { nis: "8357", name: "FAHMIDA HAPSARI RAZZAQEE", absen: 12, kelas: "XI-2" },
      { nis: "8376", name: "HAFIZH ABBAS KURNIAWAN", absen: 13, kelas: "XI-2" },
      { nis: "8377", name: "HARDHIKA YUDHA KAVIN PRATAMA", absen: 14, kelas: "XI-2" },
      { nis: "8382", name: "IZKA LAILA KHOMSA NISA'UL ARIFI", absen: 15, kelas: "XI-2" },
      { nis: "8390", name: "KAMILA NAJA", absen: 16, kelas: "XI-2" },
      { nis: "8394", name: "KEZIA NATALIE WIBOWO", absen: 17, kelas: "XI-2" },
      { nis: "8397", name: "KHOFI ZAKIYYAN ATHO'ULLOH", absen: 18, kelas: "XI-2" },
      { nis: "8399", name: "LAILA ARTA DEWI", absen: 19, kelas: "XI-2" },
      { nis: "8403", name: "LELI AVRILIA", absen: 20, kelas: "XI-2" },
      { nis: "8422", name: "MEY NENSY ZALIATY", absen: 21, kelas: "XI-2" },
      { nis: "8430", name: "MOCHAMMAD MARVIN LUCKIANSYAH WARDANY", absen: 22, kelas: "XI-2" },
      { nis: "8440", name: "MUHAMMAD ALFIN DWI FIRMANSYAH", absen: 23, kelas: "XI-2" },
      { nis: "8449", name: "MUHAMMAD HAIKAL HAMZAH", absen: 24, kelas: "XI-2" },
      { nis: "8459", name: "MUHAMMAD SEPTIAN FALAH RAMADHAN", absen: 25, kelas: "XI-2" },
      { nis: "8474", name: "NASWA LAILY QUTROTUL AINI", absen: 26, kelas: "XI-2" },
      { nis: "8475", name: "NATHANIELA RAIHANAH SETYAWAN", absen: 27, kelas: "XI-2" },
      { nis: "8578", name: "NAURAH YUDITA RAMADHANTI WIBOWO", absen: 28, kelas: "XI-2" },
      { nis: "8479", name: "NAYLA RASYA MAHIRA", absen: 29, kelas: "XI-2" },
      { nis: "8490", name: "NUR AINI", absen: 30, kelas: "XI-2" },
      { nis: "8491", name: "NUR FADILAH", absen: 31, kelas: "XI-2" },
      { nis: "8523", name: "RIZAL AZAM MUZAKI", absen: 32, kelas: "XI-2" },
      { nis: "8538", name: "SYABILA AULIA AZ-ZAHRA", absen: 33, kelas: "XI-2" },
      { nis: "8540", name: "SYIFA FAUZIYAH", absen: 34, kelas: "XI-2" },
      { nis: "8542", name: "TAZKIA VELITA ISTIQFARA", absen: 35, kelas: "XI-2" },
      { nis: "8561", name: "ZAHRATU SYIFA'", absen: 36, kelas: "XI-2" },
      
      // Kelas XI-3
      { nis: "8255", name: "ABIFAEYZA MUHAMMAD DYAURRAHMAN", absen: 1, kelas: "XI-3" },
      { nis: "8257", name: "ABIYYU NAUFAL ZAKY ASNAR", absen: 2, kelas: "XI-3" },
      { nis: "8273", name: "AISYAH ZAHIRA", absen: 3, kelas: "XI-3" },
      { nis: "8566", name: "ALDO VANTINALDO", absen: 4, kelas: "XI-3" },
      { nis: "8290", name: "ANANTA PRATAMA", absen: 5, kelas: "XI-3" },
      { nis: "8296", name: "ANISAH PRATIWI", absen: 6, kelas: "XI-3" },
      { nis: "8315", name: "BACHRALFRIDHO REYSHADIN ILMAN", absen: 7, kelas: "XI-3" },
      { nis: "8317", name: "BENI RAIHAN ADRIANSYAH", absen: 8, kelas: "XI-3" },
      { nis: "8338", name: "DEA KAHAYA AISHAWA", absen: 9, kelas: "XI-3" },
      { nis: "8346", name: "DIRGAHAYU RISKA RAMADANI", absen: 10, kelas: "XI-3" },
      { nis: "8365", name: "FAWWAZKA FALAJ WAHANDY", absen: 11, kelas: "XI-3" },
      { nis: "8374", name: "GALUH AVRIL DINDA ZASKIA", absen: 12, kelas: "XI-3" },
      { nis: "8387", name: "JOSEPH KENZIE SURYA WIJAYA", absen: 13, kelas: "XI-3" },
      { nis: "8404", name: "LIVINA MARIA ASHRAEL", absen: 14, kelas: "XI-3" },
      { nis: "8406", name: "M. AHNAF RAMADHANI", absen: 15, kelas: "XI-3" },
      { nis: "8433", name: "MOHAMMAD ADAM RAYLIANSYAH", absen: 16, kelas: "XI-3" },
      { nis: "8439", name: "MUHAMMAD ALDO RIZQIANSYAH", absen: 17, kelas: "XI-3" },
      { nis: "8450", name: "MUHAMMAD HENDRIK.A.P", absen: 18, kelas: "XI-3" },
      { nis: "8571", name: "MUHAMMAD IZZULIL HAQ", absen: 19, kelas: "XI-3" },
      { nis: "8458", name: "MUHAMMAD SATRIA MAULANA", absen: 20, kelas: "XI-3" },
      { nis: "8461", name: "MUHAMMAD SYAUQIL JINAN", absen: 21, kelas: "XI-3" },
      { nis: "8462", name: "MUHAMMAD WAHYU AL AKBAR", absen: 22, kelas: "XI-3" },
      { nis: "8464", name: "MUKHAMMAD RIZQI YAHYA", absen: 23, kelas: "XI-3" },
      { nis: "8476", name: "NAVISYA AURA MADA", absen: 24, kelas: "XI-3" },
      { nis: "8483", name: "NESSA ACHDIA MAGDALENA TUNGGADEWI", absen: 25, kelas: "XI-3" },
      { nis: "8573", name: "OCTAVIAN AMRULLAH", absen: 26, kelas: "XI-3" },
      { nis: "8513", name: "REIVALDIANO BINTANG MAHARDIKA", absen: 27, kelas: "XI-3" },
      { nis: "8516", name: "REVANO ARDIANSA PUTRA RAMADANI", absen: 28, kelas: "XI-3" },
      { nis: "8519", name: "RIFQI ATHALLAH SYAH", absen: 29, kelas: "XI-3" },
      { nis: "8522", name: "RIZA AKBAR ALMUQSITH", absen: 30, kelas: "XI-3" },
      { nis: "8524", name: "RIZKI ANDI ABDILLAH", absen: 31, kelas: "XI-3" },
      { nis: "8530", name: "SALSA BIEANKA FEBITAMA", absen: 32, kelas: "XI-3" },
      { nis: "8544", name: "TIARA VIONA VIRDAUS", absen: 33, kelas: "XI-3" },
      { nis: "8559", name: "YOSSI AMRU AT-TAUFIK", absen: 34, kelas: "XI-3" },
      { nis: "8562", name: "ZALFA NAIDIA NATASYA", absen: 35, kelas: "XI-3" },
      { nis: "8576", name: "ZASKIA FAIDA AZMI", absen: 36, kelas: "XI-3" },
      
      // Kelas XI-4
      { nis: "8258", name: "ACHMAD FAUZAN DWI GHAZALAH", absen: 1, kelas: "XI-4" },
      { nis: "8262", name: "ADINDA LAILATUZ ZUHRO", absen: 2, kelas: "XI-4" },
      { nis: "8268", name: "AHMAD ELMAN NAFI GUNARTO", absen: 3, kelas: "XI-4" },
      { nis: "8292", name: "ANGGA RIZKY PUTRA SETIAWAN", absen: 4, kelas: "XI-4" },
      { nis: "8301", name: "ARKA DAEGAL ATMA JAYA", absen: 5, kelas: "XI-4" },
      { nis: "8313", name: "AZIZ AHMAD MUDHAKAR", absen: 6, kelas: "XI-4" },
      { nis: "8314", name: "AZLAN RIZQI FEBRIANSYAH", absen: 7, kelas: "XI-4" },
      { nis: "8319", name: "BIANCHA VALENCIA ARIFIZANTY.P", absen: 8, kelas: "XI-4" },
      { nis: "8325", name: "CATRIN AYU MAHESYA", absen: 9, kelas: "XI-4" },
      { nis: "8326", name: "CHALLYSTA ZABANIYAH HOSHI SUSISCO", absen: 10, kelas: "XI-4" },
      { nis: "8327", name: "CHAREN VERONICA KUSUMA", absen: 11, kelas: "XI-4" },
      { nis: "8334", name: "DAHANA SAIKATZU ALBARIZY", absen: 12, kelas: "XI-4" },
      { nis: "8337", name: "DAVIN DWI DARMA", absen: 13, kelas: "XI-4" },
      { nis: "8341", name: "DEVANDIO RIDHO AL KHAFIDZ", absen: 14, kelas: "XI-4" },
      { nis: "8352", name: "ELFITRI SUGI PRIHATI", absen: 15, kelas: "XI-4" },
      { nis: "8381", name: "ISLAUKHA NUZRILIA", absen: 16, kelas: "XI-4" },
      { nis: "8407", name: "M. ABYAZ MAULIDI AL BALAWI", absen: 17, kelas: "XI-4" },
      { nis: "8426", name: "MOCHAMAD NURIL MAHMUDI AL TAZAM BILLAH", absen: 18, kelas: "XI-4" },
      { nis: "8429", name: "MOCHAMMAD IBNU AHLUL A'FA", absen: 19, kelas: "XI-4" },
      { nis: "8435", name: "MUHAMAD SYIAM SEPTIAN SYAH", absen: 20, kelas: "XI-4" },
      { nis: "8444", name: "MUHAMMAD FACHRI AR RASYID", absen: 21, kelas: "XI-4" },
      { nis: "8447", name: "MUHAMMAD FATHIR AFZA ANWAR", absen: 22, kelas: "XI-4" },
      { nis: "8452", name: "MUHAMMAD IRFAN", absen: 23, kelas: "XI-4" },
      { nis: "8455", name: "MUHAMMAD RAGAN ENGGRIYANG", absen: 24, kelas: "XI-4" },
      { nis: "8456", name: "MUHAMMAD RIFKY ARIFUDIN", absen: 25, kelas: "XI-4" },
      { nis: "8471", name: "NAJWA ANINDYA BILQIS RIZKIYUDIN", absen: 26, kelas: "XI-4" },
      { nis: "8477", name: "NAYAKA MAULANA AZKA SYARIF", absen: 27, kelas: "XI-4" },
      { nis: "8485", name: "NIKMA FATIHAH OCEAN HANANI", absen: 28, kelas: "XI-4" },
      { nis: "8493", name: "NURUS SA'IIDATUL HAQIQI", absen: 29, kelas: "XI-4" },
      { nis: "8502", name: "RAFAEL ANGGORO", absen: 30, kelas: "XI-4" },
      { nis: "8505", name: "RAHARDIAN PUTRA RAYA ALBANI", absen: 31, kelas: "XI-4" },
      { nis: "8509", name: "RASYA ISLAMI HEPPY PRATAMA", absen: 32, kelas: "XI-4" },
      { nis: "8517", name: "REZA TANGGUH SAGARA", absen: 33, kelas: "XI-4" },
      { nis: "8534", name: "SEVILLA MAHARANI", absen: 34, kelas: "XI-4" },
      { nis: "8548", name: "VANIA EKA AMANDA PUTRI", absen: 35, kelas: "XI-4" },
      { nis: "8553", name: "WHISNU ADI PRASETYO", absen: 36, kelas: "XI-4" },
      
      // Kelas XI-5
      { nis: "8267", name: "AHMAD DAFFA WIJOYO", absen: 1, kelas: "XI-5" },
      { nis: "8277", name: "ALFA SALMA FARIKHA", absen: 2, kelas: "XI-5" },
      { nis: "8282", name: "ALIF SETIAWAN", absen: 3, kelas: "XI-5" },
      { nis: "8289", name: "ANA FITRIATUL WAKHIDAH", absen: 4, kelas: "XI-5" },
      { nis: "8308", name: "AURA SINTA MARGARETA", absen: 5, kelas: "XI-5" },
      { nis: "8312", name: "AZINDA LINTANG ANA AZ-ZAHRA", absen: 6, kelas: "XI-5" },
      { nis: "8332", name: "CITRA SOFIA RAMADANI", absen: 7, kelas: "XI-5" },
      { nis: "8569", name: "DAFFA AMRULLOH UTOMO", absen: 8, kelas: "XI-5" },
      { nis: "8335", name: "DANIS RAYHAN NUR ABIDIN", absen: 9, kelas: "XI-5" },
      { nis: "8348", name: "DONI DWI HANDIKA", absen: 10, kelas: "XI-5" },
      { nis: "8351", name: "EKA LENI OKTAVIANA", absen: 11, kelas: "XI-5" },
      { nis: "8359", name: "FAIRA RIZKA ELYSIA", absen: 12, kelas: "XI-5" },
      { nis: "8361", name: "FAKHRY DWI JULIANMA", absen: 13, kelas: "XI-5" },
      { nis: "8367", name: "FERA ANGGRAINI", absen: 14, kelas: "XI-5" },
      { nis: "8370", name: "FIOLA RAMADHANIE SHINDU", absen: 15, kelas: "XI-5" },
      { nis: "8379", name: "IMELDA KHARISMA PUTRI", absen: 16, kelas: "XI-5" },
      { nis: "8396", name: "KHANZA CALLISTA AL AZMI", absen: 17, kelas: "XI-5" },
      { nis: "8398", name: "KIRANI DZIL IZZATI", absen: 18, kelas: "XI-5" },
      { nis: "8418", name: "MAWADDAH FATIMATUZZAHRA", absen: 19, kelas: "XI-5" },
      { nis: "8420", name: "MEI SHELLA YOLANDA PUTRI", absen: 20, kelas: "XI-5" },
      { nis: "8424", name: "MITA AULIA", absen: 21, kelas: "XI-5" },
      { nis: "8427", name: "MOCHAMAD TITO PRASETYO", absen: 22, kelas: "XI-5" },
      { nis: "8445", name: "MUHAMMAD FAHRI AZHAR", absen: 23, kelas: "XI-5" },
      { nis: "8451", name: "MUHAMMAD ILHAM FIRMANSYAH", absen: 24, kelas: "XI-5" },
      { nis: "8466", name: "NABILA AYU SALMA", absen: 25, kelas: "XI-5" },
      { nis: "8467", name: "NADIA IMRO'ATUL MUFIDA", absen: 26, kelas: "XI-5" },
      { nis: "8478", name: "NAYLA IQLIMATUL KHAMIDA", absen: 27, kelas: "XI-5" },
      { nis: "8480", name: "NAZILA AZWA SAVIRA", absen: 28, kelas: "XI-5" },
      { nis: "8481", name: "NELY ENJELITA", absen: 29, kelas: "XI-5" },
      { nis: "8487", name: "NIROH NUR AL FINA", absen: 30, kelas: "XI-5" },
      { nis: "8488", name: "NOVIA MAYSAROH", absen: 31, kelas: "XI-5" },
      { nis: "8497", name: "PUTRI AYU MARDIYAH", absen: 32, kelas: "XI-5" },
      { nis: "8503", name: "RAFAEL AURELIO WIDYA PUTRA", absen: 33, kelas: "XI-5" },
      { nis: "8511", name: "REHAN ARYA PRATAMA", absen: 34, kelas: "XI-5" },
      { nis: "8531", name: "SALWA KAYLA PUTRI", absen: 35, kelas: "XI-5" },
      { nis: "8557", name: "YASMIN KHOTFI ROSIDA MUKTI", absen: 36, kelas: "XI-5" }
    ];
    
    function findStudentByNIS(nis) {
      return studentsDatabase.find(student => student.nis === nis);
    }

    const dataHandler = {
      onDataChanged(data) {
        attendanceRecords = data;
        renderAttendanceList();
        updateStats();
      }
    };

    async function onConfigChange(config) {
      const customFont = config.font_family || defaultConfig.font_family;
      const baseFontStack = 'system-ui, -apple-system, sans-serif';
      const baseSize = config.font_size || defaultConfig.font_size;
      
      document.body.style.backgroundColor = config.background_color || defaultConfig.background_color;
      document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;
      
      const app = document.getElementById('app');
      app.style.backgroundColor = config.background_color || defaultConfig.background_color;
      
      const header = document.getElementById('app-header');
      if (header) {
        header.style.background = `linear-gradient(135deg, ${config.primary_action_color || defaultConfig.primary_action_color} 0%, ${adjustColor(config.primary_action_color || defaultConfig.primary_action_color, -20)} 100%)`;
        header.style.color = '#ffffff';
      }
      
      const title = document.getElementById('app-title');
      if (title) {
        title.textContent = config.app_title || defaultConfig.app_title;
        title.style.fontSize = `${baseSize * 1.75}px`;
        title.style.fontFamily = `${customFont}, ${baseFontStack}`;
      }
      
      const subtitle = document.getElementById('subtitle');
      if (subtitle) {
        subtitle.textContent = `Presensi Siswa ${config.school_name || defaultConfig.school_name}`;
        subtitle.style.fontSize = `${baseSize * 1.125}px`;
        subtitle.style.fontFamily = `${customFont}, ${baseFontStack}`;
      }
      
      const clockDisplay = document.getElementById('clock-display');
      if (clockDisplay) {
        clockDisplay.style.fontSize = `${baseSize * 1.875}px`;
        clockDisplay.style.fontFamily = `${customFont}, ${baseFontStack}`;
      }
      
      const instruction = document.getElementById('instruction-text');
      if (instruction) {
        instruction.textContent = config.instruction_text || defaultConfig.instruction_text;
        instruction.style.fontSize = `${baseSize}px`;
        instruction.style.color = config.text_color || defaultConfig.text_color;
        instruction.style.fontFamily = `${customFont}, ${baseFontStack}`;
      }
      
      const scanBtn = document.getElementById('scan-btn');
      if (scanBtn) {
        scanBtn.style.backgroundColor = config.primary_action_color || defaultConfig.primary_action_color;
        scanBtn.style.fontSize = `${baseSize}px`;
        scanBtn.style.fontFamily = `${customFont}, ${baseFontStack}`;
      }
      
      const manualBtn = document.getElementById('manual-btn');
      if (manualBtn) {
        manualBtn.style.backgroundColor = config.secondary_action_color || defaultConfig.secondary_action_color;
        manualBtn.style.fontSize = `${baseSize}px`;
        manualBtn.style.fontFamily = `${customFont}, ${baseFontStack}`;
      }
      
      const videoContainer = document.getElementById('video-container');
      if (videoContainer) {
        videoContainer.style.backgroundColor = config.surface_color || defaultConfig.surface_color;
      }
      
      const statsCards = document.querySelectorAll('.stat-card');
      statsCards.forEach(card => {
        card.style.backgroundColor = config.surface_color || defaultConfig.surface_color;
        card.style.color = config.text_color || defaultConfig.text_color;
      });
      
      const statValues = document.querySelectorAll('.stat-value');
      statValues.forEach(value => {
        value.style.fontSize = `${baseSize * 2.25}px`;
        value.style.fontFamily = `${customFont}, ${baseFontStack}`;
      });
      
      const statLabels = document.querySelectorAll('.stat-label');
      statLabels.forEach(label => {
        label.style.fontSize = `${baseSize * 0.85}px`;
        label.style.fontFamily = `${customFont}, ${baseFontStack}`;
      });
      
      const sectionTitle = document.getElementById('section-title');
      if (sectionTitle) {
        sectionTitle.style.fontSize = `${baseSize * 1.25}px`;
        sectionTitle.style.color = config.text_color || defaultConfig.text_color;
        sectionTitle.style.fontFamily = `${customFont}, ${baseFontStack}`;
      }
      
      const recordItems = document.querySelectorAll('.record-item');
      recordItems.forEach(item => {
        item.style.backgroundColor = config.surface_color || defaultConfig.surface_color;
        item.style.fontSize = `${baseSize}px`;
        item.style.color = config.text_color || defaultConfig.text_color;
        item.style.fontFamily = `${customFont}, ${baseFontStack}`;
      });
      
      const deleteButtons = document.querySelectorAll('.delete-btn');
      deleteButtons.forEach(btn => {
        btn.style.color = config.secondary_action_color || defaultConfig.secondary_action_color;
      });
      
      const manualForm = document.getElementById('manual-form');
      if (manualForm) {
        manualForm.style.backgroundColor = config.surface_color || defaultConfig.surface_color;
      }
      
      const inputs = document.querySelectorAll('.input-field');
      inputs.forEach(input => {
        input.style.fontSize = `${baseSize}px`;
        input.style.fontFamily = `${customFont}, ${baseFontStack}`;
      });
      
      const labels = document.querySelectorAll('.form-label');
      labels.forEach(label => {
        label.style.fontSize = `${baseSize * 0.9}px`;
        label.style.color = config.text_color || defaultConfig.text_color;
        label.style.fontFamily = `${customFont}, ${baseFontStack}`;
      });
    }

    function adjustColor(color, percent) {
      const num = parseInt(color.replace("#",""), 16);
      const amt = Math.round(2.55 * percent);
      const R = (num >> 16) + amt;
      const G = (num >> 8 & 0x00FF) + amt;
      const B = (num & 0x0000FF) + amt;
      return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 +
        (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255))
        .toString(16).slice(1);
    }

    async function init() {
      const initResult = await window.dataSdk.init(dataHandler);
      if (!initResult.isOk) {
        console.error("Failed to initialize data SDK");
        return;
      }

      if (window.elementSdk) {
        window.elementSdk.init({
          defaultConfig,
          onConfigChange,
          mapToCapabilities: (config) => ({
            recolorables: [
              {
                get: () => config.background_color || defaultConfig.background_color,
                set: (value) => {
                  config.background_color = value;
                  window.elementSdk.setConfig({ background_color: value });
                }
              },
              {
                get: () => config.surface_color || defaultConfig.surface_color,
                set: (value) => {
                  config.surface_color = value;
                  window.elementSdk.setConfig({ surface_color: value });
                }
              },
              {
                get: () => config.text_color || defaultConfig.text_color,
                set: (value) => {
                  config.text_color = value;
                  window.elementSdk.setConfig({ text_color: value });
                }
              },
              {
                get: () => config.primary_action_color || defaultConfig.primary_action_color,
                set: (value) => {
                  config.primary_action_color = value;
                  window.elementSdk.setConfig({ primary_action_color: value });
                }
              },
              {
                get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
                set: (value) => {
                  config.secondary_action_color = value;
                  window.elementSdk.setConfig({ secondary_action_color: value });
                }
              }
            ],
            borderables: [],
            fontEditable: {
              get: () => config.font_family || defaultConfig.font_family,
              set: (value) => {
                config.font_family = value;
                window.elementSdk.setConfig({ font_family: value });
              }
            },
            fontSizeable: {
              get: () => config.font_size || defaultConfig.font_size,
              set: (value) => {
                config.font_size = value;
                window.elementSdk.setConfig({ font_size: value });
              }
            }
          }),
          mapToEditPanelValues: (config) => new Map([
            ["app_title", config.app_title || defaultConfig.app_title],
            ["school_name", config.school_name || defaultConfig.school_name],
            ["instruction_text", config.instruction_text || defaultConfig.instruction_text],
            ["late_time", config.late_time || defaultConfig.late_time]
          ])
        });
      }

      renderApp();
      onConfigChange(window.elementSdk?.config || defaultConfig);
      startClock();
    }

    function startClock() {
      function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        
        const clockDisplay = document.getElementById('clock-display');
        if (clockDisplay) {
          clockDisplay.textContent = `🕐 ${timeString}`;
        }
      }
      
      updateClock();
      setInterval(updateClock, 1000);
    }

    function renderApp() {
      const config = window.elementSdk?.config || defaultConfig;
      const app = document.getElementById('app');
      
      app.innerHTML = `
        <header id="app-header" class="p-6 shadow-2xl">
          <div class="max-w-4xl mx-auto">
            <h1 id="app-title" class="font-bold text-center drop-shadow-lg">${config.app_title || defaultConfig.app_title}</h1>
            <p id="subtitle" class="text-center mt-2 opacity-95 drop-shadow">Presensi Siswa ${config.school_name || defaultConfig.school_name}</p>
            <div id="clock-display" class="text-center mt-4 text-3xl font-bold drop-shadow-lg opacity-95"></div>
          </div>
        </header>
        
        <main class="flex-1 p-6 overflow-y-auto">
          <div class="max-w-4xl mx-auto">
            <div id="stats-container" class="grid grid-cols-3 gap-4 mb-6">
              <div class="stat-card p-5 rounded-2xl shadow-lg text-center border-2 border-opacity-20" style="border-color: currentColor;">
                <div id="total-count" class="stat-value font-bold">0</div>
                <div class="stat-label opacity-75 mt-2 font-medium">Total Presensi</div>
              </div>
              <div class="stat-card p-5 rounded-2xl shadow-lg text-center border-2 border-opacity-20" style="border-color: currentColor;">
                <div id="today-count" class="stat-value font-bold">0</div>
                <div class="stat-label opacity-75 mt-2 font-medium">Hari Ini</div>
              </div>
              <div class="stat-card p-5 rounded-2xl shadow-lg text-center border-2 border-opacity-20" style="border-color: currentColor;">
                <div id="late-count" class="stat-value font-bold text-red-600">0</div>
                <div class="stat-label opacity-75 mt-2 font-medium">Terlambat</div>
              </div>
            </div>
            
            <div id="scanner-section" class="mb-6">
              <div id="video-container" class="rounded-2xl shadow-2xl overflow-hidden mb-4 border-4 border-white" style="display: none;">
                <video id="video" class="w-full" autoplay playsinline></video>
                <canvas id="canvas" style="display: none;"></canvas>
              </div>
              
              <div class="text-center mb-4">
                <p id="instruction-text" class="mb-4 font-medium">${config.instruction_text || defaultConfig.instruction_text}</p>
                <div class="flex gap-3 justify-center flex-wrap">
                  <button id="scan-btn" class="px-8 py-4 text-white rounded-xl font-bold shadow-lg hover:opacity-90 transition-all transform hover:scale-105">
                    📷 Scan QR Code
                  </button>
                  <button id="manual-btn" class="px-8 py-4 text-white rounded-xl font-bold shadow-lg hover:opacity-90 transition-all transform hover:scale-105">
                    ✏️ Input Manual
                  </button>
                </div>
                <div id="scan-status" class="mt-4 text-sm font-semibold"></div>
              </div>
              
              <div id="manual-form" class="p-6 rounded-2xl shadow-lg mb-6" style="display: none;">
                <h3 class="font-bold text-lg mb-4">Input Presensi Manual</h3>
                <form id="manual-attendance-form">
                  <div class="mb-4">
                    <label for="manual-nis" class="form-label block mb-2 font-semibold">Nomor Induk Siswa (NIS)</label>
                    <input type="text" id="manual-nis" class="input-field w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2" placeholder="Masukkan NIS" required>
                    <div id="nis-hint" class="text-xs mt-1 opacity-60"></div>
                  </div>
                  <div id="student-info" class="mb-4 p-4 rounded-xl bg-blue-50 border-2 border-blue-200" style="display: none;">
                    <div class="font-bold text-blue-800 mb-1" id="info-name"></div>
                    <div class="text-sm text-blue-600">
                      <span id="info-absen"></span> • <span id="info-kelas"></span>
                    </div>
                  </div>
                  <div class="flex gap-3">
                    <button type="submit" id="submit-manual" class="flex-1 px-6 py-3 bg-green-500 text-white rounded-xl font-bold shadow-lg hover:bg-green-600 transition-colors">
                      ✓ Simpan Presensi
                    </button>
                    <button type="button" id="cancel-manual" class="px-6 py-3 bg-gray-400 text-white rounded-xl font-bold shadow-lg hover:bg-gray-500 transition-colors">
                      ✕ Batal
                    </button>
                  </div>
                </form>
                <div id="manual-status" class="mt-4 text-sm font-semibold"></div>
              </div>
            </div>
            
            <div id="attendance-section">
              <h2 id="section-title" class="font-bold mb-4 flex items-center gap-2">
                <span>📋</span> Daftar Presensi Hari Ini
              </h2>
              <div id="attendance-list"></div>
              <div id="empty-state" class="text-center py-16 opacity-50">
                <div class="text-5xl mb-3">📝</div>
                <div class="font-medium">Belum ada data presensi</div>
              </div>
            </div>
          </div>
        </main>
      `;
      
      document.getElementById('scan-btn').addEventListener('click', toggleScanner);
      document.getElementById('manual-btn').addEventListener('click', toggleManualForm);
      document.getElementById('manual-attendance-form').addEventListener('submit', submitManualAttendance);
      document.getElementById('cancel-manual').addEventListener('click', closeManualForm);
      document.getElementById('manual-nis').addEventListener('input', handleNISInput);
      renderAttendanceList();
      updateStats();
    }

    function handleNISInput(e) {
      const nis = e.target.value.trim();
      const studentInfo = document.getElementById('student-info');
      const nisHint = document.getElementById('nis-hint');
      
      if (nis.length > 0) {
        const student = findStudentByNIS(nis);
        if (student) {
          studentInfo.style.display = 'block';
          document.getElementById('info-name').textContent = student.name;
          document.getElementById('info-absen').textContent = `Absen: ${student.absen}`;
          document.getElementById('info-kelas').textContent = `Kelas: ${student.kelas}`;
          nisHint.textContent = '✓ Siswa ditemukan';
          nisHint.className = 'text-xs mt-1 text-green-600 font-semibold';
        } else {
          studentInfo.style.display = 'none';
          nisHint.textContent = '⚠️ NIS tidak ditemukan dalam database';
          nisHint.className = 'text-xs mt-1 text-orange-600 font-semibold';
        }
      } else {
        studentInfo.style.display = 'none';
        nisHint.textContent = '';
      }
    }

    function toggleManualForm() {
      const manualForm = document.getElementById('manual-form');
      const videoContainer = document.getElementById('video-container');
      
      if (isScanning) {
        stopScanner();
        const scanBtn = document.getElementById('scan-btn');
        scanBtn.textContent = '📷 Scan QR Code';
        videoContainer.style.display = 'none';
      }
      
      if (manualForm.style.display === 'none') {
        manualForm.style.display = 'block';
        manualForm.classList.add('fade-in');
        document.getElementById('manual-nis').focus();
      } else {
        manualForm.style.display = 'none';
      }
    }

    function closeManualForm() {
      document.getElementById('manual-form').style.display = 'none';
      document.getElementById('manual-attendance-form').reset();
      document.getElementById('manual-status').textContent = '';
      document.getElementById('student-info').style.display = 'none';
      document.getElementById('nis-hint').textContent = '';
    }

    async function submitManualAttendance(e) {
      e.preventDefault();
      
      const config = window.elementSdk?.config || defaultConfig;
      const nis = document.getElementById('manual-nis').value.trim();
      const submitBtn = document.getElementById('submit-manual');
      const manualStatus = document.getElementById('manual-status');
      
      if (!nis) {
        manualStatus.textContent = '❌ Mohon masukkan NIS';
        manualStatus.className = 'mt-4 text-sm font-semibold text-red-600';
        return;
      }
      
      const student = findStudentByNIS(nis);
      if (!student) {
        manualStatus.textContent = '❌ NIS tidak ditemukan dalam database';
        manualStatus.className = 'mt-4 text-sm font-semibold text-red-600';
        return;
      }
      
      const name = student.name;
      
      if (attendanceRecords.length >= 999) {
        manualStatus.textContent = '⚠️ Batas maksimum 999 data tercapai';
        manualStatus.className = 'mt-4 text-sm font-semibold text-orange-600';
        return;
      }
      
      submitBtn.disabled = true;
      submitBtn.textContent = '⏳ Menyimpan...';
      manualStatus.textContent = '';
      
      const now = new Date();
      const isLate = checkIfLate(now, config.late_time || defaultConfig.late_time);
      
      const result = await window.dataSdk.create({
        student_name: name,
        student_id: nis,
        absen_number: student.absen,
        kelas: student.kelas,
        timestamp: now.toISOString(),
        status: isLate ? 'Terlambat' : 'Hadir',
        is_late: isLate
      });
      
      if (result.isOk) {
        manualStatus.textContent = `✅ ${name} berhasil presensi!`;
        manualStatus.className = 'mt-4 text-sm font-semibold text-green-600';
        document.getElementById('manual-attendance-form').reset();
        
        setTimeout(() => {
          closeManualForm();
        }, 2000);
      } else {
        manualStatus.textContent = '❌ Gagal menyimpan data';
        manualStatus.className = 'mt-4 text-sm font-semibold text-red-600';
      }
      
      submitBtn.disabled = false;
      submitBtn.textContent = '✓ Simpan Presensi';
    }

    async function toggleScanner() {
      const config = window.elementSdk?.config || defaultConfig;
      const scanBtn = document.getElementById('scan-btn');
      const videoContainer = document.getElementById('video-container');
      const scanStatus = document.getElementById('scan-status');
      const manualForm = document.getElementById('manual-form');
      
      if (manualForm.style.display !== 'none') {
        closeManualForm();
      }
      
      if (isScanning) {
        stopScanner();
        scanBtn.textContent = '📷 Scan QR Code';
        scanBtn.style.backgroundColor = config.primary_action_color || defaultConfig.primary_action_color;
        videoContainer.style.display = 'none';
        scanStatus.textContent = '';
        scanStatus.className = 'mt-4 text-sm font-semibold';
      } else {
        try {
          scanBtn.disabled = true;
          scanBtn.textContent = '⏳ Membuka kamera...';
          
          const video = document.getElementById('video');
          videoStream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: 'environment' } 
          });
          video.srcObject = videoStream;
          
          videoContainer.style.display = 'block';
          isScanning = true;
          scanBtn.textContent = '⏹️ Hentikan Scan';
          scanBtn.style.backgroundColor = '#ef4444';
          scanBtn.disabled = false;
          
          scanStatus.textContent = '📸 Scanning...';
          scanStatus.className = 'mt-4 text-sm font-semibold scanning';
          
          requestAnimationFrame(scanQRCode);
        } catch (err) {
          scanBtn.disabled = false;
          scanBtn.textContent = '📷 Scan QR Code';
          scanStatus.textContent = '❌ Tidak dapat mengakses kamera';
          scanStatus.className = 'mt-4 text-sm font-semibold text-red-600';
        }
      }
    }

    function stopScanner() {
      isScanning = false;
      if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
        videoStream = null;
      }
    }

    function scanQRCode() {
      if (!isScanning) return;
      
      const video = document.getElementById('video');
      const canvas = document.getElementById('canvas');
      const scanStatus = document.getElementById('scan-status');
      
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);
        
        if (code) {
          processQRCode(code.data);
          return;
        }
      }
      
      requestAnimationFrame(scanQRCode);
    }

    function checkIfLate(timestamp, lateTimeStr) {
      const date = new Date(timestamp);
      const [lateHour, lateMinute] = lateTimeStr.split(':').map(Number);
      
      const attendanceTime = date.getHours() * 60 + date.getMinutes();
      const lateTime = lateHour * 60 + lateMinute;
      
      // Terlambat jika waktu presensi >= jam terlambat
      return attendanceTime >= lateTime;
    }

    async function processQRCode(data) {
      const config = window.elementSdk?.config || defaultConfig;
      const scanStatus = document.getElementById('scan-status');
      
      try {
        const qrData = JSON.parse(data);
        
        if (!qrData.student_id) {
          scanStatus.textContent = '❌ Format QR code tidak valid';
          scanStatus.className = 'mt-4 text-sm font-semibold text-red-600';
          setTimeout(() => {
            if (isScanning) {
              scanStatus.textContent = '📸 Scanning...';
              scanStatus.className = 'mt-4 text-sm font-semibold scanning';
              requestAnimationFrame(scanQRCode);
            }
          }, 2000);
          return;
        }
        
        if (attendanceRecords.length >= 999) {
          scanStatus.textContent = '⚠️ Batas maksimum 999 data tercapai';
          scanStatus.className = 'mt-4 text-sm font-semibold text-orange-600';
          stopScanner();
          document.getElementById('scan-btn').textContent = '📷 Scan QR Code';
          document.getElementById('video-container').style.display = 'none';
          return;
        }
        
        scanStatus.textContent = '⏳ Menyimpan data...';
        scanStatus.className = 'mt-4 text-sm font-semibold';
        
        const now = new Date();
        const isLate = checkIfLate(now, config.late_time || defaultConfig.late_time);
        
        // Cari data siswa dari database
        const student = findStudentByNIS(qrData.student_id);
        const studentName = student ? student.name : qrData.student_name || 'Unknown';
        const absenNumber = student ? student.absen : null;
        const kelas = student ? student.kelas : null;
        
        const result = await window.dataSdk.create({
          student_name: studentName,
          student_id: qrData.student_id,
          absen_number: absenNumber,
          kelas: kelas,
          timestamp: now.toISOString(),
          status: isLate ? 'Terlambat' : 'Hadir',
          is_late: isLate
        });
        
        if (result.isOk) {
          if (isLate) {
            scanStatus.textContent = `⚠️ ${studentName} - TERLAMBAT!`;
            scanStatus.className = 'mt-4 text-sm font-semibold text-red-600';
          } else {
            scanStatus.textContent = `✅ ${studentName} berhasil presensi!`;
            scanStatus.className = 'mt-4 text-sm font-semibold text-green-600';
          }
          
          setTimeout(() => {
            if (isScanning) {
              scanStatus.textContent = '📸 Scanning...';
              scanStatus.className = 'mt-4 text-sm font-semibold scanning';
              requestAnimationFrame(scanQRCode);
            }
          }, 2000);
        } else {
          scanStatus.textContent = '❌ Gagal menyimpan data';
          scanStatus.className = 'mt-4 text-sm font-semibold text-red-600';
          setTimeout(() => {
            if (isScanning) {
              scanStatus.textContent = '📸 Scanning...';
              scanStatus.className = 'mt-4 text-sm font-semibold scanning';
              requestAnimationFrame(scanQRCode);
            }
          }, 2000);
        }
      } catch (err) {
        scanStatus.textContent = '❌ Format QR code tidak valid';
        scanStatus.className = 'mt-4 text-sm font-semibold text-red-600';
        setTimeout(() => {
          if (isScanning) {
            scanStatus.textContent = '📸 Scanning...';
            scanStatus.className = 'mt-4 text-sm font-semibold scanning';
            requestAnimationFrame(scanQRCode);
          }
        }, 2000);
      }
    }

    function renderAttendanceList() {
      const config = window.elementSdk?.config || defaultConfig;
      const list = document.getElementById('attendance-list');
      const emptyState = document.getElementById('empty-state');
      
      const today = new Date().toDateString();
      const todayRecords = attendanceRecords.filter(record => {
        const recordDate = new Date(record.timestamp).toDateString();
        return recordDate === today;
      });
      
      if (todayRecords.length === 0) {
        list.innerHTML = '';
        emptyState.style.display = 'block';
        return;
      }
      
      emptyState.style.display = 'none';
      
      const sortedRecords = [...todayRecords].sort((a, b) => 
        new Date(b.timestamp) - new Date(a.timestamp)
      );
      
      const existingItems = new Map(
        [...list.children].map(el => [el.dataset.recordId, el])
      );
      
      sortedRecords.forEach(record => {
        const recordId = record.__backendId;
        if (existingItems.has(recordId)) {
          const element = existingItems.get(recordId);
          updateRecordElement(element, record);
          existingItems.delete(recordId);
        } else {
          list.insertBefore(createRecordElement(record), list.firstChild);
        }
      });
      
      existingItems.forEach(el => el.remove());
    }

    function createRecordElement(record) {
      const config = window.elementSdk?.config || defaultConfig;
      const div = document.createElement('div');
      div.className = 'record-item attendance-item p-5 rounded-2xl shadow-lg mb-3 flex justify-between items-center border-l-4';
      div.dataset.recordId = record.__backendId;
      div.style.backgroundColor = config.surface_color || defaultConfig.surface_color;
      div.style.color = config.text_color || defaultConfig.text_color;
      div.style.borderLeftColor = record.is_late ? '#ef4444' : '#10b981';
      
      const date = new Date(record.timestamp);
      const timeStr = date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
      const dateStr = date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
      
      const nameColor = record.is_late ? 'text-red-600' : '';
      const badge = record.is_late ? '<span class="late-badge text-white text-xs px-3 py-1 rounded-full font-bold ml-2">⚠️ TERLAMBAT</span>' : '';
      
      div.innerHTML = `
        <div class="flex-1">
          <div class="font-bold text-lg ${nameColor} flex items-center">
            ${record.student_name}
            ${badge}
          </div>
          <div class="text-sm opacity-75 mt-1">📝 NIS: ${record.student_id} • Absen: ${record.absen_number || '-'} • Kelas: ${record.kelas || '-'}</div>
          <div class="text-xs opacity-60 mt-1">🕐 ${timeStr} • ${dateStr}</div>
        </div>
        <button class="delete-btn p-3 hover:opacity-70 transition-all transform hover:scale-110" data-record-id="${record.__backendId}">
          🗑️
        </button>
      `;
      
      const deleteBtn = div.querySelector('.delete-btn');
      deleteBtn.style.color = config.secondary_action_color || defaultConfig.secondary_action_color;
      deleteBtn.addEventListener('click', () => showDeleteConfirmation(record, deleteBtn));
      
      return div;
    }

    function updateRecordElement(element, record) {
      const config = window.elementSdk?.config || defaultConfig;
      element.style.backgroundColor = config.surface_color || defaultConfig.surface_color;
      element.style.color = config.text_color || defaultConfig.text_color;
      element.style.borderLeftColor = record.is_late ? '#ef4444' : '#10b981';
      
      const deleteBtn = element.querySelector('.delete-btn');
      if (deleteBtn) {
        deleteBtn.style.color = config.secondary_action_color || defaultConfig.secondary_action_color;
      }
    }

    function showDeleteConfirmation(record, button) {
      const originalText = button.textContent;
      button.textContent = '✓ Hapus?';
      button.style.fontWeight = 'bold';
      button.style.transform = 'scale(1.1)';
      
      const confirmHandler = async () => {
        button.textContent = '⏳';
        button.disabled = true;
        
        const result = await window.dataSdk.delete(record);
        
        if (!result.isOk) {
          button.textContent = '❌ Gagal';
          setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            button.style.fontWeight = 'normal';
            button.style.transform = 'scale(1)';
          }, 2000);
        }
      };
      
      const cancelHandler = () => {
        button.textContent = originalText;
        button.style.fontWeight = 'normal';
        button.style.transform = 'scale(1)';
        button.removeEventListener('click', confirmHandler);
        button.addEventListener('click', () => showDeleteConfirmation(record, button));
      };
      
      button.removeEventListener('click', cancelHandler);
      button.addEventListener('click', confirmHandler, { once: true });
      
      setTimeout(() => {
        if (button.textContent === '✓ Hapus?') {
          cancelHandler();
        }
      }, 3000);
    }

    function updateStats() {
      const totalCount = document.getElementById('total-count');
      const todayCount = document.getElementById('today-count');
      const lateCount = document.getElementById('late-count');
      
      totalCount.textContent = attendanceRecords.length;
      
      const today = new Date().toDateString();
      const todayRecords = attendanceRecords.filter(record => {
        const recordDate = new Date(record.timestamp).toDateString();
        return recordDate === today;
      });
      todayCount.textContent = todayRecords.length;
      
      const lateRecords = todayRecords.filter(record => record.is_late);
      lateCount.textContent = lateRecords.length;
    }

    init();
  