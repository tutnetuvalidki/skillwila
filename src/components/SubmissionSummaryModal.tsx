import React from 'react';
import { 
  FileCheck2, 
  Printer, 
  Download, 
  X, 
  CheckCircle2, 
  GitBranch, 
  AlertTriangle, 
  HelpCircle, 
  FolderArchive,
  ExternalLink
} from 'lucide-react';
import { ASSIGNMENT_DATA } from '../data/assignmentData';
import gitData from '../gitData.json';

interface SubmissionSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tabId: string) => void;
}

export const SubmissionSummaryModal: React.FC<SubmissionSummaryModalProps> = ({
  isOpen,
  onClose,
  onSelectTab
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadZip = () => {
    const link = document.createElement('a');
    link.href = '/learning-center.zip';
    link.download = 'learning-center.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl text-slate-100 overflow-hidden">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-800/80 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                საბოლოო შემოწმება &bull; ლექტორის ჩასაბარებელი მასალები
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                პრაქტიკული დავალების შემაჯამებელი ანგარიში
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-blue-400" />
              <span>ბეჭდვა / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Deliverables Checklist */}
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
            <h3 className="font-bold text-base text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>ჩასაბარებელი მასალების სტატუსი (4/4 მზადყოფნა):</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div 
                onClick={() => { onClose(); onSelectTab('files'); }}
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 cursor-pointer transition flex items-start gap-3"
              >
                <FolderArchive className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-100 font-semibold">1. პროექტის საქაღალდე (.git-ით)</strong>
                  <span className="text-slate-400">learning-center.zip დაარქივებულია და მზადაა ასატვირთად.</span>
                </div>
              </div>

              <div 
                onClick={() => { onClose(); onSelectTab('graph'); }}
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 cursor-pointer transition flex items-start gap-3"
              >
                <GitBranch className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-100 font-semibold">2. გრაფიკული ისტორიის სქრინშოტი</strong>
                  <span className="text-slate-400">11 კომიტი, 5 ბრენჩი, ვიზუალური SVG და CLI ლოგი.</span>
                </div>
              </div>

              <div 
                onClick={() => { onClose(); onSelectTab('conflict'); }}
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 cursor-pointer transition flex items-start gap-3"
              >
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-100 font-semibold">3. კონფლიქტის სქრინშოტი მოგვარებამდე</strong>
                  <span className="text-slate-400">index.html მარკერებით (&lt;&lt;&lt;&lt;&lt;&lt;&lt;, =======, &gt;&gt;&gt;&gt;&gt;&gt;&gt;).</span>
                </div>
              </div>

              <div 
                onClick={() => { onClose(); onSelectTab('questions'); }}
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 cursor-pointer transition flex items-start gap-3"
              >
                <HelpCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-100 font-semibold">4. მოკლე პასუხები (6, 7, 8)</strong>
                  <span className="text-slate-400">აკადემიური და ტერმინალით გამყარებული პასუხები.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Answers Preview */}
          <div className="space-y-4">
            <h3 className="font-bold text-base text-white">
              ლექტორის კითხვების შემაჯამებელი პასუხები:
            </h3>

            {ASSIGNMENT_DATA.answers.map((ans) => (
              <div key={ans.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="font-bold text-xs text-blue-400">
                  კითხვა {ans.questionNumber}: {ans.question}
                </div>
                <div className="text-xs text-slate-200 font-medium">
                  {ans.shortAnswer}
                </div>
              </div>
            ))}
          </div>

          {/* Repository Summary */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
            <div>
              <div className="font-bold text-white text-xs">სრული პროექტის არქივი:</div>
              <div className="text-[11px] text-slate-400">learning-center.zip &bull; შეიცავს index.html, contact.html, README.md და .git ისტორიას</div>
            </div>
            <button
              onClick={handleDownloadZip}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl transition cursor-pointer flex items-center gap-1.5 shadow"
            >
              <Download className="w-3.5 h-3.5" />
              <span>ჩამოტვირთვა</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-800/80 border-t border-slate-700 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            სტუდენტის ნაშრომი &bull; სასწავლო ცენტრის პროექტი
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition cursor-pointer"
          >
            დახურვა
          </button>
        </div>
      </div>
    </div>
  );
};
