import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Camera, 
  Copy, 
  Check, 
  FileCode, 
  GitMerge, 
  Split, 
  CheckCircle2, 
  HelpCircle,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { ASSIGNMENT_DATA } from '../data/assignmentData';

export const ConflictViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'editor' | 'raw' | 'diff'>('editor');
  const [resolutionPreview, setResolutionPreview] = useState<'conflict' | 'current' | 'incoming' | 'merged'>('conflict');
  const [copied, setCopied] = useState(false);
  const [screenshotMode, setScreenshotMode] = useState(false);

  const rawConflict = ASSIGNMENT_DATA.files.conflictedIndexHtml;

  const handleCopyConflict = () => {
    navigator.clipboard.writeText(rawConflict);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-rose-950/40 via-slate-900 to-amber-950/40 border border-rose-500/30 rounded-2xl p-5 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase text-rose-400 tracking-wider">
            <Camera className="w-4 h-4" />
            <span>ლექტორის ჩასაბარებელი #3</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            კონფლიქტის სქრინშოტი მის მოგვარებამდე (Merge Conflict)
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
            ფაილ <code className="text-amber-400 font-mono">index.html</code>-ში წარმოქმნილი კონფლიქტი <code className="text-blue-400">title-a</code> და <code className="text-purple-400">title-b</code> ბრენჩების შერწყმისას, Git-ის ოფიციალური მარკერებით (<code className="text-rose-400 font-mono">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</code>, <code className="text-slate-400 font-mono">=======</code>, <code className="text-cyan-400 font-mono">&gt;&gt;&gt;&gt;&gt;&gt;&gt; title-b</code>).
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setScreenshotMode(!screenshotMode)}
            className={`px-3.5 py-2 text-xs font-semibold rounded-xl border transition cursor-pointer flex items-center gap-1.5 ${
              screenshotMode
                ? 'bg-rose-600 text-white border-rose-500 shadow-lg'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
            }`}
          >
            <Camera className="w-3.5 h-3.5 text-rose-400" />
            <span>{screenshotMode ? 'ჩვეულებრივი ხედი' : 'სქრინშოტის რეჟიმი'}</span>
          </button>

          <button
            onClick={handleCopyConflict}
            className="px-3 py-2 text-xs font-medium rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition cursor-pointer flex items-center gap-1.5"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'დაკოპირდა!' : 'კონფლიქტის კოპირება'}</span>
          </button>
        </div>
      </div>

      {/* Screenshot Frame Card */}
      <div 
        id="conflict-capture-frame"
        className={`bg-slate-900 rounded-2xl border ${
          screenshotMode ? 'border-2 border-rose-500 shadow-2xl p-6 sm:p-8' : 'border-slate-800 p-6'
        } transition-all`}
      >
        {/* Artifact Watermark */}
        <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-slate-800 gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[11px] font-bold uppercase font-mono">
                Artifact #3: Merge Conflict Before Resolution
              </span>
              <span className="text-xs text-slate-400 font-mono">
                index.html &bull; Line 15-19
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-100 mt-1">
              მერჯის კონფლიქტი ფაილ index.html-ში (title-b შერწყმის მომენტში)
            </h3>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setActiveTab('editor')}
              className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                activeTab === 'editor'
                  ? 'bg-rose-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              VS Code კონფლიქტის ხედი
            </button>
            <button
              onClick={() => setActiveTab('raw')}
              className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                activeTab === 'raw'
                  ? 'bg-rose-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              ნედლი ტექსტი მარკერებით
            </button>
            <button
              onClick={() => setActiveTab('diff')}
              className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                activeTab === 'diff'
                  ? 'bg-rose-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              შედარება (Diff Analysis)
            </button>
          </div>
        </div>

        {/* Terminal Output that triggered conflict */}
        <div className="mb-6 bg-slate-950 rounded-xl border border-slate-800 p-3.5 font-mono text-xs text-rose-300 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="text-slate-400 text-[11px] font-semibold">
              $ git checkout main &amp;&amp; git merge title-b
            </div>
            <div className="text-slate-300">Auto-merging index.html</div>
            <div className="text-rose-400 font-bold">
              CONFLICT (content): Merge conflict in index.html
            </div>
            <div className="text-amber-300">
              Automatic merge failed; fix conflicts and then commit the result.
            </div>
          </div>
        </div>

        {/* Tab 1: VS Code Styled Editor View */}
        {activeTab === 'editor' && (
          <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden font-mono text-xs sm:text-sm">
            {/* VS Code Tab Bar */}
            <div className="bg-slate-900/90 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-amber-400" />
                <span className="text-slate-200 font-semibold">index.html</span>
                <span className="text-[10px] bg-rose-950 text-rose-300 px-1.5 py-0.5 rounded border border-rose-800 font-bold">
                  ! Conflict
                </span>
              </div>
              <span className="text-[11px] text-slate-500">UTF-8 &bull; HTML</span>
            </div>

            {/* Code Body with Conflict Highlights */}
            <div className="p-4 overflow-x-auto space-y-1 leading-relaxed">
              <div className="text-slate-600">&lt;!DOCTYPE html&gt;</div>
              <div className="text-slate-600">&lt;html lang=&quot;ka&quot;&gt;</div>
              <div className="text-slate-600">&lt;body&gt;</div>
              <div className="text-slate-600 pl-4">&lt;header&gt;</div>
              <div className="text-slate-600 pl-8">&lt;nav&gt;&lt;a href=&quot;index.html&quot;&gt;მთავარი&lt;/a&gt; | &lt;a href=&quot;contact.html&quot;&gt;კონტაქტი&lt;/a&gt;&lt;/nav&gt;</div>
              
              {/* Conflict Block Header Action Bar */}
              <div className="my-2 bg-slate-900 border border-slate-700 rounded-lg p-2 flex flex-wrap items-center justify-between gap-2 text-xs font-sans">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  <span>კონფლიქტის მოგვარების ოფციები:</span>
                </span>
                <div className="flex items-center gap-2 text-[11px]">
                  <span className="text-blue-400 hover:underline cursor-pointer">Accept Current Change</span>
                  <span className="text-slate-600">|</span>
                  <span className="text-purple-400 hover:underline cursor-pointer">Accept Incoming Change</span>
                  <span className="text-slate-600">|</span>
                  <span className="text-emerald-400 hover:underline cursor-pointer">Accept Both Changes</span>
                </div>
              </div>

              {/* Conflict Section 1: HEAD (Current) */}
              <div className="bg-blue-950/40 border-l-4 border-blue-500 p-2.5 rounded-r">
                <div className="text-[11px] font-bold text-blue-400 select-none pb-1">
                  &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD (Current Change: main / title-a)
                </div>
                <div className="text-blue-200 font-semibold pl-4">
                  &lt;h1&gt;{ASSIGNMENT_DATA.conflictDetails.branchA.titleText}&lt;/h1&gt;
                </div>
              </div>

              {/* Divider */}
              <div className="bg-slate-800 text-slate-400 py-1 px-2.5 font-bold select-none text-[11px] rounded">
                =======
              </div>

              {/* Conflict Section 2: Incoming (title-b) */}
              <div className="bg-purple-950/40 border-l-4 border-purple-500 p-2.5 rounded-r">
                <div className="text-purple-200 font-semibold pl-4">
                  &lt;h1&gt;{ASSIGNMENT_DATA.conflictDetails.branchB.titleText}&lt;/h1&gt;
                </div>
                <div className="text-[11px] font-bold text-purple-400 select-none pt-1">
                  &gt;&gt;&gt;&gt;&gt;&gt;&gt; title-b (Incoming Change)
                </div>
              </div>

              {/* Remaining Code */}
              <div className="text-slate-600 pl-8 pt-2">
                &lt;p&gt;მოგესალმებით სასწავლო ცენტრში! ჩვენ გთავაზობთ მაღალი ხარისხის პრაქტიკულ განათლებას...&lt;/p&gt;
              </div>
              <div className="text-slate-600 pl-4">&lt;/header&gt;</div>
              <div className="text-slate-600">&lt;/body&gt;</div>
            </div>
          </div>
        )}

        {/* Tab 2: Raw Conflicted File View */}
        {activeTab === 'raw' && (
          <div className="bg-slate-950 rounded-xl border border-slate-800 p-4 font-mono text-xs sm:text-sm overflow-x-auto text-slate-300">
            <div className="text-xs text-slate-500 pb-2 mb-2 border-b border-slate-800">
              ფაილის ზუსტი ნედლი შინაარსი კონფლიქტის მომენტში (cat index.html):
            </div>
            <pre className="whitespace-pre-wrap leading-relaxed">
              {rawConflict.split('\n').map((line, idx) => {
                const isHead = line.startsWith('<<<<<<<');
                const isDivider = line.startsWith('=======');
                const isTail = line.startsWith('>>>>>>>');
                const isConflictContent = line.includes('SkillHub Tech') || line.includes('SkillHub Academy');

                return (
                  <div 
                    key={idx} 
                    className={`${
                      isHead ? 'bg-blue-950 text-blue-300 font-bold px-2 py-0.5 rounded' :
                      isDivider ? 'bg-slate-800 text-slate-200 font-bold px-2 py-0.5 rounded' :
                      isTail ? 'bg-purple-950 text-purple-300 font-bold px-2 py-0.5 rounded' :
                      isConflictContent ? 'bg-amber-950/40 text-amber-200 font-bold px-2 py-0.5' :
                      'text-slate-400'
                    }`}
                  >
                    <span className="inline-block w-8 text-slate-600 select-none text-right mr-3 font-mono">
                      {idx + 1}
                    </span>
                    {line}
                  </div>
                );
              })}
            </pre>
          </div>
        )}

        {/* Tab 3: Side-by-Side Diff Analysis */}
        {activeTab === 'diff' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Branch A */}
              <div className="bg-slate-950 rounded-xl border border-blue-900/60 p-4">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
                  <span className="font-bold text-xs text-blue-400 font-mono">
                    Branch: title-a (HEAD)
                  </span>
                  <span className="text-[10px] bg-blue-950 text-blue-300 px-2 py-0.5 rounded">
                    Current
                  </span>
                </div>
                <div className="font-mono text-xs bg-slate-900 p-3 rounded-lg border border-slate-800 text-blue-200">
                  &lt;h1&gt;{ASSIGNMENT_DATA.conflictDetails.branchA.titleText}&lt;/h1&gt;
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  კომიტი: <code className="text-slate-300">ae351b9</code> - ვარიანტი A ფოკუსირებულია ტექნოლოგიურ აკადემიაზე.
                </p>
              </div>

              {/* Branch B */}
              <div className="bg-slate-950 rounded-xl border border-purple-900/60 p-4">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
                  <span className="font-bold text-xs text-purple-400 font-mono">
                    Branch: title-b
                  </span>
                  <span className="text-[10px] bg-purple-950 text-purple-300 px-2 py-0.5 rounded">
                    Incoming
                  </span>
                </div>
                <div className="font-mono text-xs bg-slate-900 p-3 rounded-lg border border-slate-800 text-purple-200">
                  &lt;h1&gt;{ASSIGNMENT_DATA.conflictDetails.branchB.titleText}&lt;/h1&gt;
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  კომიტი: <code className="text-slate-300">640f284</code> - ვარიანტი B ფოკუსირებულია ინოვაციურ განათლებაზე.
                </p>
              </div>
            </div>

            {/* Final Synthesis Solution */}
            <div className="bg-emerald-950/40 rounded-xl border border-emerald-500/40 p-5 text-emerald-200">
              <div className="flex items-center gap-2 font-bold text-sm text-emerald-300 mb-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>ჩვენ მიერ შერჩეული მოგვარებული საბოლოო ვერსია (Synthesis):</span>
              </div>
              <div className="font-mono text-xs sm:text-sm bg-slate-950 p-3.5 rounded-lg border border-emerald-800/60 text-white font-bold">
                &lt;h1&gt;{ASSIGNMENT_DATA.conflictDetails.resolved.titleText}&lt;/h1&gt;
              </div>
              <p className="text-xs text-emerald-300/80 mt-2 leading-relaxed">
                {ASSIGNMENT_DATA.conflictDetails.resolved.explanation}
              </p>
            </div>
          </div>
        )}

        {/* Step 5 Resolution Process Box */}
        <div className="mt-6 pt-5 border-t border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <strong className="block text-slate-200 mb-1 font-semibold">1. კონფლიქტის იდენტიფიცირება:</strong>
            <span className="text-slate-400">Git აჩერებს პროცესს, index.html ხდება unmerged და იქმნება 3 მარკერი.</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <strong className="block text-slate-200 mb-1 font-semibold">2. ხელით გასუფთავება:</strong>
            <span className="text-slate-400">წაიშალა &lt;&lt;&lt;&lt;&lt;&lt;&lt;, ======= და &gt;&gt;&gt;&gt;&gt;&gt;&gt; და დარჩა მხოლოდ 1 სასურველი სათაური.</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <strong className="block text-slate-200 mb-1 font-semibold">3. დაფიქსირება (Merge Commit):</strong>
            <span className="text-slate-400">git add index.html &amp;&amp; git commit -m &quot;fix(conflict): ...&quot;</span>
          </div>
        </div>
      </div>
    </div>
  );
};
