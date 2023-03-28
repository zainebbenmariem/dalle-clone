import React, {useState, useEffect} from 'react'

import {Loader, Card, FormField} from '../components'

const RenderCards = ({data, title }) => {
  if(data?.length > 0) {
    return data.map((post)=> <Card key={post._id} {...post}/>)
}
return (
  <h2 className='mt-5 font-bold text-[#4b6cb7] text-xl uppercase'>{title}</h2>
)
}

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText,setSearchText] = useState('');

  return (
    <section max-w-7xl mx-auto>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
          The Community Showcase
        </h1>
        <p className='mt-2 text-[#666e75] text-[17px] max-w[500px]'>Explore an assortment of fantastic and aesthetically captivating visuals produced by the DALL-E artificial intelligence.</p>
      </div>
      <div className='mt-16'><FormField/>
      </div>
      <div mt-10>{loading ? (
        <div className='flex justify-center items-center'><Loader/></div>
      ): (
        <>
        {searchText && (
          <h2 className='font-medium text-[#666e75] text-x mb-3'>Showing results for <span className='text-[#222328]'>{searchText}</span></h2>
        )}
        <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
          {searchText ? (
            <RenderCards data={[]} title="No search results found"/>
          ): (
            <RenderCards data={[]} title="No posts found" />
          )}
        </div>
        </>
      )}
      </div>
    </section>
  )
}

export default Home