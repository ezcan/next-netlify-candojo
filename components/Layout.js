import Header from './Header.js'
import Footer from './Footer';
export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='container mx-auto flex-1'>{children}</main>
      <Footer />
    </div>
  );
}