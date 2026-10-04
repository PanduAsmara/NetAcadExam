// MIXD Minimalist Theme Application Logic for CCNA 1 v7 Platform
// Single Fixed MIXD Warm Yellow Theme with High-Contrast Typography

let quizEngine = null;
let currentExamResults = null;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initMateri();
  initQuiz();
  initBankQuestions();
  updateStatsDisplay();
});

// -------------------------------------------------------------
// MAIN TAB SWITCHING
// -------------------------------------------------------------
function switchMainTab(tabName) {
  const tabs = ['materi', 'quiz', 'bank', 'stats'];
  tabs.forEach(t => {
    const sec = document.getElementById(`tab-${t}`);
    const btn = document.getElementById(`nav-btn-${t}`);
    if (sec && btn) {
      if (t === tabName) {
        sec.classList.remove('hidden');
        btn.classList.add('active');
      } else {
        sec.classList.add('hidden');
        btn.classList.remove('active');
      }
    }
  });

  if (tabName === 'stats') {
    updateStatsDisplay();
  }
}

// -------------------------------------------------------------
// MATERI BELAJAR (LEARNING MODULES)
// -------------------------------------------------------------
function initMateri() {
  renderMateriModule('modul4');
}

function renderMateriModule(modKey) {
  const modData = MATERI_DATA[modKey];
  if (!modData) return;

  // Update active subnav button
  document.querySelectorAll('.mod-nav-btn').forEach(btn => {
    if (btn.getAttribute('data-mod') === modKey) {
      btn.className = 'mod-nav-btn px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider border-2 border-black transition-all bg-black text-[#FED000] shadow-[2px_2px_0px_#000]';
    } else {
      btn.className = 'mod-nav-btn px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider border-2 border-black transition-all bg-white text-black hover:bg-black/5';
    }
  });

  const container = document.getElementById('materi-content-area');
  
  let html = `
    <!-- Module Header Banner -->
    <div class="mixd-card p-6 sm:p-8 bg-[#FED000] text-black border-4 border-black">
      <div class="flex items-center gap-2 mb-2 font-display text-xs font-black uppercase tracking-widest text-black/85">
        <span>${modData.icon}</span> ${modData.badge}
      </div>
      <h2 class="font-display font-extrabold text-2xl sm:text-4xl uppercase tracking-tight mb-3 text-black">
        ${modData.title}
      </h2>
      <p class="text-sm sm:text-base font-bold text-black max-w-3xl leading-relaxed">
        ${modData.summary}
      </p>
    </div>

    <div class="space-y-6">
  `;

  modData.sections.forEach(sec => {
    html += `
      <article class="mixd-card p-6 sm:p-8">
        <h3 class="font-display font-extrabold text-lg sm:text-xl uppercase tracking-tight mb-4 pb-3 border-b-2 border-black/15 text-black">
          ${sec.title}
        </h3>
        <div class="text-black">
          ${sec.content}
        </div>
      </article>
    `;
  });

  html += `
      <!-- Action CTA -->
      <div class="p-6 bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_#000] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 class="font-display font-extrabold text-sm uppercase tracking-wider text-black">Sudah Paham Konsep Ini?</h4>
          <p class="text-xs text-black/80 font-bold">Uji pemahaman Anda dengan soal-soal latihan NetAcad yang dirancang khusus.</p>
        </div>
        <button onclick="startQuizForModule(${modData.id})" class="mixd-btn-black text-xs py-2.5 px-5">
          Latihan Kuis ${modData.title.split(':')[0]} 🎯
        </button>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

function startQuizForModule(moduleId) {
  const modSelect = document.getElementById('filter-module-select');
  if (modSelect) modSelect.value = moduleId.toString();
  switchMainTab('quiz');
  restartQuizWithSettings();
}

// -------------------------------------------------------------
// QUIZ ENGINE CONTROLLER
// -------------------------------------------------------------
function initQuiz() {
  quizEngine = new QuizEngine(QUESTIONS_DATA);

  // Setup callbacks
  quizEngine.onTimerTick = (formattedTime) => {
    const display = document.getElementById('exam-timer-display');
    if (display) {
      display.textContent = formattedTime;
      if (quizEngine.timeRemaining < 300) {
        display.classList.add('text-red-600', 'animate-pulse');
      } else {
        display.classList.remove('text-red-600', 'animate-pulse');
      }
    }
  };

  quizEngine.onTimeUp = () => {
    alert('⏱️ Waktu ujian telah habis! Hasil ujian Anda akan dihitung sekarang.');
    submitExam();
  };

  restartQuizWithSettings();
}

function setQuizMode(mode) {
  const studyBtn = document.getElementById('mode-study-btn');
  const examBtn = document.getElementById('mode-exam-btn');
  const timerBar = document.getElementById('exam-timer-bar');
  const checkBtnBox = document.getElementById('study-check-btn-container');

  if (mode === 'study') {
    studyBtn.className = 'px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider bg-black text-[#FED000] transition-all';
    examBtn.className = 'px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider text-black hover:opacity-75 transition-all';
    if (timerBar) timerBar.classList.add('hidden');
    if (checkBtnBox) checkBtnBox.classList.remove('hidden');
  } else {
    examBtn.className = 'px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider bg-black text-[#FED000] transition-all';
    studyBtn.className = 'px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider text-black hover:opacity-75 transition-all';
    if (timerBar) timerBar.classList.remove('hidden');
    if (checkBtnBox) checkBtnBox.classList.add('hidden');
  }

  restartQuizWithSettings(mode);
}

function restartQuizWithSettings(specificMode = null) {
  const mode = specificMode || (document.getElementById('mode-exam-btn').classList.contains('bg-black') ? 'exam' : 'study');
  const moduleVal = document.getElementById('filter-module-select').value;
  const countVal = parseInt(document.getElementById('filter-count-select').value, 10);

  quizEngine.initQuiz({
    module: moduleVal,
    mode: mode,
    shuffleQuestions: true,
    questionCount: countVal,
    timeLimitMinutes: countVal === 15 ? 20 : (countVal === 30 ? 40 : 60)
  });

  renderCurrentQuestion();
  renderNavigatorGrid();
}

function renderCurrentQuestion() {
  const q = quizEngine.getCurrentQuestion();
  if (!q) return;

  // Metadata
  document.getElementById('q-number-badge').textContent = `SOAL #${quizEngine.currentIndex + 1} (Ref Q${q.num})`;
  document.getElementById('q-module-badge').textContent = q.moduleName;
  document.getElementById('q-topic-badge').textContent = q.topic;
  
  const typeText = q.type === 'multiple' 
    ? (q.titleEn.includes('Choose three') ? 'PILIH TIGA JAWABAN' : 'PILIH DUA JAWABAN')
    : (q.type === 'matching' ? 'COCOKKAN JAWABAN' : 'PILIH SATU JAWABAN');
  document.getElementById('q-type-badge').textContent = typeText;

  // Bookmark status
  const bmBtn = document.getElementById('q-bookmark-btn');
  if (quizEngine.isBookmarked(q.id)) {
    bmBtn.classList.add('bg-black', 'text-[#FED000]');
  } else {
    bmBtn.classList.remove('bg-black', 'text-[#FED000]');
  }

  // Question Texts
  document.getElementById('q-title-en').textContent = q.titleEn;
  document.getElementById('q-title-id').textContent = q.titleId;

  // Exhibit Image
  const imgBox = document.getElementById('q-image-container');
  const imgElem = document.getElementById('q-image');
  if (q.image) {
    imgElem.src = q.image;
    imgBox.classList.remove('hidden');
  } else {
    imgBox.classList.add('hidden');
  }

  // Packet Tracer Download Banner
  const ptBox = document.getElementById('q-pt-container');
  const ptLink = document.getElementById('q-pt-link');
  if (ptBox && ptLink) {
    if (q.ptDownloadUrl) {
      ptLink.href = q.ptDownloadUrl;
      ptBox.classList.remove('hidden');
    } else {
      ptBox.classList.add('hidden');
    }
  }

  // Options vs Matching Table
  const options = quizEngine.getCurrentOptions();
  const selectedKeys = quizEngine.getSelectedKeys(q.id);
  const optionsContainer = document.getElementById('q-options-container');
  const matchContainer = document.getElementById('q-matching-container');
  const matchTable = document.getElementById('q-matching-table');

  const isCheckedInStudyMode = (quizEngine.mode === 'study' && selectedKeys.length > 0 && !document.getElementById('explanation-box').classList.contains('hidden'));

  if (q.type === 'matching' && q.matchingData) {
    // Show matching table, hide standard options
    if (optionsContainer) optionsContainer.classList.add('hidden');
    if (matchContainer) matchContainer.classList.remove('hidden');

    const userMatches = quizEngine.getMatchingAnswers(q.id);
    const isChecked = isCheckedInStudyMode || quizEngine.isExamSubmitted;

    if (matchTable) {
      matchTable.innerHTML = '';
      q.matchingData.situations.forEach((sit, sIdx) => {
        const userChoice = userMatches[sit.id] || '';
        const isCorrectMatch = (userChoice === sit.correctMedia);

        let statusBorder = 'border-black/20 bg-white';
        let statusBadge = '';
        if (isChecked && userChoice) {
          if (isCorrectMatch) {
            statusBorder = 'border-emerald-600 bg-emerald-50';
            statusBadge = `<span class="text-xs font-black text-emerald-800">✅ Cocok (${sit.correctMedia})</span>`;
          } else {
            statusBorder = 'border-rose-600 bg-rose-50';
            statusBadge = `<span class="text-xs font-black text-rose-800">❌ Salah (Seharusnya: ${sit.correctMedia})</span>`;
          }
        } else if (isChecked && !userChoice) {
          statusBorder = 'border-amber-600 bg-amber-50';
          statusBadge = `<span class="text-xs font-black text-amber-800">⚠️ Belum dipilih (${sit.correctMedia})</span>`;
        }

        const row = document.createElement('div');
        row.className = `p-3.5 rounded-xl border-2 ${statusBorder} flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm`;
        row.innerHTML = `
          <div class="text-xs sm:text-sm font-bold text-black flex-1">
            <span class="inline-block w-6 h-6 rounded-full bg-black text-[#FED000] text-center leading-6 text-xs font-black mr-2">${sIdx + 1}</span>
            ${sit.text}
          </div>
          <div class="flex items-center gap-2">
            ${statusBadge}
            <select onchange="onSelectMatchingChoice(${q.id}, ${sit.id}, this.value)" class="mixd-select text-xs font-bold py-2 px-3 border-2 border-black rounded-lg bg-[#FED000]/20 text-black cursor-pointer shadow-sm" ${quizEngine.isExamSubmitted ? 'disabled' : ''}>
              <option value="">-- Pilih Media Jaringan --</option>
              ${q.matchingData.mediaOptions.map(m => `
                <option value="${m}" ${userChoice === m ? 'selected' : ''}>${m}</option>
              `).join('')}
            </select>
          </div>
        `;
        matchTable.appendChild(row);
      });
    }
  } else {
    // Standard multiple choice / single choice options
    if (matchContainer) matchContainer.classList.add('hidden');
    if (optionsContainer) {
      optionsContainer.classList.remove('hidden');
      optionsContainer.innerHTML = '';

      options.forEach(opt => {
        const isSelected = selectedKeys.includes(opt.shuffledKey);
        let extraClass = '';

        if (isCheckedInStudyMode || quizEngine.isExamSubmitted) {
          if (opt.isCorrect) {
            extraClass = 'correct-answer';
          } else if (isSelected && !opt.isCorrect) {
            extraClass = 'wrong-answer';
          }
        }

        const card = document.createElement('div');
        card.className = `mixd-option ${isSelected ? 'selected' : ''} ${extraClass}`;
        card.onclick = () => onSelectOption(opt.shuffledKey);

        card.innerHTML = `
          <span class="mixd-option-letter">${opt.shuffledKey}</span>
          <div class="flex-1 text-xs sm:text-sm font-bold leading-relaxed">
            ${opt.text}
          </div>
          ${isSelected ? `<span class="font-black text-sm">✓</span>` : ''}
        `;

        optionsContainer.appendChild(card);
      });
    }
  }

  // Next / Prev buttons
  document.getElementById('btn-prev').disabled = (quizEngine.currentIndex === 0);
  document.getElementById('btn-next').disabled = (quizEngine.currentIndex === quizEngine.activeQuestions.length - 1);

  // Progress text & bar
  const total = quizEngine.activeQuestions.length;
  const curr = quizEngine.currentIndex + 1;
  document.getElementById('quiz-progress-text').textContent = `${curr} / ${total}`;
  document.getElementById('quiz-progress-bar').style.width = `${Math.round((curr / total) * 100)}%`;

  // Explanation Box
  const expBox = document.getElementById('explanation-box');
  if (quizEngine.mode === 'study') {
    if (selectedKeys.length > 0 && isCheckedInStudyMode) {
      renderExplanationBox(q, options, selectedKeys);
    } else {
      expBox.classList.add('hidden');
    }
  } else if (quizEngine.isExamSubmitted) {
    renderExplanationBox(q, options, selectedKeys);
  } else {
    expBox.classList.add('hidden');
  }

  updateNavigatorGrid();
}

function onSelectMatchingChoice(qId, sitId, val) {
  if (quizEngine.isExamSubmitted) return;
  quizEngine.setMatchingAnswer(qId, sitId, val);
  renderCurrentQuestion();
}

function onSelectOption(key) {
  if (quizEngine.isExamSubmitted) return;
  const q = quizEngine.getCurrentQuestion();
  if (!q) return;

  quizEngine.selectAnswer(q.id, key);
  renderCurrentQuestion();

  if (quizEngine.mode === 'study' && q.type === 'single') {
    checkAnswerInstant();
  }
}

function checkAnswerInstant() {
  const q = quizEngine.getCurrentQuestion();
  if (!q) return;

  if (q.type === 'matching' && q.matchingData) {
    const userMatches = quizEngine.getMatchingAnswers(q.id);
    const answeredCount = Object.keys(userMatches).filter(k => userMatches[k]).length;
    if (answeredCount === 0) {
      alert('Silakan pilih salah satu pasangan media jaringan pada tabel terlebih dahulu.');
      return;
    }
    const options = quizEngine.getCurrentOptions();
    renderExplanationBox(q, options, ['MATCHED']);
    renderCurrentQuestion();
    updateNavigatorGrid();
    return;
  }

  const selectedKeys = quizEngine.getSelectedKeys(q.id);
  if (!selectedKeys.length) {
    alert('Silakan pilih jawaban terlebih dahulu.');
    return;
  }

  const options = quizEngine.getCurrentOptions();
  renderExplanationBox(q, options, selectedKeys);
  renderCurrentQuestion();
  updateNavigatorGrid();
}

// Render the comprehensive Explanation box including Option-by-Option Breakdown
function renderExplanationBox(q, options, selectedKeys) {
  const expBox = document.getElementById('explanation-box');
  const isCorrect = quizEngine.isQuestionCorrect(q.id);

  const statusTitle = document.getElementById('exp-status-title');
  const statusIcon = document.getElementById('exp-status-icon');

  if (isCorrect) {
    statusTitle.textContent = 'Jawaban Anda Benar! 🎉';
    statusTitle.className = 'font-display font-extrabold text-lg uppercase tracking-tight text-emerald-800';
    statusIcon.textContent = '✅';
  } else {
    statusTitle.textContent = 'Jawaban Belum Tepat ⚠️';
    statusTitle.className = 'font-display font-extrabold text-lg uppercase tracking-tight text-rose-800';
    statusIcon.textContent = '❌';
  }

  document.getElementById('exp-topic-pill').textContent = q.topic;
  document.getElementById('exp-core-text').textContent = q.explanationId || 'Pertanyaan ini menguji pemahaman konsep fundamental standar Cisco.';
  document.getElementById('exp-takeaway-text').textContent = q.keyTakeaway || 'Pahami perbedaan fungsi layer dan protokol hardware.';

  // Build Option-by-Option or Matching breakdown
  const breakdownContainer = document.getElementById('exp-options-breakdown');
  breakdownContainer.innerHTML = '';

  if (q.type === 'matching' && q.matchingData) {
    const userMatches = quizEngine.getMatchingAnswers(q.id);
    q.matchingData.situations.forEach((sit, sIdx) => {
      const userChoice = userMatches[sit.id] || 'Belum dipilih';
      const isCorrectMatch = (userChoice === sit.correctMedia);
      const item = document.createElement('div');
      item.className = `p-4 rounded-xl border-2 ${isCorrectMatch ? 'border-emerald-600 bg-emerald-50' : 'border-rose-600 bg-rose-50'} text-xs sm:text-sm`;
      item.innerHTML = `
        <div class="flex items-center justify-between mb-1.5 font-display font-black text-black">
          <span class="uppercase tracking-wider">${isCorrectMatch ? '🟢 COCOK' : '🔴 TIDAK SESUAI'}: ${sit.text}</span>
          <span class="text-[11px] px-2 py-0.5 rounded font-mono font-bold ${isCorrectMatch ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'}">${isCorrectMatch ? 'BENAR' : 'SALAH'}</span>
        </div>
        <p class="text-xs text-black/90 mb-1 font-semibold">Pilihan Anda: <strong>${userChoice}</strong> | Jawaban Resmi: <strong class="text-emerald-800">${sit.correctMedia}</strong></p>
        <p class="text-xs leading-relaxed font-medium text-black/80"><strong>Alasan:</strong> ${sit.explanation}</p>
      `;
      breakdownContainer.appendChild(item);
    });
  } else {
    options.forEach(opt => {
      const isThisSelected = selectedKeys.includes(opt.shuffledKey);
      const item = document.createElement('div');
      
      if (opt.isCorrect) {
        item.className = 'p-4 rounded-xl border-2 border-emerald-600 bg-emerald-50 text-xs sm:text-sm';
        item.innerHTML = `
          <div class="flex items-center gap-2 font-display font-black text-emerald-950 mb-1.5">
            <span class="w-6 h-6 rounded bg-emerald-600 text-white font-mono text-xs flex items-center justify-center font-bold">${opt.shuffledKey}</span>
            <span class="uppercase tracking-wider">🟢 PILIHAN BENAR:</span>
            ${isThisSelected ? '<span class="text-[10px] bg-emerald-200 text-emerald-950 px-2 py-0.5 rounded-full font-black uppercase tracking-wider border border-emerald-400">(Pilihan Anda)</span>' : ''}
          </div>
          <p class="font-extrabold text-black mb-2 text-sm">"${opt.text}"</p>
          <p class="text-emerald-950 text-xs leading-relaxed font-semibold">
            <strong>Kenapa Benar:</strong> ${opt.why.replace(/^BENAR:\s*/, '')}
          </p>
        `;
      } else {
        item.className = `p-4 rounded-xl border-2 ${isThisSelected ? 'border-rose-600 bg-rose-50' : 'border-black/20 bg-white'} text-xs sm:text-sm`;
        item.innerHTML = `
          <div class="flex items-center gap-2 font-display font-black ${isThisSelected ? 'text-rose-950' : 'text-black'} mb-1.5">
            <span class="w-6 h-6 rounded ${isThisSelected ? 'bg-rose-600 text-white' : 'bg-black/15 text-black border border-black/30'} font-mono text-xs flex items-center justify-center font-bold">${opt.shuffledKey}</span>
            <span class="uppercase tracking-wider">🔴 PILIHAN SALAH:</span>
            ${isThisSelected ? '<span class="text-[10px] bg-rose-200 text-rose-950 px-2 py-0.5 rounded-full font-black uppercase tracking-wider border border-rose-400">(Pilihan Anda yang Salah)</span>' : ''}
          </div>
          <p class="font-extrabold text-black mb-2 text-sm">"${opt.text}"</p>
          <p class="text-black/85 text-xs leading-relaxed font-semibold">
            <strong>Kenapa Salah:</strong> ${opt.why.replace(/^SALAH:\s*/, '')}
          </p>
        `;
      }

      breakdownContainer.appendChild(item);
    });
  }

  expBox.classList.remove('hidden');
}

// -------------------------------------------------------------
// QUESTION NAVIGATOR GRID
// -------------------------------------------------------------
function renderNavigatorGrid() {
  const container = document.getElementById('question-navigator-grid');
  if (!container) return;
  container.innerHTML = '';

  quizEngine.activeQuestions.forEach((q, idx) => {
    const btn = document.createElement('button');
    btn.className = 'mixd-grid-btn';
    btn.id = `nav-grid-${idx}`;
    btn.textContent = idx + 1;
    btn.onclick = () => {
      quizEngine.goToQuestion(idx);
      renderCurrentQuestion();
    };
    container.appendChild(btn);
  });

  updateNavigatorGrid();
}

function updateNavigatorGrid() {
  quizEngine.activeQuestions.forEach((q, idx) => {
    const btn = document.getElementById(`nav-grid-${idx}`);
    if (!btn) return;

    btn.className = 'mixd-grid-btn';
    const isCurrent = (idx === quizEngine.currentIndex);
    const answers = quizEngine.getSelectedKeys(q.id);
    const hasAnswered = answers && answers.length > 0;
    const isFlagged = quizEngine.isBookmarked(q.id);

    if (isCurrent) btn.classList.add('current');
    if (isFlagged) btn.classList.add('flagged');

    if (quizEngine.mode === 'study' || quizEngine.isExamSubmitted) {
      if (hasAnswered) {
        if (quizEngine.isQuestionCorrect(q.id)) {
          btn.classList.add('correct');
        } else {
          btn.classList.add('incorrect');
        }
      }
    } else {
      if (hasAnswered) {
        btn.classList.add('answered');
      }
    }
  });
}

function toggleCurrentBookmark() {
  const q = quizEngine.getCurrentQuestion();
  if (!q) return;
  quizEngine.toggleBookmark(q.id);
  renderCurrentQuestion();
  updateStatsDisplay();
}

// -------------------------------------------------------------
// EXAM SUBMISSION & MODAL
// -------------------------------------------------------------
function submitExamPrompt() {
  const total = quizEngine.activeQuestions.length;
  let answered = 0;
  quizEngine.activeQuestions.forEach(q => {
    if ((quizEngine.userAnswers[q.id] || []).length > 0) answered++;
  });

  const unanswered = total - answered;
  let confirmMsg = `Konfirmasi Kumpulkan Ujian:\nTotal Soal: ${total}\nSudah Dijawab: ${answered}\nBelum Dijawab: ${unanswered}`;
  
  if (unanswered > 0) {
    confirmMsg += `\n\n⚠️ Masih ada ${unanswered} soal yang belum Anda jawab!`;
  }

  if (confirm(confirmMsg)) {
    submitExam();
  }
}

function submitExam() {
  const res = quizEngine.calculateResults();
  currentExamResults = res;

  const modal = document.getElementById('exam-result-modal');
  const icon = document.getElementById('modal-result-icon');
  const title = document.getElementById('modal-result-title');
  const sub = document.getElementById('modal-result-subtitle');
  const score = document.getElementById('modal-result-score');
  const details = document.getElementById('modal-result-details');
  const breakdown = document.getElementById('modal-module-breakdown');

  score.textContent = `${res.scorePct}%`;
  details.textContent = `${res.correctCount} Benar dari ${res.totalQuestions} Soal (${res.unansweredCount} Tidak Dijawab)`;

  if (res.isPassed) {
    icon.textContent = '🏆';
    title.textContent = 'SELAMAT! ANDA LULUS!';
    title.className = 'font-display font-black text-2xl uppercase tracking-tight text-emerald-700';
    sub.textContent = 'Skor Anda mencapai standar passing grade NetAcad (80%). Kerja luar biasa!';
  } else {
    icon.textContent = '📚';
    title.textContent = 'BELUM LULUS - ULANGI KEMBALI!';
    title.className = 'font-display font-black text-2xl uppercase tracking-tight text-amber-700';
    sub.textContent = 'Skor Anda belum mencapai standar passing grade NetAcad (80%). Silakan review pembahasan di bawah.';
  }

  breakdown.innerHTML = '';
  Object.values(res.moduleBreakdown).forEach(m => {
    if (m.total === 0) return;
    const pct = Math.round((m.correct / m.total) * 100);
    const div = document.createElement('div');
    div.className = 'text-xs';
    div.innerHTML = `
      <div class="flex justify-between font-display font-bold uppercase tracking-wider mb-1 text-black">
        <span>${m.name}</span>
        <span>${m.correct}/${m.total} (${pct}%)</span>
      </div>
      <div class="w-full bg-black/15 h-3 rounded-full overflow-hidden border border-black/30">
        <div class="${pct >= 80 ? 'bg-emerald-500' : 'bg-amber-500'} h-full rounded-full" style="width: ${pct}%"></div>
      </div>
    `;
    breakdown.appendChild(div);
  });

  modal.classList.remove('hidden');
  updateStatsDisplay();
}

function closeResultModal() {
  document.getElementById('exam-result-modal').classList.add('hidden');
}

function closeModalAndReview() {
  closeResultModal();
  renderCurrentQuestion();
  updateNavigatorGrid();
}

// -------------------------------------------------------------
// TAB 3: BANK 70 SOAL EXPLORER
// -------------------------------------------------------------
function initBankQuestions() {
  filterBankQuestions();
}

function filterBankQuestions() {
  const query = (document.getElementById('bank-search-input').value || '').toLowerCase().trim();
  const modFilter = document.getElementById('bank-module-filter').value;
  const container = document.getElementById('bank-questions-list');
  if (!container) return;

  container.innerHTML = '';

  const filtered = QUESTIONS_DATA.filter(q => {
    if (modFilter !== 'all' && q.moduleId !== parseInt(modFilter, 10)) return false;

    if (query) {
      const matchEn = q.titleEn.toLowerCase().includes(query);
      const matchId = (q.titleId || '').toLowerCase().includes(query);
      const matchTopic = q.topic.toLowerCase().includes(query);
      const matchOptions = q.options.some(o => o.text.toLowerCase().includes(query));
      return matchEn || matchId || matchTopic || matchOptions;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="mixd-card p-8 text-center text-xs font-bold uppercase tracking-wider text-black/70">
        Tidak ditemukan soal yang cocok dengan pencarian "<strong>${query}</strong>". Coba kata kunci lain.
      </div>
    `;
    return;
  }

  filtered.forEach(q => {
    const card = document.createElement('div');
    card.className = 'mixd-card p-6';

    const optionsHtml = q.options.map(opt => `
      <div class="p-3.5 rounded-xl border-2 ${opt.isCorrect ? 'border-emerald-600 bg-emerald-50' : 'border-black/15 bg-black/5'} text-xs">
        <div class="flex items-center gap-2 mb-1.5 font-display font-black">
          <span class="w-5 h-5 rounded font-mono text-[11px] flex items-center justify-center ${opt.isCorrect ? 'bg-emerald-600 text-white' : 'bg-black/20 text-black'} font-bold">${opt.key}</span>
          <span class="uppercase tracking-wider ${opt.isCorrect ? 'text-emerald-800' : 'text-slate-800'}">
            ${opt.isCorrect ? '✅ PILIHAN BENAR' : '❌ PILIHAN SALAH'}
          </span>
        </div>
        <p class="font-extrabold text-black mb-1">"${opt.text}"</p>
        <p class="text-xs ${opt.isCorrect ? 'text-emerald-950 font-bold' : 'text-slate-800 font-semibold'} leading-relaxed">
          <strong>Analisis:</strong> ${opt.why.replace(/^(BENAR|SALAH):\s*/, '')}
        </p>
      </div>
    `).join('');

    card.innerHTML = `
      <div class="flex items-center justify-between gap-2 mb-3">
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 bg-black text-[#FED000] font-display font-black text-xs rounded uppercase">
            Soal #${q.id} (Ujian Q${q.num})
          </span>
          <span class="px-2 py-0.5 bg-black/10 font-bold text-[11px] rounded uppercase text-black">
            ${q.moduleName}
          </span>
          <span class="font-mono text-xs text-black/70 font-bold">${q.topic}</span>
        </div>
        <button onclick="toggleCardDetail('detail-${q.id}')" class="font-display font-bold text-xs uppercase tracking-wider text-black hover:underline">
          Lihat Pembahasan ▼
        </button>
      </div>

      <h4 class="font-display font-black text-black text-base mb-1">${q.titleEn}</h4>
      <p class="text-xs text-black/80 italic font-semibold mb-3">${q.titleId}</p>

      ${q.image ? `<div class="my-3"><img src="${q.image}" class="max-h-48 object-contain rounded border-2 border-black/20 shadow-sm"></div>` : ''}

      ${q.ptDownloadUrl ? `
        <div class="my-3 p-3 bg-black text-[#FED000] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 border-2 border-black">
          <div class="flex items-center gap-2">
            <span class="text-xl">📦</span>
            <span class="text-xs font-bold text-white uppercase tracking-wider">File Lab Cisco Packet Tracer (.pkt) Tersedia</span>
          </div>
          <a href="${q.ptDownloadUrl}" target="_blank" rel="noopener noreferrer" class="mixd-btn-primary text-xs py-1.5 px-3.5 whitespace-nowrap font-black">
            Download .PKT 📥
          </a>
        </div>
      ` : ''}

      ${q.matchingData ? `
        <div class="my-3 p-3.5 bg-black/5 rounded-xl border border-black/20 text-xs">
          <strong class="font-display font-black uppercase tracking-wider block mb-2 text-black">Tabel Pencocokan Situasi & Media:</strong>
          <div class="space-y-1.5">
            ${q.matchingData.situations.map(s => `
              <div class="flex items-center justify-between p-2 bg-white rounded-lg border border-black/15">
                <span><strong>${s.text}</strong></span>
                <span class="font-mono font-bold px-2 py-0.5 bg-black text-[#FED000] rounded text-[11px]">${s.correctMedia}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div id="detail-${q.id}" class="mt-4 pt-4 border-t-2 border-black/15 space-y-3">
        <div class="text-[11px] font-black uppercase tracking-widest text-black/70 mb-2">Pilihan & Bedah Tiap Opsi:</div>
        <div class="space-y-2.5">
          ${optionsHtml}
        </div>
        <div class="mt-3 p-3.5 bg-[#FED000]/25 border-2 border-black rounded-xl text-xs text-black font-semibold">
          <strong>💡 Teori Konsep:</strong> ${q.explanationId}
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function toggleCardDetail(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.toggle('hidden');
  }
}

// -------------------------------------------------------------
// TAB 4: STATS & ANALYTICS
// -------------------------------------------------------------
function updateStatsDisplay() {
  const history = QuizEngine.getHistory();
  const bookmarks = JSON.parse(localStorage.getItem('ccna_bookmarks') || '[]');

  document.getElementById('stat-total-attempts').textContent = history.length;
  document.getElementById('stat-bookmarks-count').textContent = bookmarks.length;

  let best = 0;
  history.forEach(h => {
    if (h.score > best) best = h.score;
  });
  document.getElementById('stat-best-score').textContent = `${best}%`;

  const tableBox = document.getElementById('stats-history-table');
  if (!tableBox) return;

  if (history.length === 0) {
    tableBox.innerHTML = `<p class="text-xs text-black/60 py-4 text-center font-bold">Belum ada riwayat ujian yang tersimpan.</p>`;
    return;
  }

  let html = `
    <table class="w-full text-left text-xs border-collapse font-medium">
      <thead class="bg-black/10 text-black font-display font-bold uppercase tracking-wider">
        <tr>
          <th class="p-3">Tanggal</th>
          <th class="p-3">Total Soal</th>
          <th class="p-3">Benar</th>
          <th class="p-3">Skor</th>
          <th class="p-3">Status</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-black/15">
  `;

  history.forEach(h => {
    html += `
      <tr>
        <td class="p-3 text-black/70 font-semibold">${h.date}</td>
        <td class="p-3 font-semibold text-black">${h.total}</td>
        <td class="p-3 text-emerald-700 font-bold">${h.correct}</td>
        <td class="p-3 font-display font-black text-sm text-black">${h.score}%</td>
        <td class="p-3">
          <span class="px-2 py-0.5 rounded font-display font-black text-[10px] uppercase tracking-wider ${h.isPassed ? 'bg-emerald-600 text-white' : 'bg-amber-500 text-black border border-black/30'}">
            ${h.isPassed ? 'LULUS' : 'MENGULANG'}
          </span>
        </td>
      </tr>
    `;
  });

  html += `</tbody></table>`;
  tableBox.innerHTML = html;
}

function clearHistoryData() {
  if (confirm('Hapus seluruh riwayat pengerjaan ujian?')) {
    localStorage.removeItem('ccna_quiz_history');
    updateStatsDisplay();
  }
}
