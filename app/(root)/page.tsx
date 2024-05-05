import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Adrian'};

  // const accounts = await getAccounts({ 
  //   userId: loggedIn.$id 
  // })
  const accounts = [{name: 'Bank 1', currentBalance:1250}, {name: 'Bank 2', currentBalance:150}, {name: 'Bank 3', currentBalance:950}];

  if(!accounts) return;
  
  //const accountsData = accounts?.data;
  return (
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
           <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
           <TotalBalanceBox 
            accounts={[{name: 'Bank 1', currentBalance:1250}, {name: 'Bank 2', currentBalance:150}, {name: 'Bank 3', currentBalance:950}]}
            totalBanks={1}
            totalCurrentBalance={1250.351}
          />
        </header>
      </div>
       <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{}, {}]}
      />
    </section>
  )
}

export default Home