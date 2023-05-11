import Image from 'next/image'

export default function Header() {
  return (
    <div className={'p-2 w-screen border-b pb-4 border-gray-200'}>
      <Image
        src='/hpf-logo.png'
        alt="Hawai'i People's Fund Logo"
        width={100}
        height={40}
      />
    </div>
  )
}
