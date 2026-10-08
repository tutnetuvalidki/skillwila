import React, { useState } from 'react';
import { 
  Globe, 
  Code2, 
  Copy, 
  Check, 
  ExternalLink, 
  BookOpen, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Sparkles,
  ArrowRight,
  Info,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { ASSIGNMENT_DATA } from '../data/assignmentData';

export const WebsitePreview: React.FC = () => {
  const [activePage, setActivePage] = useState<'index' | 'contact'>('index');
  const [viewMode, setViewMode] = useState<'rendered' | 'code'>('rendered');
  const [copied, setCopied] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [registered, setRegistered] = useState(false);

  const currentCode = activePage === 'index' 
    ? ASSIGNMENT_DATA.files.indexHtml 
    : ASSIGNMENT_DATA.files.contactHtml;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <div className="bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-slate-900 border border-blue-500/20 rounded-2xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase text-blue-400 tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>ლექტორის მოთხოვნა: index.html მზადყოფნა დოკუმენტაციასთან ერთად</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              სასწავლო ცენტრის ოფიციალური ვებსაიტი
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-3xl">
              ეს არის Git ბრენჩებით განვითარებული და კონფლიქტ-გადაწყვეტილი საბოლოო ვერსია. 
              შეგიძლიათ რეალურ რეჟიმში დაათვალიეროთ როგორც თავად ვებგვერდი, ისე მისი ზუსტი სუფთა HTML კოდი.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="bg-slate-800/80 p-1 rounded-xl border border-slate-700 flex items-center">
              <button
                onClick={() => setViewMode('rendered')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'rendered'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>ვიზუალური საიტი</span>
              </button>
              <button
                onClick={() => setViewMode('code')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'code'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>ნედლი HTML კოდი</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Browser Mockup Window */}
      <div className="bg-slate-900 rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden">
        {/* Browser Top Bar */}
        <div className="bg-slate-800/90 px-4 py-3 border-b border-slate-700 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
            </div>

            {/* Page Tabs inside Browser */}
            <div className="flex items-center bg-slate-900/80 rounded-lg p-0.5 border border-slate-700/60">
              <button
                onClick={() => setActivePage('index')}
                className={`px-3 py-1 text-xs font-mono rounded-md transition cursor-pointer flex items-center gap-1.5 ${
                  activePage === 'index'
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>index.html</span>
                <span className="text-[10px] text-blue-200 bg-blue-700/50 px-1 rounded">მთავარი</span>
              </button>
              <button
                onClick={() => setActivePage('contact')}
                className={`px-3 py-1 text-xs font-mono rounded-md transition cursor-pointer flex items-center gap-1.5 ${
                  activePage === 'contact'
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>contact.html</span>
                <span className="text-[10px] text-slate-400 bg-slate-800 px-1 rounded">კონტაქტი</span>
              </button>
            </div>
          </div>

          {/* Browser Address Bar */}
          <div className="flex-1 max-w-md hidden sm:flex items-center gap-2 bg-slate-950/70 border border-slate-700/70 rounded-full px-3 py-1 text-xs text-slate-300 font-mono">
            <span className="text-emerald-400">https://</span>
            <span>learning-center.local/</span>
            <span className="text-blue-400 font-bold">{activePage}.html</span>
          </div>

          <div className="flex items-center gap-2">
            {viewMode === 'code' && (
              <button
                onClick={handleCopyCode}
                className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 transition flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'დაკოპირდა!' : 'კოდის კოპირება'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Content Area */}
        {viewMode === 'rendered' ? (
          <div className="bg-slate-50 text-slate-900 min-h-[520px] p-6 sm:p-10 font-sans">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
              {/* Site Header & Navigation */}
              <div className="p-6 sm:p-8 border-b border-slate-100 bg-gradient-to-b from-blue-50/50 to-white">
                <nav className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                      S
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 tracking-tight text-base sm:text-lg">SkillHub Academy</span>
                      <span className="hidden sm:inline-block text-xs text-slate-500 ml-2">| სასწავლო ცენტრი</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm font-semibold">
                    <button
                      onClick={() => setActivePage('index')}
                      className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                        activePage === 'index'
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      მთავარი
                    </button>
                    <span className="text-slate-300">|</span>
                    <button
                      onClick={() => setActivePage('contact')}
                      className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                        activePage === 'contact'
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      კონტაქტი
                    </button>
                  </div>
                </nav>

                {activePage === 'index' ? (
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
                      <span>✓ მოგვარებული სათაური (title-a + title-b სინთეზი)</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      {ASSIGNMENT_DATA.centerName}
                    </h1>
                    <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
                      მოგესალმებით სასწავლო ცენტრში! ჩვენ გთავაზობთ მაღალი ხარისხის პრაქტიკულ განათლებას 
                      ტექნოლოგიების მიმართულებით, ინდივიდუალური მენტორობითა და რეალური პროექტებით.
                    </p>
                  </div>
                ) : (
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      საკონტაქტო ინფორმაცია
                    </h1>
                    <p className="mt-2 text-slate-600 text-sm sm:text-base">
                      მოგვწერეთ, დაგვირეკეთ ან გვეწვიეთ სასწავლო ცენტრში. ჩვენი გუნდი მზადაა გაგიწიოთ კონსულტაცია.
                    </p>
                  </div>
                )}
              </div>

                {/* Page Body */}
                <div className="p-6 sm:p-8">
                  {activePage === 'index' ? (
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div>
                          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-blue-600" />
                            სასწავლო კურსები
                          </h2>
                          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                            (დამატებულია feature-courses ბრენჩიდან 2 კომიტით: სიის შექმნა + ხანგრძლივობის მითითება)
                          </p>
                        </div>
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                          3 აქტიური კურსი
                        </span>
                      </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {ASSIGNMENT_DATA.courseList.map((course) => (
                        <div
                          key={course.id}
                          className="bg-slate-50 hover:bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-3">
                              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                                {course.level}
                              </span>
                              <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full">
                                <Clock className="w-3 h-3" />
                                {course.duration}
                              </span>
                            </div>

                            <h3 className="font-bold text-slate-900 text-base leading-snug">
                              {course.title}
                            </h3>
                            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                              {course.description}
                            </p>
                          </div>

                          <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between">
                            <span className="text-xs text-slate-500 font-medium">
                              სულ: {course.hours}
                            </span>
                            <button
                              onClick={() => {
                                setSelectedCourse(course.title);
                                setRegistered(false);
                              }}
                              className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                            >
                              რეგისტრაცია <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom CTA to contact */}
                    <div className="mt-8 bg-slate-100 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-200">
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                          გაქვთ დამატებითი კითხვები კურსებთან დაკავშირებით?
                        </h4>
                        <p className="text-xs text-slate-600 mt-0.5">
                          გადადით საკონტაქტო გვერდზე და დაგვიკავშირდით პირდაპირ.
                        </p>
                      </div>
                      <button
                        onClick={() => setActivePage('contact')}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs sm:text-sm font-semibold transition flex items-center gap-1.5 shrink-0 cursor-pointer shadow-sm"
                      >
                        საკონტაქტო გვერდი <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    {/* Contact Page View */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">
                          დაგვიკავშირდით:
                        </h2>
                        <p className="text-sm text-slate-600">
                          ინფორმაცია დამატებულია <code className="bg-slate-100 px-1 py-0.5 rounded text-blue-600 font-mono font-bold">feature-contact</code> ბრენჩიდან (<code className="text-slate-800 font-mono">contact.html</code>):
                        </p>

                        <div className="space-y-3 mt-4">
                          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                            <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                            <div>
                              <div className="text-xs text-slate-500 font-medium">ელფოსტა:</div>
                              <div className="text-sm font-semibold text-slate-900 font-mono">
                                {ASSIGNMENT_DATA.contactInfo.email}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                            <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                              <div className="text-xs text-slate-500 font-medium">ტელეფონი:</div>
                              <div className="text-sm font-semibold text-slate-900 font-mono">
                                {ASSIGNMENT_DATA.contactInfo.phone}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                            <MapPin className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                            <div>
                              <div className="text-xs text-slate-500 font-medium">მისამართი:</div>
                              <div className="text-sm font-semibold text-slate-900">
                                {ASSIGNMENT_DATA.contactInfo.address}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                            <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                            <div>
                              <div className="text-xs text-slate-500 font-medium">სამუშაო საათები:</div>
                              <div className="text-sm font-semibold text-slate-900">
                                {ASSIGNMENT_DATA.contactInfo.workingHours}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={() => setActivePage('index')}
                            className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 cursor-pointer"
                          >
                            ← მთავარ გვერდზე დაბრუნება (index.html)
                          </button>
                        </div>
                      </div>

                      {/* Mock Contact Form */}
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                        <h3 className="font-bold text-slate-900 text-base mb-1">
                          სწრაფი შეტყობინება
                        </h3>
                        <p className="text-xs text-slate-500 mb-4">
                          შეავსეთ ფორმა და ჩვენი ადმინისტრატორი დაგიკავშირდებათ 15 წუთში.
                        </p>

                        <form onSubmit={(e) => { e.preventDefault(); alert('შეტყობინება წარმატებით გაიგზავნა!'); }} className="space-y-3">
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">სახელი და გვარი</label>
                            <input
                              type="text"
                              placeholder="მაგ: გიორგი ბერიძე"
                              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">ტელეფონის ნომერი</label>
                            <input
                              type="tel"
                              placeholder="+995 5XX XX XX XX"
                              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">შეტყობინება</label>
                            <textarea
                              rows={3}
                              placeholder="რომელი კურსი გაინტერესებთ?"
                              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              required
                            ></textarea>
                          </div>

                          <button
                            type="submit"
                            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg shadow transition cursor-pointer"
                          >
                            შეტყობინების გაგზავნა
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Source Code Viewer Mode */
          <div className="bg-slate-950 p-4 sm:p-6 overflow-x-auto text-sm font-mono text-slate-200">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800 text-xs text-slate-400">
              <span className="text-slate-300 font-bold">
                ფაილი: <span className="text-blue-400">{activePage}.html</span>
              </span>
              <span>კოდირება: UTF-8 &bull; HTML5 სტანდარტი</span>
            </div>
            <pre className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
              <code>
                {currentCode.split('\n').map((line, idx) => (
                  <div key={idx} className="table-row hover:bg-slate-900/60 px-2 rounded">
                    <span className="table-cell select-none pr-4 text-slate-600 text-right w-10">
                      {idx + 1}
                    </span>
                    <span className={`table-cell ${
                      line.includes('<h1>') ? 'text-amber-300 font-bold' :
                      line.includes('<li>') ? 'text-emerald-300' :
                      line.includes('<a') ? 'text-cyan-300' :
                      line.includes('<title>') ? 'text-purple-300' : 'text-slate-200'
                    }`}>
                      {line}
                    </span>
                  </div>
                ))}
              </code>
            </pre>
          </div>
        )}
      </div>

      {/* Course Enrollment Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6 text-white shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-bold text-lg text-slate-100">კურსზე რეგისტრაცია</h3>
              <button
                onClick={() => setSelectedCourse(null)}
                className="text-slate-400 hover:text-white text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            {!registered ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setRegistered(true);
                }}
                className="space-y-4 mt-4 text-xs"
              >
                <div>
                  <label className="text-slate-300 font-medium block mb-1">არჩეული კურსი</label>
                  <div className="p-2.5 bg-blue-950/60 border border-blue-800/80 rounded-lg font-semibold text-blue-200">
                    {selectedCourse}
                  </div>
                </div>

                <div>
                  <label className="text-slate-300 font-medium block mb-1">თქვენი სახელი და გვარი</label>
                  <input
                    type="text"
                    required
                    placeholder="მაგ: ნინო კაპანაძე"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-medium block mb-1">ტელეფონის ნომერი</label>
                  <input
                    type="tel"
                    required
                    placeholder="+995 599 00 00 00"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCourse(null)}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg cursor-pointer"
                  >
                    გაუქმება
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow cursor-pointer"
                  >
                    რეგისტრაციის დადასტურება
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-base text-white">რეგისტრაცია მიღებულია!</h4>
                <p className="text-xs text-slate-400">
                  მადლობა დაინტერესებისთვის. ჩვენი კოორდინატორი უახლოეს დროში დაგიკავშირდებათ დეტალების დასაზუსტებლად.
                </p>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold cursor-pointer"
                >
                  დახურვა
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Assignment Requirements Checklist Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
        <h3 className="font-bold text-slate-100 text-sm flex items-center gap-2 mb-3">
          <Info className="w-4 h-4 text-blue-400" />
          <span>ვებსაიტის შესაბამისობა ლექტორის დავალების კრიტერიუმებთან</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
            <span className="text-emerald-400 font-semibold block mb-1">✓ სახელწოდება და აღწერა</span>
            <span className="text-slate-400">მოგვარებული ერთიანი სათაური და სასწავლო ცენტრის მოკლე აღწერა index.html-ში.</span>
          </div>

          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
            <span className="text-emerald-400 font-semibold block mb-1">✓ 3 კურსი ხანგრძლივობით</span>
            <span className="text-slate-400">Frontend (3 თვე), Python (2.5 თვე), UI/UX (2 თვე) — დამატებული feature-courses-იდან.</span>
          </div>

          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
            <span className="text-emerald-400 font-semibold block mb-1">✓ საკონტაქტო გვერდი</span>
            <span className="text-slate-400">contact.html ელფოსტით, ტელეფონით და მისამართით, დამატებული feature-contact-იდან.</span>
          </div>

          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
            <span className="text-emerald-400 font-semibold block mb-1">✓ ორმხრივი ნავიგაცია</span>
            <span className="text-slate-400">მთავარ გვერდზე საკონტაქტო ბმული, საკონტაქტოზე კი მთავარზე დაბრუნება.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
