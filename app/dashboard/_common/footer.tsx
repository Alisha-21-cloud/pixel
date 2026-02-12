import { PixelLogo } from '@/components/pixel-logo'

const Footer = () => {
  return (
    <footer className='w-full py-4 border-t border-border flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <PixelLogo showText={false} className='opacity-60' />
        <span className='text-sm text-muted-foreground'>© 2026 Pixel.ai</span>
      </div>
      <span className='text-sm text-muted-foreground'>Privacy Policy</span>
    </footer>
  )
}

export default Footer