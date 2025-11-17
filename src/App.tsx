
import AllfatherChatbot from './components/AllfatherChatbot';

function App() {
  return (
    <div className='font-sans bg-gray-50 min-h-screen'>
      <header className='bg-white shadow-md p-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <img src='https://www.allmarkets.org/hubfs/all-markets-logo.svg' alt='All Markets Logo' className='h-8' />
          <nav>
            <a href='#' className='text-gray-600 hover:text-brand-blue mx-4'>Home</a>
            <a href='#' className='text-gray-600 hover:text-brand-blue mx-4
            '>About</a>
            <a href='#' className='text-gray-600 hover:text-brand-blue mx-4'>Services</a>
            <a href='#' className='text-gray-600 hover:text-brand-blue mx-4'>Contact</a>
          </nav>
        </div>
      </header>
      <main className='container mx-auto p-8'>
        <h1 className='text-4xl font-bold text-brand-blue mb-4'>Welcome to All Markets</h1>
        <p className='text-lg text-gray-700'>
          This is a sample page to demonstrate the Allfather Chatbot integration. The chatbot button is in the bottom right corner.
        </p>
      </main>
      <AllfatherChatbot />
    </div>
  );
}

export default App;
