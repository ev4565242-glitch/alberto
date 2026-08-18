import Link from 'next/link';

// Dados simulados dos ursinhos
const ursinhos = [
  { id: 1, nome: 'Ursinho Classic Honey', preco: 'R$ 89,90', imagem: '🧸', desc: 'O clássico urso fofinho de 40cm com laço.' },
  { id: 2, nome: 'Panda Sonhador', preco: 'R$ 99,90', imagem: '🐼', desc: 'Super macio, ideal para abraçar na hora de dormir.' },
  { id: 3, nome: 'Urso Gigante Carinhoso', preco: 'R$ 249,90', imagem: '🧸', desc: 'Com 1 metro de puro amor e aconchego.' },
  { id: 4, nome: 'Coelhinho Reluzente', preco: 'R$ 79,90', imagem: '🐰', desc: 'Pelúcia antialérgica com orelhas longas.' },
];

export default function LojaUrsinhosSidebar() {
  return (
    <div className="min-h-screen bg-amber-50/50 text-gray-800 flex font-sans">
      
      {/* Sidebar Fixa */}
      <aside className="w-64 bg-white border-r border-amber-100 flex flex-col justify-between p-6 hidden md:flex sticky top-0 h-screen shadow-sm">
        <div>
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-10">
            <span className="text-3xl">🧸</span>
            <h1 className="text-base font-bold text-amber-800 tracking-wide">Reino dos Ursos</h1>
          </div>

          {/* Links de Navegação */}
          <nav className="flex flex-col space-y-2 font-medium text-amber-900/80">
            <Link href="/" className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-amber-100/60 text-amber-900 font-semibold transition">
              <span>🏠</span> <span>Início</span>
            </Link>
            <Link href="#catalogo" className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-amber-50 hover:text-amber-700 transition">
              <span>🧸</span> <span>Catálogo</span>
            </Link>
            <Link href="#sobre" className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-amber-50 hover:text-amber-700 transition">
              <span>📖</span> <span>Nossa História</span>
            </Link>
            <Link href="#contato" className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-amber-50 hover:text-amber-700 transition">
              <span>📞</span> <span>Contato</span>
            </Link>
          </nav>
        </div>

        {/* Rodapé da Sidebar */}
        <div className="pt-6 border-t border-amber-100 text-xs text-amber-900/60">
          <p className="font-semibold mb-1 text-amber-900">Feito com amor</p>
          <p>Qualidade premium</p>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <div className="flex-1 flex flex-col justify-between">
        
        {/* Cabeçalho Responsivo (Aparece apenas em dispositivos móveis) */}
        <header className="md:hidden bg-white border-b border-amber-100 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🧸</span>
            <h1 className="text-sm font-bold text-amber-800 tracking-wide">Reino dos Ursos</h1>
          </div>
          <button className="bg-amber-600 text-white text-xs px-4 py-2 rounded-full font-medium shadow-sm">
            🛒 Carrinho (0)
          </button>
        </header>

        {/* Corpo da Página */}
        <main className="p-6 md:p-12 max-w-7xl mx-auto w-full">
          
          {/* Hero / Banner Principal */}
          <section className="bg-gradient-to-r from-amber-100/60 to-amber-50/20 p-8 md:p-12 rounded-3xl border border-amber-100 mb-16 shadow-sm">
            <span className="bg-amber-200 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Feito com amor e carinho ✨
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-amber-900 mt-4 mb-4">
              Abraços que duram para sempre
            </h2>
            <p className="text-base text-amber-800/80 mb-6 max-w-2xl">
              Encontre o companheiro perfeito para todas as horas. Pelúcias antialérgicas, macias e com qualidade premium.
            </p>
            <a
              href="#catalogo"
              className="inline-block bg-amber-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-amber-700 transition"
            >
              Ver Coleção de Ursinhos
            </a>
          </section>

          {/* Vitrine de Produtos (Catálogo) */}
          <div id="catalogo">
            <div className="text-center md:text-left mb-8">
              <h3 className="text-2xl font-bold text-amber-900">Nossos Amiguinhos</h3>
              <p className="text-sm text-gray-600">Escolha o seu favorito e leve um novo amigo para casa.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ursinhos.map((ursinho) => (
                <div key={ursinho.id} className="bg-white rounded-2xl shadow-md border border-amber-100 p-5 flex flex-col justify-between hover:shadow-xl transition duration-300">
                  <div>
                    <div className="bg-amber-50 h-36 rounded-xl flex items-center justify-center text-6xl mb-4 shadow-inner">
                      {ursinho.imagem}
                    </div>
                    <h4 className="font-bold text-base text-amber-900">{ursinho.nome}</h4>
                    <p className="text-xs text-gray-500 mt-1 mb-4">{ursinho.desc}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-base font-bold text-amber-700">{ursinho.preco}</span>
                    <button className="bg-amber-800 text-white text-xs px-4 py-2 rounded-lg font-medium hover:bg-amber-900 transition">
                      Comprar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Rodapé */}
        <footer className="bg-amber-900 text-amber-100 py-6 px-10 text-center text-xs">
          <p>&copy; 2026 Reino dos Ursos. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
}
