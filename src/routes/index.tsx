import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <main className="min-h-screen bg-[#F8FDFE] relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-200/50 rounded-full blur-3xl mix-blend-multiply"></div>
      <div className="absolute top-[20%] right-[-10%] w-[30rem] h-[30rem] bg-pink-200/50 rounded-full blur-3xl mix-blend-multiply"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[25rem] h-[25rem] bg-yellow-200/50 rounded-full blur-3xl mix-blend-multiply"></div>

      {/* Hero Section */}
      <section className="relative z-10 w-full px-4 pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-32 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full mx-auto text-center flex flex-col items-center">
          
          {/* Título Principal */}
          <h1 className="flex flex-col items-center gap-2 mb-6">
            <span className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#FF4275] tracking-tight drop-shadow-sm uppercase text-balance leading-tight max-w-3xl">
              +10.000 Desenhos para Colorir
            </span>
            
            <span className="mt-4 bg-[#00D084] text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-2xl md:text-4xl lg:text-5xl font-black rotate-[-3deg] shadow-[0_6px_0_#00A86B] border-4 border-white inline-block">
              APENAS R$ 2,50
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-2xl text-slate-700 font-bold mb-8 max-w-3xl px-4">
            Imprima em casa e tenha desenhos para todos os momentos.
          </p>

          {/* Caixa de Benefícios */}
          <div className="bg-white/90 backdrop-blur border-2 border-slate-100 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col gap-5 text-left w-full max-w-md transform md:-rotate-1">
            <div className="flex items-center gap-4">
              <span className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-green-100 text-green-600 rounded-full font-black text-xl md:text-2xl">
                ✓
              </span>
              <p className="text-lg md:text-xl font-bold text-slate-700">
                Download imediato
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full font-black text-xl md:text-2xl">
                ✓
              </span>
              <p className="text-lg md:text-xl font-bold text-slate-700">
                Mais de 200 temas
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-black text-xl md:text-2xl">
                ✓
              </span>
              <p className="text-lg md:text-xl font-bold text-slate-700">
                Imprima quantas vezes quiser
              </p>
            </div>
          </div>

          {/* CTA e Garantia */}
          <div className="mt-10 w-full max-w-md md:max-w-xl mx-auto px-2">
            <Button 
              className="w-full text-lg md:text-2xl h-auto py-5 px-4 md:px-8 rounded-full bg-[#FF4275] hover:bg-[#E63A68] text-white font-black uppercase tracking-wide shadow-[0_8px_0_#C21F4C] hover:shadow-[0_4px_0_#C21F4C] active:shadow-[0_0px_0_#C21F4C] hover:translate-y-[4px] active:translate-y-[8px] transition-all duration-150 border-2 border-white whitespace-normal text-center leading-snug"
            >
              QUERO +10.000 DESENHOS POR R$ 2,50
            </Button>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm md:text-base font-bold text-slate-500">
              <span>🔒 Compra 100% Segura e Acesso Imediato</span>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
