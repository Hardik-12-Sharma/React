import React from 'react'
import Card from './components/Card'

const App = () => {
  const jobPostings = [
    {
      brandlogo: "https://imgs.search.brave.com/hvaLXRVXtsmGg7ihXAu8RftIWvQayugqRQpBXWgUoUo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2V5d2VvLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/OS9EaXNlbm8tc2lu/LXRpdHVsby05LnBu/Zw",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 45,
      location: "Mumbai, India"
    },
    {
      brandlogo: "https://imgs.search.brave.com/sEVAqcZOgcVNA49r860w7_t35uDx0l9vcWK6KghGnV4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MWZhZTJkMzk1ZTZj/YTAwMDQ3YjRmMTIu/cG5n",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 55,
      location: "Mumbai, India"
    },
    {
      brandlogo: "https://imgs.search.brave.com/we4J9Nce1CapScBva4Ygw_EXcYv5Jcson02x0CePSjs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Cloud Support Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 40,
      location: "Mumbai, India"
    },
    {
      brandlogo: "https://imgs.search.brave.com/wMHSqLVhGkbps4Z4ynarzbSA6rr98Q2SFim5d4C76Z0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hcHBs/ZS1sb2dvLXdoaXRl/LWNvbG9yLWJyYW5k/LWZyb250LXN0b3Jl/LWxhcy12ZWdhcy0x/MjA0NDYwMzAuanBn",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS App Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 70,
      location: "Mumbai, India"
    },
    {
      brandlogo: "https://imgs.search.brave.com/lPlgd2xkgzqxivxTcOUN9Ph6xjIGD0TbPBr5GMMe4lw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMx/MDMxMTU0NjAyLzIw/MTYtbmV0ZmxpeC1s/b2dvLTYwMHgzMTku/cG5n",
      companyName: "Netflix",
      datePosted: "1 week ago",
      post: "UI Engineer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: 80,
      location: "Mumbai, India"
    },
    {
      brandlogo: "https://imgs.search.brave.com/SgAd3ZkV-UeD7-3gsNSId2b2oU1e5JvtRmtwdmKL070/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNmL2Y2/LzlkLzNmZjY5ZDQ0/MDM5N2I5OTZmYTdk/ZDNmYjFkYWQ2YWY5/LmpwZw",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 60,
      location: "Mumbai, India"
    },
    {
      brandlogo: "https://imgs.search.brave.com/D4Pz-d4c8P_OWL4cgNIs7z8oEA_KINLzY5b0w6V7rek/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMyLzIvbnZpZGlh/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTMyMDAx/NS5wbmc",
      companyName: "NVIDIA",
      datePosted: "6 weeks ago",
      post: "AI Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 75,
      location: "Mumbai, India"
    },
    {
      brandlogo: "https://imgs.search.brave.com/1meX8u4ZoqvEI9lPkXqyBDkosHThxn_x0jLAqVIenxs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9UZXNsYSxf/SW5jLi9UZXNsYSxf/SW5jLi1Mb2dvLndp/bmUuc3Zn",
      companyName: "Tesla",
      datePosted: "2 months ago",
      post: "Automation Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 65,
      location: "Mumbai, India"
    },
    {
      brandlogo: "https://imgs.search.brave.com/RuqGqICOUNfVopTXwwJ_N2rARCFY67DkXT7u2eLY_LQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYWJy/aWticmFuZHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9BZG9i/ZS1Mb2dvLUhpc3Rv/cnktNC0xMjAweDc1/MC5wbmc",
      companyName: "Adobe",
      datePosted: "8 days ago",
      post: "UX Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: 35,
      location: "Mumbai, India"
    },
    {
      brandlogo: "https://imgs.search.brave.com/Gd22-VL90YRJEZuP4NQcR9L_lBB2vvD2Fo0U16k5w2w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MTM3OGQ1NTRiOTY2/MDAwMDRmNjc2ZTcu/cG5n",
      companyName: "IBM",
      datePosted: "10 weeks ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 50,
      location: "Mumbai, India"
    }
  ];


  return (
    <div className='parent'>
      {jobPostings.map(function(elem, idx){

        return <div key={idx}>
          <Card company={elem.companyName} date={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} brandlogo={elem.brandlogo}/>
        </div>
      })}
    </div>
  )
}

export default App
