import nlwLogo from '../assets/nlw-spacetime-logo.svg'
import Image from 'next/image'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="NLW Spacetime" />
      <div className="max-w-420 space-y-4">
        <h1 className="leadi text-5xl font-bold text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>
      <a
        href=""
        className="inline-block rounded-full bg-green-500 px-5 py-4 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
      >
        CADASTRAR LEMBRANÇA
      </a>
    </div>
  )
}
