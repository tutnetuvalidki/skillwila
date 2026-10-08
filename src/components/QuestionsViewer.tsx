import React, { useState } from 'react';
import { 
  HelpCircle, 
  Copy, 
  Check, 
  CheckCircle2, 
  BookOpen, 
  Terminal, 
  ArrowRight,
  FileCheck2,
  Sparkles
} from 'lucide-react';
import { ASSIGNMENT_DATA } from '../data/assignmentData';

export const QuestionsViewer: React.FC = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const handleCopySingle = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyAll = () => {
    const fullText = ASSIGNMENT_DATA.answers.map(a => 
      `კითხვა ${a.questionNumber}: ${a.question}\n\n[მოკლე პასუხი]:\n${a.shortAnswer}\n\n[დეტალური პასუხი]:\n${a.fullAnswer}\n\n[ტერმინალის დასტური]:\n${a.terminalProof}\n`
    ).join('\n----------------------------------------\n\n');

    navigator.clipboard.writeText(fullText);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-950/40 via-slate-900 to-indigo-950/40 border border-blue-500/30 rounded-2xl p-5 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase text-blue-400 tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>ლექტორის ჩასაბარებელი #4</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            ლექტორის საკონტროლო კითხვები და პასუხები
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
            დავალების ბოლოს მოცემული სამი ფუნდამენტური თეორიულ-პრაქტიკული კითხვა (6, 7, 8). 
            პასუხები გაწერილია როგორც მოკლე ფორმით, ისე სიღრმისეული აკადემიური არგუმენტაციითა და ტერმინალის მტკიცებულებებით.
          </p>
        </div>

        <button
          onClick={handleCopyAll}
          className="px-4 py-2.5 text-xs font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/20 transition cursor-pointer flex items-center gap-2 shrink-0"
        >
          {copiedAll ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
          <span>{copiedAll ? 'ყველა პასუხი დაკოპირდა!' : 'ყველა პასუხის კოპირება'}</span>
        </button>
      </div>

      {/* Questions Cards List */}
      <div className="space-y-6">
        {ASSIGNMENT_DATA.answers.map((answer) => {
          const isCopied = copiedId === answer.id;
          const copyContent = `კითხვა ${answer.questionNumber}: ${answer.question}\n\nმოკლე პასუხი:\n${answer.shortAnswer}\n\nსრული პასუხი:\n${answer.fullAnswer}`;

          return (
            <div 
              key={answer.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl transition hover:border-slate-700/90"
            >
              {/* Question Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    #{answer.questionNumber}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
                      საკონტროლო შეკითხვა
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                      {answer.question}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => handleCopySingle(answer.id, copyContent)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition cursor-pointer self-start sm:self-auto"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{isCopied ? 'დაკოპირდა!' : 'პასუხის კოპირება'}</span>
                </button>
              </div>

              {/* Short Answer (Executive Summary) */}
              <div className="mt-4 p-4 rounded-xl bg-blue-950/30 border border-blue-500/30">
                <div className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>მოკლე, ლაკონიური პასუხი:</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-100 leading-relaxed">
                  {answer.shortAnswer}
                </p>
              </div>

              {/* Full Detailed Answer */}
              <div className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">
                <strong className="block text-slate-200 text-xs font-bold uppercase tracking-wider mb-2">
                  დეტალური განმარტება და არგუმენტაცია:
                </strong>
                {answer.fullAnswer}
              </div>

              {/* Key takeaways pills */}
              <div className="mt-4 pt-4 border-t border-slate-800">
                <span className="text-xs text-slate-400 font-semibold block mb-2">
                  საკვანძო არგუმენტები (Bullet Points):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {answer.keyPoints.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terminal Proof snippet */}
              <div className="mt-4 pt-3 border-t border-slate-800/80">
                <div className="text-[11px] text-slate-400 font-mono mb-1.5 flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-slate-500" />
                  <span>ტერმინალის შესაბამისი დასტური:</span>
                </div>
                <pre className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs text-emerald-400 overflow-x-auto whitespace-pre-wrap">
                  {answer.terminalProof}
                </pre>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
