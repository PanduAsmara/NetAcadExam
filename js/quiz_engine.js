// CCNA Ethernet Concepts - Quiz Engine & State Management
// Mendukung Jawaban Acak (Shuffled Options & Questions), Mode Belajar & Ujian, Pembahasan Per-Opsi

class QuizEngine {
  constructor(questions) {
    this.allQuestions = questions;
    this.activeQuestions = [];
    this.currentIndex = 0;
    this.userAnswers = {}; // { questionId: [selectedKey, ...] }
    this.matchingAnswers = {}; // { questionId: { situationId: media } }
    this.shuffledOptionsMap = {}; // { questionId: [shuffledOptions] }
    const savedBookmarks = (typeof localStorage !== 'undefined') ? JSON.parse(localStorage.getItem('ccna_bookmarks') || '[]') : [];
    this.bookmarks = new Set(savedBookmarks);
    this.examTimer = null;
    this.timeRemaining = 0; // seconds
    this.mode = 'study'; // 'study' | 'exam'
    this.filterModule = 'all'; // 'all' | 4 | 6 | 7
    this.isExamSubmitted = false;
    this.examStartTime = null;
  }

  // Fisher-Yates Shuffle
  static shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Inisialisasi kuis dengan pengacakan
  initQuiz(config = {}) {
    const {
      module = 'all',
      mode = 'study',
      shuffleQuestions = true,
      questionCount = 0,
      timeLimitMinutes = 45
    } = config;

    this.mode = mode;
    this.filterModule = module;
    this.isExamSubmitted = false;
    this.userAnswers = {};
    this.matchingAnswers = {};
    this.shuffledOptionsMap = {};

    // Filter berdasarkan modul
    let filtered = [...this.allQuestions];
    if (module !== 'all') {
      const modNum = parseInt(module, 10);
      filtered = filtered.filter(q => q.moduleId === modNum);
    }

    // Acak urutan soal jika diinginkan
    if (shuffleQuestions) {
      filtered = QuizEngine.shuffle(filtered);
    }

    // Potong jumlah soal jika dibatasi
    if (questionCount > 0 && questionCount < filtered.length) {
      filtered = filtered.slice(0, questionCount);
    }

    this.activeQuestions = filtered;
    this.currentIndex = 0;

    // Acak pilihan jawaban untuk SETIAP soal ("jawaban yang acak")
    this.activeQuestions.forEach(q => {
      // Shuffled options with new keys (A, B, C, D...)
      const shuffled = QuizEngine.shuffle(q.options).map((opt, idx) => ({
        ...opt,
        shuffledKey: String.fromCharCode(65 + idx)
      }));
      this.shuffledOptionsMap[q.id] = shuffled;
    });

    // Inisialisasi Timer jika Mode Ujian
    if (this.mode === 'exam') {
      this.timeRemaining = timeLimitMinutes * 60;
      this.examStartTime = Date.now();
      this.startTimer();
    } else {
      this.stopTimer();
    }

    return this.activeQuestions;
  }

  getCurrentQuestion() {
    if (!this.activeQuestions.length) return null;
    return this.activeQuestions[this.currentIndex];
  }

  getCurrentOptions() {
    const q = this.getCurrentQuestion();
    if (!q) return [];
    return this.shuffledOptionsMap[q.id] || q.options;
  }

  goToQuestion(index) {
    if (index >= 0 && index < this.activeQuestions.length) {
      this.currentIndex = index;
      return true;
    }
    return false;
  }

  nextQuestion() {
    return this.goToQuestion(this.currentIndex + 1);
  }

  prevQuestion() {
    return this.goToQuestion(this.currentIndex - 1);
  }

  // Pilih jawaban
  selectAnswer(qId, key) {
    const q = this.activeQuestions.find(item => item.id === qId);
    if (!q) return;

    if (q.type === 'multiple') {
      if (!this.userAnswers[qId]) this.userAnswers[qId] = [];
      const idx = this.userAnswers[qId].indexOf(key);
      if (idx > -1) {
        this.userAnswers[qId].splice(idx, 1);
      } else {
        this.userAnswers[qId].push(key);
      }
    } else {
      // Single choice
      this.userAnswers[qId] = [key];
    }
  }

  // Pilih jawaban untuk matching question
  setMatchingAnswer(qId, situationId, selectedMedia) {
    if (!this.matchingAnswers) this.matchingAnswers = {};
    if (!this.matchingAnswers[qId]) this.matchingAnswers[qId] = {};
    this.matchingAnswers[qId][situationId] = selectedMedia;

    const q = this.activeQuestions.find(item => item.id === qId);
    const totalSituations = (q && q.matchingData) ? q.matchingData.situations.length : 6;
    const answeredCount = Object.keys(this.matchingAnswers[qId]).filter(k => this.matchingAnswers[qId][k]).length;
    if (answeredCount === totalSituations) {
      this.userAnswers[qId] = ['MATCHED'];
    } else {
      this.userAnswers[qId] = answeredCount > 0 ? ['PARTIAL'] : [];
    }
  }

  getMatchingAnswers(qId) {
    if (!this.matchingAnswers) return {};
    return this.matchingAnswers[qId] || {};
  }

  getSelectedKeys(qId) {
    return this.userAnswers[qId] || [];
  }

  // Cek apakah jawaban soal ini benar
  isQuestionCorrect(qId) {
    const q = this.activeQuestions.find(item => item.id === qId);
    if (!q) return false;

    // Matching Question logic
    if (q.type === 'matching' && q.matchingData) {
      const userMatches = this.matchingAnswers ? this.matchingAnswers[qId] : null;
      if (!userMatches) return false;
      return q.matchingData.situations.every(s => userMatches[s.id] === s.correctMedia);
    }

    const opts = this.shuffledOptionsMap[qId] || q.options;
    const selected = this.userAnswers[qId] || [];

    const correctKeys = opts.filter(o => o.isCorrect).map(o => o.shuffledKey);

    if (selected.length !== correctKeys.length) return false;
    return selected.every(k => correctKeys.includes(k));
  }

  // Bookmark / Favorite
  toggleBookmark(qId) {
    if (this.bookmarks.has(qId)) {
      this.bookmarks.delete(qId);
    } else {
      this.bookmarks.add(qId);
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('ccna_bookmarks', JSON.stringify([...this.bookmarks]));
    }
    return this.bookmarks.has(qId);
  }

  isBookmarked(qId) {
    return this.bookmarks.has(qId);
  }

  // Timer Exam
  startTimer() {
    this.stopTimer();
    this.examTimer = setInterval(() => {
      this.timeRemaining--;
      if (typeof this.onTimerTick === 'function') {
        this.onTimerTick(this.getFormattedTime());
      }
      if (this.timeRemaining <= 0) {
        this.stopTimer();
        if (typeof this.onTimeUp === 'function') {
          this.onTimeUp();
        }
      }
    }, 1000);
  }

  stopTimer() {
    if (this.examTimer) {
      clearInterval(this.examTimer);
      this.examTimer = null;
    }
  }

  getFormattedTime() {
    const m = Math.floor(this.timeRemaining / 60);
    const s = this.timeRemaining % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  // Hitung hasil ujian lengkap
  calculateResults() {
    let totalQuestions = this.activeQuestions.length;
    let correctCount = 0;
    let answeredCount = 0;

    const moduleBreakdown = {
      4: { total: 0, correct: 0, name: "Modul 4: Physical Layer" },
      6: { total: 0, correct: 0, name: "Modul 6: Data Link Layer" },
      7: { total: 0, correct: 0, name: "Modul 7: Ethernet Switching" }
    };

    this.activeQuestions.forEach(q => {
      const userAns = this.userAnswers[q.id];
      if (userAns && userAns.length > 0) answeredCount++;

      const isCorrect = this.isQuestionCorrect(q.id);
      if (isCorrect) correctCount++;

      const mId = q.moduleId;
      if (moduleBreakdown[mId]) {
        moduleBreakdown[mId].total++;
        if (isCorrect) moduleBreakdown[mId].correct++;
      }
    });

    const scorePct = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    const isPassed = scorePct >= 80; // Standar NetAcad 80%

    // Simpan statistik ke localStorage
    this.saveStats({
      date: new Date().toLocaleDateString('id-ID'),
      score: scorePct,
      correct: correctCount,
      total: totalQuestions,
      isPassed
    });

    this.isExamSubmitted = true;
    this.stopTimer();

    return {
      totalQuestions,
      answeredCount,
      unansweredCount: totalQuestions - answeredCount,
      correctCount,
      incorrectCount: totalQuestions - correctCount,
      scorePct,
      isPassed,
      moduleBreakdown
    };
  }

  saveStats(stat) {
    if (typeof localStorage === 'undefined') return;
    const history = JSON.parse(localStorage.getItem('ccna_quiz_history') || '[]');
    history.unshift(stat);
    localStorage.setItem('ccna_quiz_history', JSON.stringify(history.slice(0, 20)));
  }

  static getHistory() {
    if (typeof localStorage === 'undefined') return [];
    return JSON.parse(localStorage.getItem('ccna_quiz_history') || '[]');
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QuizEngine };
}
