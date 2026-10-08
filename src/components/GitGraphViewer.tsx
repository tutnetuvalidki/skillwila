import React, { useState } from 'react';
import { 
  GitBranch, 
  GitCommit, 
  Terminal, 
  Copy, 
  Check, 
  Camera, 
  Maximize2, 
  Info, 
  CheckCircle2,
  Calendar,
  User,
  ShieldCheck
} from 'lucide-react';
import gitData from '../gitData.json';

export const GitGraphViewer: React.FC = () => {
  const [copiedGraph, setCopiedGraph] = useState(false);
  const [activeView, setActiveView] = useState<'visual' | 'terminal' | 'both'>('both');
  const [screenshotMode, setScreenshotMode] = useState(false);

  const handleCopyGraph = () => {
    navigator.clipboard.writeText(gitData.logOneline);
    setCopiedGraph(true);
    setTimeout(() => setCopiedGraph(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Screenshot Banner */}
      <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-blue-950/40 border border-emerald-500/30 rounded-2xl p-5 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase text-emerald-400 tracking-wider">
            <Camera className="w-4 h-4" />
            <span>ლექტორის ჩასაბარებელი #2</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            კომიტებისა და ბრენჩების გრაფიკული ისტორია
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
            მოცემული გრაფი ასახავს რეპოზიტორიის სრულ ციკლს: საწყის კომიტს, <code className="text-blue-400">feature-courses</code> და <code className="text-purple-400">feature-contact</code> ბრენჩების შერწყმას, პარალელურ <code className="text-amber-400">title-a</code> და <code className="text-rose-400">title-b</code> შტოებს და კონფლიქტის შემდგომ საბოლოო მერჯს.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setScreenshotMode(!screenshotMode)}
            className={`px-3.5 py-2 text-xs font-semibold rounded-xl border transition cursor-pointer flex items-center gap-1.5 ${
              screenshotMode
                ? 'bg-emerald-600 text-white border-emerald-500 shadow-lg'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
            }`}
          >
            <Camera className="w-3.5 h-3.5 text-emerald-400" />
            <span>{screenshotMode ? 'ჩვეულებრივი ხედი' : 'სქრინშოტის რეჟიმი'}</span>
          </button>

          <button
            onClick={handleCopyGraph}
            className="px-3 py-2 text-xs font-medium rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition cursor-pointer flex items-center gap-1.5"
          >
            {copiedGraph ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedGraph ? 'დაკოპირდა!' : 'CLI ლოგის კოპირება'}</span>
          </button>
        </div>
      </div>

      {/* Main Graph Card (Ready for Screenshot) */}
      <div 
        id="git-graph-capture-frame"
        className={`bg-slate-900 rounded-2xl border ${
          screenshotMode ? 'border-2 border-emerald-500 shadow-2xl p-6 sm:p-8' : 'border-slate-800 p-6'
        } transition-all`}
      >
        {/* Screenshot Watermark Header */}
        <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-slate-800 gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold uppercase font-mono">
                Artifact #2: Git Graph & History
              </span>
              <span className="text-xs text-slate-400 font-mono">
                repo: learning-center/.git
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-100 mt-1">
              Git რეპოზიტორიის სრული გრაფიკული ხე (Branching & Merge History)
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700 font-mono">
              სულ 11 კომიტი &bull; 5 ბრენჩი
            </span>
          </div>
        </div>

        {/* Visual Graph Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Visual SVG & Interactive Graph (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950 rounded-xl border border-slate-800 p-5 overflow-x-auto shadow-inner">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-blue-400" />
                <span>ინტერაქტიული შტოების დიაგრამა</span>
              </h4>
              <div className="flex flex-wrap items-center gap-2 text-[10px]">
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">main</span>
                <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">feature-courses</span>
                <span className="px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">feature-contact</span>
                <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">title-a</span>
                <span className="px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800">title-b</span>
              </div>
            </div>

            {/* SVG Visual Flow */}
            <div className="min-w-[480px] py-2">
              <svg viewBox="0 0 540 680" className="w-full h-auto text-slate-100 font-sans text-xs">
                <defs>
                  <linearGradient id="mainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                </defs>

                {/* Vertical Backbone Guide (main branch line x=120) */}
                <line x1="120" y1="620" x2="120" y2="40" stroke="#10b981" strokeWidth="3" strokeDasharray="none" />

                {/* Commit 1: Initial commit (x=120, y=620) */}
                <circle cx="120" cy="620" r="10" fill="#10b981" stroke="#047857" strokeWidth="3" />
                <text x="145" y="625" fill="#f1f5f9" fontWeight="bold" fontSize="12">c42e75e</text>
                <text x="215" y="625" fill="#94a3b8" fontSize="11">Initial commit: index.html & README.md</text>

                {/* Branch: feature-courses (x=240) */}
                <path d="M 120 620 C 180 620, 240 570, 240 540 L 240 450" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
                
                {/* Commit 2: courses list (x=240, y=540) */}
                <circle cx="240" cy="540" r="8" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
                <text x="260" y="544" fill="#93c5fd" fontWeight="bold" fontSize="11">8fc359c</text>
                <text x="320" y="544" fill="#94a3b8" fontSize="10">feat: დაემატა 3 კურსის სია</text>

                {/* Commit 3: duration (x=240, y=470) */}
                <circle cx="240" cy="470" r="8" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
                <text x="260" y="474" fill="#93c5fd" fontWeight="bold" fontSize="11">f56639c</text>
                <text x="320" y="474" fill="#94a3b8" fontSize="10">feat: დაემატა ხანგრძლივობა</text>

                {/* Merge feature-courses -> main (x=120, y=430) */}
                <path d="M 240 470 C 240 440, 180 430, 120 430" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
                <circle cx="120" cy="430" r="10" fill="#10b981" stroke="#047857" strokeWidth="3" />
                <text x="145" y="435" fill="#f1f5f9" fontWeight="bold" fontSize="12">18c77a0</text>
                <text x="215" y="435" fill="#38bdf8" fontSize="11 font-semibold">Merge branch feature-courses into main</text>

                {/* Branch: feature-contact from main (x=240) */}
                <path d="M 120 430 C 180 430, 240 390, 240 370 L 240 340" fill="none" stroke="#a855f7" strokeWidth="2.5" />
                
                {/* Commit 4: contact.html (x=240, y=360) */}
                <circle cx="240" cy="360" r="8" fill="#a855f7" stroke="#7e22ce" strokeWidth="2" />
                <text x="260" y="364" fill="#d8b4fe" fontWeight="bold" fontSize="11">cd45baf</text>
                <text x="320" y="364" fill="#94a3b8" fontSize="10">feat: contact.html (ელფოსტა, ტელ...)</text>

                {/* Merge feature-contact -> main (x=120, y=320) */}
                <path d="M 240 360 C 240 330, 180 320, 120 320" fill="none" stroke="#a855f7" strokeWidth="2.5" />
                <circle cx="120" cy="320" r="10" fill="#10b981" stroke="#047857" strokeWidth="3" />
                <text x="145" y="325" fill="#f1f5f9" fontWeight="bold" fontSize="12">1ac7096</text>
                <text x="215" y="325" fill="#c084fc" fontSize="11 font-semibold">Merge branch feature-contact into main</text>

                {/* Commit on main: add link in index.html (x=120, y=260) */}
                <circle cx="120" cy="260" r="9" fill="#10b981" stroke="#047857" strokeWidth="2" />
                <text x="145" y="265" fill="#f1f5f9" fontWeight="bold" fontSize="12">e030b89</text>
                <text x="215" y="265" fill="#94a3b8" fontSize="11">feat: მთავარ გვერდზე საკონტაქტო ბმული</text>

                {/* Branch: title-a (x=240) and title-b (x=360) branching from e030b89 */}
                <path d="M 120 260 C 170 260, 220 230, 220 200" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
                <path d="M 120 260 C 220 260, 360 230, 360 170" fill="none" stroke="#f43f5e" strokeWidth="2.5" />

                {/* Commit: title-a (x=220, y=200) */}
                <circle cx="220" cy="200" r="8" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
                <text x="235" y="204" fill="#fcd34d" fontWeight="bold" fontSize="10">ae351b9</text>
                <text x="290" y="204" fill="#fef3c7" fontSize="10">title-a: SkillHub Tech</text>

                {/* Commit: title-b (x=360, y=160) */}
                <circle cx="360" cy="160" r="8" fill="#f43f5e" stroke="#be123c" strokeWidth="2" />
                <text x="375" y="164" fill="#fda4af" fontWeight="bold" fontSize="10">640f284</text>
                <text x="430" y="164" fill="#ffe4e6" fontSize="10">title-b: SkillHub Academy</text>

                {/* Merge title-a -> main (x=120, y=150) */}
                <path d="M 220 200 C 220 160, 170 150, 120 150" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
                <circle cx="120" cy="150" r="10" fill="#10b981" stroke="#047857" strokeWidth="3" />
                <text x="145" y="155" fill="#f1f5f9" fontWeight="bold" fontSize="12">a580b78</text>
                <text x="215" y="155" fill="#fde68a" fontSize="11 font-semibold">Merge branch title-a into main</text>

                {/* Merge title-b -> main causing CONFLICT and then resolution commit (x=120, y=60) */}
                <path d="M 360 160 C 360 90, 200 60, 120 60" fill="none" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="4 2" />
                
                {/* Conflict Marker Callout */}
                <rect x="230" y="80" width="130" height="24" rx="4" fill="#7f1d1d" stroke="#ef4444" strokeWidth="1" />
                <text x="240" y="96" fill="#fecaca" fontSize="10" fontWeight="bold">⚡ Merge Conflict!</text>

                {/* Final Resolved Merge Commit (x=120, y=60) */}
                <circle cx="120" cy="60" r="12" fill="#10b981" stroke="#34d399" strokeWidth="4" />
                <text x="145" y="65" fill="#34d399" fontWeight="bold" fontSize="13">95b6b7b</text>
                <text x="220" y="65" fill="#ffffff" fontWeight="bold" fontSize="12">HEAD -&gt; main (Resolved Commit)</text>

                {/* Branch Head Pointer Badge */}
                <rect x="15" y="48" width="85" height="24" rx="6" fill="#047857" stroke="#10b981" strokeWidth="1" />
                <text x="25" y="64" fill="#ecfdf5" fontWeight="bold" fontSize="10">HEAD -&gt; main</text>
              </svg>
            </div>
          </div>

          {/* Authentic Terminal Output (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="bg-slate-950 rounded-xl border border-slate-800 p-4 h-full flex flex-col shadow-inner">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-200 font-mono font-semibold">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  git log --graph --oneline --all
                </span>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                  რეალური რეპოზიტორია
                </span>
              </div>

              {/* Terminal Raw Graph View */}
              <div className="font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto flex-1 select-all bg-black/40 p-3 rounded-lg border border-slate-900">
                <pre className="whitespace-pre">
                  {gitData.logOneline}
                </pre>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                <span>რეჟიმი: <strong className="text-slate-200">Standard Git CLI</strong></span>
                <span className="text-emerald-400 font-medium">✓ 100% შესაბამისობა</span>
              </div>
            </div>

            {/* Verification checklist note */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="font-bold text-slate-200 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>გრაფიკული ისტორიის ანალიზი ლექტორისთვის:</span>
              </div>
              <ul className="space-y-1 list-disc list-inside text-slate-400 text-[11px]">
                <li><strong className="text-slate-300">საწყისი კომიტი:</strong> <code className="text-cyan-400">c42e75e</code> (Initial commit)</li>
                <li><strong className="text-slate-300">კურსების ბრენჩი:</strong> 2 კომიტი (<code className="text-cyan-400">8fc359c</code>, <code className="text-cyan-400">f56639c</code>)</li>
                <li><strong className="text-slate-300">კონტაქტის ბრენჩი:</strong> 1 კომიტი (<code className="text-cyan-400">cd45baf</code>) main-იდან</li>
                <li><strong className="text-slate-300">პარალელური ბრენჩები:</strong> <code className="text-amber-400">title-a</code> და <code className="text-rose-400">title-b</code></li>
                <li><strong className="text-slate-300">კონფლიქტის მოგვარება:</strong> მერჯ-კომიტი <code className="text-emerald-400">95b6b7b</code></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed Commit History Table */}
        <div className="mt-6 pt-6 border-t border-slate-800">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <GitCommit className="w-4 h-4 text-emerald-400" />
            <span>კომიტების სრული რეესტრი (Commit Log Details):</span>
          </h4>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-xs font-mono text-slate-300">
              <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
                <tr>
                  <th className="py-2.5 px-3">ჰეში (Hash)</th>
                  <th className="py-2.5 px-3">შეტყობინება (Commit Message)</th>
                  <th className="py-2.5 px-3">ბრენჩი / Ref</th>
                  <th className="py-2.5 px-3">ავტორი</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-900/60 font-sans">
                {gitData.commits.map((c) => (
                  <tr key={c.shortHash} className="hover:bg-slate-800/40 transition">
                    <td className="py-2 px-3 font-mono font-bold text-blue-400 whitespace-nowrap">
                      {c.shortHash}
                    </td>
                    <td className="py-2 px-3 text-slate-200">
                      {c.message}
                    </td>
                    <td className="py-2 px-3 whitespace-nowrap">
                      {c.refs ? (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30">
                          {c.refs.trim()}
                        </span>
                      ) : (
                        <span className="text-slate-600 font-mono text-[11px]">-</span>
                      )}
                    </td>
                    <td className="py-2 px-3 text-slate-400 text-xs whitespace-nowrap">
                      {c.author}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
