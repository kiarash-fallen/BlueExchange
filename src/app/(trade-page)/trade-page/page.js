"use client"
import TradingView from '../../../../components/charts/TradingView';
import Header from '../../../../components/home/Header';
import Navbar from '../../../../components/layout/Navbar';
import '../../globals.css'

function Page(props) {
    
    

    return (
      <div>
        <Navbar />
        <div className='flex'>
            <div className='w-1/3'>

            </div>
            <div className='w-2/3'>

            </div>
        </div>
      </div>
      // <TradingView {...props}></TradingView>
    );
}

export default Page;