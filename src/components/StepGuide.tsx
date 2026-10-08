import React, { useState } from 'react';
import { 
  Terminal, 
  Copy, 
  Check, 
  GitBranch, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight, 
  FileCode, 
  FolderPlus,
  Play
} from 'lucide-react';
import { ASSIGNMENT_DATA } from '../data/assignmentData';

export const StepGuide: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<number>(1);
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const activeStep = ASSIGNMENT_DATA.steps.find(s => s.id === activeStepId) || ASSIGNMENT_DATA.steps[0];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
              დამოუკიდებელი პრაქტიკული სამუშაო &bull; 30-40 წუთი
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              ნაბიჯ-ნაბიჯ Git ბრძანებების გზამკვლევი
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              თითოეული ნაბიჯის შესაბამისი რეალური ტერმინალის ბრძანებები, კომიტების შეტყობინებები და დაკვირვების ჩანაწერები.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">მიმდინარე ბრენჩი ამ ნაბიჯზე:</span>
            <span className="px-2.5 py-1 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 font-mono text-xs font-semibold flex items-center gap-1.5">
              <GitBranch className="w-3.5 h-3.5" />
              {activeStep.branch}
            </span>
          </div>
        </div>

        {/* Stepper Navigation Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-5 pt-4 border-t border-slate-800">
          {ASSIGNMENT_DATA.steps.map((step) => {
            const isActive = step.id === activeStepId;
            const isCompleted = step.id < activeStepId;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepId(step.id)}
                className={`flex flex-col text-left p-3 rounded-xl border transition cursor-pointer ${
                  isActive
                    ? 'bg-blue-600/20 border-blue-500 text-white shadow-md'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {step.badge}
                  </span>
                  {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                </div>
                <div className="font-semibold text-xs leading-tight line-clamp-1">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step Detail Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
        {/* Step Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-500 text-white">
                {activeStep.badge}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {activeStep.title}
              </h3>
            </div>
            <p className="text-sm text-slate-300 mt-1">
              {activeStep.details}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-slate-500">ფაილები:</span>
            {activeStep.filesInvolved.map((file) => (
              <span key={file} className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-cyan-400 font-mono text-xs">
                {file}
              </span>
            ))}
          </div>
        </div>

        {/* Observation Note (Crucial for Step 3) */}
        {activeStep.observation && (
          <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 text-amber-200 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm leading-relaxed">
              <strong className="block font-bold text-amber-300 mb-0.5">ლექტორის დავალების სავალდებულო დაკვირვება:</strong>
              {activeStep.observation}
            </div>
          </div>
        )}

        {/* Commands List */}
        <div className="space-y-4">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Terminal className="w-4 h-4 text-blue-400" />
            <span>ტერმინალის ბრძანებები და განმარტებები:</span>
          </h4>

          {activeStep.commands.map((cmdItem, idx) => {
            const copyKey = `${activeStep.id}-${idx}`;
            const isCopied = copiedIndex === copyKey;

            return (
              <div key={idx} className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden shadow-inner">
                {/* Command Header */}
                <div className="bg-slate-900/90 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    {cmdItem.explanation}
                  </span>
                  <button
                    onClick={() => handleCopy(cmdItem.command, copyKey)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-medium transition cursor-pointer"
                  >
                    {isCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{isCopied ? 'დაკოპირდა!' : 'კოპირება'}</span>
                  </button>
                </div>

                {/* Command Box */}
                <div className="p-4 font-mono text-xs sm:text-sm overflow-x-auto text-emerald-400 bg-slate-950">
                  <div className="flex items-start gap-2">
                    <span className="text-slate-600 select-none">$</span>
                    <pre className="whitespace-pre-wrap leading-relaxed flex-1 text-slate-100 font-semibold">
                      {cmdItem.command}
                    </pre>
                  </div>

                  {/* Terminal Output if available */}
                  {cmdItem.output && (
                    <div className="mt-3 pt-3 border-t border-slate-900 text-slate-400 text-xs font-mono">
                      <div className="text-[10px] uppercase tracking-wider text-slate-600 mb-1 select-none font-sans font-semibold">
                        ტერმინალის პასუხი (Terminal Output):
                      </div>
                      <pre className="whitespace-pre-wrap text-slate-300">
                        {cmdItem.output}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stepper Footer Navigation */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <button
            onClick={() => setActiveStepId(Math.max(1, activeStepId - 1))}
            disabled={activeStepId === 1}
            className="px-4 py-2 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
          >
            ← წინა ნაბიჯი
          </button>

          <span className="text-xs text-slate-500">
            ნაბიჯი {activeStepId} / 5
          </span>

          <button
            onClick={() => setActiveStepId(Math.min(5, activeStepId + 1))}
            disabled={activeStepId === 5}
            className="px-4 py-2 text-xs font-medium rounded-lg bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
          >
            შემდეგი ნაბიჯი →
          </button>
        </div>
      </div>
    </div>
  );
};
