/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  Users, 
  Award, 
  Briefcase, 
  MessageSquare, 
  TrendingUp, 
  ArrowRight,
  Target,
  FileText,
  Handshake,
  X
} from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
    <div className="flex items-center justify-between w-full max-w-6xl px-6 py-3 glass-card rounded-full">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">S</div>
        <span className="font-bold text-lg tracking-tight">SunKyung.J</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
        <a href="#competencies" className="hover:text-blue-600 transition-colors">Skills</a>
        <a href="#results" className="hover:text-blue-600 transition-colors">Results</a>
        <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
      </div>
      <button className="px-5 py-2 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
        Contact Me
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent -z-10 blur-3xl opacity-50" />
    
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
          실무형 <span className="italic font-serif text-blue-600">행정·교육</span> <br />
          컨설팅 전문가 <span className="text-blue-600">주선경</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          "책임감 있는 소통과 체계적인 우선순위 조정으로 <br className="hidden md:block" /> 성과를 증명합니다."
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-xl shadow-blue-200 flex items-center gap-2 group"
          >
            포트폴리오 보기
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full border border-slate-200 hover:bg-slate-50 transition-colors">
            경력 기술서 다운로드
          </button>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-16 flex justify-center"
      >
        <div className="animate-bounce text-slate-400">
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-slate-400 rounded-full" />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 px-6 bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-6 uppercase tracking-widest">
        About Me
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
        나라는 사람: 문제의 본질을 해결하는 해결사
      </h2>
      <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
        저는 주어진 업무의 경계를 넘어 <span className="font-semibold text-slate-900">'문제의 본질'</span>을 해결하는 사람입니다. 
        선임의 부재나 촉박한 일정 등 예기치 못한 난관 속에서도 매뉴얼을 개척하고 
        유관 기관과 능동적으로 소통하며 최선의 결과를 만들어냅니다.
      </p>
    </div>
  </section>
);

const Stats = () => {
  const stats = [
    { label: "축제 연계 홍보 부스 참여", value: "1,096", suffix: "명", icon: Users },
    { label: "맞춤형 교육 프로그램 만족도", value: "95", suffix: "%", icon: Award },
    { label: "단기 집중 첨삭 취업 성공률", value: "55", suffix: "%", icon: TrendingUp },
  ];

  return (
    <section id="results" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-slate-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Competencies = () => {
  const items = [
    {
      title: "행정 효율화 및 우선순위 관리",
      desc: "주 3일 출장과 행정 업무를 병행하며 프로세스를 최적화했습니다.",
      icon: Target
    },
    {
      title: "주도적 문제 해결 및 갈등 관리",
      desc: "소극적인 협력사를 설득하여 사업 참여를 이끌어내는 전략적 소통 능력을 갖췄습니다.",
      icon: MessageSquare
    },
    {
      title: "실행 기반의 소통과 협업",
      desc: "유연한 보고 체계와 상황 공유를 통해 협업의 속도와 완성도를 높입니다.",
      icon: Handshake
    }
  ];

  return (
    <section id="competencies" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">핵심 역량</h2>
          <p className="text-slate-500">실무에서 증명된 전문성을 바탕으로 가치를 창출합니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-blue-200 transition-all">
              <div className="w-14 h-14 bg-slate-50 group-hover:bg-blue-600 group-hover:text-white transition-colors rounded-2xl flex items-center justify-center text-slate-600 mb-6">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl md:text-lg lg:text-xl font-bold text-slate-900 mb-4 whitespace-nowrap">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "고교 축제 연계 홍보 및 운영",
      tag: "홍보부스 & 푸드트럭",
      problem: "단순 홍보를 넘어선 실질적인 사업 참여 유도 필요",
      action: "퀴즈 이벤트 기획, 진로 상담 병행, 푸드트럭 메뉴 조정 등 학생 친화적 운영",
      result: "1,000명 이상의 참여와 높은 사업 참여 의향 확보",
      image: "https://picsum.photos/seed/festival/800/600",
      details: "고등학교 축제 기간을 활용하여 학생들의 눈높이에 맞춘 참여형 홍보 부스를 운영했습니다. 단순한 정보 전달이 아닌 퀴즈와 진로 상담을 결합하여 실질적인 사업 참여 의사를 이끌어냈으며, 푸드트럭 운영을 통해 축제의 즐거움을 더했습니다."
    },
    {
      title: "기관 업무협약(MOU) 추진",
      tag: "행정 & 기획",
      problem: "5일 이내 준비 완료라는 촉박한 일정",
      action: "빠른 소개 자료 초안 작성 및 즉각적인 보고/피드백 반영",
      result: "성공적인 협약 체결 및 협업 프로세스 확립",
      image: "https://picsum.photos/seed/business/800/600",
      details: "매우 촉박한 일정 속에서도 유관 기관과의 긴밀한 소통을 통해 성공적인 업무협약을 체결했습니다. 핵심 내용을 담은 소개 자료를 신속하게 제작하고, 상급자의 피드백을 즉각 반영하여 완성도를 높였습니다."
    },
    {
      title: "특성화고 학생 맞춤형 취업 지원",
      tag: "교육 컨설팅",
      problem: "학교 측의 소극적인 태도로 인한 사업 운영 난항",
      action: "1:1 방문 면담 및 수요 분석을 통한 맞춤형 프로그램(인적성 대비) 제안",
      result: "학생 24명 수료 및 만족도 95%",
      image: "https://picsum.photos/seed/education/800/600",
      details: "학교 현장의 어려움을 직접 듣고 해결하기 위해 1:1 방문 면담을 실시했습니다. 학생들의 실제 수요를 반영한 인적성 대비 프로그램을 제안하여 학교의 적극적인 협력을 이끌어냈으며, 높은 수료율과 만족도를 달성했습니다."
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">주요 프로젝트</h2>
            <p className="text-slate-500">난관을 극복하고 만들어낸 실질적인 성과들입니다.</p>
          </div>
          <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            전체 프로젝트 보기 <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 md:p-12 rounded-[2rem] bg-white border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 items-start overflow-hidden"
            >
              <div 
                className="w-full md:w-48 h-48 bg-slate-100 rounded-2xl flex-shrink-0 overflow-hidden cursor-pointer group relative"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-bold bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">자세히 보기</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">{project.tag}</span>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Problem</div>
                    <p className="text-slate-700 font-medium">{project.problem}</p>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Action</div>
                    <p className="text-slate-700">{project.action}</p>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Result</div>
                    <p className="text-blue-600 font-bold">{project.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-slate-900 hover:bg-white transition-colors z-10 shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="h-64 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-8 md:p-12">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-4 inline-block">
                  {selectedProject.tag}
                </span>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">{selectedProject.title}</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">상세 내용</div>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {selectedProject.details}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Action</div>
                      <p className="text-slate-700 font-medium">{selectedProject.action}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Result</div>
                      <p className="text-blue-600 font-bold text-lg">{selectedProject.result}</p>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="mt-10 w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-colors"
                >
                  닫기
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 px-6 border-t border-slate-100 bg-white">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">S</div>
        <span className="font-bold text-lg tracking-tight">SunKyung.J</span>
      </div>
      <div className="text-slate-400 text-sm">
        © 2026 SunKyung Ju. All rights reserved.
      </div>
      <div className="flex gap-6">
        <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">LinkedIn</a>
        <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">Email</a>
        <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">Blog</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Competencies />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
