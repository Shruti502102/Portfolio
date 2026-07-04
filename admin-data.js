// Shared data store — loaded by all pages
window.SS_DATA = window.SS_DATA || {
  password: "shruti2025",
  profile: {
    photo: "image.png",
    name: "Shruti Srivastava",
    tagline: "Data Scientist · AI/ML Engineer · Full-Stack Developer",
    about: "B.Tech Computer Science & Engineering (Data Science) graduate from NIET, Greater Noida — CGPA 8.07/10, First Division with Honours (Semester 8 SGPA 9.67), with a Minor in AI & Machine Learning. I specialize in machine learning, generative AI (LLMs, RAG, Vertex AI), and full-stack development (React.js, Flask, REST APIs) on Google Cloud, AWS and Azure. Across 6 internships — Google Cloud, Cisco, ServiceNow and more — plus 2 published research papers and a multimodal AI system hitting 91% accuracy, I bridge research and production-ready systems.",
    location: "Gamma-2, Greater Noida, UP",
    phone: "+91 9910367552",
    email: "shrutisrivastava502102@gmail.com",
    linkedin: "https://www.linkedin.com/in/shruti-srivastava-2b2101269/",
    github: "https://github.com/Shruti502102/",
    leetcode: "https://leetcode.com/u/Shruti502102/"
  },
  resumes: [
    { id: 1, role: "Master Resume (All-in-One)", filename: "Shruti_Srivastava_Resume.pdf", dataUrl: null, added: "2026-06" },
    { id: 2, role: "Software Engineer", filename: "resume_swe.pdf", dataUrl: null, added: "2026-06" },
    { id: 3, role: "AI/ML Engineer", filename: "resume_ai.pdf", dataUrl: null, added: "2026-06" },
    { id: 4, role: "Data Scientist", filename: "resume_ds.pdf", dataUrl: null, added: "2026-06" },
    { id: 5, role: "Data Analyst", filename: "resume_da.pdf", dataUrl: null, added: "2026-06" }
  ],
  projects: [
    { id: 1, num:"01", title:"MindGuard AI — Multimodal Mental Health Risk Assessment", desc:"Fused a PHQ-9/GAD-7 MCQ engine (40%), a fine-tuned BERT sentiment analyser (30%) and a MobileNetV2 facial-affect CNN (30%) into one privacy-preserving pipeline. 91% accuracy across 240 sessions, +10pts over best single-channel baseline; zero data retained post-session. Published in IJST, May 2026.", tags:["Python","BERT","MobileNetV2","FastAPI","Multimodal AI"], link:"https://github.com/Shruti502102/" },
    { id: 2, num:"02", title:"AI-Powered Resume Screener & Job Matcher", desc:"Vectorised resumes via NLP and Vertex AI semantic embeddings; LLM-scored candidates against job descriptions. Deployed as a Flask REST API with 92% matching accuracy, cutting manual screening time by 60%.", tags:["Python","Gemini API","Vertex AI","Flask","RAG","NLP"], link:"https://github.com/Shruti502102/" },
    { id: 3, num:"03", title:"Real-Time Sales Forecasting & Analytics System", desc:"Automated ETL pipeline into Azure SQL; an ARIMA + Random Forest ensemble reached 88% forecast accuracy, with a live Power BI dashboard delivering real-time KPI drill-throughs to stakeholders.", tags:["Python","ARIMA","Random Forest","Power BI","Azure SQL"], link:"https://github.com/Shruti502102/" },
    { id: 4, num:"04", title:"Heart Disease Predictor + Full-Stack Food Delivery App", desc:"Heart Disease: classification pipeline (Logistic Regression, Random Forest, SVM) with feature selection, evaluated on ROC/AUC & F1, served via Flask REST API. Food Delivery: full-stack React.js + Flask + MySQL platform with JWT auth, cart and order management.", tags:["scikit-learn","SVM","Flask","React.js","MySQL","JWT"], link:"https://github.com/Shruti502102/" },
    { id: 5, num:"05", title:"AI Chatbot — Gemini API", desc:"NLP-powered chatbot with context-aware intent recognition using the Gemini API, NLTK and spaCy, with a 5-turn sliding context window.", tags:["Python","Gemini API","NLTK","spaCy"], link:"https://github.com/Shruti502102/" },
    { id: 6, num:"06", title:"AR/VR Experiences", desc:"Immersive AR/VR scenes with Unity, Meta Spark & Vuforia — a 3D walkthrough, circle-game prototype and 2 live face-filter AR effects, sustaining 60+ FPS.", tags:["Unity","Meta Spark","Vuforia","C#"], link:"https://github.com/Shruti502102/" }
  ],
  certs: [
    { id:1, cat:"internship", title:"Google Cloud Gen AI Internship", org:"SmartInternz × Google Cloud", date:"Jun–Aug 2025", desc:"Advanced AI on GCP Gen AI platform. Vertex AI, BigQuery ML, LLMs.", link:"https://media.licdn.com/dms/image/v2/D562DAQExTT2g2MAgsw/profile-treasury-image-shrink_800_800/B56ZkI6SzEHkAg-/0/1756791124572", imgData:null },
    { id:2, cat:"internship", title:"Applied Supervised ML Internship", org:"YBI Foundation", date:"Apr–May 2025", desc:"ANN, LSTM, Transformers for NLP tasks.", link:"https://media.licdn.com/dms/document/media/v2/D561FAQGJ7N_dEw_HmA/feedshare-document-pdf-analyzed/B56Zbt97wRH0AY-/0/1747749162393", imgData:null },
    { id:3, cat:"internship", title:"AR/VR Development Internship", org:"NIET Center of Excellence", date:"Jul 2024", desc:"Unity, Meta Spark Studio & Vuforia. 30% load time reduction.", link:"https://media.licdn.com/dms/image/v2/D562DAQED5vy3az5AjQ/profile-treasury-image-shrink_800_800/B56ZkI6CyPHIAY-/0/1756791060694", imgData:null },
    { id:4, cat:"internship", title:"Data Science & ML Internship", org:"YBI Foundation", date:"Aug–Oct 2023", desc:"End-to-end ML models, feature engineering, GitHub.", link:"https://media.licdn.com/dms/image/v2/D562DAQFiQrwrGLMgVg/profile-treasury-image-shrink_800_800/B56ZkI7EGmHcAY-/0/1756791326623", imgData:null },
    { id:5, cat:"coursera", title:"Python for Data Science, AI & Development", org:"Coursera", date:"Apr 11, 2023", desc:"", link:"https://www.coursera.org/account/accomplishments/records/3NS5BZB8WU27", imgData:null },
    { id:6, cat:"coursera", title:"Introduction to NoSQL Databases", org:"Coursera", date:"Mar 28, 2024", desc:"", link:"https://www.coursera.org/account/accomplishments/records/VHLSEQYTRE7D", imgData:null },
    { id:7, cat:"coursera", title:"Python Project for Data Science", org:"Coursera", date:"Feb 20, 2024", desc:"", link:"https://www.coursera.org/account/accomplishments/records/H7ST5LV6B74F", imgData:null },
    { id:8, cat:"coursera", title:"Data Analysis with Python", org:"Coursera", date:"Nov 2, 2023", desc:"", link:"https://www.coursera.org/account/accomplishments/verify/4DYVCHTWPE7J", imgData:null },
    { id:9, cat:"coursera", title:"Basic Data Descriptors & Statistical Distributions", org:"Coursera", date:"Oct 30, 2023", desc:"", link:"https://www.coursera.org/account/accomplishments/records/92XJHVUDJ934", imgData:null },
    { id:10, cat:"coursera", title:"Python Basics", org:"Coursera", date:"Jan 6, 2023", desc:"", link:"https://www.coursera.org/account/accomplishments/records/5QWC4FMQQJW5", imgData:null },
    { id:11, cat:"coursera", title:"What is Data Science?", org:"Coursera", date:"Jan 30, 2023", desc:"", link:"https://www.coursera.org/account/accomplishments/records/PBWJLLEUATQD", imgData:null },
    { id:12, cat:"coursera", title:"Build a Free Website with WordPress", org:"Coursera", date:"May 12, 2023", desc:"", link:"https://www.coursera.org/account/accomplishments/records/KL4UEK4RUJQN", imgData:null },
    { id:13, cat:"coursera", title:"Human-Centered Design for Inclusive Innovation", org:"Coursera", date:"Apr 10, 2023", desc:"", link:"https://www.coursera.org/account/accomplishments/records/DSAFV7NPP5F3", imgData:null },
    { id:14, cat:"coursera", title:"Create Animated Social Media Posts with Canva", org:"Coursera", date:"May 20, 2023", desc:"", link:"https://www.coursera.org/account/accomplishments/records/4YDZZS6456E7", imgData:null },
    { id:15, cat:"infosys", title:"Big Data — 201", org:"Infosys Springboard", date:"Mar 20, 2025", desc:"", link:"https://i.ibb.co/8ghQXjMW/1-ea38229c-a433-428d-9a58-a9df14e4e89a-1.jpg", imgData:null },
    { id:16, cat:"infosys", title:"Data Analysis with Pandas", org:"Infosys Springboard", date:"Mar 27, 2025", desc:"", link:"https://i.ibb.co/QFrHrc0W/1-7e18552c-d274-4107-92ae-48bf0bfcf2a0-3.jpg", imgData:null },
    { id:17, cat:"infosys", title:"ReactJS", org:"Infosys Springboard", date:"Oct 8, 2024", desc:"", link:"https://i.ibb.co/LDQF5GMG/1-6f20d441-f3e8-431e-8108-cab33067e147-3.jpg", imgData:null },
    { id:18, cat:"infosys", title:"TensorFlow ML Systems", org:"Infosys Springboard", date:"Sep 24, 2024", desc:"", link:"https://i.ibb.co/zVj0DWjR/1-a36c5328-b99b-4254-b513-a6b845d4dec1-1.jpg", imgData:null },
    { id:19, cat:"infosys", title:"Data Visualization Using R", org:"Infosys Springboard", date:"Feb 20, 2024", desc:"", link:"https://i.ibb.co/nML2t2W7/1-f53b25d9-2716-4eba-8a30-6f2e81ef8706.jpg", imgData:null },
    { id:20, cat:"infosys", title:"Data Visualization with Python", org:"Infosys Springboard", date:"Feb 18, 2024", desc:"", link:"https://i.ibb.co/tpHTM5rr/1-c2e36f32-2da0-48db-aeee-34020b0ee3da.jpg", imgData:null },
    { id:21, cat:"infosys", title:"Java Programming Fundamentals", org:"Infosys Springboard", date:"Oct 14, 2023", desc:"", link:"https://i.ibb.co/gbMGG0NQ/1-20cee75a-54fd-4473-8311-f6ea06b1bea2.jpg", imgData:null },
    { id:22, cat:"infosys", title:"Python Programming Fundamentals", org:"Infosys Springboard", date:"Oct 14, 2023", desc:"", link:"https://ibb.co/MD45hp2", imgData:null },
    { id:23, cat:"workshop", title:"AI Chatbot Development", org:"Ai Academia", date:"Feb 24, 2025", desc:"", link:"https://ibb.co/pvtx15X1", imgData:null },
    { id:24, cat:"workshop", title:"Basic Training in Data Analytics (BI)", org:"NCET", date:"Mar 14, 2025", desc:"", link:"https://ibb.co/jvR91THy", imgData:null }
  ],
  achievements: [
    { id:1, icon:"🎓", title:"First Division with Honours — B.Tech CGPA 8.07/10", org:"NIET · Semester 8 SGPA 9.67", year:"2026" },
    { id:2, icon:"🥈", title:"2nd Place — Google Arcade Coding & Gaming Event", org:"College Level", year:"2024" },
    { id:3, icon:"🥉", title:"3rd Place — National French Language Competition (A1)", org:"Prayatana · College Level", year:"2024" },
    { id:4, icon:"🏅", title:"Recognised Participant — GeeksforGeeks Offline Hackathon", org:"Innovation & Teamwork", year:"2024" }
  ],
  blogs: [
    { id:1, cat:"ml", catLabel:"Machine Learning", title:"Building My First End-to-End ML Pipeline: Heart Disease Prediction", date:"Aug 2025", readtime:"6 min", excerpt:"From raw UCI dataset to ROC curves — everything I learned building a real classification pipeline.", tags:["Python","Scikit-learn","Random Forest"], content:`<h3>The Dataset</h3><p>I started with the UCI Heart Disease dataset — 303 samples, 14 features including age, cholesterol, chest pain type, and the target variable. Before writing model code, I spent ~40% of time on EDA.</p><h3>Key Finding</h3><p>Visualizing correlation matrices revealed that <code>cp</code> (chest pain type) and <code>thalach</code> (max heart rate) were the strongest predictors. Missing values were concentrated in specific feature combinations — a data collection artefact worth noting.</p><h3>Results</h3><ul><li>Logistic Regression: 83% accuracy</li><li>Random Forest: 87% accuracy (best)</li><li>SVM (RBF): 85% accuracy</li></ul><p>The pipeline that matters most: clean data → meaningful features → appropriate evaluation metric. ROC-AUC is more informative than accuracy for imbalanced medical datasets.</p>` },
    { id:2, cat:"cloud", catLabel:"Cloud / Gen AI", title:"What I Learned During My Gen AI Internship at Google Cloud", date:"Aug 2025", readtime:"8 min", excerpt:"Vertex AI, BigQuery ML, Gemini API — and the mental shift from training models to orchestrating AI systems.", tags:["Google Cloud","Vertex AI","Gemini","LLM"], content:`<h3>The Mental Shift</h3><p>The biggest adjustment wasn't learning new APIs — it was thinking in terms of orchestration rather than training. With Vertex AI and BigQuery ML, you're composing intelligent systems rather than building models from scratch.</p><h3>Gemini API Observations</h3><p>Prompt engineering matters enormously. I started keeping a "prompt library" of patterns that worked consistently. Being able to run <code>CREATE MODEL</code> directly in SQL is powerful for quick prototyping.</p><h3>Key Advice</h3><p>Learn IAM and service account permissions early — half my debugging time was auth issues. Build rate limiting into everything from day one.</p>` },
    { id:3, cat:"arvr", catLabel:"AR / VR", title:"AR/VR Performance Optimization: How I Got 30% Faster Load Times", date:"Jul 2024", readtime:"5 min", excerpt:"Asset bundling, LOD systems, occlusion culling — the techniques that actually moved the needle.", tags:["Unity","Meta Spark","Vuforia","Performance"], content:`<h3>The Problem</h3><p>My initial AR scene took 8.2 seconds to load on a mid-range Android device. Target: under 6 seconds.</p><h3>Wins</h3><ul><li><strong>Texture compression</strong>: ETC2 over RGBA32 cut decompression time by ~50%</li><li><strong>LOD Groups</strong>: 3-level geometry reduction cut rendering cost significantly</li><li><strong>Asset Bundles</strong>: Lazy-loading cut initial scene payload</li><li><strong>Occlusion Culling</strong>: Draw calls dropped from 340 to 180 per frame</li></ul><p>Final: 8.2s → 5.7s load time. 42 → 67 FPS average. Systematic profiling beats guessing every time.</p>` },
    { id:4, cat:"data", catLabel:"Data Science", title:"Power BI vs Tableau: Which Should You Learn First?", date:"Mar 2025", readtime:"7 min", excerpt:"After building dashboards in both, here's my honest breakdown for data science students.", tags:["Power BI","Tableau","DAX","BI"], content:`<h3>My Recommendation</h3><p>For most corporate/enterprise roles in India, <strong>Power BI</strong> is the pragmatic starting choice — deep Microsoft ecosystem integration, generous free tier, and DAX is extremely powerful once it clicks.</p><h3>The DAX Learning Curve</h3><p>DAX trips up almost everyone. The key insight: functions operate on tables in a virtual model, not row-by-row like Excel. Once you understand <code>CALCULATE()</code> and filter context, the rest follows.</p><p>Learn Tableau if you're targeting consulting or design-forward roles. Both share similar concepts — learning one makes the other faster to pick up.</p>` },
    { id:5, cat:"ml", catLabel:"Machine Learning", title:"NLP from Scratch: Building a Chatbot with Gemini API + NLTK", date:"Oct 2023", readtime:"4 min", excerpt:"Intent classification, entity extraction, context management — what actually goes into a real NLP chatbot.", tags:["NLP","NLTK","spaCy","Gemini API"], content:`<h3>Beyond The API Call</h3><p>Intent classification before the API call reduced API usage by ~40% for recognized intents. Context management with a 5-turn sliding window kept conversations coherent without hitting token limits.</p><h3>spaCy for Entities</h3><p>Custom spaCy NER patterns for tech terminology outperformed asking the LLM to extract entities — more reliable, faster, cheaper.</p><p>Build evaluation test sets early. Without automated evals, you can't know if you're making things better or worse.</p>` },
    { id:6, cat:"cloud", catLabel:"Cloud / Enterprise", title:"ServiceNow ITSM: Why Enterprise Platforms Are Actually Interesting", date:"Jun 2025", readtime:"5 min", excerpt:"I went in skeptical. I came out impressed. What building workflow automation taught me about enterprise architecture.", tags:["ServiceNow","ITSM","REST API","Automation"], content:`<h3>The CMDB Graph</h3><p>ServiceNow's CMDB is a graph of every IT asset and its relationships. Once I understood incidents, problems, changes, and services as nodes — not silos — the platform made sense.</p><h3>What I Built</h3><p>An automated dashboard aggregating incident data across departments via REST API calls. Flow Designer replaced email-based approvals, cutting processing time by 20%.</p><p>Enterprise software handles edge cases hobby projects never encounter: multi-tenancy, audit trails, fine-grained RBAC, change management at scale.</p>` }
  ],
  showcase: [
    { id:1, type:"link", title:"Heart Disease Prediction — Live Repo", desc:"Full ML pipeline with EDA, model comparison and ROC/AUC evaluation on the UCI dataset.", url:"https://github.com/Shruti502102/", thumb:"", tags:["ML","Python","GitHub"], date:"2025" },
    { id:2, type:"video", title:"AR/VR Demo Reel", desc:"Immersive AR/VR scenes built with Unity, Meta Spark & Vuforia — 60+ FPS stable.", url:"", thumb:"", tags:["Unity","AR/VR"], date:"2024" },
    { id:3, type:"link", title:"Pharma BI Dashboard", desc:"Healthcare BI comparing Ayurveda, Homeopathy & Allopathy — published on GitHub Pages.", url:"https://github.com/Shruti502102/", thumb:"", tags:["Power BI","GitHub Pages"], date:"2025" }
  ],
  publications: [
    { id:1, title:"MindGuard AI: A Human-Centred Multimodal Framework for Early Mental Health Risk Assessment", authors:"S. Srivastava, A. Singh, S. Singh", venue:"IJST (ISSN 3049-1118), Vol. 3, No. 2, pp. 166–176", date:"May 2026", doi:"10.70558/IJST.2026.v3.i2.241257", link:"https://doi.org/10.70558/IJST.2026.v3.i2.241257" },
    { id:2, title:"Multimodal Digital Technologies in Mental Health Care: AI, Virtual Reality, Wearables, and Digital Therapeutics — A Comparative Review", authors:"S. Srivastava, A. Singh, S. Singh, C. S. Arya", venue:"IJVRA (ISSN 2984-8903), Vol. 4, No. 5", date:"May 2026", doi:"", link:"" }
  ],
  experience: [
    { id:1, role:"Software Development Intern", org:"Codtech IT Solutions Pvt. Ltd.", period:"Jun–Jul 2026", loc:"Remote", points:["Delivering production-ready software modules, REST API integrations and full-stack features","Structured 4-week ISO 9001 / AICTE-recognised industry internship"] },
    { id:2, role:"Generative AI Intern", org:"SmartInternz × Google Cloud", period:"Jun–Aug 2025", loc:"Remote", points:["Engineered 3 production LLM apps on Vertex AI; fine-tuned models, +30% output relevance","Deployed a RAG pipeline via BigQuery & Vertex AI, cutting runtime by 25%","Shipped an AI Blog Post Generator — structured article in under 10 seconds"] },
    { id:3, role:"Networking Intern", org:"Cisco Networking Academy", period:"Jun–Aug 2025", loc:"Remote", points:["Completed 3 NetAcad labs; built 'Cyber Shield' — a 15-device network with VLANs, firewall & VPN","Authored Python automation scripts, cutting setup time by 35%"] },
    { id:4, role:"IT Service Management (ITSM) Intern", org:"ServiceNow", period:"May–Jun 2025", loc:"Remote", points:["Configured end-to-end ITSM modules; REST-integrated incident dashboards, -40% visibility lag","Scripted approval automation, cutting manual processing time by 20%"] },
    { id:5, role:"AR/VR Development Intern", org:"NIET, Greater Noida", period:"Jul 2024 · 40 hrs", loc:"On-site", points:["Built a 3D walkthrough & circle-game prototype in Unity (C#)","Created 2 live face-filter AR effects in Meta Spark, 60+ FPS via Vuforia"] },
    { id:6, role:"Data Science & ML Intern", org:"YBI Foundation", period:"Aug–Oct 2023", loc:"Remote", points:["Trained supervised ML models incl. a movie-rating predictor","Full EDA, feature engineering & tuning; evaluated on ROC/AUC, F1; GitHub-versioned"] }
  ],
  testimonials: [
    { id:1, name:"Internship Mentor", role:"Senior Engineer · Google Cloud Program", text:"Shruti consistently delivered production-ready LLM applications ahead of schedule. Her grasp of Vertex AI and RAG pipelines was well beyond intern level.", avatar:"🧑‍💼" },
    { id:2, name:"Faculty Guide", role:"NIET · Research Supervisor", text:"Her research on multimodal mental-health assessment was rigorous and genuinely novel. Two published papers as an undergraduate speaks for itself.", avatar:"👨‍🏫" },
    { id:3, name:"Team Lead", role:"ServiceNow ITSM Project", text:"Reliable, detail-oriented, and quick to automate anything repetitive. Cut our incident-resolution visibility lag by 40%.", avatar:"👩‍💻" }
  ],
  caseStudies: {
    1: { problem:"Mental-health screening is often single-channel and misses nuance across text, questionnaire, and facial affect.", solution:"Built a weighted-fusion pipeline combining a PHQ-9/GAD-7 engine (40%), fine-tuned BERT sentiment (30%), and a MobileNetV2 facial-affect CNN (30%).", impact:"91% accuracy across 240 sessions, +10pts over the best single-channel baseline. Zero data retained post-session. Published in IJST, May 2026.", stack:["Python","BERT","MobileNetV2","FastAPI","PHQ-9/GAD-7"] },
    2: { problem:"Manual resume screening is slow and inconsistent across large applicant pools.", solution:"Vectorised resumes with NLP + Vertex AI semantic embeddings, then used an LLM to score candidates against job descriptions via a Flask REST API.", impact:"92% matching accuracy, reducing manual screening time by 60%.", stack:["Python","Gemini API","Vertex AI","Flask","RAG"] },
    3: { problem:"Sales teams needed real-time forecasts instead of static monthly reports.", solution:"Automated an ETL pipeline into Azure SQL and combined ARIMA with a Random Forest ensemble, surfaced via a live Power BI dashboard.", impact:"88% forecast accuracy with real-time KPI drill-throughs for stakeholders.", stack:["Python","ARIMA","Random Forest","Power BI","Azure SQL"] }
  },
  now: {
    status: "Open to opportunities",
    items: ["🎓 Graduated B.Tech CSE (Data Science) — First Division with Honours","🔬 Extending MindGuard AI research on multimodal fusion","☁️ Deepening Google Cloud Vertex AI & production LLM systems","💼 Seeking Software Engineer / Data Scientist / AI-ML roles"]
  }
};

// Load from localStorage if available
(function(){
  try {
    const saved = localStorage.getItem('ss_portfolio_data');
    if(saved) {
      const parsed = JSON.parse(saved);
      // Merge carefully
      Object.keys(parsed).forEach(k => { window.SS_DATA[k] = parsed[k]; });
    }
  } catch(e) {}
})();

window.SS_SAVE = function() {
  try { localStorage.setItem('ss_portfolio_data', JSON.stringify(window.SS_DATA)); } catch(e) {}
};
