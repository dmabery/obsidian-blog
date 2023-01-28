import Link from 'next/link';
import { Fragment } from 'react';
import Subscribe from './Subscribe';
const SubscribeGroup = ({title, caption}) => {
    return (
        <>
        <div className="mt-10 border-t py-8 px-3 border border-slate-700 rounded-lg">
            <div className="text-lg md:text-xl mb-3 font-bold text-slate-900">{title || "Learn five new things in five minutes or less."}</div>
            <div className="text-sm mb-3 text-neutral-500 mt-1 max-w-xl">
                {
                    caption ||
                    <Fragment>
                    Get my weekly email that shares an anthology of ideas and stories from history, science, philosophy, and more. Read previous editions <Link href='/tags/221b'><a className='text-blue-700 hover:text-blue-900'>here</a></Link>.
                    </Fragment>
                }
            </div>
            <Subscribe />
        </div>  
        </>
    )
}
export default SubscribeGroup;