export interface GitStep {
  id: number;
  title: string;
  badge: string;
  summary: string;
  details: string;
  branch: string;
  commands: {
    command: string;
    explanation: string;
    output?: string;
  }[];
  observation?: string;
  filesInvolved: string[];
}

export interface AssignmentAnswer {
  id: number;
  questionNumber: number;
  question: string;
  shortAnswer: string;
  fullAnswer: string;
  keyPoints: string[];
  terminalProof: string;
}

export const ASSIGNMENT_DATA = {
  centerName: "ინოვაციური ტექნოლოგიების სასწავლო ცენტრი 'SkillHub Academy'",
  version: "1.0.0",
  courseList: [
    {
      id: "course-1",
      title: "Frontend დეველოპმენტი (HTML, CSS, JavaScript, React)",
      duration: "3 თვე",
      hours: "72 საათი",
      description: "თანამედროვე ვებ-აპლიკაციების შექმნა ნულიდან, საიტების აგება და რეაქტის ეკოსისტემა.",
      icon: "Code",
      level: "დამწყები / Beginner"
    },
    {
      id: "course-2",
      title: "Python & მონაცემთა ანალიზი",
      duration: "2.5 თვე",
      hours: "60 საათი",
      description: "პროგრამირების საფუძვლები, ალგორითმები, Pandas, NumPy და რეალური პროექტები.",
      icon: "Terminal",
      level: "დამწყები / Intermediate"
    },
    {
      id: "course-3",
      title: "UI/UX დიზაინის საფუძვლები",
      duration: "2 თვე",
      hours: "48 საათი",
      description: "მომხმარებლის ინტერფეისის პროექტირება, Figma, Wireframing და პროტოტიპირება.",
      icon: "Layout",
      level: "დამწყები / Beginner"
    }
  ],
  contactInfo: {
    email: "info@skillhub.ge",
    phone: "+995 32 2 123 456 / +995 599 00 11 22",
    address: "ქ. თბილისი, ი. ჭავჭავაძის გამზირი #25 (II სართული)",
    workingHours: "ორშაბათი - შაბათი: 10:00 - 20:00"
  },
  files: {
    indexHtml: `<!DOCTYPE html>
<html lang="ka">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>სასწავლო ცენტრი 'SkillHub'</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav>
      <a href="index.html">მთავარი</a> |
      <a href="contact.html">კონტაქტი</a>
    </nav>
    <h1>ინოვაციური ტექნოლოგიების სასწავლო ცენტრი 'SkillHub Academy'</h1>
    <p>მოგესალმებით სასწავლო ცენტრში! ჩვენ გთავაზობთ მაღალი ხარისხის პრაქტიკულ განათლებას ტექნოლოგიების მიმართულებით.</p>
  </header>

  <main>
    <section class="courses">
      <h2>სასწავლო კურსები</h2>
      <ul>
        <li>Frontend დეველოპმენტი (HTML, CSS, JavaScript, React) — ხანგრძლივობა: 3 თვე</li>
        <li>Python & მონაცემთა ანალიზი — ხანგრძლივობა: 2.5 თვე</li>
        <li>UI/UX დიზაინის საფუძვლები — ხანგრძლივობა: 2 თვე</li>
      </ul>
    </section>
  </main>
</body>
</html>`,

    contactHtml: `<!DOCTYPE html>
<html lang="ka">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>კონტაქტი - სასწავლო ცენტრი 'SkillHub'</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>საკონტაქტო ინფორმაცია</h1>
    <p><a href="index.html">← მთავარ გვერდზე დაბრუნება</a></p>
  </header>

  <main>
    <section class="contact-details">
      <h2>დაგვიკავშირდით:</h2>
      <ul>
        <li><strong>ელფოსტა:</strong> info@skillhub.ge</li>
        <li><strong>ტელეფონი:</strong> +995 32 2 123 456 / +995 599 00 11 22</li>
        <li><strong>მისამართი:</strong> ქ. თბილისი, ი. ჭავჭავაძის გამზირი #25 (II სართული)</li>
      </ul>
    </section>
  </main>
</body>
</html>`,

    readmeMd: `# სასწავლო ცენტრის ვებსაიტი (SkillHub)

პროექტის დანიშნულება: სასწავლო ცენტრის ოფიციალური ვებსაიტის შექმნა და განვითარება Git ვერსიათა კონტროლის სისტემის მეშვეობით (ბრენჩირება, ფუნქციონალების იზოლაცია, გაერთიანება და მერჯ-კონფლიქტების მოგვარება).

## პროექტის სტრუქტურა
- \`index.html\` - მთავარი გვერდი კურსების ჩამონათვალით
- \`contact.html\` - საკონტაქტო ინფორმაცია
- \`style.css\` - ვიზუალური სტილები
- \`README.md\` - პროექტის აღწერა
`,

    conflictedIndexHtml: `<!DOCTYPE html>
<html lang="ka">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>სასწავლო ცენტრი 'SkillHub'</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav>
      <a href="index.html">მთავარი</a> |
      <a href="contact.html">კონტაქტი</a>
    </nav>
<<<<<<< HEAD
    <h1>ტექნოლოგიური სასწავლო აკადემია 'SkillHub Tech'</h1>
=======
    <h1>ინოვაციური განათლების ცენტრი 'SkillHub Academy'</h1>
>>>>>>> title-b
    <p>მოგესალმებით სასწავლო ცენტრში! ჩვენ გთავაზობთ მაღალი ხარისხის პრაქტიკულ განათლებას ტექნოლოგიების მიმართულებით.</p>
  </header>

  <main>
    <section class="courses">
      <h2>სასწავლო კურსები</h2>
      <ul>
        <li>Frontend დეველოპმენტი (HTML, CSS, JavaScript, React) — ხანგრძლივობა: 3 თვე</li>
        <li>Python & მონაცემთა ანალიზი — ხანგრძლივობა: 2.5 თვე</li>
        <li>UI/UX დიზაინის საფუძვლები — ხანგრძლივობა: 2 თვე</li>
      </ul>
    </section>
  </main>
</body>
</html>`
  },

  conflictDetails: {
    targetFile: "index.html",
    lineNumber: 15,
    branchA: {
      name: "title-a",
      titleText: "ტექნოლოგიური სასწავლო აკადემია 'SkillHub Tech'",
      commitMsg: "style: ცენტრის სახელწოდების განახლება (ვარიანტი A: SkillHub Tech)"
    },
    branchB: {
      name: "title-b",
      titleText: "ინოვაციური განათლების ცენტრი 'SkillHub Academy'",
      commitMsg: "style: ცენტრის სახელწოდების განახლება (ვარიანტი B: SkillHub Academy)"
    },
    resolved: {
      titleText: "ინოვაციური ტექნოლოგიების სასწავლო ცენტრი 'SkillHub Academy'",
      commitMsg: "fix(conflict): მოგვარდა კონფლიქტი index.html-ში title-a და title-b გაერთიანებისას (შერჩეული სახელწოდება)",
      explanation: "კონფლიქტის მოსაგვარებლად გავაანალიზეთ ორივე ბრენჩის შემოთავაზება და შევქმენით ოპტიმალური სინთეზი, წავშალეთ Git-ის კონფლიქტის მარკერები (<<<<<<< HEAD, =======, >>>>>>> title-b) და დავაფიქსირეთ ახალი კომიტით."
    }
  },

  steps: [
    {
      id: 1,
      title: "პროექტის მომზადება",
      badge: "ნაბიჯი 1",
      summary: "საქაღალდის შექმნა, Git-ის ინიციალიზაცია, საწყისი index.html და README.md",
      details: "შექმენით საქაღალდე learning-center და მასში Git რეპოზიტორია. მთავარ ბრენჩს დაარქვით main. შექმენით index.html და README.md და შეინახეთ პირველი კომიტი.",
      branch: "main",
      commands: [
        {
          command: "mkdir learning-center\ncd learning-center\ngit init -b main",
          explanation: "საქაღალდის შექმნა და Git რეპოზიტორიის ინიციალიზაცია ნაგულისხმევი main ბრენჩით.",
          output: "Initialized empty Git repository in /app/applet/learning-center/.git/"
        },
        {
          command: "touch index.html README.md",
          explanation: "საწყისი ფაილების შექმნა (index.html ცენტრის აღწერით და README.md პროექტის მიზნით)."
        },
        {
          command: "git add .\ngit commit -m \"Initial commit: საწყისი პროექტის მომზადება (index.html და README.md)\"",
          explanation: "ცვლილებების დამატება Staging Area-ში და საწყისი კომიტის შექმნა.",
          output: "[main (root-commit) c42e75e] Initial commit: საწყისი პროექტის მომზადება (index.html და README.md)\n 2 files changed, 18 insertions(+)"
        }
      ],
      filesInvolved: ["index.html", "README.md"]
    },
    {
      id: 2,
      title: "კურსების დამატება",
      badge: "ნაბიჯი 2",
      summary: "feature-courses ბრენჩის შექმნა, 3 კურსის დამატება და ხანგრძლივობის მითითება ორ ეტაპად",
      details: "main ბრენჩიდან იქმნება feature-courses. index.html-ში ემატება სამი კურსი (კომიტი 1), შემდეგ ემატება ხანგრძლივობა (კომიტი 2).",
      branch: "feature-courses",
      commands: [
        {
          command: "git checkout -b feature-courses",
          explanation: "ახალი ფუნქციური ბრენჩის შექმნა main-იდან და მასზე გადართვა.",
          output: "Switched to a new branch 'feature-courses'"
        },
        {
          command: "git commit -am \"feat: დაემატა სამი სასწავლო კურსის სია index.html-ში\"",
          explanation: "პირველი კომიტი: 3 კურსის ჩამონათვალი index.html-ში.",
          output: "[feature-courses 8fc359c] feat: დაემატა სამი სასწავლო კურსის სია index.html-ში\n 1 file changed, 9 insertions(+)"
        },
        {
          command: "git commit -am \"feat: კურსების სიას დაემატა ხანგრძლივობა თითოეული მიმართულებისთვის\"",
          explanation: "მეორე კომიტი: თითოეულ კურსს მიეწერა ხანგრძლივობა (3 თვე, 2.5 თვე, 2 თვე).",
          output: "[feature-courses f56639c] feat: კურსების სიას დაემატა ხანგრძლივობა თითოეული მიმართულებისთვის\n 1 file changed, 3 insertions(+), 3 deletions(-)"
        }
      ],
      filesInvolved: ["index.html"]
    },
    {
      id: 3,
      title: "საკონტაქტო გვერდის შექმნა",
      badge: "ნაბიჯი 3",
      summary: "main-ზე დაბრუნება, feature-contact ბრენჩის შექმნა და contact.html-ის დამატება",
      details: "დაბრუნდით main ბრენჩზე და მისგან შექმენით feature-contact. შექმენით contact.html (ელფოსტა, ტელეფონი, მისამართი). შეამოწმეთ, ჩანს თუ არა კურსები ამ ბრენჩში.",
      branch: "feature-contact",
      commands: [
        {
          command: "git checkout main\ngit checkout -b feature-contact",
          explanation: "დაბრუნება main-ზე და ახალი იზოლირებული feature-contact ბრენჩის შექმნა.",
          output: "Switched to branch 'main'\nSwitched to a new branch 'feature-contact'"
        },
        {
          command: "git add contact.html\ngit commit -m \"feat: შეიქმნა საკონტაქტო გვერდი contact.html (ელფოსტა, ტელეფონი, მისამართი)\"",
          explanation: "საკონტაქტო ფაილის დამატება და დაფიქსირება კომიტით.",
          output: "[feature-contact cd45baf] feat: შეიქმნა საკონტაქტო გვერდი contact.html (ელფოსტა, ტელეფონი, მისამართი)\n 1 file changed, 26 insertions(+)"
        }
      ],
      observation: "🔍 საკვანძო დაკვირვება: როდესაც feature-contact ბრენჩზე გადავდივართ და ვხსნით index.html-ს, კურსების სია იქ არ ჩანს! მიზეზი: feature-contact შეიქმნა main ბრენჩიდან იმ მომენტში, როდესაც feature-courses ჯერ არ იყო გაერთიანებული main-ში. Git-ში ბრენჩები ერთმანეთისგან მკაცრად იზოლირებულია.",
      filesInvolved: ["contact.html"]
    },
    {
      id: 4,
      title: "ცვლილებების გაერთიანება",
      badge: "ნაბიჯი 4",
      summary: "main-ში ორივე ფუნქციური ბრენჩის გაერთიანება და საკონტაქტო ბმულის დამატება",
      details: "main ბრენჩში ვაერთიანებთ feature-courses და feature-contact ბრენჩებს. ვამოწმებთ ორივე ფაილს და მთავარ გვერდზე ვამატებთ ბმულს contact.html-ზე.",
      branch: "main",
      commands: [
        {
          command: "git checkout main\ngit merge feature-courses\ngit merge feature-contact",
          explanation: "ორივე ფუნქციური ბრენჩის შერწყმა main ბრენჩში.",
          output: "Updating c42e75e..f56639c\nFast-forward / Merge made by the 'ort' strategy.\n contact.html | 26 ++++++++++++++++++++++++++\n 1 file changed, 26 insertions(+)"
        },
        {
          command: "git commit -am \"feat: მთავარ გვერდზე index.html დაემატა საკონტაქტო გვერდის (contact.html) ბმული\"",
          explanation: "index.html-ში ნავიგაციაში contact.html ბმულის დამატება და კომიტის შექმნა.",
          output: "[main e030b89] feat: მთავარ გვერდზე index.html დაემატა საკონტაქტო გვერდის (contact.html) ბმული\n 1 file changed, 4 insertions(+)"
        }
      ],
      filesInvolved: ["index.html", "contact.html"]
    },
    {
      id: 5,
      title: "მერჯის კონფლიქტი და მოგვარება",
      badge: "ნაბიჯი 5",
      summary: "title-a და title-b ბრენჩებიდან ერთი და იმავე ხაზის ცვლილება, კონფლიქტის პროვოცირება და მოგვარება",
      details: "main-იდან იქმნება ორი პარალელური ბრენჩი: title-a და title-b. ორივე ცვლის ცენტრის სათაურს იმავე ხაზზე. main-ში ჯერ title-a შედის, შემდეგ title-b იწვევს კონფლიქტს, რომელსაც ვაგვარებთ ხელით.",
      branch: "main",
      commands: [
        {
          command: "git checkout -b title-a\n# შეცვლა index.html: SkillHub Tech\ngit commit -am \"style: ცენტრის სახელწოდების განახლება (ვარიანტი A: SkillHub Tech)\"",
          explanation: "title-a ბრენჩზე სათაურის შეცვლა და დაკომიტება."
        },
        {
          command: "git checkout main\ngit checkout -b title-b\n# შეცვლა იმავე ხაზზე: SkillHub Academy\ngit commit -am \"style: ცენტრის სახელწოდების განახლება (ვარიანტი B: SkillHub Academy)\"",
          explanation: "main-იდან title-b ბრენჩის შექმნა, იმავე ხაზის განსხვავებულად შეცვლა და დაკომიტება."
        },
        {
          command: "git checkout main\ngit merge title-a\ngit merge title-b",
          explanation: "title-a ერთიანდება უპრობლემოდ, ხოლო title-b-ს შერწყმისას Git აფიქსირებს კონფლიქტს!",
          output: "Auto-merging index.html\nCONFLICT (content): Merge conflict in index.html\nAutomatic merge failed; fix conflicts and then commit the result."
        },
        {
          command: "# index.html-ში ვშლით მარკერებს და ვტოვებთ სასურველ სათაურს\ngit add index.html\ngit commit -m \"fix(conflict): მოგვარდა კონფლიქტი index.html-ში title-a და title-b გაერთიანებისას (შერჩეული სახელწოდება)\"",
          explanation: "კონფლიქტის მოგვარება: მარკერების გასუფთავება, Staging-ში დამატება და დასრულების კომიტი.",
          output: "[main 95b6b7b] fix(conflict): მოგვარდა კონფლიქტი index.html-ში title-a და title-b გაერთიანებისას (შერჩეული სახელწოდება)"
        }
      ],
      filesInvolved: ["index.html"]
    }
  ],

  answers: [
    {
      id: 6,
      questionNumber: 6,
      question: "რატომ შექმენით feature-contact ბრენჩი main-იდან?",
      shortAnswer: "ფუნქციონალების იზოლაციისა და დამოუკიდებელი განვითარების მიზნით, რათა საკონტაქტო გვერდი არ ყოფილიყო დამოკიდებული კურსების მიმდინარე ცვლილებებზე.",
      fullAnswer: `Git-ის თანამედროვე სტანდარტების (Git Feature Branch Workflow) მიხედვით, ყოველი ახალი დამოუკიდებელი ფუნქციონალი (Feature) აუცილებლად უნდა შეიქმნას სტაბილური საბაზისო შტოდან — \`main\` ბრენჩიდან.

ამის ძირითადი მიზეზებია:
1. **ფუნქციონალების იზოლაცია (Separation of Concerns):** საკონტაქტო გვერდის შექმნა (\`feature-contact\`) ლოგიკურად და ტექნიკურად სრულიად დამოუკიდებელია კურსების სიისგან (\`feature-courses\`). მას არ სჭირდებოდა კურსების სია მუშაობისთვის.
2. **პარალელური მუშაობის მხარდაჭერა:** გუნდში სხვადასხვა დეველოპერს შეუძლია პარალელურად იმუშაოს კურსებზე და კონტაქტზე ისე, რომ ერთმანეთს ხელი არ შეუშალონ.
3. **დამოუკიდებელი ტესტირება და განლაგება (Deployment):** თუ \`feature-courses\`-ში რაიმე ხარვეზი იქნებოდა ან სამუშაო გაჭიანურდებოდა, \`feature-contact\`-ის გაერთიანება და პროდაქშენში გაშვება დამოუკიდებლად, შეუფერხებლად შეიძლებოდა.
4. **დამოკიდებულებების (Dependency Hell) თავიდან აცილება:** თუ \`feature-contact\`-ს შევქმნიდით \`feature-courses\`-დან, ის უნებლიედ წამოიღებდა დაუმთავრებელ კოდს, რაც გაართულებდა კოდის მიმოხილვას (Code Review) და ისტორიის სისუფთავეს.`,
      keyPoints: [
        "იზოლირებული სამუშაო გარემო თითოეული ამოცანისთვის",
        "დამოუკიდებელი ინტეგრაციის შესაძლებლობა main-ში",
        "პარალელური განვითარება დაუმთავრებელ კოდზე დამოკიდებულების გარეშე",
        "სუფთა და წაკითხვადი Git ისტორია"
      ],
      terminalProof: "$ git checkout main\n$ git checkout -b feature-contact\nSwitched to a new branch 'feature-contact'\n# ბრენჩი ეფუძნება main-ის სტაბილურ მდგომარეობას c42e75e"
    },
    {
      id: 7,
      questionNumber: 7,
      question: "რატომ წარმოიშვა კონფლიქტი სახელწოდების ცვლილებისას?",
      shortAnswer: "ორმა სხვადასხვა ბრენჩმა (title-a და title-b) ერთი და იმავე ფაილის (index.html) ზუსტად ერთი და იგივე ხაზი შეცვალა ურთიერთგამომრიცხავი შინაარსით.",
      fullAnswer: `Git-ში მერჯის კონფლიქტი (Merge Conflict) წარმოიშობა მაშინ, როდესაც ვერსიათა კონტროლის სისტემა ავტომატურად (ალგორითმულად) ვერ ადგენს, თუ რომელი ვერსიაა ჭეშმარიტი.

ჩვენს შემთხვევაში პროცესი ასე განვითარდა:
1. ორივე ბრენჩი — \`title-a\` და \`title-b\` — შეიქმნა \`main\`-ის ერთი და იმავე საწყისი წერტილიდან (საერთო წინაპარი / Common Ancestor: \`e030b89\`).
2. \`title-a\` ბრენჩზე შევცვალეთ \`index.html\`-ის მე-15 ხაზი:
   \`<h1>ტექნოლოგიური სასწავლო აკადემია 'SkillHub Tech'</h1>\`
3. \`title-b\` ბრენჩზე იმავე საწყისი მდგომარეობიდან შევცვალეთ ზუსტად იგივე მე-15 ხაზი განსხვავებულად:
   \`<h1>ინოვაციური განათლების ცენტრი 'SkillHub Academy'</h1>\`
4. როდესაც \`title-a\` გავაერთიანეთ \`main\`-ში, \`main\`-ის მე-15 ხაზზე ჩაიწერა ვარიანტი A.
5. როდესაც შემდგომ ვცადეთ \`title-b\`-ს შერწყმა \`main\`-ში, Git-ის 3-way merge ალგორითმმა აღმოაჩინა, რომ ერთი და იგივე ხაზი საერთო წინაპრის შემდეგ შეცვლილია ორივე მხარეს განსხვავებულად.

Git-ს არ აქვს უფლება თვითნებურად აირჩიოს ერთ-ერთი მათგანი (რადგან ამან შეიძლება გამოიწვიოს ინფორმაციის დაკარგვა). ამიტომ Git-მა პროცესი შეაჩერა, ფაილში ჩასვა კონფლიქტის მარკერები (\`<<<<<<< HEAD\`, \`=======\`, \`>>>>>>> title-b\`) და გადაწყვეტილება დეველოპერს მიანდო.`,
      keyPoints: [
        "საერთო წინაპრიდან (Common Ancestor) წარმოებული ორი განსხვავებული ცვლილება",
        "იდენტური ფაილისა (index.html) და იდენტური ხაზის მოდიფიკაცია",
        "Git-ის 3-Way Merge ალგორითმის მიერ ავტომატური არჩევის შეუძლებლობა",
        "კონფლიქტის მარკერების გაჩენა და ადამიანის ჩარევის აუცილებლობა"
      ],
      terminalProof: "Auto-merging index.html\nCONFLICT (content): Merge conflict in index.html\nAutomatic merge failed; fix conflicts and then commit the result."
    },
    {
      id: 8,
      questionNumber: 8,
      question: "როგორ გადაამოწმეთ, რომ ყველა ცვლილება გაერთიანდა?",
      shortAnswer: "გადამოწმება განხორციელდა კომპლექსურად: git log --graph ხის ანალიზით, git branch --merged შემოწმებით, ფაილური სისტემის დათვალიერებით და git status-ის სისუფთავის კონტროლით.",
      fullAnswer: `ყველა ცვლილების წარმატებით გაერთიანების გადასამოწმებლად ჩატარდა მრავალდონიანი შემოწმება:

1. **გრაფიკული ისტორიის ანალიზი (\`git log --graph --oneline --all\`):**
   ტერმინალში გამოვიძახეთ სრული გრაფიკული ისტორია. ვიზუალურ ხეზე ნათლად გამოჩნდა, რომ ყველა ფუნქციური და ექსპერიმენტული შტოს ბოლო კომიტი (\`feature-courses\`, \`feature-contact\`, \`title-a\`, \`title-b\`) საბოლოოდ უერთდება \`main\` ბრენჩის სათავეს (\`HEAD -> main\`).

2. **შერწყმული ბრენჩების გადამოწმება (\`git branch --merged\`):**
   ბრძანებამ დააბრუნა სია:
   - \`feature-contact\`
   - \`feature-courses\`
   - \`title-a\`
   - \`title-b\`
   - \`* main\`
   ეს ადასტურებს, რომ ყველა ბრენჩის ისტორია სრულად არის ინტეგრირებული \`main\`-ში და არცერთი კომიტი არ დარჩენილა განზე.

3. **ფაილური სისტემის და კონტენტის შემოწმება (\`ls\` & \`cat\`):**
   - რეპოზიტორიაში ერთდროულად არსებობს როგორც \`index.html\`, ისე \`contact.html\` და \`README.md\`.
   - \`index.html\` შეიცავს როგორც 3 კურსის სიას ხანგრძლივობით (\`feature-courses\`-დან), ისე ნავიგაციის ბმულს \`contact.html\`-ზე, და მოგვარებულ სათაურს.
   - ფაილში აღარ ფიქსირდება კონფლიქტის მარკერები (\`<<<<<<<\`, \`=======\`, \`>>>>>>>\`).

4. **სამუშაო ხის სისუფთავე (\`git status\`):**
   \`git status\` ადასტურებს:
   \`On branch main, nothing to commit, working tree clean\`.
   არ არის დაუმთავრებელი მერჯი, არ არის დაუფიქსირებელი ცვლილებები.`,
      keyPoints: [
        "git log --graph --oneline --all აჩვენებს სრულ შეკრულ გრაფს",
        "git branch --merged ადასტურებს 4-ვე ბრენჩის შერწყმას",
        "index.html და contact.html ორივე ადგილზეა სრული კონტენტით",
        "კონფლიქტის მარკერები სრულად გასუფთავებულია",
        "git status აჩვენებს: working tree clean"
      ],
      terminalProof: "$ git branch --merged\n  feature-contact\n  feature-courses\n* main\n  title-a\n  title-b\n\n$ git status\nOn branch main\nnothing to commit, working tree clean"
    }
  ]
};
