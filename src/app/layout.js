
import './globals.css'
import MenuBar from './MenuBar'



export default function RootLayout({ children }) {
  return (
    <>  
      <html lang="en">
        <body >
        <MenuBar/>
          
          {children}
        
        </body>
      </html>
    </>
  )
}
