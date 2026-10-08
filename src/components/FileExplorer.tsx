import React, { useState } from 'react';
import { 
  FolderArchive, 
  Download, 
  FileCode, 
  FileText, 
  Folder, 
  GitBranch, 
  Check, 
  Copy, 
  Terminal, 
  CheckCircle2, 
  FileCheck,
  PackageCheck
} from 'lucide-react';
import { ASSIGNMENT_DATA } from '../data/assignmentData';

export const FileExplorer: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<string>('index.html');
  const [copied, setCopied] = useState(false);

  const handleDownloadZip = () => {
    const link = document.createElement('a');
    link.href = '/learning-center.zip';
    link.download = 'learning-center.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getFileContent = () => {
    switch (selectedFile) {
      case 'index.html':
        return ASSIGNMENT_DATA.files.indexHtml;
      case 'contact.html':
        return ASSIGNMENT_DATA.files.contactHtml;
      case 'README.md':
        return ASSIGNMENT_DATA.files.readmeMd;
      case '.git/HEAD':
        return 'ref: refs/heads/main\n';
      case '.git/config':
        return `[core]
\trepositoryformatversion = 0
\tfilemode = true
\tbare = false
\tlogallrefupdates = true
[user]
\tname = სტუდენტი (Student)
\temail = student@example.com\n`;
      case 'conflicted_index.html':
        return ASSIGNMENT_DATA.files.conflictedIndexHtml;
      default:
        return '// აირჩიეთ ფაილი დასათვალიერებლად';
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getFileContent());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-950/40 via-slate-900 to-emerald-950/40 border border-blue-500/30 rounded-2xl p-5 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase text-blue-400 tracking-wider">
            <PackageCheck className="w-4 h-4" />
            <span>ლექტორის ჩასაბარებელი #1</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            პროექტის საქაღალდე Git-ის ისტორიით (.git-ის ჩათვლით)
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
            სრული დავალების რეპოზიტორია დაარქივებულია ZIP ფორმატში, რომელიც შეიცავს ყველა ფაილს, ბრენჩს და <code className="text-emerald-400 font-mono">.git</code> საქაღალდეს. შეგიძლიათ ჩამოტვირთოთ პირდაპირ ან დაათვალიეროთ შიგთავსი.
          </p>
        </div>

        <button
          onClick={handleDownloadZip}
          className="px-5 py-3 text-sm font-bold rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-600/20 transition cursor-pointer flex items-center gap-2 shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>ჩამოტვირთე learning-center.zip</span>
        </button>
      </div>

      {/* Explorer Workspace */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left: File Tree (4 cols) */}
        <div className="md:col-span-4 bg-slate-900 rounded-2xl border border-slate-800 p-4 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Folder className="w-4 h-4 text-amber-400" />
                <span>ფაილების ხე (Tree)</span>
              </span>
              <span className="text-[10px] text-slate-500 font-mono">
                learning-center/
              </span>
            </div>

            <div className="space-y-1 font-mono text-xs">
              {/* Root Directory */}
              <div className="p-1.5 font-bold text-slate-200 flex items-center gap-1.5">
                <Folder className="w-4 h-4 text-amber-400" />
                <span>learning-center/</span>
              </div>

              {/* Sub items */}
              <div className="pl-4 space-y-1 border-l border-slate-800 ml-3">
                {/* .git folder */}
                <div className="space-y-1">
                  <div className="p-1 text-slate-400 flex items-center gap-1.5 select-none font-semibold">
                    <Folder className="w-3.5 h-3.5 text-blue-400" />
                    <span>.git/ (რეალური ისტორია)</span>
                  </div>
                  <div className="pl-4 space-y-0.5 border-l border-slate-800 ml-2">
                    <button
                      onClick={() => setSelectedFile('.git/HEAD')}
                      className={`w-full text-left px-2 py-1 rounded transition flex items-center gap-1.5 cursor-pointer ${
                        selectedFile === '.git/HEAD' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                      }`}
                    >
                      <GitBranch className="w-3 h-3 text-emerald-400" />
                      <span>HEAD</span>
                    </button>

                    <button
                      onClick={() => setSelectedFile('.git/config')}
                      className={`w-full text-left px-2 py-1 rounded transition flex items-center gap-1.5 cursor-pointer ${
                        selectedFile === '.git/config' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                      }`}
                    >
                      <FileText className="w-3 h-3 text-cyan-400" />
                      <span>config</span>
                    </button>
                  </div>
                </div>

                {/* Working Tree Files */}
                <button
                  onClick={() => setSelectedFile('index.html')}
                  className={`w-full text-left px-2 py-1.5 rounded transition flex items-center justify-between cursor-pointer ${
                    selectedFile === 'index.html' ? 'bg-blue-600 text-white font-bold' : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <FileCode className="w-3.5 h-3.5 text-amber-400" />
                    <span>index.html</span>
                  </span>
                  <span className="text-[10px] text-emerald-300 bg-emerald-950 px-1 rounded">მთავარი</span>
                </button>

                <button
                  onClick={() => setSelectedFile('contact.html')}
                  className={`w-full text-left px-2 py-1.5 rounded transition flex items-center justify-between cursor-pointer ${
                    selectedFile === 'contact.html' ? 'bg-blue-600 text-white font-bold' : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <FileCode className="w-3.5 h-3.5 text-blue-400" />
                    <span>contact.html</span>
                  </span>
                  <span className="text-[10px] text-blue-300 bg-blue-950 px-1 rounded">კონტაქტი</span>
                </button>

                <button
                  onClick={() => setSelectedFile('README.md')}
                  className={`w-full text-left px-2 py-1.5 rounded transition flex items-center justify-between cursor-pointer ${
                    selectedFile === 'README.md' ? 'bg-blue-600 text-white font-bold' : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-purple-400" />
                    <span>README.md</span>
                  </span>
                  <span className="text-[10px] text-slate-400 bg-slate-800 px-1 rounded">დოკუმენტი</span>
                </button>

                {/* Conflict snapshot */}
                <button
                  onClick={() => setSelectedFile('conflicted_index.html')}
                  className={`w-full text-left px-2 py-1.5 rounded transition flex items-center justify-between cursor-pointer ${
                    selectedFile === 'conflicted_index.html' ? 'bg-rose-600 text-white font-bold' : 'text-slate-400 hover:text-rose-200 hover:bg-rose-950/30'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <FileCode className="w-3.5 h-3.5 text-rose-400" />
                    <span>[კონფლიქტის ფაილი]</span>
                  </span>
                  <span className="text-[10px] text-rose-300 bg-rose-950 px-1 rounded">სნეპშოტი</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick ZIP Card */}
          <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2">
              <FolderArchive className="w-5 h-5 text-emerald-400" />
              <div>
                <div className="font-bold text-xs text-white">learning-center.zip</div>
                <div className="text-[10px] text-slate-400">მოცულობა: ~38 KB (.git-ით)</div>
              </div>
            </div>
            <button
              onClick={handleDownloadZip}
              className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg transition cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>ჩამოტვირთვა</span>
            </button>
          </div>
        </div>

        {/* Right: File Content Inspector (8 cols) */}
        <div className="md:col-span-8 bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-blue-400" />
                <span className="font-mono text-sm font-bold text-white">{selectedFile}</span>
              </div>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'დაკოპირდა!' : 'ფაილის კოპირება'}</span>
              </button>
            </div>

            {/* Code Box */}
            <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 font-mono text-xs overflow-x-auto max-h-[460px] text-slate-300">
              <pre className="whitespace-pre-wrap leading-relaxed">
                {getFileContent()}
              </pre>
            </div>
          </div>

          {/* Local testing instructions */}
          <div className="mt-5 pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-1.5">
            <span className="font-bold text-slate-200 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>როგორ შევამოწმოთ გადმოწერილი არქივი ლოკალურად:</span>
            </span>
            <div className="font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-300 text-[11px]">
              unzip learning-center.zip<br />
              cd learning-center<br />
              git log --graph --oneline --all<br />
              git status
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
