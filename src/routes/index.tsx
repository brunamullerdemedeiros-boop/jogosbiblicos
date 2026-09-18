import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <main className="min-h-screen bg-[#F8FDFE] relative overflow-hidden flex flex-col justify-center font-sans">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-200/50 rounded-full blur-3xl mix-blend-multiply pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-10%] w-[30rem] h-[30rem] bg-pink-200/50 rounded-full blur-3xl mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[25rem] h-[25rem] bg-yellow-200/50 rounded-full blur-3xl mix-blend-multiply pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative z-10 w-full px-4 py-12 md:py-24 flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          {/* Título Principal */}
          <div className="flex flex-col items-center lg:items-start gap-2 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FF4275] tracking-tight drop-shadow-sm uppercase leading-tight">
              +10.000 Desenhos para Colorir
            </h1>
            
            <div className="mt-2 bg-[#00D084] text-white px-6 py-2 rounded-full text-2xl md:text-3xl font-black rotate-[-3deg] shadow-[0_6px_0_#00A86B] border-4 border-white inline-block">
              APENAS R$ 2,50
            </div>
          </div>

          {/* Subtítulo */}
          <p className="text-lg md:text-2xl text-slate-700 font-bold max-w-xl">
            Imprima em casa e tenha desenhos para todos os momentos.
          </p>

          {/* Caixa de Benefícios */}
          <div className="bg-white/90 backdrop-blur border-2 border-slate-100 rounded-3xl p-5 md:p-6 shadow-xl flex flex-col gap-4 text-left w-full max-w-md transform md:-rotate-1">
            {[
              "Download imediato",
              "Mais de 200 temas",
              "Imprima quantas vezes quiser"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full font-black text-xl 
                  ${i===0 ? 'bg-green-100 text-green-600' : i===1 ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'}`}>
                  ✓
                </span>
                <p className="text-lg font-bold text-slate-700">{text}</p>
              </div>
            ))}
          </div>

          {/* CTA e Garantia */}
          <div className="mt-4 w-full max-w-md">
            <Button 
              className="w-full text-lg md:text-xl h-auto py-5 px-6 rounded-full bg-[#FF4275] hover:bg-[#E63A68] text-white font-black uppercase tracking-wide shadow-[0_6px_0_#C21F4C] hover:translate-y-[2px] hover:shadow-[0_4px_0_#C21F4C] transition-all border-2 border-white whitespace-normal text-center leading-snug"
            >
              QUERO +10.000 DESENHOS POR R$ 2,50
            </Button>
            <div className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-sm font-bold text-slate-500">
              <span>🔒 Compra 100% Segura e Acesso Imediato</span>
            </div>
          </div>
        </div>

        {/* Espaço para Mockup/Imagens */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-md aspect-square bg-white/40 border-4 border-dashed border-slate-300 rounded-3xl flex flex-col items-center justify-center p-8 text-slate-500 backdrop-blur-sm shadow-inner group hover:bg-white/60 transition-colors cursor-pointer">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🎨</div>
            <p className="font-bold text-lg text-center text-slate-600">
              Espaço para seus Mockups
            </p>
            <span className="text-sm mt-3 text-slate-400 text-center">
              Esta área foi criada porque não encontrei imagens originais no projeto. Anexe suas fotos pelo chat que eu as adicionarei aqui!
            </span>
          </div>
        </div>

      </section>
    </main>
  )
}
