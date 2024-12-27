import {appName} from '@/lib/constants'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='border-t'>
      <div className='p-5 flex-center'>
        {`© ${currentYear} ${appName}. All rights reserved.`}
      </div>
    </footer>
  )
}

export default Footer
