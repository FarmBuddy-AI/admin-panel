import { OrderPlacedChart } from '@/components/buyers-analytics/order-placed-chart'
import { PaymentMethodChart } from '@/components/buyers-analytics/payment-method-chart'
import { SubsChart } from '@/components/buyers-analytics/subs-chart'
import { CategoriesChart } from '@/components/categories-chart'
import { FarmSubsChart } from '@/components/farmer-subs-chart'
import { ListingSalesGraph } from '@/components/lisiting-sale-graph'
import { StatCard } from '@/components/stat-card'
import { ChartNoAxesCombined, CircleDollarSign, CreditCard, User, Users } from 'lucide-react'
import React from 'react'

function Page() {
  return (
    <div className='flex flex-col space-y-8 p-8 pt-6 w-full'>
        <div className='grid gap-6 md:grid-cols-6'>
            <StatCard icon={<CircleDollarSign />} value={'$45,231.89'} label="Total Revenue" summary='+20.1% from last month' />

            <StatCard icon={<Users />} value={'+2350'} label="Subscriptions" summary='+180.1% from last month' />

            <StatCard icon={<CreditCard />} value={'+12,234'} label="Sales" summary='+19% from last month' />


            <StatCard icon={<User />} value={'10,532'} label='Total Users' summary='+15% since last week' />
     
            <StatCard icon={<ChartNoAxesCombined />} value={'+574'} label="Active Now" summary='+201% since last hour' />
        </div>
        <>
            <h3 className='text-2xl text-gray-800 font-bold'>Farmers Analytics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">

                <FarmSubsChart />
                <CategoriesChart />
                <ListingSalesGraph />
            </div>
        </>
        <>
        <h3 className='text-2xl text-gray-800 font-bold'>Buyers Analytics</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
            <PaymentMethodChart />
            <SubsChart />
            <OrderPlacedChart />
        </div>
        </>
    </div>
  )
}

export default Page