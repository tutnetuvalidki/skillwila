import React from 'react';
import { 
  GitBranch, 
  Terminal, 
  Globe, 
  AlertTriangle, 
  HelpCircle, 
  FolderArchive, 
  Download, 
  CheckCircle2,
  FileCheck
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenReport: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenReport }) => {
  const tabs = [
    { id: 'website', label: 'სასწავლო ცენტრის საიტი', sublabel: 'index.html & Live Preview', icon: Globe },
    { id: 'steps', label: 'Git ნაბიჯები (1-5)', sublabel: 'ბრძანებები & ტერმინალი', icon: Terminal },
    { id: 'graph', label: 'გრაფიკული ისტორია', sublabel: 'ჩასაბარებელი #2 (სქრინშოტი)', icon: GitBranch },
    { id: 'conflict', label: 'კონფლიქტის ფანჯარა', sublabel: 'ჩასაბარებელი #3 (სქრინშოტი)', icon: AlertTriangle },
    { id: 'questions', label: 'კითხვები და პასუხები', sublabel: 'ჩასაბარებელი #4 (6, 7, 8)', icon: HelpCircle },
    { id: 'files', label: 'ფაილები & .git', sublabel: 'ჩასაბარებელი #1 (.zip)', icon: FolderArchive },
  ];

  const handleDownloadZip = () => {
    const link = document.createElement('a');
    link.href = '/learning-center.zip';
    link.download = 'learning-center.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-40 shadow-xl">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <GitBranch className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  Git პრაქტიკული დავალება
                </span>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  ყველა ჩასაბარებელი მზადაა
                </span>
              </div>
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-100">
                სასწავლო ცენტრი &bull; ვებსაიტის განვითარება Git ბრენჩებით
              </h1>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
            <button
              onClick={onOpenReport}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition shadow-sm cursor-pointer"
              title="სრული ჩასაბარებელი ანგარიშის ნახვა"
            >
              <FileCheck className="w-4 h-4 text-emerald-400" />
              <span>ჩასაბარებელი ანგარიში</span>
            </button>

            <button
              onClick={handleDownloadZip}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-600/20 transition cursor-pointer"
              title="ჩამოტვირთე learning-center.zip სრული .git საქაღალდით"
            >
              <Download className="w-4 h-4" />
              <span>ჩამოტვირთე .zip (.git-ით)</span>
            </button>
          </div>
        </div>

        {/* Status Indicators Pill Bar */}
        <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-300 font-mono">HEAD → main</span> (სუფთა)
            </span>
            <span className="text-slate-600">&bull;</span>
            <span>კომიტები: <strong className="text-slate-200 font-mono">11</strong></span>
            <span className="text-slate-600">&bull;</span>
            <span>ბრენჩები: <strong className="text-slate-200 font-mono">5</strong> (main, feature-*, title-*)</span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-emerald-400 font-medium">კონფლიქტი მოგვარებულია</span>
          </div>

          <div className="text-slate-400">
            პროექტი: <code className="bg-slate-800 px-1.5 py-0.5 rounded text-cyan-400">learning-center/</code>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-slate-950/70 border-t border-slate-800/60 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-1 py-1.5">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <div className="text-left">
                  <div className="leading-tight font-semibold">{tab.label}</div>
                  <div className={`text-[10px] ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                    {tab.sublabel}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
