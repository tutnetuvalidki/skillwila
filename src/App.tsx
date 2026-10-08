/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { WebsitePreview } from './components/WebsitePreview';
import { StepGuide } from './components/StepGuide';
import { GitGraphViewer } from './components/GitGraphViewer';
import { ConflictViewer } from './components/ConflictViewer';
import { QuestionsViewer } from './components/QuestionsViewer';
import { FileExplorer } from './components/FileExplorer';
import { SubmissionSummaryModal } from './components/SubmissionSummaryModal';
import { 
  GitBranch, 
  Terminal, 
  Globe, 
  AlertTriangle, 
  HelpCircle, 
  FolderArchive,
  Download,
  CheckCircle2,
  ExternalLink,
  BookOpen
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('website');
  const [isReportOpen, setIsReportOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenReport={() => setIsReportOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'website' && <WebsitePreview />}
        {activeTab === 'steps' && <StepGuide />}
        {activeTab === 'graph' && <GitGraphViewer />}
        {activeTab === 'conflict' && <ConflictViewer />}
        {activeTab === 'questions' && <QuestionsViewer />}
        {activeTab === 'files' && <FileExplorer />}
      </main>

      {/* Submission Checklist Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-6 mt-12 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-lg bg-blue-600/30 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <span className="font-semibold text-slate-200 block">
                პრაქტიკული დავალება: ვებსაიტის განვითარება ბრენჩებით
              </span>
              <span className="text-[11px] text-slate-500">
                სასწავლო ცენტრი 'SkillHub Academy' &bull; Git Repository & Documentation
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <button
              onClick={() => setActiveTab('graph')}
              className="hover:text-blue-400 transition cursor-pointer"
            >
              ჩასაბარებელი #2: გრაფიკული ისტორია
            </button>
            <span className="text-slate-700">&bull;</span>
            <button
              onClick={() => setActiveTab('conflict')}
              className="hover:text-rose-400 transition cursor-pointer"
            >
              ჩასაბარებელი #3: კონფლიქტის სქრინშოტი
            </button>
            <span className="text-slate-700">&bull;</span>
            <button
              onClick={() => setActiveTab('questions')}
              className="hover:text-emerald-400 transition cursor-pointer"
            >
              ჩასაბარებელი #4: პასუხები (6, 7, 8)
            </button>
          </div>
        </div>
      </footer>

      {/* Report Summary Modal */}
      <SubmissionSummaryModal 
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
        onSelectTab={(tabId) => setActiveTab(tabId)}
      />
    </div>
  );
}
