import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Phone, MapPin, Mail, ChevronRight, Facebook, Instagram, Linkedin, Code, Network, Layout, Calculator } from 'lucide-react';
import { ChatWidget } from './components/ChatWidget';
import { NAV_LINKS, DEPARTMENTS, LATEST_NEWS } from './constants';
import { Department } from './types';

// --- Components ---

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                <GraduationCap size={24} />
              </div>
              <div className="hidden md:block">
                <span className="block text-sm font-bold text-gray-800 leading-tight">ԵՐԵՎԱՆԻ ԻՆՖՈՐՄԱՏԻԿԱՅԻ</span>
                <span className="block text-sm font-medium text-gray-500 leading-tight">ՊԵՏԱԿԱՆ ՔՈԼԵՋ</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/admissions" className="bg-primary text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition shadow-sm hover:shadow-md text-sm">
              Դիմել հիմա
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-primary p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-primary bg-blue-50'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
             <Link 
              to="/admissions"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-primary text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
             >
              Դիմել հիմա
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
             <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white">
                <GraduationCap size={18} />
              </div>
            <span className="text-white font-bold text-lg">ԵԻՊՔ</span>
          </div>
          <p className="text-sm leading-relaxed mb-6 text-gray-400">
            Պատրաստում ենք որակյալ մասնագետներ տեղեկատվական տեխնոլոգիաների ոլորտի համար:
            Մեր առաքելությունն է ապահովել մրցունակ կրթություն:
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition"><Linkedin size={20} /></a>
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-bold mb-4">Հղումներ</h3>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map(link => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-blue-400 transition flex items-center gap-1">
                  <ChevronRight size={14} /> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Կապ</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-500 shrink-0 mt-0.5" />
              <span>ՀՀ, ք. Երևան, Մամիկոնյանց 52</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-500 shrink-0" />
              <span>+374 10 12-34-56</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-500 shrink-0" />
              <span>info@ysci.am</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Երևանի Ինֆորմատիկայի Պետական Քոլեջ. Բոլոր իրավունքները պաշտպանված են:
      </div>
    </footer>
  );
};

// --- Pages ---

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img 
              src="https://picsum.photos/1920/1080?grayscale&blur=2" 
              alt="College Campus" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
            Կերտիր քո ապագան <br/> <span className="text-accent">ՏՏ ոլորտում</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
            Երևանի Ինֆորմատիկայի Պետական Քոլեջը առաջարկում է ժամանակակից կրթություն և պրակտիկ գիտելիքներ:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/departments" className="bg-accent text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition shadow-lg text-center">
              Դիտել Բաժինները
            </Link>
            <Link to="/about" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition text-center">
              Իմանալ Ավելին
            </Link>
          </div>
        </div>
      </section>

      {/* Departments Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Մեր Մասնագիտությունները</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DEPARTMENTS.map((dept) => (
              <div key={dept.id} className="group bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                <div className="w-14 h-14 bg-blue-100 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {getIcon(dept.icon)}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{dept.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">{dept.description}</p>
                <Link to="/departments" className="inline-flex items-center text-primary font-semibold text-sm hover:underline">
                  Մանրամասն <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Նորություններ</h2>
              <div className="w-16 h-1 bg-primary rounded"></div>
            </div>
            <Link to="#" className="hidden sm:block text-primary font-medium hover:text-blue-700">
              Դիտել բոլորը &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LATEST_NEWS.map(news => (
               <div key={news.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="h-48 overflow-hidden">
                    <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-primary bg-blue-50 px-2 py-1 rounded mb-2 inline-block">{news.date}</span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{news.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{news.summary}</p>
                    <a href="#" className="text-sm font-medium text-gray-500 hover:text-primary transition">Կարդալ ավելին</a>
                  </div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Պատրա՞ստ եք սկսել ձեր կարիերան</h2>
          <p className="text-blue-100 text-lg mb-8">
            Միացեք մեզ և դարձեք պահանջված մասնագետ ՏՏ ոլորտում: Ընդունելությունը բաց է:
          </p>
          <Link to="/admissions" className="inline-block bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
            Դիմել Հիմա
          </Link>
        </div>
      </section>
    </>
  );
};

const AboutPage: React.FC = () => (
  <div className="py-16 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 border-l-4 border-primary pl-4">Մեր Քոլեջի Մասին</h1>
      <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Երևանի Ինֆորմատիկայի Պետական Քոլեջը հանդիսանում է Հայաստանի Հանրապետության առաջատար միջին մասնագիտական ուսումնական հաստատություններից մեկը: 
          Հիմնադրման օրվանից մենք պատրաստել ենք հազարավոր մասնագետներ, ովքեր այժմ հաջողությամբ աշխատում են տեղական և միջազգային ընկերություններում:
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Մեր առաքելությունն է ապահովել որակյալ և մատչելի կրթություն, որը համապատասխանում է աշխատաշուկայի ժամանակակից պահանջներին:
          Մենք համագործակցում ենք բազմաթիվ ՏՏ ընկերությունների հետ՝ ուսանողներին պրակտիկ գիտելիքներ և կարիերայի հնարավորություններ տրամադրելու նպատակով:
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-900 text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Մեր Տեսլականը</h3>
          <p className="text-blue-100">
            Դառնալ տարածաշրջանի լավագույն կրթական կենտրոնը, որտեղ ինովացիան և կրթությունը միավորվում են ապագան կերտելու համար:
          </p>
        </div>
        <div className="bg-accent text-gray-900 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Մեր Արժեքները</h3>
          <ul className="list-disc list-inside space-y-2 font-medium">
            <li>Որակյալ կրթություն</li>
            <li>Ազնվություն և թափանցիկություն</li>
            <li>Նորարարություն</li>
            <li>Ուսանողակենտրոն մոտեցում</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const DepartmentsPage: React.FC = () => (
  <div className="py-16 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Բաժիններ և Մասնագիտություններ</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ընտրեք այն ուղղությունը, որը Ձեզ ամենաշատն է հետաքրքրում և սկսեք Ձեր ճանապարհը:
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {DEPARTMENTS.map((dept) => (
          <div key={dept.id} className="flex flex-col md:flex-row bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition">
            <div className="bg-gray-100 md:w-48 flex flex-col items-center justify-center p-8 text-primary">
              {getIcon(dept.icon, 48)}
              <span className="mt-4 font-bold text-sm text-gray-500 bg-white px-3 py-1 rounded-full">{dept.duration}</span>
            </div>
            <div className="p-8 flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{dept.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{dept.description}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Առկա ուսուցում
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Պետական դիպլոմ
                </div>
              </div>

              <button className="text-primary font-semibold hover:text-blue-700 transition">
                Ուսումնական պլան &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AdmissionsPage: React.FC = () => (
  <div className="py-16 bg-white min-h-screen">
    <div className="max-w-3xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Ընդունելություն</h1>
      
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 mb-10">
        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
          <GraduationCap /> Դիմորդի ուղեցույց
        </h2>
        <p className="text-gray-700 mb-4">
          Ընդունելությունը կատարվում է 9-րդ և 12-րդ դասարանների ավարտական վկայականների հիմքով:
          Մրցույթն անցկացվում է ատեստատի գնահատականների միջին թվաբանականով:
        </p>
        <p className="font-bold text-gray-900">
          Փաստաթղթերի ընդունման ժամկետը՝ Հուլիսի 1 - Օգոստոսի 25:
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Պահանջվող Փաստաթղթեր</h3>
          <ul className="bg-white rounded-xl shadow-sm border border-gray-200 divide-y divide-gray-100">
            {[
              "Դիմում տնօրենի անունով (լրացվում է տեղում)",
              "Կրթության մասին փաստաթուղթ (բնօրինակ)",
              "4 լուսանկար (3x4 չափսի)",
              "Անձը հաստատող փաստաթուղթ (ծննդյան վկայական կամ անձնագիր)",
              "Տեղեկանք բնակության վայրից"
            ].map((item, i) => (
              <li key={i} className="p-4 flex items-center gap-3 text-gray-700">
                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">✓</div>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Հաճախ Տրվող Հարցեր</h3>
           <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold text-gray-900 mb-2">Որքա՞ն է ուսման վարձը:</h4>
                <p className="text-gray-600 text-sm">Ուսման վարձը տատանվում է՝ կախված մասնագիտությունից: Մանրամասների համար խնդրում ենք կապ հաստատել հաշվապահության հետ:</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold text-gray-900 mb-2">Կա՞ արդյոք պետպատվեր:</h4>
                <p className="text-gray-600 text-sm">Այո, բարձր առաջադիմություն ունեցող ուսանողների համար գործում է անվճար ուսուցման համակարգ:</p>
              </div>
           </div>
        </section>
      </div>
    </div>
  </div>
);

const ContactPage: React.FC = () => (
  <div className="py-16 bg-gray-50 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Հետադարձ Կապ</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Գրեք մեզ</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Անուն Ազգանուն</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" placeholder="Ձեր անունը" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Էլ. հասցե</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" placeholder="example@mail.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Հաղորդագրություն</label>
              <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" placeholder="Ձեր հաղորդագրությունը..."></textarea>
            </div>
            <button type="button" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition">
              Ուղարկել
            </button>
          </form>
        </div>

        <div className="space-y-8">
           <div className="bg-white p-8 rounded-2xl shadow-sm">
             <h3 className="text-xl font-bold mb-6">Կոնտակտային Տվյալներ</h3>
             <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-primary rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="block font-bold text-gray-900">Հասցե</span>
                    <span className="text-gray-600">ՀՀ, ք. Երևան, Մամիկոնյանց 52</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-primary rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="block font-bold text-gray-900">Հեռախոս</span>
                    <span className="text-gray-600">+374 10 12-34-56</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-primary rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block font-bold text-gray-900">Էլ. փոստ</span>
                    <span className="text-gray-600">info@ysci.am</span>
                  </div>
                </li>
             </ul>
           </div>
           
           {/* Placeholder Map */}
           <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center text-gray-500 font-medium">
              Քարտեզ (Google Maps Placeholder)
           </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Helpers ---

const getIcon = (iconName: string, size: number = 24) => {
  switch (iconName) {
    case 'Code': return <Code size={size} />;
    case 'Network': return <Network size={size} />;
    case 'Layout': return <Layout size={size} />;
    case 'Calculator': return <Calculator size={size} />;
    default: return <GraduationCap size={size} />;
  }
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-gray-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/departments" element={<DepartmentsPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
}
